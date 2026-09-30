/**
 * 内容缺口审计 —— 补上主审计脚本未覆盖的几类内容
 *
 * 主脚本 audit-content.mjs 重点在词汇与交叉引用；
 * 这个脚本专门查：
 *   G. 语法点 ↔ 语法题库的覆盖关系（208 个语法点 vs 21 个题库主题）
 *   H. 语法题解析（explain）的完整性与自洽
 *   I. 成就定义的完整性与数值合理性
 *   J. 社区帖字段与明显语言错误
 *   K. 搭配字段与等级分布
 *
 * 用法: node scripts/audit-gaps.mjs data/courses.js
 */
import fs from 'node:fs';
import { grammarPointCovered, isExemptFromQuiz } from './grammar-coverage.mjs';

const file = process.argv[2] || 'data/courses.js';
const src = fs.readFileSync(file, 'utf8');
const mod = { exports: {} };
new Function('module', 'exports', src + '\nmodule.exports={COURSES,READING_PASSAGES,COLLOCATIONS,GRAMMAR_QUIZZES,SPEAKING_SENTENCES,LISTENING_PASSAGES,ACHIEVEMENTS,COMMUNITY_POSTS,ALL_VOCAB};')(mod, mod.exports);
const d = mod.exports;

const findings = [];
const add = (sev, layer, msg, samples = []) => findings.push({ sev, layer, msg, samples });
const norm = (s) => (s || '').trim().toLowerCase();

console.log('=== G. 语法点 ↔ 语法题库 覆盖关系 ===');
{
  const units = Object.values(d.COURSES).flatMap((l) => l.units);
  const points = units.flatMap((u) => (u.grammar || []).map((g) => g.title));

  // G1. 语法点标题重复（同一知识点在多单元以不同标题出现）
  const byTitle = new Map();
  points.forEach((t) => byTitle.set(t, (byTitle.get(t) || 0) + 1));
  const dupPoints = [...byTitle.entries()].filter(([, n]) => n > 1);
  console.log(`  语法点总数 ${points.length} / 去重后 ${byTitle.size} / 重名 ${dupPoints.length} 个`);
  if (dupPoints.length) {
    add('P1', 'G', `语法点标题有 ${dupPoints.length} 个在多单元重复出现（可能是同一知识点反复讲授）`,
      dupPoints.slice(0, 10).map(([t, n]) => `"${t}" ×${n}`));
  }

  // G2. 题库主题之间的重复（同一知识点两套译名/两种写法）
  const topics = d.GRAMMAR_QUIZZES.map((s) => s.topic);
  const topicKey = (t) => norm(t)
    .replace(/[（(][^）)]*[）)]/g, '')
    .replace(/\bvs\.?\b/g, 'vs')
    .replace(/[\s_\-—]/g, '');
  const groups = new Map();
  topics.forEach((t, i) => {
    // 同时用「去掉括号后的键」和「括号内的西语名」两种键归并
    const inner = (/[（(]([^）)]*)[）)]/.exec(t) || [])[1] || '';
    const keys = [topicKey(t)];
    if (inner) keys.push(topicKey(inner));
    // 西语主题名也归一化后加入。
    // 但剥掉中文后剩下的串可能只剩两三个字母（如「表「学习/研究」的动词搭配」
    // 剥完只剩「x7F 」，会与不相干的主题撞键），故要求至少 6 个字符才作为键。
    const asciiOnly = topicKey(t.replace(/[^\x00-\x7F]/g, ' '));
    if (asciiOnly.length >= 6) keys.push(asciiOnly);
    keys.forEach((k) => {
      if (!k) return;
      if (!groups.has(k)) groups.set(k, new Set());
      groups.get(k).add(i);
    });
  });
  const dupTopics = [];
  const seenPair = new Set();
  for (const [, idxs] of groups) {
    const arr = [...idxs];
    if (arr.length < 2) continue;
    const key = arr.sort().join(',');
    if (seenPair.has(key)) continue;
    seenPair.add(key);
    dupTopics.push(arr.map((i) => topics[i]));
  }
  console.log(`  题库主题 ${topics.length} 个 / 疑似重复 ${dupTopics.length} 组`);
  if (dupTopics.length) {
    add('P1', 'G', `语法题库有 ${dupTopics.length} 组主题疑似同一知识点（中文名与西语名各建一套）`,
      dupTopics.map((g) => g.join('  ‖  ')));
  }

  // G3. 语法点是否被题库覆盖
  //     用显式别名映射，而不是标题字符串匹配：语法点标题是知识点描述
  //     （「动词 ser · 现在时」），题库主题是分类名（「Ser 的变位与用法」），
  //     字面几乎不会相同，直接比字符串会得出无法行动的错误结论。
  const allPoints = [...byTitle.keys()];
  // 分三类：已覆盖 / 已判定不出题（附理由）/ 真正待补
  const exempt = allPoints.filter((t) => !grammarPointCovered(t, topics) && isExemptFromQuiz(t));
  const uncovered = allPoints.filter((t) => !grammarPointCovered(t, topics) && !isExemptFromQuiz(t));
  console.log(`  语法点被题库覆盖 ${allPoints.length - uncovered.length - exempt.length} / ${allPoints.length}`
    + `（另 ${exempt.length} 个已判定不出选择题，见 grammar-coverage.mjs 的 POINTS_WITHOUT_QUIZ）`);
  if (uncovered.length) {
    const byLv = {};
    Object.values(d.COURSES).forEach((l) => l.units.forEach((u) =>
      (u.grammar || []).forEach((g) => {
        if (uncovered.includes(g.title)) byLv[l.level] = (byLv[l.level] || 0) + 1;
      })));
    add('P2', 'G', `有 ${uncovered.length} 个语法点在题库中找不到对应主题（按等级：${JSON.stringify(byLv)}）`,
      uncovered.slice(0, 12));
  }
}

console.log('');
console.log('=== H. 语法题解析（explain） ===');
{
  let noExplain = 0, shortExplain = 0, badAnswer = 0, dupStem = 0, zhMissing = 0, noStem = 0;
  const stems = new Map();
  // 注意：题库存在两种题干字段 —— q（问句）与 sentence（填空句）。
  // 实测 308 题全部用 sentence；只认 q 会把全部题误判为「无题干」。
  const stemOf = (q) => (q.sentence || q.q || '').trim();
  d.GRAMMAR_QUIZZES.forEach((s) => s.questions.forEach((q) => {
    if (!q.explain) noExplain++;
    else if (q.explain.trim().length < 12) shortExplain++;
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= (q.options || []).length) badAnswer++;
    if (!/[\u4e00-\u9fa5]/.test(q.explain || '')) zhMissing++;
    const raw = stemOf(q);
    if (!raw) noStem++;
    const k = norm(raw).replace(/\s+/g, '');
    if (k) { if (!stems.has(k)) stems.set(k, 0); stems.set(k, stems.get(k) + 1); }
  }));
  dupStem = [...stems.values()].filter((n) => n > 1).length;
  console.log(`  总题数 ${d.GRAMMAR_QUIZZES.reduce((a, s) => a + s.questions.length, 0)}`);
  console.log(`  缺解析 ${noExplain} / 解析过短 ${shortExplain} / 解析无中文 ${zhMissing}`);
  console.log(`  答案索引越界 ${badAnswer} / 题干重复 ${dupStem} / 无题干 ${noStem}`);
  if (noExplain) add('P0', 'H', `有 ${noExplain} 道语法题缺解析`, []);
  if (zhMissing) add('P0', 'H', `有 ${zhMissing} 道语法题的解析里没有中文（学习者看不懂）`, []);
  if (shortExplain) add('P2', 'H', `有 ${shortExplain} 道语法题解析过短（少于 12 字，讲不清楚）`, []);
  if (badAnswer) add('P0', 'H', `有 ${badAnswer} 道语法题的正确答案索引越界`, []);
  if (noStem) add('P0', 'H', `有 ${noStem} 道语法题既无 q 也无 sentence 题干`, []);
  if (dupStem) add('P1', 'H', `有 ${dupStem} 道语法题题干与其他题完全重复`, []);
}

console.log('');
console.log('=== I. 成就定义 ===');
{
  const ids = new Set(), titles = new Set();
  let dupId = [], dupTitle = [], badPts = [], noDesc = [];
  d.ACHIEVEMENTS.forEach((a) => {
    if (ids.has(a.id)) dupId.push(a.id); ids.add(a.id);
    if (titles.has(a.title)) dupTitle.push(a.title); titles.add(a.title);
    // 积分数值是设计刻度：里程碑成就（百词斩/百日筑基）本就远高于日常成就，
    // 只校验数值合法性，不设上限阈值
    if (typeof a.points !== 'number' || !Number.isFinite(a.points) || a.points <= 0) badPts.push(`${a.title}=${a.points}`);
    if (!a.desc || a.desc.trim().length < 4) noDesc.push(a.title);
  });
  console.log(`  成就 ${d.ACHIEVEMENTS.length} 个 / 重复 id ${dupId.length} / 重复标题 ${dupTitle.length}`);
  const pts = d.ACHIEVEMENTS.map((a) => a.points).sort((x, y) => x - y);
  console.log(`  积分数值非法 ${badPts.length} / 描述缺失 ${noDesc.length} / 积分区间 ${pts[0]}–${pts[pts.length - 1]}`);
  if (dupId.length) add('P1', 'I', `成就 id 重复：${dupId.join(', ')}`);
  if (dupTitle.length) add('P2', 'I', `成就标题重复：${dupTitle.join(', ')}`);
  if (badPts.length) add('P1', 'I', `成就积分异常：${badPts.join(', ')}`);
  if (noDesc.length) add('P2', 'I', `成就描述缺失：${noDesc.join(', ')}`);
}

console.log('');
console.log('=== J. 社区帖 ===');
{
  const issues = [];
  d.COMMUNITY_POSTS.forEach((p) => {
    ['id', 'author', 'avatar', 'level', 'time', 'content', 'likes', 'comments', 'tags'].forEach((f) => {
      if (p[f] === undefined || p[f] === null || p[f] === '') issues.push(`${p.id} 缺 ${f}`);
    });
    if (!/[\u4e00-\u9fa5]/.test(p.content || '')) issues.push(`${p.id} 内容无中文`);
    if (!/^(A1|A2|B1|B2|C1|C2)$/.test(p.level || '')) issues.push(`${p.id} level 非法: ${p.level}`);
    // 明显的用词错误：讨论习语/表达时却用了 idiomas（语言）
    if (/idiomas?\b/i.test(p.content) && /(表达|习语|俚语|说法|短语)/.test(p.content))
      issues.push(`${p.id} 讨论「表达/习语」却用了 idiomas（语言），应为 modismos / expresiones`);
  });
  console.log(`  社区帖 ${d.COMMUNITY_POSTS.length} 篇 / 字段或内容问题 ${issues.length} 处`);
  if (issues.length) add('P1', 'J', `社区帖有 ${issues.length} 处字段或语言问题`, issues);
}

console.log('');
console.log('=== K. 搭配 ===');
{
  const seen = new Map();
  let noZh = 0, noEx = 0, badLv = 0, shortEx = 0;
  d.COLLOCATIONS.forEach((c, i) => {
    if (!c.zh) noZh++;
    if (!c.example) noEx++;
    else if (c.example.trim().split(/\s+/).length < 3) shortEx++;
    if (!/^(A1|A2|B1|B2|C1|C2)$/.test(c.level || '')) badLv++;
    const k = norm(c.pattern);
    if (k) { if (!seen.has(k)) seen.set(k, []); seen.get(k).push(c.level); }
  });
  const dup = [...seen.entries()].filter(([, v]) => v.length > 1);
  const lv = {};
  d.COLLOCATIONS.forEach((c) => { lv[c.level] = (lv[c.level] || 0) + 1; });
  console.log(`  搭配 ${d.COLLOCATIONS.length} 条 / 等级分布 ${JSON.stringify(lv)}`);
  console.log(`  缺中文 ${noZh} / 缺例句 ${noEx} / 例句过短 ${shortEx} / level 非法 ${badLv} / 重复搭配 ${dup.length}`);
  if (noZh || noEx || badLv) add('P0', 'K', `搭配存在缺字段：中文 ${noZh} / 例句 ${noEx} / 非法等级 ${badLv}`);
  if (shortEx) add('P2', 'K', `有 ${shortEx} 条搭配例句过短`);
  if (dup.length) add('P1', 'K', `有 ${dup.length} 条搭配在不同等级重复出现`,
    dup.slice(0, 10).map(([k, v]) => `"${k}" ×${v.length}（${v.join('/')}）`));
}

console.log('');
console.log('========================================');
console.log('  缺口审计结果');
console.log('========================================');
const order = { P0: 0, P1: 1, P2: 2 };
findings.sort((a, b) => order[a.sev] - order[b.sev]);
for (const sev of ['P0', 'P1', 'P2']) {
  const list = findings.filter((f) => f.sev === sev);
  const label = sev === 'P0' ? '会教错人（必须修）' : sev === 'P1' ? '影响质量（应修）' : '体例问题（可选）';
  console.log(`\n【${sev}】${label} — ${list.length} 项`);
  list.forEach((f) => {
    console.log(`  [${f.layer}] ${f.msg}`);
    f.samples.slice(0, 8).forEach((s) => console.log(`        · ${s}`));
    if (f.samples.length > 8) console.log(`        … 另有 ${f.samples.length - 8} 条`);
  });
}
const c = { P0: 0, P1: 0, P2: 0 };
findings.forEach((f) => c[f.sev]++);
console.log(`\n合计：P0 ${c.P0} 项 / P1 ${c.P1} 项 / P2 ${c.P2} 项`);
