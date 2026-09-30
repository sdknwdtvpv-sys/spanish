/**
 * 清理「同一单元内重复录入的词条」
 *
 * 检测见 scripts/audit-dup-entries.mjs（那里解释了为什么这是缺陷）。
 * 本脚本负责决定**保留哪一条、合并什么信息**，并且严格遵循：
 *
 *   1. 名词一律保留**带冠词**的形式 —— 西班牙语名词的性必须随词记住，
 *      `La semana` 比 `Semana` 有教学价值；A1 尤其如此。
 *   2. 释义**只增不减** —— 重复录入的过程里丢过信息，例如
 *        `Letanía《连词排比》` 与 `La letanía《连祷 / 一连串》`
 *      前者那个更贴修辞语境的义项不能因为删重复而消失。
 *   3. 例句取**更长**的那条（更可能包含上下文）。
 *   4. 任何拿不准的情况只报告、不改动（--dry-run 可先看全量报告）。
 *
 * 用法:
 *   node tools/fix-dup-entries.mjs --dry-run   # 只看会怎么改
 *   node tools/fix-dup-entries.mjs             # 实际写入
 */
import fs from 'node:fs';

const DRY = process.argv.includes('--dry-run');
const DATA = 'data/courses.js';
const ART = /^(el|la|los|las|un|una|unos|unas)\s+/i;
const norm = (s) => s.trim().toLowerCase().replace(ART, '').replace(/\s+/g, ' ');

let src = fs.readFileSync(DATA, 'utf8');

// 找到每个单元的 vocab 数组文本区间，逐个处理（避免整文件重写带来的风险）
// 做法：把 data/courses.js 当模块加载，算出「要删的条目」和「要改的条目」，
// 然后用精确字符串替换作用到源码文本上。
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES};')(mod, mod.exports);
const { COURSES } = mod.exports;

/**
 * 把一个 vocab 条目渲染成源码中的字面文本（用于精确替换）。
 * 注意：不能靠"猜格式"拼字符串——源码里字段顺序固定为
 * `{es:'…', zh:'…', example:'…'}` 且大括号内**无空格**。第一次实现
 * 拼成了 `{ es:'…' }`，结果 66 条删除全部未匹配、脚本静默不改文件
 * （好在报告里打了"跳过"计数，没有谎报成功）。所以这里直接**从源码
 * 里按 es 字段定位真实文本**，不再自己拼。
 */
function locateInSource(src, es, unitId) {
  // 先缩小到该单元的 vocab 区间
  const uStart = src.indexOf(`id:'${unitId}'`);
  if (uStart < 0) return null;
  const vStart = src.indexOf('vocab:[', uStart);
  const vEnd = src.indexOf('grammar:[', vStart);
  const region = src.slice(vStart, vEnd);
  const needle = `es:'${es}'`;
  const i = region.indexOf(needle);
  if (i < 0) return null;
  const braceStart = region.lastIndexOf('{', i);
  const braceEnd = region.indexOf('}', i);
  if (braceStart < 0 || braceEnd < 0) return null;
  return { text: region.slice(braceStart, braceEnd + 1), vStart, braceStart };
}

const deletions = [];   // 要从文件里删掉的字面文本
const edits = [];       // {from, to, note}
const report = [];
let mergedGlosses = 0;

for (const [lv, l] of Object.entries(COURSES)) {
  for (const u of l.units) {
    const buckets = new Map();
    for (const w of u.vocab || []) {
      const k = norm(w.es);
      if (!buckets.has(k)) buckets.set(k, []);
      buckets.get(k).push(w);
    }
    for (const [, arr] of buckets) {
      if (arr.length < 2) continue;

      // 选保留项：优先带冠词的；否则取字数最多的（信息量更大）
      const withArt = arr.filter((w) => ART.test(w.es.trim()));
      const keep = (withArt.length ? withArt : arr)
        .slice()
        .sort((a, b) => b.es.length - a.es.length)[0];
      const drop = arr.filter((w) => w !== keep);

      // 合并释义：keep 的释义为主体，补上 drop 里 keep 没覆盖到的义项。
      // 语料里的补充说明写在中文括号里（73 条，如 `菜单（正式）`），
      // 括号前的主义项要先拆出来比较，否则会拼出 `菜单 / 信 / 菜单（正式）`
      // 这种把「菜单」说了两遍的释义。
      const splitParts = (s) =>
        s
          .replace(/（[^）]*）/g, '')          // 去掉括号补充，只留主义项
          .split(/[\/、,，;；]/)
          .map((x) => x.trim())
          .filter(Boolean);
      const parenNotes = (s) => (s.match(/（[^）]*）/g) || []).map((x) => x.slice(1, -1));

      const mainOf = (w) => w.zh.trim();
      let merged = mainOf(keep);
      let notes = parenNotes(merged);
      // 主义项收集：以 keep 为主，按出现顺序补 drop 的新义项
      const have = new Set(splitParts(merged));
      const extras = [];
      for (const w of drop) {
        const g = mainOf(w);
        for (const p of splitParts(g)) if (!have.has(p)) { have.add(p); extras.push(p); }
        for (const n of parenNotes(g)) if (!notes.includes(n)) notes.push(n);
      }
      if (extras.length) {
        // 保留 keep 原有的括号补充位置：把补充统一放到最后
        merged = merged.replace(/（[^）]*）/g, '').trim() + ' / ' + extras.join(' / ');
        mergedGlosses++;
      }
      if (notes.length) merged = merged + '（' + notes.join('；') + '）';
      merged = merged.replace(/\s*\/\s*/g, ' / ').trim();

      // 例句取更长的
      const exs = arr.map((w) => w.example).filter((x) => x !== undefined);
      const example = exs.length ? exs.slice().sort((a, b) => b.length - a.length)[0] : undefined;

      const finalKeep = { ...keep, zh: merged };
      if (example !== undefined) finalKeep.example = example;

      const glossChanged = merged !== keep.zh.trim();
      const exChanged = example !== undefined && example !== keep.example;

      edits.push({ lv, uid: u.id, es: keep.es, final: finalKeep, changed: glossChanged || exChanged, note: `${lv}/${u.id} ${keep.es}` });
      for (const d of drop) deletions.push({ lv, uid: u.id, es: d.es, note: `${lv}/${u.id} ${d.es}` });

      report.push({
        lv, uid: u.id,
        keep: finalKeep,
        drop: drop.map((w) => w.es),
        glossMerged: glossChanged, exChanged,
      });
    }
  }
}

console.log(`\n=== 单元内重复词条清理（${DRY ? '试运行' : '写入'}）===`);
console.log(`  重复组 ${report.length} / 删除条目 ${deletions.length} / 改写条目 ${edits.length} / 合并释义 ${mergedGlosses} 处\n`);
for (const r of report) {
  const flag = r.glossMerged || r.exChanged ? '✏️' : '  ';
  const note = [r.glossMerged ? '合并释义' : '', r.exChanged ? '取更长例句' : ''].filter(Boolean).join('+');
  console.log(`  ${flag} ${r.lv}/${r.uid}  保留「${r.keep.es}」= ${r.keep.zh}   删除 ${r.drop.join(' / ')}${note ? '   [' + note + ']' : ''}`);
}

if (DRY) {
  console.log('\n（试运行，未写入。去掉 --dry-run 实际执行）');
  process.exit(0);
}

// 关键一：**所有位置必须在原始 src 上一次性算好**。
// 踩过的坑：第一版在「已改动」的 src 上二次 locateInSource，
// 条目偏移已经移动，于是定位到别的条目 —— 表现为 3 个单元的词表
// 开括号后留下一个孤立逗号（vocab[0] 变成空洞），而删除计数却是"成功"。
// 关键二：替换必须**从后往前**，这样前面的偏移量不受影响。
const jobs = [];
for (const e of edits) if (e.changed) jobs.push({ kind: 'edit', ...e });
for (const d of deletions) jobs.push({ kind: 'del', lv: d.lv, uid: d.uid, es: d.es, note: d.note });

let missDel = 0, missEdit = 0;
const located = [];
for (const j of jobs) {
  const loc = locateInSource(src, j.es, j.uid);
  if (!loc) {
    if (j.kind === 'del') missDel++; else missEdit++;
    console.log(`  ⚠️ 未能在源码中定位，跳过: ${j.note}`);
    continue;
  }
  located.push({ ...j, absStart: loc.vStart + loc.braceStart, text: loc.text });
}

// 从文件末尾往前替换
located.sort((a, b) => b.absStart - a.absStart);
let applied = 0;
for (const j of located) {
  const start = j.absStart;
  const end = start + j.text.length;
  if (j.kind === 'del') {
    // 连同前导逗号与空白一起吃掉。注意数组首条的逗号在**上一行行尾**
    // （条目本身在行首），所以先试"同行逗号"，再试"上一行行尾逗号"。
    const before = src.slice(0, start);
    let trimmed = before.replace(/,\s*$/, '');
    if (trimmed.length === before.length) {
      const b2 = before.replace(/\s*$/, '');
      const t2 = b2.replace(/,$/, '');
      if (t2.length < b2.length) trimmed = t2;
    }
    src = src.slice(0, trimmed.length) + src.slice(end);
  } else {
    const parts = [`es:'${j.final.es}'`, `zh:'${j.final.zh}'`];
    if (j.final.example !== undefined) parts.push(`example:'${j.final.example}'`);
    src = src.slice(0, start) + '{' + parts.join(', ') + '}' + src.slice(end);
  }
  applied++;
}

fs.writeFileSync(DATA, src);
console.log(`\n✅ 已写入 ${DATA}（实际改动 ${applied} 处；跳过删除 ${missDel} / 跳过改写 ${missEdit}）`);
console.log('   下一步：node scripts/check-data.mjs && node scripts/audit-dup-entries.mjs');
