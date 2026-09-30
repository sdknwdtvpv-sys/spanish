#!/usr/bin/env node
/**
 * 把预生成音频的路径写回 data/courses.js
 *
 * 为什么写进数据文件而不是运行时读清单：
 *   单元页是同步渲染的，运行时再 fetch 一份映射会引入竞态（列表已经画完了，
 *   音频路径才到）。直接写进数据让播放时**同步可查**，最稳。
 *
 * 为什么按「类别 + 原文」在对应区块内定位：
 *   同一句西语可能既在词表里、又在听力里。若做全局字符串替换，第一次命中
 *   就会加错位置。这里的做法是：词条按所属单元定位（`es:'X'` 后面第一个 `}`），
 *   听力/口语按各自数据段的 `es:'X'` 之后补字段。
 *   定位失败只报告不静默——第一版 fix 脚本就是没匹配到还谎报成功。
 *
 * 用法: node tools/embed-audio.mjs [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'data', 'courses.js');
const MANIFEST = path.join(ROOT, 'data', 'audio-manifest.json');
const DRY = process.argv.includes('--dry-run');
// 生成尚未完成时，允许只嵌入已生成的部分（用于提前在真机上验证链路）
const ALLOW_PARTIAL = process.argv.includes('--allow-partial');

const KEY = (t) => crypto.createHash('sha1').update(String(t).trim(), 'utf8').digest('hex').slice(0, 16);

let src = fs.readFileSync(DATA, 'utf8');
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));

// 文本 -> 相对音频路径（统一成 web 根目录下的相对路径）
const audioPathOf = (text) => {
  const rel = manifest[String(text).trim()];
  return rel ? 'audio/' + rel.split(path.sep).join('/') : null;
};

const stats = { vocab: 0, listening: 0, speaking: 0, missing: 0, already: 0 };
const misses = [];

/** 在 text 的 [from, to) 区间内，找到第 nth 个 needle 对应的「条目右括号」位置 */
function entryEndIn(text, needle, from, to, nth = 0) {
  let idx = from, found = -1;
  for (let i = 0; i <= nth; i++) {
    idx = text.indexOf(needle, idx);
    if (idx < 0 || idx >= to) return -1;
    if (i < nth) idx += 1;
  }
  const end = text.indexOf('}', idx);
  return end >= 0 && end < to ? end : -1;
}

// ---------- 1) 词条：在所属单元的 vocab 区间内加 audio 字段 ----------
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES};')(mod, mod.exports);
const { COURSES } = mod.exports;

const edits = [];   // {pos, text}  —— pos 为插入点（在 } 之前）
for (const [, lv] of Object.entries(COURSES)) {
  for (const u of lv.units) {
    const uStart = src.indexOf(`id:'${u.id}'`);
    if (uStart < 0) continue;
    const vStart = src.indexOf('vocab:[', uStart);
    const vEnd = src.indexOf('grammar:[', vStart);
    for (const w of u.vocab || []) {
      const ap = audioPathOf(w.es);
      if (!ap) { stats.missing++; misses.push(`vocab ${u.id}: ${w.es}`); continue; }
      const end = entryEndIn(src, `es:'${w.es.replace(/'/g, "\\'")}'`, vStart, vEnd);
      if (end < 0) { stats.missing++; misses.push(`vocab 定位失败 ${u.id}: ${w.es}`); continue; }
      // 正确做法：检查**整条**是否已有 audio（第一版只看 } 后 20 个字符，
      // 字段顺序不同的条目会漏判，于是同一字段被反复插入，造成 3 份重复）。
      const braceStart = src.lastIndexOf('{', end);
      const entryText = src.slice(braceStart, end + 1);
      if (/audio:'/.test(entryText)) { stats.already++; continue; }
      // 原条目末字段可能已带逗号（`example:'...',`），此时不能再补逗号，
      // 否则会写出 `...,, audio:` 或孤立的 `,\n` —— 这是上一版被 check-data 抓到的问题。
      const hasComma = /,\s*$/.test(src.slice(braceStart, end));
      edits.push({ pos: end, text: (hasComma ? ' ' : ', ') + `audio:'${ap}'` });
      stats.vocab++;
    }
  }
}

// ---------- 2) 听力：给每条对话行加 audio ----------
// 听力数据形如 {level, title, es:'SPEAKER: line\nSPEAKER: line\n...', ...}
// 行内没有独立对象，所以这里不改数据结构，改为按整段生成「逐行音频数组」。
// 放在段落对象的 es 字段之后，键名为 audioLines。
const listenEdits = [];
{
  const li = src.indexOf('const LISTENING_PASSAGES = [');
  const le = src.indexOf('const SPEAKING_SENTENCES = [', li);
  const region = src.slice(li, le);
  const entryRe = /\{\s*level:'([^']*)',\s*title:'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = entryRe.exec(region)) !== null) {
    const absStart = li + m.index;
    // 该段落对象的右括号
    const objEnd = src.indexOf('}', absStart);
    if (objEnd < 0) continue;
    // 解析该段落的 es 文本以拆行
    // 直接从 region 里取 es:'...' 内容
    const esStart = src.indexOf("es:'", absStart);
    if (esStart < 0 || esStart > objEnd) continue;
    const esEnd = src.indexOf("',", esStart);
    const esRaw = src.slice(esStart + 4, esEnd);
    const lines = esRaw.split('\\n').map((x) => x.trim()).filter(Boolean);
    const paths = [];
    let anyMissing = false;
    for (const line of lines) {
      const sp = line.replace(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s.]{1,20}):\s*/, '');
      const ap = audioPathOf(sp);
      if (!ap) { anyMissing = true; break; }
      paths.push(ap);
    }
    if (!paths.length) { stats.missing++; misses.push(`listening: ${m[2]}`); continue; }
    if (anyMissing && !ALLOW_PARTIAL) { stats.missing++; misses.push(`listening(有行缺音频): ${m[2]}`); continue; }
    listenEdits.push({ pos: objEnd, text: `, audioLines:${JSON.stringify(paths)}` });
    stats.listening++;
  }
}

// ---------- 3) 口语：给每条加 audio ----------
const speakEdits = [];
{
  const si = src.indexOf('const SPEAKING_SENTENCES = [');
  const se = src.indexOf('\n];', si);
  const region = src.slice(si, se);
  const re = /\{level:'([^']*)',\s*es:'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(region)) !== null) {
    const absStart = si + m.index;
    const objEnd = src.indexOf('}', absStart);
    if (objEnd < 0) continue;
    const text = m[2].replace(/\\'/g, "'");
    const ap = audioPathOf(text);
    if (!ap) { stats.missing++; misses.push(`speaking: ${text.slice(0, 40)}`); continue; }
    if (src.slice(absStart, objEnd).includes('audio:')) { stats.already++; continue; }
    const hasComma2 = /,\s*$/.test(src.slice(absStart, objEnd));
    speakEdits.push({ pos: objEnd, text: (hasComma2 ? ' ' : ', ') + `audio:'${ap}'` });
    stats.speaking++;
  }
}

const all = [...edits, ...listenEdits, ...speakEdits];

console.log(`\n=== 音频路径写回${DRY ? '（试运行）' : ''} ===`);
console.log(`  词条 ${stats.vocab} / 听力段 ${stats.listening} / 口语 ${stats.speaking}`);
console.log(`  已存在跳过 ${stats.already} / 未找到音频或定位失败 ${stats.missing}`);
if (misses.length) {
  console.log(`  未命中明细（前 8 条）:`);
  misses.slice(0, 8).forEach((x) => console.log('    ' + x));
}

if (DRY) { console.log('\n（试运行，未写入）'); process.exit(0); }
if (!all.length) { console.log('\n没有需要写入的改动。'); process.exit(0); }

// 从后往前插入，避免前面的插入影响后面的位置
all.sort((a, b) => b.pos - a.pos);
for (const e of all) {
  src = src.slice(0, e.pos) + e.text + src.slice(e.pos);
}
fs.writeFileSync(DATA, src);
console.log(`\n✅ 已写入 ${path.relative(ROOT, DATA)}（插入 ${all.length} 处）`);
