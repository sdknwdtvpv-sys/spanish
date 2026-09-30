// 统一同一西语词在不同单元的中文释义（取最完整义项）
// 用法: node tools/unify-gloss.mjs [apply]
import fs from 'node:fs';

const P = 'data/courses.js';
let src = fs.readFileSync(P, 'utf8');

// [es, 旧zh, 新zh]
const fixes = [
  ['El barrio', '街区', '街区 / 社区'],
  ['La dirección', '地址', '方向、地址'],
  ['Dar igual', '无所谓', '都行 / 无所谓'],
  ['La asignatura', '科目', '课程 / 科目'],
  ['La vergüenza', '羞耻', '羞耻、尴尬'],
  ['Quejarse de', '抱怨', '投诉、抱怨'],
  ['El derecho', '权利', '权利；法律'],
  ['La ambigüedad', '歧义', '含糊、歧义'],
  ['La ambigüedad', '歧义、含混', '含糊、歧义'],
  ['Desvirtuar', '使失去效力', '使失去效力、曲解'],
  ['Ratificar', '批准', '批准 / 认可'],
  ['La negociación', '谈判', '谈判、协商'],
  ['La herencia', '遗产', '遗产、继承'],
  ['La coyuntura', '经济形势', '时局、经济形势'],
  ['La idiosincrasia', '民族特性', '民族特性、特有性格'],
  ['Refrendar', '印证', '印证、确证'],
  ['La moratoria', '暂停期', '暂停期、延期偿付'],
  ['La anáfora', '首语重复', '首语重复 / 回指'],
  ['La anáfora', '回指', '首语重复 / 回指'],
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const apply = process.argv[2] === 'apply';
let total = 0;

for (const [es, oldZh, newZh] of fixes) {
  const re = new RegExp("(\\{es:'" + esc(es) + "', zh:')" + esc(oldZh) + "(')", 'g');
  const hits = (src.match(re) || []).length;
  console.log((hits ? 'OK  ' : 'MISS') + ' ' + es.padEnd(20) + ' ' + oldZh.padEnd(14) + ' -> ' + newZh + '   [' + hits + ']');
  total += hits;
  if (apply) src = src.replace(re, '$1' + newZh + '$2');
}

console.log('总命中: ' + total);
if (apply) {
  fs.writeFileSync(P, src);
  console.log('已写入 ' + P);
}
