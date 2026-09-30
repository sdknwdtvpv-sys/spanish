#!/usr/bin/env node
/**
 * 复核覆盖率审计 —— 把"专业度"变成可测量的数字
 *
 * ── 为什么需要这个 ──
 * 自动化审计能保证「结构正确」（字段齐全、引用一致、无重复），
 * 但**不能保证「内容正确」**（语法讲对了吗？西语地道吗？）。
 * 后者只能由有资质的西语教师 / 母语者判断。
 *
 * 问题在于：如果不记录「谁在什么时候确认了哪一条」，
 * 「找人复核过」就永远是一句无法验证的话——项目做了一年，
 * 也没人说得清到底复核了百分之几、发现了多少错。
 *
 * 所以这里做三件事：
 *   1. 把**必须人工判断的内容**全部枚举出来，并按「讲错会教错人」的风险排序
 *   2. 与 `data/review-ledger.json`（复核台账）比对，算出**真实覆盖率**
 *   3. 算出**缺陷密度**（已复核条目里发现问题的比例），用于判断内容是否可信
 *
 * 台账为空时，覆盖率就是 0% —— 这是诚实的状态，不是失败。
 *
 * 用法: node scripts/audit-review-coverage.mjs [--by-category] [--list <category>]
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA = path.join(ROOT, 'data', 'courses.js');
const LEDGER = path.join(ROOT, 'data', 'review-ledger.json');

const args = process.argv.slice(2);
const BY_CATEGORY = args.includes('--by-category');
const LIST_IDX = args.indexOf('--list');
const LIST_CAT = LIST_IDX >= 0 ? args[LIST_IDX + 1] : null;

const src = fs.readFileSync(DATA, 'utf8');
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES,GRAMMAR_QUIZZES,READING_PASSAGES,ALL_VOCAB,COLLOCATIONS,LISTENING_PASSAGES,SPEAKING_SENTENCES};')(
  mod, mod.exports
);
const d = mod.exports;

/** 稳定 id：用内容哈希，内容改了则复核记录失效（这是刻意的） */
const crypto = await import('node:crypto');
const idOf = (kind, key) =>
  crypto.createHash('sha1').update(`${kind}|${key}`, 'utf8').digest('hex').slice(0, 12);

// ─────────────────────────────────────────────
// 收集「必须人工判断」的条目，按风险分层
// ─────────────────────────────────────────────
const items = [];
const add = (category, risk, id, label, why) => items.push({ category, risk, id, label, why });

// R1 最高风险：语法讲解（讲错 → 学习者内化成错误规则）
for (const lv of Object.values(d.COURSES)) {
  for (const u of lv.units) {
    for (const g of u.grammar || []) {
      // 绝对化断言单独标为 r1a（最容易讲错）
      const absolute = /必须|只能|不能用|一律|永远|绝不|不可|一定要/.test(g.desc || '');
      add(
        absolute ? 'grammar-absolute' : 'grammar-desc',
        absolute ? 'R1' : 'R2',
        idOf('gp', g.title),
        g.title,
        absolute ? '含绝对化断言，讲错即教错' : '语法规则讲解'
      );
    }
  }
}

// R1 语法题解析（解释错了同样教错）
for (const g of d.GRAMMAR_QUIZZES) {
  for (let i = 0; i < g.questions.length; i++) {
    const q = g.questions[i];
    const absolute = /必须|只能|不能用|一律|永远|绝不|不可/.test(q.explain || '');
    add(
      absolute ? 'quiz-absolute' : 'quiz-explain',
      absolute ? 'R1' : 'R2',
      idOf('q', g.topic + '|' + q.sentence),
      `${g.topic} · ${q.sentence.slice(0, 30)}`,
      absolute ? '解析含绝对化断言' : '题目解析'
    );
  }
}

// R2 精读长难句解析（写错 → 阅读理解错）
for (const p of d.READING_PASSAGES) {
  for (let i = 0; i < (p.structures || []).length; i++) {
    const s = p.structures[i];
    add('reading-structure', 'R2', idOf('rs', p.title + '|' + i), `${p.title} · 长难句${i + 1}`, '语法分析准确性');
  }
}

// R2 词汇释义与例句（释义错 → 用错词）
for (const lv of Object.values(d.COURSES)) {
  for (const u of lv.units) {
    for (const w of u.vocab || []) {
      add('vocab', 'R2', idOf('v', u.id + '|' + w.es), `${u.id} · ${w.es}`, '释义准确性与例句地道性');
    }
  }
}

// R3 精读全文翻译、搭配、听力/口语
for (const p of d.READING_PASSAGES) {
  add('reading-translation', 'R3', idOf('rt', p.title), `${p.title} · 全文翻译`, '中文翻译的信达雅');
}
for (const c of d.COLLOCATIONS) {
  add('collocation', 'R3', idOf('c', c.es || c.phrase || JSON.stringify(c).slice(0, 30)), `搭配 · ${(c.es || c.phrase || '').slice(0, 26)}`, '搭配地道性与语域');
}
for (const p of d.LISTENING_PASSAGES) {
  add('listening', 'R3', idOf('l', p.title), `听力 · ${p.title}`, '对话自然度与语速');
}
for (const s of d.SPEAKING_SENTENCES) {
  add('speaking', 'R3', idOf('s', s.es), `口语 · ${s.es.slice(0, 26)}`, '句子自然度与可跟读性');
}

// ─────────────────────────────────────────────
// 与台账比对
// ─────────────────────────────────────────────
let ledger = {};
if (fs.existsSync(LEDGER)) {
  try { ledger = JSON.parse(fs.readFileSync(LEDGER, 'utf8')); } catch (e) {
    console.error('⚠️ 台账解析失败，按空台账处理：', e.message);
  }
}

const counts = {};
for (const it of items) {
  const rec = ledger[it.id];
  it.status = rec ? (rec.verdict || 'ok') : 'unreviewed';
  const k = `${it.risk}|${it.category}`;
  counts[k] = counts[k] || { total: 0, reviewed: 0, issues: 0 };
  counts[k].total++;
  if (rec) {
    counts[k].reviewed++;
    if (rec.verdict === 'issue' || rec.verdict === 'fixed') counts[k].issues++;
  }
}

const total = items.length;
const reviewed = items.filter((i) => i.status !== 'unreviewed').length;
const issues = items.filter((i) => i.status === 'issue' || i.status === 'fixed').length;

console.log('\n══════ 复核覆盖率（专业度可测量化）══════');
console.log(`  必须人工判断的条目总计: ${total}`);
console.log(`  已复核: ${reviewed}  (${total ? ((reviewed / total) * 100).toFixed(1) : '0.0'}%)`);
console.log(`  已确认有问题: ${issues}`);
console.log(`  缺陷密度: ${reviewed ? ((issues / reviewed) * 100).toFixed(1) : '—'}%（已复核条目中出错比例）`);
console.log(`  台账文件: ${fs.existsSync(LEDGER) ? path.relative(ROOT, LEDGER) : '（尚无，覆盖率按 0 计）'}`);

const BY_RISK = { R1: 'P0 讲错即教错', R2: 'P1 影响正确性', R3: 'P2 地道性/语域' };
console.log('\n按风险层与类别：');
for (const risk of ['R1', 'R2', 'R3']) {
  const rows = Object.entries(counts).filter(([k]) => k.startsWith(risk + '|'));
  if (!rows.length) continue;
  const rt = rows.reduce((s, [, v]) => s + v.total, 0);
  const rr = rows.reduce((s, [, v]) => s + v.reviewed, 0);
  const ri = rows.reduce((s, [, v]) => s + v.issues, 0);
  console.log(`\n  【${risk}】${BY_RISK[risk]}  — 小计 ${rt} 条 / 已复核 ${rr} (${rt ? ((rr / rt) * 100).toFixed(0) : 0}%) / 发现问题 ${ri}`);
  for (const [k, v] of rows.sort((a, b) => b[1].total - a[1].total)) {
    const cat = k.split('|')[1];
    const pct = v.total ? ((v.reviewed / v.total) * 100).toFixed(0) : 0;
    console.log(`    ${cat.padEnd(22)} 共 ${String(v.total).padStart(4)}  已复核 ${String(v.reviewed).padStart(4)} (${pct.padStart(3)}%)  问题 ${v.issues}`);
  }
}

if (LIST_CAT) {
  const list = items.filter((i) => i.category === LIST_CAT);
  console.log(`\n──── 待复核清单：${LIST_CAT}（${list.filter((i) => i.status === 'unreviewed').length} 条未复核）────`);
  list.filter((i) => i.status === 'unreviewed').slice(0, 40).forEach((i) => {
    console.log(`  [${i.risk}] ${i.id}  ${i.label}`);
  });
  if (list.length > 40) console.log(`  … 其余 ${list.length - 40} 条用 --export 导出`);
}

// 退出码反映覆盖率状态（便于接入 CI）
process.exit(0);
