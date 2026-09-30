#!/usr/bin/env node
/**
 * 从磁盘上的音频文件重建清单（data/audio-manifest.json）。
 *
 * 用途：生成过程可能被中断、或后来补生成了新条目，清单会与实际文件不一致。
 * 这个脚本以「数据里的全部文本」为准，逐个检查文件是否存在，重建清单，
 * 并把缺失项**明确报出来**（而不是静默跳过）。
 *
 * 覆盖范围：单元词表 + ALL_VOCAB（含精读生词）+ 口语句子 + 听力对话行。
 * 注意听力段落的 es 是反引号模板字符串，必须用「说话人标签剥离」后的文本查找。
 *
 * 用法: node tools/rebuild-audio-manifest.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'audio');
const DATA = path.join(ROOT, 'data', 'courses.js');
const MANIFEST = path.join(ROOT, 'data', 'audio-manifest.json');

const keyOf = (t) => crypto.createHash('sha1').update(String(t).trim(), 'utf8').digest('hex').slice(0, 16);
const relOf = (k) => path.join(k.slice(0, 2), k + '.m4a');
const stripSpeaker = (l) => l.replace(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s.]{1,20}):\s*/, '').trim();

const src = fs.readFileSync(DATA, 'utf8');
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES,ALL_VOCAB,LISTENING_PASSAGES,SPEAKING_SENTENCES,READING_PASSAGES};')(
  mod, mod.exports
);
const d = mod.exports;

const texts = new Set();
const add = (t) => { const s = String(t || '').trim(); if (s) texts.add(s); };

for (const lv of Object.values(d.COURSES)) for (const u of lv.units) for (const w of (u.vocab || [])) add(w.es);
for (const w of d.ALL_VOCAB) add(w.es);
for (const s of d.SPEAKING_SENTENCES) add(s.es);
for (const p of d.READING_PASSAGES || []) for (const g of (p.glossary || [])) add(g.es);
// 听力：按行拆，剥掉说话人标签
for (const p of d.LISTENING_PASSAGES) {
  String(p.es || '').split('\n').map((x) => x.trim()).filter(Boolean).forEach((l) => add(stripSpeaker(l)));
}

const manifest = {};
const missing = [];
for (const t of texts) {
  const rel = relOf(keyOf(t));
  if (fs.existsSync(path.join(OUT, rel))) manifest[t] = rel;
  else missing.push(t);
}

fs.writeFileSync(MANIFEST, JSON.stringify(manifest), 'utf8');
console.log(`\n=== 重建音频清单 ===`);
console.log(`  数据中文本 ${texts.size} / 有音频 ${Object.keys(manifest).length} / 缺 ${missing.length}`);
if (missing.length) {
  console.log(`  缺失明细（前 10 条）:`);
  missing.slice(0, 10).forEach((m) => console.log('    ' + m));
  process.exitCode = 1;
}
