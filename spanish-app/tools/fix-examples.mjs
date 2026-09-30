// 修复「例句未出现该词」的真缺陷：给每个词条换一个真正含该词的例句。
// 定位条件 = (es, zh, 旧例句) 三元组，避免误伤同名不同例句的条目。
// 用法: node tools/fix-examples.mjs [apply]
import fs from 'node:fs';

const P = 'data/courses.js';
let src = fs.readFileSync(P, 'utf8');

// [es, zh, 旧例句, 新例句]
const fixes = [
  ['Edad', '年龄', '¿Cuántos años tienes?', '¿Qué edad tienes?'],
  ['Argentina', '阿根廷', 'Buenos Aires es la capital.', 'Soy de Argentina, de Buenos Aires.'],
  ['La talla de zapato', '鞋码', 'Calzo un cuarenta y dos.', '¿Qué talla de zapato usas?'],
  ['Padre / madre políticos', '岳父 / 岳母', 'Mis suegros vienen este fin de semana.', 'Mis padres políticos vienen este fin de semana.'],
  ['Primero / Segundo', '第一 / 第二', 'Estudié medicina en la universidad.', 'El primero de mayo es festivo.'],
  ['Aerolínea', '航空公司', 'Vuelo de Iberia.', 'Trabajo en una aerolínea.'],
  ['Actor', '演员', 'Penélope Cruz es una actriz premiada.', 'Es un actor muy conocido.'],
  ['Reírse de', '嘲笑', 'No te rías de mí.', 'No te rías de mí.'],
  ['La raíz', '根源', 'Sus raíces están en Andalucía.', 'La raíz del problema es económica.'],
  ['El producto interior bruto', '国内生产总值', 'El PIB creció un dos por ciento.', 'El producto interior bruto creció un dos por ciento.'],
];

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const apply = process.argv[2] === 'apply';
let total = 0;

for (const [es, zh, oldEx, newEx] of fixes) {
  if (oldEx === newEx) { console.log('SKIP ' + es + ' （例句已含该词，无需改）'); continue; }
  const re = new RegExp(
    "(\\{es:'" + esc(es) + "', zh:'" + esc(zh) + "', example:'" + esc(oldEx) + "'\\})", 'g');
  const hits = (src.match(re) || []).length;
  console.log((hits === 1 ? 'OK  ' : (hits ? 'WARN' : 'MISS')) + ' ' + es.padEnd(28) + '[' + hits + ']');
  total += hits;
  if (apply && hits === 1) {
    const replacement = "{es:'" + es + "', zh:'" + zh + "', example:'" + newEx + "'}";
    src = src.replace(re, replacement.replace(/\$/g, '$$$$'));
  }
}

console.log('总命中: ' + total);
if (apply) { fs.writeFileSync(P, src); console.log('已写入 ' + P); }
