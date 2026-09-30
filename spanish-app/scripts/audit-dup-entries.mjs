/**
 * 单元内「同一词条重复录入」检测
 *
 * 为什么单独做：`check-data.mjs` 的重复检测用的是精确字符串比对，
 * 只能发现 `es` 字段一字不差的重复。但语料里大量条目的差别只是
 * **大小写**或**有没有冠词**，实际是同一个词条被录了两遍：
 *
 *     {es:'Semana',   zh:'星期 / 周', example:'Una semana tiene siete días.'}
 *     {es:'La semana', zh:'星期 / 周', example:'La semana tiene siete días.'}
 *
 * 为什么这是缺陷而不只是冗余：SRS 的 key 是 `单元id:西语原文`
 * （见 app.js 的 srsKey），所以同一单元里 `Semana` 和 `La semana`
 * 会成为**两张复习卡**。学习者在一个单元内看到同一个词两次、
 * 被计两次分、排两次复习——这是可见的体验问题，且被计入「总词数」，
 * 让规模数字虚高（实测 66 组）。
 *
 * 判定范围的区别：
 *   - **同一单元内**同词条重复 → 缺陷（本脚本报出）
 *   - **跨单元**同词条重复 → 设计（间隔复习会再次出现是有意为之），不报
 *
 * 用法: node scripts/audit-dup-entries.mjs [data/courses.js]
 */
import fs from 'node:fs';

const DATA = process.argv[2] || 'data/courses.js';
const src = fs.readFileSync(DATA, 'utf8');
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES};')(mod, mod.exports);
const { COURSES } = mod.exports;

const ART = /^(el|la|los|las|un|una|unos|unas)\s+/i;
/** 归一化：去首尾空白、转小写、去冠词、压缩空格 */
const norm = (s) => s.trim().toLowerCase().replace(ART, '').replace(/\s+/g, ' ');

const holes = [];
let groups = 0;
let extras = 0;
const byLevel = {};
const details = [];

for (const [lv, l] of Object.entries(COURSES)) {
  for (const u of l.units) {
    const buckets = new Map();
    for (const w of u.vocab || []) {
      // 空洞（源码里多余的逗号会造成 vocab[i] === undefined）：报出来而不是崩掉。
      // 这类问题 check-data 的"孤立逗号"检查可能漏（只查了 `\n\s*,\n`）。
      if (!w || typeof w.es !== 'string') { holes.push(`${u.id}[${(u.vocab || []).indexOf(w)}]`); continue; }
      const k = norm(w.es);
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(w);
    }
    for (const [k, arr] of buckets) {
      if (arr.length < 2) continue;
      groups++;
      extras += arr.length - 1;
      byLevel[lv] = (byLevel[lv] || 0) + (arr.length - 1);
      details.push({ lv, uid: u.id, ut: u.title, key: k, items: arr });
    }
  }
}

console.log(`\n=== 单元内重复词条检测（${DATA}）===`);
console.log(`  重复组 ${groups} 组 / 多余条目 ${extras} 条`);
console.log(`  按等级: ${Object.entries(byLevel).map(([k, v]) => `${k} ${v}`).join(' / ') || '无'}`);
if (holes.length) console.log(`  ❌ 词表空洞（源码多余逗号导致）${holes.length} 处: ${holes.slice(0, 10).join(', ')}`);

if (details.length) {
  console.log('\n  明细（保留形式由 tools/fix-dup-entries.mjs 决定，此处仅列出）：');
  for (const d of details.sort((a, b) => a.uid.localeCompare(b.uid))) {
    const forms = d.items.map((w) => `${w.es}《${w.zh}》`).join('  ||  ');
    const glossDiffers = new Set(d.items.map((w) => w.zh.trim())).size > 1;
    console.log(`    ${d.lv}/${d.uid} ${glossDiffers ? '⚠️释义不同 ' : ''}${forms}`);
  }
  const glossConflict = details.filter((d) => new Set(d.items.map((w) => w.zh.trim())).size > 1);
  console.log(`\n  其中释义不相同的 ${glossConflict.length} 组（删除时必须先合并释义，不能直接丢一条）`);
}

// 供其它脚本复用
export { norm, ART };

if (process.argv[1] && process.argv[1].endsWith('audit-dup-entries.mjs')) {
  process.exit(0);
}
