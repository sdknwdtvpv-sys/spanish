/**
 * 收尾修正：最后 2 组同单元释义冲突
 *
 *   B1/b1-u3  Datos《数据》 与 El dato《数据》  → 区分单复数与用法
 *   B1/b1-u5  Proteínas《蛋白质》 与 La proteína《蛋白质》 → 删掉 Proteínas
 *
 * 为什么 Proteínas 要删而不是区分：`proteína` 在西班牙语里是可数名词，
 * 但"蛋白质"作为物质名称不存在一个独立的复数词条，把它单列会让学习者
 * 以为有两个词要背；而它连例句都跟 La proteína 一模一样。
 * （全库检视过：没有其它"不可数名词单列复数词条"的情况。）
 *
 * 用法: node tools/fix-last-collisions.mjs
 */
import fs from 'node:fs';

const DATA = 'data/courses.js';
let src = fs.readFileSync(DATA, 'utf8');

/** 在单元 vocab 区间里找第 nth（0 起）个 es 匹配的条目字面文本 */
function locateNth(s, es, unitId, nth) {
  const uStart = s.indexOf(`id:'${unitId}'`);
  if (uStart < 0) return null;
  const vStart = s.indexOf('vocab:[', uStart);
  const vEnd = s.indexOf('grammar:[', vStart);
  const region = s.slice(vStart, vEnd);
  const needle = `es:'${es}'`;
  let from = 0, found = -1, i = -1;
  while (true) {
    const p = region.indexOf(needle, from);
    if (p < 0) break;
    found++;
    if (found === nth) { i = p; break; }
    from = p + 1;
  }
  if (i < 0) return null;
  const braceStart = region.lastIndexOf('{', i);
  const braceEnd = region.indexOf('}', i);
  return { abs: vStart + braceStart, text: region.slice(braceStart, braceEnd + 1) };
}
const setZh = (t, zh) => t.replace(/zh:'[^']*'/, `zh:'${zh}'`);

const jobs = [];

// 1) Datos / El dato 区分
const datos = locateNth(src, 'Datos', 'b1-u3', 0);
if (datos) jobs.push({ kind: 'edit', ...datos, to: setZh(datos.text, '数据（复数）'), note: 'b1-u3 Datos → 数据（复数）' });
const dato = locateNth(src, 'El dato', 'b1-u3', 0);
if (dato) jobs.push({ kind: 'edit', ...dato, to: setZh(dato.text, '数据（单条）'), note: 'b1-u3 El dato → 数据（单条）' });

// 2) 删除 Proteínas
const prot = locateNth(src, 'Proteínas', 'b1-u5', 0);
if (prot) jobs.push({ kind: 'del', ...prot, note: 'b1-u5 删除重复词条 Proteínas（保留 La proteína）' });

console.log(`\n=== 收尾修正（共 ${jobs.length} 处）===`);
for (const j of jobs) console.log(`  ${j.kind === 'del' ? '🗑 ' : '✏️ '} ${j.note}`);
if (jobs.length !== 3) { console.error('\n❌ 预期 3 处，实际 ' + jobs.length + '，已中止（避免定位错误时静默改坏文件）'); process.exit(1); }

jobs.sort((a, b) => b.abs - a.abs);
for (const j of jobs) {
  const end = j.abs + j.text.length;
  if (j.kind === 'del') {
    const before = src.slice(0, j.abs);
    let trimmed = before.replace(/,\s*$/, '');
    if (trimmed.length === before.length) {
      const b2 = before.replace(/\s*$/, '');
      const t2 = b2.replace(/,$/, '');
      if (t2.length < b2.length) trimmed = t2;
    }
    src = src.slice(0, trimmed.length) + src.slice(end);
  } else {
    src = src.slice(0, j.abs) + j.to + src.slice(end);
  }
}
fs.writeFileSync(DATA, src);
console.log(`\n✅ 已写入 ${DATA}`);
