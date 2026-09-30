/**
 * 修正「同一单元内两个不同词条、中文释义一字不差」的问题
 *
 * 为什么这是缺陷：同一单元里出现 `Reservar 预订` 和 `La reserva 预订`，
 * 学习者无法从释义判断该用哪个；`Bañarse 洗澡` 与 `Ducharse 洗澡` 更是
 * 把两个不同的动作（泡澡 / 淋浴）说成同一件事。
 *
 * 处理原则（与语料既有惯例一致）：
 *   - 语料已有 73 条用**中文括号补充**区分（如 `菜单（正式）`、`公寓（拉美常用）`），
 *     本脚本沿用这一惯例，不另造格式。
 *   - 动词/名词同源的成对条目，用 `（动词）`/`（名词）` 标注词性。这是
 *     双语词典的通行做法，也确实是学习者需要的区分点。
 *   - 语义本来不同、只是当初译得含糊的（`Estación`/`La parada`、
 *     `Bañarse`/`Ducharse`、`Cine`/`Película`），直接改写成语义准确的释义，
 *     而不是加括号。
 *   - `Doble` 单独作"双人房"是错的，改为"双人的"。
 *   - `Odios` 是把动词变位 `odio`（我讨厌）当成名词录入了，直接删除。
 *
 * 用法: node tools/fix-gloss-collisions.mjs [--dry-run]
 */
import fs from 'node:fs';

const DRY = process.argv.includes('--dry-run');
const DATA = 'data/courses.js';
let src = fs.readFileSync(DATA, 'utf8');

// [单元id, 西语原文, 新释义]
const GLOSS = [
  // ---- 语义本来不同，改成准确的释义 ----
  ['a1-u5', 'Bañarse', '泡澡、沐浴'],
  ['a1-u5', 'Ducharse', '淋浴'],
  ['a1-u8', 'Estación', '火车站（Estación de tren）'],
  ['a1-u8', 'La parada', '公交车站'],
  ['a2-u8', 'Doble', '双人的'],
  ['b1-u1', 'Despedida', '告别、送别'],
  ['b1-u4', 'Cine', '电影院'],
  ['b1-u4', 'Película', '电影（影片）'],
  ['b1-u5', 'Musculatura', '肌肉组织（整体）'],
  ['b1-u5', 'El músculo', '肌肉（单块）'],
  ['b1-u7', 'Aguantar', '忍受、忍住'],
  ['b1-u7', 'Soportar', '容忍、承受'],
  ['c1-u1', 'Acuerdo', '协议（达成一致）'],
  ['c1-u1', 'El convenio', '协议（正式文书、集体协议）'],
  ['c1-u7', 'La perífrasis', '迂回表达（语法手段）'],
  ['c1-u7', 'El circunloquio', '迂回说法（绕圈子）'],

  // ---- 动词 / 名词同源：标词性 ----
  ['a2-u1', 'Invitación', '邀请（名词）'],
  ['a2-u1', 'Invitar', '邀请（动词）'],
  ['a2-u8', 'Reservar', '预订（动词）'],
  ['a2-u8', 'La reserva', '预订（名词）'],
  ['a2-u9', 'La cita', '预约（名词）'],
  ['a2-u9', 'Pedir cita', '预约（动词短语）'],
  ['a2-u15', 'La solicitud', '申请（名词）'],
  ['a2-u15', 'Solicitar', '申请（动词）'],
  ['a2-u15', 'El despido', '解雇（名词）'],
  ['a2-u15', 'Despedir', '解雇（动词）'],
  ['a2-u16', 'La transferencia', '转账（名词）'],
  ['a2-u16', 'Transferir', '转账（动词）'],
  ['a2-u16', 'El ahorro', '储蓄（名词）'],
  ['a2-u16', 'Ahorrar', '储蓄（动词）'],
  ['a2-u18', 'El entrenamiento', '训练（名词）'],
  ['a2-u18', 'Entrenar', '训练（动词）'],
  ['a2-u19', 'La invitación', '邀请（名词）'],
  ['a2-u19', 'Invitar a', '邀请（动词短语）'],
  ['a2-u19', 'La decoración', '装饰（名词）'],
  ['a2-u19', 'Decorar', '装饰（动词）'],
  ['b1-u5', 'Estiramiento', '拉伸（名词）'],
  ['b1-u5', 'Estirar', '拉伸（动词）'],
  ['b1-u7', 'La decepción', '失望（名词）'],
  ['b1-u7', 'Decepcionarse', '失望（动词）'],
  ['b1-u9', 'El suspenso', '不及格（名词）'],
  ['b1-u9', 'Suspender', '不及格（动词）'],
  ['b1-u10', 'La difusión', '传播（名词）'],
  ['b1-u10', 'Difundir', '传播（动词）'],
  ['b1-u10', 'La manipulación', '操纵（名词）'],
  ['b1-u10', 'Manipular', '操纵（动词）'],
  ['b1-u11', 'La conexión', '连接（名词）'],
  ['b1-u11', 'Conectar', '连接（动词）'],
  ['b1-u11', 'La actualización', '更新（名词）'],
  ['b1-u11', 'Actualizar', '更新（动词）'],
  ['b1-u12', 'La contaminación', '污染（名词）'],
  ['b1-u12', 'Contaminar', '污染（动词）'],
  ['b1-u12', 'El reciclaje', '回收（名词）'],
  ['b1-u12', 'Reciclar', '回收（动词）'],
  ['b1-u14', 'El ahorro', '储蓄（名词）'],
  ['b1-u14', 'Ahorrar', '储蓄（动词）'],
  ['b1-u14', 'La inversión', '投资（名词）'],
  ['b1-u14', 'Invertir', '投资（动词）'],
  ['b1-u15', 'El alojamiento', '住宿（名词）'],
  ['b1-u15', 'Alojarse', '住宿（动词）'],
  ['b1-u15', 'La reserva', '预订（名词）'],
  ['b1-u15', 'Reservar', '预订（动词）'],
  ['b2-u8', 'La reconciliación', '和解（名词）'],
  ['b2-u8', 'Reconciliarse', '和解（动词）'],
  ['b2-u8', 'La contención', '克制、制止（名词）'],
  ['b2-u8', 'Contener', '克制、遏制（动词）'],
  ['b2-u11', 'El ahorro', '储蓄（名词）'],
  ['b2-u11', 'Ahorrar', '储蓄（动词）'],
  ['b2-u11', 'La inversión', '投资（名词）'],
  ['b2-u11', 'Invertir', '投资（动词）'],
  ['b2-u12', 'Repuntar', '回升（动词）'],
  ['b2-u12', 'El repunte', '回升（名词）'],
  ['b2-u14', 'La prevención', '预防（名词）'],
  ['b2-u14', 'Prevenir', '预防（动词）'],
  ['c1-u2', 'Cita', '引用（名词）'],
  ['c1-u2', 'Citar', '引用（动词）'],
  ['c1-u11', 'La refutación', '驳斥（名词）'],
  ['c1-u11', 'Refutar', '驳斥（动词）'],
  ['c1-u11', 'La corroboración', '佐证（名词）'],
  ['c1-u11', 'Corroborar', '佐证（动词）'],
  ['c1-u12', 'El ajuste', '调整（名词）'],
  ['c1-u12', 'Ajustar', '调整（动词）'],
  ['c1-u16', 'La consolidación', '巩固（名词）'],
  ['c1-u16', 'Consolidar', '巩固（动词）'],
  ['c2-u1', 'Registros', '语域（复数）'],
  ['c2-u1', 'El registro', '语域（单数）'],
  ['c2-u14', 'La periodización', '分期（名词）'],
  ['c2-u14', 'Periodizar', '分期（动词）'],
];

// 需要整条删除的：[单元id, 西语原文, 原因]
const REMOVE = [
  ['a2-u4', 'Odios', '把动词变位 odio（我讨厌）当名词录入；同单元已有 Odio'],
];

/** 在源码里按 es 定位条目的字面文本 */
function locate(s, es, unitId) {
  const uStart = s.indexOf(`id:'${unitId}'`);
  if (uStart < 0) return null;
  const vStart = s.indexOf('vocab:[', uStart);
  const vEnd = s.indexOf('grammar:[', vStart);
  const region = s.slice(vStart, vEnd);
  const i = region.indexOf(`es:'${es}'`);
  if (i < 0) return null;
  const braceStart = region.lastIndexOf('{', i);
  const braceEnd = region.indexOf('}', i);
  if (braceStart < 0 || braceEnd < 0) return null;
  return { abs: vStart + braceStart, text: region.slice(braceStart, braceEnd + 1) };
}

/** 就地改写某条目的 zh 字段 */
function setZh(text, zh) {
  return text.replace(/zh:'[^']*'/, `zh:'${zh}'`);
}

const jobs = [];
let missGloss = 0, missRemove = 0;
for (const [uid, es, zh] of GLOSS) {
  const loc = locate(src, es, uid);
  if (!loc) { missGloss++; console.log(`  ⚠️ 未定位: ${uid} ${es}`); continue; }
  const to = setZh(loc.text, zh);
  if (to === loc.text) { console.log(`  ⚠️ 释义未变化: ${uid} ${es}`); continue; }
  jobs.push({ kind: 'edit', abs: loc.abs, text: loc.text, to, note: `${uid} ${es} → ${zh}` });
}
for (const [uid, es, why] of REMOVE) {
  const loc = locate(src, es, uid);
  if (!loc) { missRemove++; console.log(`  ⚠️ 未定位（删除）: ${uid} ${es}`); continue; }
  jobs.push({ kind: 'del', abs: loc.abs, text: loc.text, note: `${uid} ${es}（${why}）` });
}

console.log(`\n=== 同单元释义冲突修正（${DRY ? '试运行' : '写入'}）===`);
console.log(`  改写释义 ${jobs.filter((j) => j.kind === 'edit').length} 条 / 删除条目 ${jobs.filter((j) => j.kind === 'del').length} 条 / 未定位 改写${missGloss} 删除${missRemove}\n`);
for (const j of jobs.filter((j) => j.kind === 'del')) console.log(`  🗑  ${j.note}`);
for (const j of jobs.filter((j) => j.kind === 'edit').slice(0, 6)) console.log(`  ✏️  ${j.note}`);
if (jobs.filter((j) => j.kind === 'edit').length > 6) console.log(`  … 其余 ${jobs.filter((j) => j.kind === 'edit').length - 6} 条`);

if (DRY) { console.log('\n（试运行，未写入）'); process.exit(0); }

// 从后往前替换，位置在原始 src 上算好
jobs.sort((a, b) => b.abs - a.abs);
let applied = 0;
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
  applied++;
}
fs.writeFileSync(DATA, src);
console.log(`\n✅ 已写入 ${DATA}（改动 ${applied} 处）`);
