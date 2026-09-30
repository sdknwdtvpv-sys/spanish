#!/usr/bin/env node
/**
 * 离线预生成西语发音音频（macOS `say` + `afconvert`）
 *
 * ── 为什么需要它 ──
 * 真机校验发现发音/听力/口语在真机上**全部不可用**：
 *   - Android WebView 里没有 Web Speech API（speechSynthesis）
 *   - Google translate_tts 兜底在 WebView 里被拦（<audio> 连 HTTP 头都读不到）
 *   - 系统 TextToSpeech 引擎在这台小米设备上初始化直接 ERROR（TtsService enabled=0）
 * 这三条路都在设备侧，App 无法自行修复。而**预生成音频把语音变成固定资源**：
 * 不依赖引擎、不依赖网络，装到任何机器上都能响。
 *
 * ── 设计要点 ──
 * 1. 文件命名用文本的哈希，不用原文——原文含空格、重音符号、问号，
 *    直接当文件名在 Android assets 里会出问题，也可能超长。
 * 2. 分层目录（前两位哈希做子目录）：单目录放 7000+ 文件在 APK 打包和
 *    文件系统上都吃力。
 * 3. **断点续传**：已存在的文件直接跳过。生成 7355 个文件要很久，
 *    中途断了不必从头再来。
 * 4. 支持 `--sample` 只为少量内容生成，先验证音质再全量。
 *
 * 用法：
 *   node tools/generate-audio.mjs --sample          # 样张（1 个单元 + 1 段听力 + 3 句口语）
 *   node tools/generate-audio.mjs                   # 全量
 *   node tools/generate-audio.mjs --voice Flo       # 换音色
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'audio');
const MANIFEST = path.join(ROOT, 'data', 'audio-manifest.json');
const DATA = path.join(ROOT, 'data', 'courses.js');

const args = process.argv.slice(2);
const SAMPLE = args.includes('--sample');
const voiceIdx = args.indexOf('--voice');
const VOICE = voiceIdx >= 0 ? args[voiceIdx + 1] : 'Eddy';
const jobsIdx = args.indexOf('--jobs');
const JOBS = jobsIdx >= 0 ? Math.max(1, parseInt(args[jobsIdx + 1], 10) || 4) : 4;
const BITRATE = 24000; // AAC 24kbps 单声道：语音够用，实测约 7.4KB/词

/** 音色按场景区分：听力对话用不同声音模拟不同说话人 */
const VOICE_BY_ROLE = {
  default: VOICE,
  alt: VOICE === 'Eddy' ? 'Flo' : 'Eddy',
};

function keyOf(text) {
  return crypto.createHash('sha1').update(text, 'utf8').digest('hex').slice(0, 16);
}
function relPathFor(key) {
  return path.join(key.slice(0, 2), `${key}.m4a`);
}

/** 收集所有需要生成音频的文本 -> {key, text, kind, voice} */
function collect() {
  const src = fs.readFileSync(DATA, 'utf8');
  const mod = { exports: {} };
  new Function('module', 'exports', src + '\nmodule.exports={COURSES,ALL_VOCAB,LISTENING_PASSAGES,SPEAKING_SENTENCES};')(
    mod, mod.exports
  );
  const d = mod.exports;

  const items = [];
  const push = (text, kind, voice) => {
    const t = String(text || '').trim();
    if (!t) return;
    items.push({ text: t, kind, voice: voice || VOICE_BY_ROLE.default });
  };

  // 1) 词汇（ALL_VOCAB 来自单元词表 + 精读生词，覆盖全部）
  if (SAMPLE) {
    const u = d.COURSES.A1.units[0];
    u.vocab.forEach((w) => push(w.es, 'vocab'));
  } else {
    d.ALL_VOCAB.forEach((w) => push(w.es, 'vocab'));
  }

  // 2) 口语（本身 + 慢速版）
  if (SAMPLE) {
    d.SPEAKING_SENTENCES.slice(0, 3).forEach((s) => push(s.es, 'speaking'));
  } else {
    d.SPEAKING_SENTENCES.forEach((s) => push(s.es, 'speaking'));
  }

  // 3) 听力：按行拆，多说话人用不同音色
  const passages = SAMPLE ? d.LISTENING_PASSAGES.slice(0, 1) : d.LISTENING_PASSAGES;
  passages.forEach((p) => {
    String(p.es || '')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((line, i) => {
        // 「说话人: 台词」格式 -> 去掉说话人标签再朗读
        const m = line.match(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s.]{1,20}):\s*(.+)$/);
        const spoken = m ? m[2] : line;
        const role = m ? (m[1].trim().length % 2 === 0 ? 'default' : 'alt') : 'default';
        push(spoken, 'listening', VOICE_BY_ROLE[role]);
      });
  });

  // 去重（按 key），但保留 kind（同一文本可能出现在不同类别）
  const seen = new Map();
  for (const it of items) {
    const key = keyOf(it.text);
    if (!seen.has(key)) seen.set(key, { ...it, key });
  }
  return [...seen.values()];
}

import { spawn } from 'node:child_process';

/** 异步执行一条命令，返回 {code, stderr} */
function run(cmd, argv) {
  return new Promise((resolve) => {
    const c = spawn(cmd, argv, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    c.stderr.on('data', (d) => { err += d.toString(); });
    c.on('error', (e) => resolve({ code: -1, stderr: String(e.message) }));
    c.on('close', (code) => resolve({ code, stderr: err }));
  });
}

/**
 * 合成一条文本 -> m4a。
 * 性能实测（本机）：say 约 700ms/次，afconvert 仅 53ms/次，所以瓶颈全在 say。
 * 串行约 750ms/条；4 路并行约 338ms/条（2.2 倍），8 路收益递减。
 * 因此默认 4 路并行，而不是串行——第一版串行跑 6235 条要 1.5 小时以上。
 */
async function synth(text, outFile, voice) {
  // 坑：say 直接输出 m4a 时容器膨胀严重 —— 音频数据其实只有 15-21kbps，
  // 但一个 1.2 秒的文件会长到 ~35KB（实测平均 28.9KB/条）。
  // 6235 条按这个大小要 180MB。用 afconvert 重压到 24kbps 后只有 6.8KB/条（压缩到 18.9%）。
  // 所以流程是：say 出临时 m4a -> afconvert 压到目标码率 -> 删除临时文件。
  const tmp = outFile.replace(/\.m4a$/, '.tmp.m4a');
  const r1 = await run('say', ['-v', voice, '-o', tmp, '--data-format=aac', '--', text]);
  if (r1.code !== 0 || !fs.existsSync(tmp)) {
    return { ok: false, err: 'say 失败: ' + r1.stderr.slice(0, 120) };
  }
  const r2 = await run('afconvert', ['-f', 'm4af', '-d', 'aac', '-b', String(BITRATE), tmp, outFile]);
  try { fs.unlinkSync(tmp); } catch {}
  if (r2.code !== 0 || !fs.existsSync(outFile)) {
    return { ok: false, err: 'afconvert 失败: ' + r2.stderr.slice(0, 120) };
  }
  const size = fs.statSync(outFile).size;
  if (size < 200) return { ok: false, err: `产物过小(${size}B)` };
  // 体积异常检测：单条超过 60KB 说明压缩没生效，报出来而不是静默收下
  if (size > 61440) return { ok: false, err: `体积异常(${size}B)，压缩未生效` };
  return { ok: true, size };
}

/** 并行处理：N 个 worker 各领一段，段内串行（避免过度抢占 CPU） */
async function runParallel(items, jobs, onOne) {
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, jobs) }, async () => {
    while (true) {
      const i = cursor++;
      if (i >= items.length) return;
      await onOne(items[i], i);
    }
  });
  await Promise.all(workers);
}

function dirSize(dir) {
  let n = 0;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else n += fs.statSync(full).size;
    }
  };
  try { walk(dir); } catch {}
  return n;
}

async function main() {
  const items = collect();
  console.log(`\n=== 音频预生成${SAMPLE ? '（样张模式）' : '（全量）'} ===`);
  console.log(`  音色: ${VOICE}（备用: ${VOICE_BY_ROLE.alt}）`);
  console.log(`  码率: AAC ${BITRATE / 1000}kbps 单声道`);
  console.log(`  待处理文本: ${items.length} 条`);
  console.log(`  输出目录: ${path.relative(ROOT, OUT)}`);

  fs.mkdirSync(OUT, { recursive: true });
  const manifest = {};

  // 先筛掉已存在的（断点续传），只对缺的做合成
  const todo = [];
  let skipped = 0;
  for (const it of items) {
    const abs = path.join(OUT, relPathFor(it.key));
    // 已存在且体积合理（≤ 20KB）才算可用；体积过大的说明是旧版未压缩产物，重做
    const sz = fs.existsSync(abs) ? fs.statSync(abs).size : 0;
    if (sz >= 200 && sz <= 20480) { manifest[it.text] = relPathFor(it.key); skipped++; }
    else todo.push(it);
  }
  console.log(`  已有 ${skipped} 条（跳过）/ 待生成 ${todo.length} 条 / 并行 ${JOBS} 路`);

  let done = 0, failed = 0;
  const failures = [];
  const t0 = Date.now();
  await runParallel(todo, JOBS, async (it) => {
    const rel = relPathFor(it.key);
    const abs = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    const r = await synth(it.text, abs, it.voice);
    if (r.ok) { manifest[it.text] = rel; done++; }
    else { failed++; failures.push({ text: it.text, err: r.err }); }
    const n = done + failed;
    if (n % 250 === 0) {
      const sec = (Date.now() - t0) / 1000;
      const rate = n / sec;
      const eta = ((todo.length - n) / rate) / 60;
      console.log(`  进度 ${n}/${todo.length}  失败 ${failed}  速度 ${rate.toFixed(1)}条/秒  预计剩余 ${eta.toFixed(0)} 分钟`);
    }
  });

  // 补上跳过项的清单
  for (const it of items) {
    const abs = path.join(OUT, relPathFor(it.key));
    if (fs.existsSync(abs)) manifest[it.text] = relPathFor(it.key);
  }

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest), 'utf8');
  const mb = (dirSize(OUT) / 1024 / 1024).toFixed(1);
  console.log(`\n✅ 完成：新生成 ${done} / 跳过 ${skipped} / 失败 ${failed}`);
  console.log(`   音频体积 ${mb} MB，清单 ${Object.keys(manifest).length} 条 -> ${path.relative(ROOT, MANIFEST)}`);
  if (failures.length) {
    console.log(`\n⚠️ 失败明细（前 10 条）：`);
    failures.slice(0, 10).forEach((f) => console.log(`   ${JSON.stringify(f.text).slice(0, 50)} -> ${f.err}`));
  }
}

main().catch((e) => { console.error('生成失败:', e); process.exit(1); });
