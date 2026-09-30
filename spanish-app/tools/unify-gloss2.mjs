// 第二轮释义统一（内容扩充后新增的冲突）
// 用法: node tools/unify-gloss2.mjs [apply]
import fs from 'node:fs';

const P = 'data/courses.js';
let src = fs.readFileSync(P, 'utf8');

// [es, 旧zh, 新zh] —— 统一为最完整义项
const fixes = [
  ['El compañero', '同事', '同事 / 同学'],
  ['El jefe', '上司', '上司、老板'],
  ['El gusto', '品味', '喜好 / 品味'],
  ['El título', '学位、证书', '学位 / 头衔'],
  ['El título', '学历、证书', '学位 / 头衔'],
  ['El título', '学位', '学位 / 头衔'],
  ['La formación', '培训', '培训、教育'],
  ['El curso', '课程', '课程、学年'],
  ['El alquiler', '租金', '租金、租房'],
  ['La audiencia', '受众', '受众、收视率'],
  ['El bulo', '假消息', '谣言、假消息'],
  ['El soporte', '载体', '载体、材质'],
  ['Contrastar', '核实', '核实、比对'],
  ['Contrastar', '验证 / 对照', '核实、比对'],
  ['Contrastar', '检验、比对', '核实、比对'],
  ['Prescindir de', '不用、舍弃', '舍弃、不考虑'],
  ['Prescindir de', '舍弃', '舍弃、不考虑'],
  ['Corroborar', '证实、佐证', '佐证'],
  ['Presuponer', '预设', '预设、假定'],
  ['Salvaguardar', '维护、保障', '保障'],
  ['La crítica', '批评', '批评、评论'],
  ['La disuasión', '劝阻', '劝阻、威慑'],
  ['El aura', '灵光', '灵光、本真性'],
  ['La caja', '收银台', '柜台、收银台'],
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const apply = process.argv[2] === 'apply';
let total = 0;

for (const [es, oldZh, newZh] of fixes) {
  const re = new RegExp("(\\{es:'" + esc(es) + "', zh:')" + esc(oldZh) + "(')", 'g');
  const hits = (src.match(re) || []).length;
  if (!hits) { console.log('MISS ' + es.padEnd(20) + ' ' + oldZh); continue; }
  console.log('OK   ' + es.padEnd(20) + ' ' + oldZh.padEnd(14) + ' -> ' + newZh + '   [' + hits + ']');
  total += hits;
  if (apply) src = src.replace(re, '$1' + newZh + '$2');
}

console.log('总命中: ' + total);
if (apply) { fs.writeFileSync(P, src); console.log('已写入 ' + P); }
