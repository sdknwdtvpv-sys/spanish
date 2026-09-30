/**
 * 内容数据完整性检查（防回归）。
 * 用法: node check-data.mjs <courses.js 路径>
 */
import fs from 'node:fs';

const path = process.argv[2];
const src = fs.readFileSync(path, 'utf8');
const d = new Function(src + '; return {COURSES, ALL_VOCAB, GRAMMAR_QUIZZES, LISTENING_PASSAGES, SPEAKING_SENTENCES, READING_PASSAGES};')();

let fail = 0;
const ok = (name, cond, detail = '') => {
  console.log(`  ${cond ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
  if (!cond) fail++;
};

console.log('=== 结构完整性 ===');
let holes = 0, emptyUnits = 0;
for (const [lv, l] of Object.entries(d.COURSES)) {
  const h = l.units.filter(u => !u || !u.id || !u.title).length;
  holes += h;
  if (!l.units.length) emptyUnits++;
}
ok('所有等级都有单元', emptyUnits === 0);
ok('units 数组无空位 / 无残缺单元', holes === 0, `空位=${holes}`);
ok('无孤立逗号（源码级）', (src.match(/\n\s*,\n/g) || []).length === 0,
   `命中=${(src.match(/\n\s*,\n/g) || []).length}`);

// 单元 id 唯一
const ids = [];
Object.values(d.COURSES).forEach(l => l.units.forEach(u => ids.push(u.id)));
ok('单元 id 全局唯一', new Set(ids).size === ids.length,
   `总数=${ids.length} 去重=${new Set(ids).size}`);

console.log('=== 词条质量 ===');
let noZh = 0, noEx = 0, emptyEs = 0, dupInUnit = 0, noVocab = 0;
Object.values(d.COURSES).forEach(l => l.units.forEach(u => {
  if (!u.vocab || !u.vocab.length) noVocab++;
  const seen = new Set();
  (u.vocab || []).forEach(w => {
    if (!w.es || !w.es.trim()) emptyEs++;
    if (!w.zh || !w.zh.trim()) noZh++;
    if (!w.example || !w.example.trim()) noEx++;
    const k = (w.es || '').trim().toLowerCase();
    if (seen.has(k)) dupInUnit++;
    seen.add(k);
  });
}));
ok('每个单元都有词汇', noVocab === 0, `无词汇单元=${noVocab}`);
ok('无空词条', emptyEs === 0, `空=${emptyEs}`);
ok('所有词条有中文释义', noZh === 0, `缺=${noZh}`);
ok('所有词条有例句', noEx === 0, `缺=${noEx}`);
ok('单元内无重复词', dupInUnit === 0, `重复=${dupInUnit}`);

console.log('=== 语法点 ===');
let noGrammar = 0, gNoTitle = 0, gNoDesc = 0;
Object.values(d.COURSES).forEach(l => l.units.forEach(u => {
  if (!u.grammar || !u.grammar.length) noGrammar++;
  (u.grammar || []).forEach(g => {
    if (!g.title || !g.title.trim()) gNoTitle++;
    if (!g.desc || !g.desc.trim()) gNoDesc++;
  });
}));
ok('每个单元都有语法点', noGrammar === 0, `缺=${noGrammar}`);
ok('语法点标题完整', gNoTitle === 0);
ok('语法点描述完整', gNoDesc === 0);

console.log('=== 语法题库 ===');
let badQ = 0, dupOpt = 0;
d.GRAMMAR_QUIZZES.forEach(s => s.questions.forEach(q => {
  if (!q.sentence || !Array.isArray(q.options) || q.options.length !== 4 ||
      typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3 || !q.explain) badQ++;
  if (new Set(q.options).size !== q.options.length) dupOpt++;
}));
ok('题目结构完整', badQ === 0, `异常=${badQ}`);
ok('选项无重复（答案唯一）', dupOpt === 0, `重复选项题=${dupOpt}`);

console.log('=== 听说语料 ===');
const lg = {}; d.LISTENING_PASSAGES.forEach(p => lg[p.level] = (lg[p.level] || 0) + 1);
const sg = {}; d.SPEAKING_SENTENCES.forEach(s => sg[s.level] = (sg[s.level] || 0) + 1);
ok('听力六级覆盖', Object.keys(lg).length === 6, JSON.stringify(lg));
ok('口语六级覆盖', Object.keys(sg).length === 6, JSON.stringify(sg));
let badListen = 0;
d.LISTENING_PASSAGES.forEach(p => {
  if (!p.level || !p.title || !p.es || !p.zh || !Array.isArray(p.keyVocab) || !Array.isArray(p.questions)) badListen++;
});
ok('听力段落字段完整', badListen === 0, `缺字段=${badListen}`);
let badSpeak = 0;
d.SPEAKING_SENTENCES.forEach(s => { if (!s.level || !s.es || !s.zh || !s.slow || !Array.isArray(s.vocab)) badSpeak++; });
ok('口语条目字段完整', badSpeak === 0, `缺字段=${badSpeak}`);

console.log('=== 精读语篇 ===');
const RP = d.READING_PASSAGES || [];
if (!RP.length) {
  ok('精读语篇存在', RP.length > 0, '尚无数据');
} else {
  let badP = 0, badPara = 0, badStruct = 0, badQ = 0, badGloss = 0;
  RP.forEach(p => {
    if (!p.level || !p.title || !p.topic || !p.minutes ||
        !Array.isArray(p.paragraphs) || !p.paragraphs.length ||
        !Array.isArray(p.glossary) || !p.glossary.length ||
        !Array.isArray(p.structures) || !p.structures.length ||
        !Array.isArray(p.questions) || !p.questions.length) badP++;
    (p.paragraphs || []).forEach(x => { if (!x.es || !x.zh) badPara++; });
    (p.glossary || []).forEach(x => { if (!x.es || !x.zh) badGloss++; });
    (p.structures || []).forEach(x => { if (!x.es || !x.note) badStruct++; });
    (p.questions || []).forEach(x => { if (!x.q || !x.a) badQ++; });
  });
  ok('语篇顶层字段完整', badP === 0, `异常=${badP}`);
  ok('段落中西文一一对应', badPara === 0, `缺=${badPara}`);
  ok('生词表字段完整', badGloss === 0, `缺=${badGloss}`);
  ok('长难句解析完整（原文+讲解）', badStruct === 0, `缺=${badStruct}`);
  ok('理解题完整（问+答）', badQ === 0, `缺=${badQ}`);
  const rl = {};
  RP.forEach(p => rl[p.level] = (rl[p.level] || 0) + 1);
  console.log('   精读语篇:', RP.length, '篇', JSON.stringify(rl));
}

console.log('=== 规模统计 ===');
const lvWords = {};
for (const [k, l] of Object.entries(d.COURSES)) lvWords[k] = l.units.reduce((a, u) => a + u.vocab.length, 0);
console.log('   总词数:', d.ALL_VOCAB.length, '| 各等级:', JSON.stringify(lvWords));
console.log('   单元数:', ids.length, '| 语法题:', d.GRAMMAR_QUIZZES.reduce((a, s) => a + s.questions.length, 0),
            '| 听力:', d.LISTENING_PASSAGES.length, '| 口语:', d.SPEAKING_SENTENCES.length);

console.log(fail === 0 ? '\n✅ 全部检查通过' : `\n❌ ${fail} 项检查失败`);
process.exit(fail ? 1 : 0);
