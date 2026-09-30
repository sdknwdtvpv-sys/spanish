// 修复「不同单元的词条共用同一例句」
// 成因：新增单元时引入了与既有单元相同的词，且沿用了同一条例句。
// 做法：保留原单元的例句不动，给**新单元**那一侧换成不同的例句，
//       这样既消除重复，又让学生在不同语境里再见到这个词。
// 用法: node tools/fix-dup-examples.mjs [apply]
import fs from 'node:fs';

const P = 'data/courses.js';
let src = fs.readFileSync(P, 'utf8');

// [要改的那个词条 es, 它当前的 zh, 当前例句, 新例句]
const fixes = [
  ['La profesión', '职业', '¿Cuál es tu profesión?', 'Su profesión es exigente pero vocacional.'],
  ['A la derecha / izquierda', '向右 / 向左', 'Gire a la derecha.', 'El museo está a la izquierda.'],
  ['Ojos marrones', '棕色眼睛', 'Sus ojos son marrones.', 'Tiene los ojos marrones como su madre.'],
  ['El jefe', '上司、老板', 'Mi jefe es muy exigente.', 'Hablé con el jefe de personal.'],
  ['La cabeza', '头', 'Me duele la cabeza.', 'Giró la cabeza para mirarme.'],
  ['Tenis', '网球', 'Juego al tenis los sábados.', 'El tenis requiere mucha coordinación.'],
  ['La nota', '分数', 'Saqué una buena nota.', 'La nota media del grupo subió.'],
  ['La biblioteca', '图书馆', 'Estudio en la biblioteca.', 'La biblioteca cierra a las nueve.'],
  ['La aplicación', '应用程序', 'Descargué una aplicación nueva.', 'Esta aplicación consume mucha batería.'],
  ['El rastro', '痕迹', 'Todo deja un rastro digital.', 'El perro siguió el rastro del jabalí.'],
  ['La dotación', '拨款', 'La dotación presupuestaria es insuficiente.', 'La dotación de personal se redujo.'],
  ['La muestra', '样本', 'La muestra no es representativa.', 'Recogimos una muestra de agua.'],
  ['La correlación', '相关性（统计）', 'Correlación no implica causalidad.', 'La correlación entre ambas variables es débil.'],
];

const apply = process.argv[2] === 'apply';
let ok = 0;
const miss = [];

for (const [es, zh, oldEx, newEx] of fixes) {
  const re = new RegExp("(\\{es:'" + es.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    "', zh:'" + zh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    "', example:'" + oldEx.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "'\\})", 'g');
  const hits = (src.match(re) || []).length;
  if (hits !== 1) { miss.push(`${es}  [${hits}]`); continue; }
  ok++;
  if (apply) {
    const repl = "{es:'" + es + "', zh:'" + zh + "', example:'" + newEx + "'}";
    src = src.replace(re, repl.replace(/\$/g, '$$$$'));
  }
}

console.log(`可修改 ${ok} / ${fixes.length}`);
if (miss.length) { console.log('未唯一命中：'); miss.forEach((m) => console.log('   ' + m)); }
if (apply) {
  if (miss.length) { console.log('存在未命中项，未写入'); }
  else { fs.writeFileSync(P, src); console.log('已写入 ' + P); }
}
