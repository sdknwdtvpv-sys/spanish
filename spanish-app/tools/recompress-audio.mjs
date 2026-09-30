#!/usr/bin/env node
/**
 * 补压：把体积偏大的音频重新压到目标码率。
 *
 * 为什么需要：第一版生成器让 `say` 直接输出 m4a，容器膨胀导致平均 28.9KB/条
 * （音频数据其实只有 15-21kbps）。改用 afconvert 压到 24kbps 后为 6.8KB/条。
 * 但重新生成时脚本按顺序处理，**已生成的大文件要等到本轮才被覆盖**——
 * 也就是说跑完一轮后，最后那批仍是旧的大文件。这个脚本专门扫一遍体积
 * 超阈值的文件就地重压，不必再等一整轮全量生成。
 *
 * 用法: node tools/recompress-audio.mjs [--limit-KB 20] [--jobs 4]
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'audio');
const args = process.argv.slice(2);
const getArg = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d; };
const LIMIT = Number(getArg('--limit-KB', 20)) * 1024;
const JOBS = Number(getArg('--jobs', 4));
const BITRATE = 24000;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, acc);
    else if (e.name.endsWith('.m4a') && !e.name.endsWith('.tmp.m4a')) acc.push(f);
  }
  return acc;
}
const run = (cmd, argv) => new Promise((res) => {
  const c = spawn(cmd, argv, { stdio: ['ignore', 'ignore', 'pipe'] });
  let err = ''; c.stderr.on('data', d => err += d);
  c.on('error', e => res({ code: -1, stderr: e.message }));
  c.on('close', code => res({ code, stderr: err }));
});

const all = walk(OUT);
const big = all.filter(f => fs.statSync(f).size > LIMIT);
console.log(`\n=== 音频补压 ===`);
console.log(`  总文件 ${all.length} / 超过 ${LIMIT / 1024}KB 的 ${big.length} 个`);
if (!big.length) { console.log('  ✅ 无需补压'); process.exit(0); }

let cursor = 0, done = 0, failed = 0;
let before = 0, after = 0;
await Promise.all(Array.from({ length: JOBS }, async () => {
  while (true) {
    const i = cursor++;
    if (i >= big.length) return;
    const f = big[i];
    const sz0 = fs.statSync(f).size;
    const tmp = f + '.rec.mp4';
    const r = await run('afconvert', ['-f', 'm4af', '-d', 'aac', '-b', String(BITRATE), f, tmp]);
    if (r.code === 0 && fs.existsSync(tmp) && fs.statSync(tmp).size > 200) {
      const sz1 = fs.statSync(tmp).size;
      // 只在确实变小的情况下替换，避免把本来合适的文件弄大
      if (sz1 < sz0) { fs.renameSync(tmp, f); before += sz0; after += sz1; }
      else { try { fs.unlinkSync(tmp); } catch {} }
      done++;
    } else {
      try { fs.unlinkSync(tmp); } catch {}
      failed++;
    }
    if ((done + failed) % 200 === 0) console.log(`  进度 ${done + failed}/${big.length}  失败 ${failed}`);
  }
}));
console.log(`\n✅ 补压完成：处理 ${done} / 失败 ${failed}`);
if (before) console.log(`   体积 ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB（省 ${((1 - after / before) * 100).toFixed(0)}%）`);
