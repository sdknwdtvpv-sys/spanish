#!/usr/bin/env node
/**
 * 给听力段落写入逐行音频数组（audioLines）。
 *
 * ── 为什么改成「重新序列化整段」而不是逐条插入 ──
 * 最初用字符串插入 + 括号配对定位，连续踩了 5 个坑（记在下面），
 * 每次都靠修补逗号，结果反复产生孤立逗号 / 错位插入。
 * 根因是**外科手术式插入本身就不可靠**：逗号该放哪、末字段有没有尾逗号、
 * 有没有同名标题，任何一个判断错都会写出损坏的文件。
 *
 * 现在改成：把 LISTENING_PASSAGES 整个数组**解析成对象 -> 补上 audioLines
 * -> 用 JSON.stringify 重新生成整段源码**。这样逗号与括号由序列化器保证，
 * 不可能出现语法错误。代价是这一段会统一成一种格式（可接受，反而更整齐）。
 *
 * 走过的坑（留作记录，别再用字符串插入重蹈）：
 *   1. 听力标题会与**单元标题重名**（听力有「自我介绍」，A1 单元也叫「自我介绍」），
 *      全局 indexOf 会命中单元 -> 必须限定在听力区内查找。
 *   2. 听力段落的 es 是**反引号模板字符串**，按 `es:'` 查找会全部失败。
 *   3. 定位对象结尾不能用 indexOf('}')，要做括号配对（并跳过字符串内的括号）。
 *   4. 末字段没有尾逗号（形如 `]\n  }`），插入时必须自己补逗号。
 *   5. 用「删已有 audioLines」的方式做幂等时，正则把**数组元素的合法逗号**也吃掉了，
 *      导致 `]audioLines:` 这种语法错误。
 *
 * 用法: node tools/embed-audio-lines.mjs [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'data', 'courses.js');
const DRY = process.argv.includes('--dry-run');
let src = fs.readFileSync(DATA, 'utf8');

const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={LISTENING_PASSAGES};')(mod, mod.exports);
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'audio-manifest.json'), 'utf8'));

const stripSpeaker = (l) => l.replace(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ\s.]{1,20}):\s*/, '').trim();

const REGION_START = src.indexOf('const LISTENING_PASSAGES = [');
const NXT = src.indexOf('\nconst ACHIEVEMENTS', REGION_START);
if (REGION_START < 0 || NXT < 0) {
  console.error('❌ 找不到听力数据区，拒绝继续');
  process.exit(1);
}
// 该段的结束：数组的 `];` 在 NXT 之前
const REGION_END = src.lastIndexOf('];', NXT) + 2;

const passages = [];
const problems = [];
for (const p of mod.exports.LISTENING_PASSAGES) {
  const lines = String(p.es || '').split('\n').map((x) => x.trim()).filter(Boolean);
  const paths = [];
  let ok = true;
  for (const line of lines) {
    const rel = manifest[stripSpeaker(line)];
    if (!rel) { ok = false; problems.push(`${p.title} -> 缺音频: ${stripSpeaker(line).slice(0, 30)}`); break; }
    paths.push('audio/' + rel.split(path.sep).join('/'));
  }
  if (!ok) { passages.push(p); continue; }   // 有缺失就保留原样，不写 audioLines
  // 用 JSON 序列化保证逗号/括号正确；audioLines 放在末尾
  passages.push({ ...p, audioLines: paths });
}

// 生成整段源码：每条占一行（对话文本里的换行由 JSON 转义成 \n，保持单行）
const body = passages.map((p) => '  ' + JSON.stringify(p)).join(',\n');
const newRegion = 'const LISTENING_PASSAGES = [\n' + body + '\n];';

console.log(`\n=== 听力逐行音频写入${DRY ? '（试运行）' : ''} ===`);
console.log(`  段落 ${passages.length} / 成功映射 ${passages.filter((p) => p.audioLines).length} / 失败 ${problems.length}`);
problems.slice(0, 8).forEach((x) => console.log('    ' + x));

if (DRY) { console.log('\n（试运行，未写入）'); process.exit(problems.length ? 1 : 0); }

const out = src.slice(0, REGION_START) + newRegion + src.slice(REGION_END);
fs.writeFileSync(DATA, out);
console.log(`\n✅ 已重写听力区（${passages.length} 段）`);
