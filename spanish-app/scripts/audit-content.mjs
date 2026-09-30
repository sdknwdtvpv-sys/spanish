/**
 * Lingua 内容审计脚本
 * 用法: node audit-content.mjs <courses.js 路径>
 *
 * 分层检查：
 *   A 结构完整性
 *   B 交叉引用一致性
 *   C 内容严谨性（类型错配 / 例句缺失 / 中英对应）
 *   D 教学一致性
 *   E CEFR 难度错配
 *   F 需要人工/母语者复核的疑点清单
 */
import fs from 'node:fs';
import { exampleCoversTerm, stemsOf, stripAccents as stripAcc } from './spanish-morphology.mjs';

const path = process.argv[2];
const src = fs.readFileSync(path, 'utf8');
const d = new Function(src + `; return {
  COURSES, ALL_VOCAB, GRAMMAR_QUIZZES, LISTENING_PASSAGES,
  SPEAKING_SENTENCES, READING_PASSAGES, COLLOCATIONS, ACHIEVEMENTS, COMMUNITY_POSTS
};`)();

const findings = [];
const review = [];   // 需母语者复核的疑点
const add = (sev, cat, msg, detail) => findings.push({ sev, cat, msg, detail });
const flag = (cat, msg, detail) => review.push({ cat, msg, detail });

// ---------- 工具 ----------
const norm = s => (s || '').trim().toLowerCase();
const stripAccents = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelIdx = l => LEVELS.indexOf(l);

// 词条类型识别：明显不是「单词」的（语法结构、整句、含动词变位说明等）
const STRUCTURE_PATTERNS = [
  /\+\s*名词/, /\+\s*动词/, /\+\s*形容词/, /\+\s*不定式/,
  /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+\s*\+\s*/,          // 如 "Gustar + 名词"
  /句式/, /结构/, /变位/, /时$/, /式$/,
  /^(yo|tú|él|ella|nosotros|vosotros|ellos)\s/i,
];

// ============================================================
console.log('========================================');
console.log('  Lingua 内容审计');
console.log('========================================\n');

// ---------- A 结构完整性 ----------
console.log('── A. 结构完整性 ──');
{
  let noZh = 0, noEx = 0, noEs = 0, shortEx = 0, sameZhEs = 0;
  const exOf = new Map();     // 例句 -> [词条]
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    if (!w.es || !w.es.trim()) noEs++;
    if (!w.zh || !w.zh.trim()) noZh++;
    if (!w.example || !w.example.trim()) noEx++;
    else {
      if (w.example.trim().length < 5) shortEx++;
      const k = norm(w.example);
      if (!exOf.has(k)) exOf.set(k, []);
      exOf.get(k).push(u.id + '/' + w.es);
    }
    if (w.es && w.zh && norm(w.es) === norm(w.zh)) sameZhEs++;
  })));
  if (noEs) add('P0', 'A', `有 ${noEs} 个词条缺少西语原文`);
  if (noZh) add('P0', 'A', `有 ${noZh} 个词条缺少中文释义`);
  if (noEx) add('P1', 'A', `有 ${noEx} 个词条缺少例句`);
  if (shortEx) add('P2', 'A', `有 ${shortEx} 个例句过短（<5 字符）`);
  if (sameZhEs) add('P1', 'A', `有 ${sameZhEs} 个词条的中文释义与西语原文完全相同`);

  // 例句跨词条重复。
  // 判据：只有「不同单元」的不同词条共用同一例句才算缺陷——那通常是从别处复制过来的。
  // 同一单元内部共用（Domingo/El domingo、Buenos días/Señor）是**教学设计**：
  // 配套词共用一句自然语境比硬造两句更利于学习。按单元归属区分，而不是按字号。
  const dupEx = [];
  let sameUnitEx = 0;
  [...exOf.entries()].forEach(([ex, v]) => {
    if (v.length < 2) return;
    const words = [...new Set(v.map((x) => x.split('/')[1]))];
    if (words.length < 2) return;
    if (new Set(v.map((x) => x.split('/')[0])).size > 1) dupEx.push([ex, v]);
    else sameUnitEx++;
  });
  if (dupEx.length) {
    add('P1', 'A', `有 ${dupEx.length} 条例句被「不同单元」的词条共用（多为复制粘贴残留）`,
      dupEx.slice(0, 8).map(([ex, v]) => `"${ex.slice(0, 40)}…" → ${v.join(', ')}`));
  }
  console.log(`  词条 ${d.ALL_VOCAB.length}：缺西语 ${noEs} / 缺中文 ${noZh} / 缺例句 ${noEx} / 例句过短 ${shortEx} / 中西文相同 ${sameZhEs}`);
  console.log(`  跨单元共用例句 ${dupEx.length} 组 / 同单元共用 ${sameUnitEx} 组（配套词设计如此，不计为缺陷）`);
}

// 语法题
{
  let bad = 0, dupOpt = 0, noExp = 0, ansNotIn = 0, blank = 0, shortExp = 0;
  const allQ = [];
  d.GRAMMAR_QUIZZES.forEach(s => s.questions.forEach(q => {
    allQ.push({ topic: s.topic, ...q });
    if (!q.sentence || !Array.isArray(q.options) || q.options.length !== 4) bad++;
    if (new Set(q.options.map(norm)).size !== 4) dupOpt++;
    if (!q.explain || !q.explain.trim()) noExp++;
    else if (q.explain.trim().length < 6) shortExp++;
    if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) ansNotIn++;
    if (!/_{2,}/.test(q.sentence)) blank++;
  }));
  if (bad) add('P0', 'A', `有 ${bad} 道语法题结构异常（选项数≠4 或缺句子）`);
  if (dupOpt) add('P0', 'A', `有 ${dupOpt} 道语法题选项重复（答案不唯一）`);
  if (noExp) add('P1', 'A', `有 ${noExp} 道语法题缺少解析`);
  if (ansNotIn) add('P0', 'A', `有 ${ansNotIn} 道语法题 correct 索引越界`);
  if (blank) add('P1', 'A', `有 ${blank} 道语法题的题干没有填空位（___）`);
  if (shortExp) add('P2', 'A', `有 ${shortExp} 道语法题解析过短（<6 字符）`);
  // 同一题干重复
  const sentCount = new Map();
  allQ.forEach(q => sentCount.set(norm(q.sentence), (sentCount.get(norm(q.sentence)) || 0) + 1));
  const dupSent = [...sentCount.entries()].filter(([, c]) => c > 1);
  if (dupSent.length) add('P2', 'A', `有 ${dupSent.length} 道语法题题干重复`, dupSent.slice(0, 5).map(([s]) => s.slice(0, 40)));
  console.log(`  语法题 ${allQ.length}：结构异常 ${bad} / 选项重复 ${dupOpt} / 缺解析 ${noExp} / 索引越界 ${ansNotIn} / 无填空位 ${blank} / 题干重复 ${dupSent.length}`);
}

// 听力
{
  let bad = 0, noQ = 0, shortEs = 0, zhLineMismatch = 0;
  d.LISTENING_PASSAGES.forEach((p, i) => {
    if (!p.level || !p.title || !p.es || !p.zh || !Array.isArray(p.keyVocab) || !Array.isArray(p.questions)) bad++;
    if (!p.questions || !p.questions.length) noQ++;
    if (p.es && p.es.length < 100) shortEs++;
    // 中西文行数应大致对应（对话逐行翻译）
    const esLines = (p.es || '').split('\n').filter(l => l.trim()).length;
    const zhLines = (p.zh || '').split('\n').filter(l => l.trim()).length;
    if (esLines !== zhLines) zhLineMismatch++;
  });
  if (bad) add('P0', 'A', `有 ${bad} 段听力缺少必需字段`);
  if (noQ) add('P1', 'A', `有 ${noQ} 段听力没有理解题`);
  if (zhLineMismatch) add('P1', 'A', `有 ${zhLineMismatch} 段听力的中西文行数不一致（翻译可能漏行）`);
  // 听力标题不得重复：同名的两段材料会让学习者在列表里分不清，
  // 而且通常是「同一话题写了两遍」。实测曾出现两处（B1 内同名、A2/B1 同名）。
  const titleCount = new Map();
  d.LISTENING_PASSAGES.forEach((p) => titleCount.set(p.title, (titleCount.get(p.title) || 0) + 1));
  const dupTitles = [...titleCount].filter(([, n]) => n > 1);
  if (dupTitles.length) {
    add('P1', 'A', `有 ${dupTitles.length} 组听力材料标题重复`, dupTitles.map(([t, n]) => `"${t}" ×${n}`));
  }
  console.log(`  听力 ${d.LISTENING_PASSAGES.length}：缺字段 ${bad} / 无题 ${noQ} / 中西文行数不符 ${zhLineMismatch} / 标题重复 ${dupTitles.length}`);
  d.LISTENING_PASSAGES.forEach((p, i) => {
    const esLines = (p.es || '').split('\n').filter(l => l.trim()).length;
    const zhLines = (p.zh || '').split('\n').filter(l => l.trim()).length;
    if (esLines !== zhLines) flag('听力翻译', `[${p.level}] ${p.title}：西语 ${esLines} 行 / 中文 ${zhLines} 行`);
  });
}

// 口语
{
  let bad = 0, noSlow = 0, slowNotMatch = 0, shortSlow = 0;
  d.SPEAKING_SENTENCES.forEach(s => {
    if (!s.level || !s.es || !s.zh || !Array.isArray(s.vocab) || !s.vocab.length) bad++;
    if (!s.slow || !s.slow.trim()) noSlow++;
    else {
      // slow 版应保留原文的词序（去掉省略号与空格后可比对）
      const strip = t => stripAccents(t).replace(/[…\.\,\?\!¿¡]/g, '').replace(/\s+/g, '').toLowerCase();
      if (strip(s.slow) !== strip(s.es)) slowNotMatch++;
      if (s.slow.length < s.es.length * 0.6) shortSlow++;
    }
  });
  if (bad) add('P0', 'A', `有 ${bad} 条口语缺少必需字段`);
  if (noSlow) add('P1', 'A', `有 ${noSlow} 条口语缺少慢速版`);
  if (slowNotMatch) add('P1', 'A', `有 ${slowNotMatch} 条口语的「慢速版」与原文词序不一致（可能漏词或改写）`);
  console.log(`  口语 ${d.SPEAKING_SENTENCES.length}：缺字段 ${bad} / 无慢速版 ${noSlow} / 慢速版与原文不符 ${slowNotMatch}`);
}

// 精读
{
  let bad = 0, paraMismatch = 0, noGloss = 0;
  d.READING_PASSAGES.forEach(p => {
    if (!p.level || !p.title || !p.topic || !Array.isArray(p.paragraphs) || !p.paragraphs.length) bad++;
    const esN = (p.paragraphs || []).filter(x => x.es).length;
    const zhN = (p.paragraphs || []).filter(x => x.zh).length;
    if (esN !== zhN) paraMismatch++;
    if (!p.glossary || !p.glossary.length) noGloss++;
  });
  if (bad) add('P0', 'A', `有 ${bad} 篇精读缺少必需字段`);
  if (paraMismatch) add('P1', 'A', `有 ${paraMismatch} 篇精读的段落中西文数量不一致`);
  console.log(`  精读 ${d.READING_PASSAGES.length}：缺字段 ${bad} / 段落不符 ${paraMismatch} / 无生词表 ${noGloss}`);
}

console.log('');

// ---------- B 交叉引用 ----------
console.log('── B. 交叉引用一致性 ──');
{
  // 1. 词库中所有西语词（用于校验「重点词汇」是否真实存在）
  //    比对时去掉重音：learning 材料的标注未必带重音，带不带重音是同一个词，
  //    不去重音会把 "profesion" 与 "profesión" 判成两个词，虚增缺口。
  const stripAcc = (x) => (x || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // 比对词条时要做三件事：去冠词、去重音、统一小写。
  // 本文件的 norm() 只做 trim+lowercase（其他检查依赖它保持原样），
  // 所以这里单独处理冠词 —— 否则词库的 "El semáforo" 匹配不上材料里的 "Semáforo"。
  const stripArticle = (x) => norm(x).replace(/^(el|la|los|las|un|una|unos|unas)\s+/, '');
  const key = (x) => stripAcc(stripArticle(x));
  // 已人工逐条核实、**不应按词条收录**的听说关键词。
  // 每轮扩充后审计都会重新报出这些串；逐条核实过它们全是屈折形式、专名或虚词，
  // 列成白名单并写明理由，避免审计长期挂着无法消除的告警（同 POLYSEMY_OK 的做法）。
  // 新增条目必须写明「为什么不该入库」。
  const NON_LEXEME_OK = new Map([
    // —— 动词变位形（词库收原形，变位由语法规则生成）——
    ['compré', 'comprar 的简单过去时第一人称'],
    ['decidimos', 'decidir 的简单过去时第一人称复数'],
    ['escribieras', 'escribir 的虚拟式过去时第二人称'],
    ['insistiera', 'insistir 的虚拟式过去时第三人称'],
    ['insistas', 'insistir 的虚拟式现在时第二人称'],
    ['saldremos', 'salir 的简单将来时第一人称复数'],
    ['convendría', 'convenir 的条件式'],
    ['participen', 'participar 的虚拟式现在时第三人称复数'],
    ['innovadores', 'innovador 的阳性复数形式'],
    ['inflamada', 'inflamado 的阴性单数形式'],
    ['proporcionado', 'proporcionar 的过去分词'],
    // —— 原形 + 附着代词（不是独立词条）——
    ['conocerte', 'conocer + 代词 te'],
    ['avísame', 'avisar 的命令式 + 代词 me'],
    ['probársela', 'probar + 代词 se + la'],
    ['Síganme', 'seguir 的命令式 + 代词 me（整句形式）'],
    // —— 专有名词与虚词 ——
    ['Almodóvar', '专有名词（导演姓氏）'],
    ['Aunque', '功能词，已在语法点「让步与转折连接词」中讲解'],
    ['agravar', 'agravar 的变位形（材料中作 lo agrava），原形已在词库'],
    ['desayuno', 'desayunar/desayuno 的变位或名词形式，均在词库'],
    ['Conviene', 'convenir 的第三人称变位，词库已收 la conveniencia'],
    ['impecablemente', 'impecable 派生的副词，词库已收形容词'],
    ['¿Diga?', '接电话的固定用语（功能表达），非词条'],
  ]);

  const vocabSet = new Set();
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => vocabSet.add(key(w.es)))));

  // 缺口要区分「单词」与「短语」：短语（如 "Una mesa para dos"）是听说材料里
  // 的表达，本来就不该按词条入库；只有单词查不到才是真缺口。
  // 参考：按单元结束（b2-u12 / c1-u14 / c2-u11）。
  const isPhrase = (x) => norm(x).split(/\s+/).length > 1;
  const splitMissing = (list) => ({
    words: list.filter((x) => !isPhrase(x.raw)),
    phrases: list.filter((x) => isPhrase(x.raw)),
  });

  let listenMissing = [];
  d.LISTENING_PASSAGES.forEach(p => (p.keyVocab || []).forEach(kv => {
    if (!vocabSet.has(key(kv.es))) listenMissing.push({ raw: kv.es, label: `[${p.level}] ${p.title} → "${kv.es}"` });
  }));

  let speakMissing = [];
  d.SPEAKING_SENTENCES.forEach(s => (s.vocab || []).forEach(v => {
    if (!vocabSet.has(key(v))) speakMissing.push({ raw: v, label: `[${s.level}] "${v}"` });
  }));

  // 只做能**可靠**判断的统计，不再自动判定「哪些串该按词条收录」。
  //
  // 试过三种启发式（词尾、派生后缀、词干比对），每一种都会误判：
  //   - 按词尾：sincera / innovadoras 这类正常形容词被判成变位形
  //   - 按词干：decidir 不在词库时，decidimos 被判成内容词（其实是变位形）
  // 同一份数据三套规则给出三个不同数字，说明这类判断不适合自动化。
  // 因此这里只统计「去重后的非短语串」并**如实列出**，供人工逐条判定——
  // 这比给出一个看起来精确、实际是错的「内容词 0」更诚实。
  const uniqueRaw = (list) => [...new Map(list.map((x) => [x.raw.trim(), x])).values()];
  const report = (name, list) => {
    const uniq = uniqueRaw(list);
    const phrases = uniq.filter((x) => norm(x.raw).split(/\s+/).length > 1);
    const words = uniq.filter((x) => !phrases.includes(x));
    const known = words.filter((x) => NON_LEXEME_OK.has(x.raw.trim()));
    const pending = words.filter((x) => !NON_LEXEME_OK.has(x.raw.trim()));
    console.log(`  ${name}未入库：去重 ${uniq.length} 条 = 短语 ${phrases.length}（表达，不入词库）`
      + ` + 已核实不入库 ${known.length}（屈折形/专名/虚词）`
      + ` + 待判定 ${pending.length}`);
    if (pending.length) {
      add('P2', 'B', `${name}中有 ${pending.length} 个非短语串不在词库中（需人工判定：应收录的词条 / 动词变位形 / 专名）`,
        pending.map((x) => `"${x.raw.trim()}"`));
    }
  };
  report('听力重点词汇', listenMissing);
  report('口语关键词', speakMissing);

  // 2. 精读生词的词条是否进入总词库
  const inAllVocab = new Set(d.ALL_VOCAB.map(w => norm(w.es)));
  const glossTrulyMissing = [];
  d.READING_PASSAGES.forEach(p => (p.glossary || []).forEach(g => {
    if (!inAllVocab.has(norm(g.es))) glossTrulyMissing.push(`[${p.title}] "${g.es}"`);
  }));
  if (glossTrulyMissing.length) {
    add('P1', 'B', `精读生词有 ${glossTrulyMissing.length} 条未进入总词库`, glossTrulyMissing.slice(0, 8));
  }

  // 3. 精读 glossary 的词是否真的出现在正文里
  //    走 exampleCoversTerm（含不规则变位表），否则 enfrascarse→enfrascados
  //    这类正常变位会被当成「生词没出现在正文」的假问题
  const glossNotInText = [];
  d.READING_PASSAGES.forEach(p => {
    const text = (p.paragraphs || []).map(x => x.es).join(' ');
    (p.glossary || []).forEach(g => {
      if (!exampleCoversTerm(g.es, text)) glossNotInText.push(`[${p.title}] "${g.es}"`);
    });
  });
  if (glossNotInText.length) {
    add('P2', 'B', `精读生词表中有 ${glossNotInText.length} 条未在正文中出现（含不规则变位可能误报）`, glossNotInText.slice(0, 15));
  }

  // 4. 语法点 vs 语法题库主题覆盖
  const grammarPointTitles = [];
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.grammar || []).forEach(g => grammarPointTitles.push(g.title))));
  const quizTopics = d.GRAMMAR_QUIZZES.map(s => s.topic);
  console.log(`  词库唯一词形 ${vocabSet.size}`);
  console.log(`  精读生词未入总词库 ${glossTrulyMissing.length} 条`);
  console.log(`  精读生词核心词不在正文 ${glossNotInText.length} 条`);
  console.log(`  语法点 ${grammarPointTitles.length} 条 / 语法题主题 ${quizTopics.length} 个`);
}

console.log('');

// ---------- C 内容严谨性 ----------
console.log('── C. 内容严谨性 ──');
{
  // 1. 词条类型错配：把语法结构、整句当「单词」教
  const misTyped = [];
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    const es = (w.es || '').trim();
    const isStructure = STRUCTURE_PATTERNS.some(re => re.test(es));
    const wordCount = es.split(/\s+/).length;
    const isQuestion = /[¿?]/.test(es);
    const isFullSentence = /[.!]$/.test(es) && wordCount >= 4;
    const hasConjugation = /\(.*\)/.test(es) && wordCount >= 3;
    if (isStructure || isFullSentence || hasConjugation || (isQuestion && wordCount >= 5)) {
      misTyped.push({ unit: u.id, es, zh: w.zh, why: isStructure ? '疑似语法结构' : isFullSentence ? '疑似整句' : hasConjugation ? '含变位说明' : '疑似整句疑问' });
    }
  })));
  if (misTyped.length) {
    add('P1', 'C', `有 ${misTyped.length} 个「单词」条目疑似语法结构或整句（不适合做单词卡）`, misTyped.slice(0, 12).map(m => `[${m.unit}] "${m.es}" — ${m.why}`));
  }

  // 2. 例句是否包含被解释的词（使用屈折还原，避免把正常变位判为错误）
  let exNotContain = [];
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    if (!w.example || !w.es) return;
    if (!exampleCoversTerm(w.es, w.example)) {
      exNotContain.push(`[${u.id}] "${w.es}" = ${w.zh} → "${(w.example || '').slice(0, 45)}"`);
    }
  })));
  if (exNotContain.length) {
    add('P1', 'C', `有 ${exNotContain.length} 个词条的例句未出现该词（学习者看不到用法）`, exNotContain.slice(0, 20));
  }

  // 3. 搭配的例句是否包含该搭配（同样使用屈折还原）
  let collExNotContain = [];
  d.COLLOCATIONS.forEach(c => {
    if (!c.pattern || !c.example) return;
    if (!exampleCoversTerm(c.pattern, c.example)) collExNotContain.push(`"${c.pattern}" → "${c.example.slice(0, 45)}"`);
  });
  if (collExNotContain.length) {
    add('P1', 'C', `有 ${collExNotContain.length} 条搭配的例句未出现该搭配`, collExNotContain.slice(0, 20));
  }

  // 4. 标点与编码
  const full = src;
  const halfPunctInZh = (full.match(/[\u4e00-\u9fa5][,;:!?]/g) || []).length;
  if (halfPunctInZh > 50) add('P2', 'C', `中文文本中混用半角标点约 ${halfPunctInZh} 处（体例不统一）`);
  const mojibake = (full.match(/[ÃÂ][\u0080-\u00bf]/g) || []).length;
  if (mojibake) add('P0', 'C', `疑似 UTF-8 编码错乱 ${mojibake} 处`);
  const replacement = (full.match(/\uFFFD/g) || []).length;
  if (replacement) add('P0', 'C', `存在替换字符 U+FFFD ${replacement} 处（编码损坏）`);

  console.log(`  疑似非单词条目 ${misTyped.length} 个`);
  console.log(`  例句未含该词 ${exNotContain.length} 个`);
  console.log(`  搭配例句未含搭配 ${collExNotContain.length} 条`);
  console.log(`  中文混用半角标点 ${halfPunctInZh} 处 / 编码错乱 ${mojibake + replacement} 处`);
}

console.log('');

// ---------- D 教学一致性 ----------
console.log('── D. 教学一致性 ──');
{
  // 1. 同一西语词在词库中是否有不一致的中文释义
  const zhMap = new Map();
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    const k = norm(w.es);
    if (!zhMap.has(k)) zhMap.set(k, []);
    zhMap.get(k).push({ zh: w.zh, unit: u.id });
  })));
  // 归一化：去尾部「的」、拆分多义分隔符、去括注
  const glossSet = zh => new Set(
    zh.replace(/（[^）]*）|\([^)]*\)/g, '')
      .split(/[\/、，,；;|]/)
      .map(s => s.trim().replace(/的$/, ''))
      .filter(Boolean)
  );
  // 两个释义集合是否互为子集（同一义项的两种写法）
  const subsetOf = (a, b) => [...a].every(x => b.has(x));
  const fmtOnly = [];   // 仅格式/同义改写，不算缺陷
  const conflict = [];  // 同一义项下释义互不兼容
  const polysemy = [];  // 真正的多义：分单元给语境义，属设计选择

  // 已人工逐条核实过的真多义词：不同单元给的是**不同义项**，
  // 释义互相包含只因其中一个写法把义项合并了（如「纪念品、回忆」）。
  // 这类不是缺陷，列入白名单，避免审计长期挂着一个无法消除的告警。
  // 新增白名单条目必须说明各义项分别是什么。
  const POLYSEMY_OK = new Map([
    ['el recuerdo', '回忆（a2-u3 情感语境） / 纪念品与回忆（b1-u15 旅行语境）'],
    ['la salida', '离开（a2-u8）/ 出口、发车（a2-u10 交通语境）/ 出发（b1-u15 旅行语境）'],
    ['la ruptura', '分手、决裂（b2-u8 关系）/ 断裂（b2-u10 物理或抽象）/ 中断（c1-u17 延续性）'],
    ['la dirección', '地址（a1-u4）/ 方向（a2-u10）'],
    ['la talla', '尺码（服装）/ 雕刻（艺术）'],
    ['la ley', '法律（法学）/ 定律（科学）'],
    ['el discurso', '演讲（口语）/ 话语（学术）'],
    ['la sentencia', '警句（文学）/ 判决（法律）'],
    ['la productividad', '生产率（经济）/ 能产性（语言学）'],
    ['la arbitrariedad', '任意性（符号学）/ 专断（法律）'],
    ['la carta', '菜单（餐厅语境 a1-u7、a2-u17）/ 信（通信语境）'],
    ['la obra', '施工（b2-u15 城市建设语境）/ 作品（艺术语境）'],
    ['el campo', '乡下、田野（a1-u14/a1-u20 自然语境）/ 球场（a2-u18 运动语境）'],
  ]);
  [...zhMap.entries()].forEach(([es, arr]) => {
    const raw = [...new Set(arr.map(a => a.zh))];
    if (raw.length < 2) return;
    const sets = raw.map(glossSet);
    // 去重后集合数量为 1 → 纯格式差异
    const uniqSets = [];
    sets.forEach(s => { if (!uniqSets.some(u => subsetOf(s, u) && subsetOf(u, s))) uniqSets.push(s); });
    if (uniqSets.length === 1) { fmtOnly.push({ es, raw }); return; }
    // 一个集合被另一个完全包含 → 同一义项，释义不齐
    const nested = uniqSets.some((s, i) =>
      uniqSets.some((t, j) => i !== j && subsetOf(s, t) && !subsetOf(t, s)));
    if (nested) {
      if (POLYSEMY_OK.has(es)) polysemy.push({ es, raw });
      else conflict.push({ es, raw });
    } else polysemy.push({ es, raw });
  });
  if (conflict.length) {
    add('P1', 'D', `有 ${conflict.length} 个西语词在不同单元的释义互相包含但不统一（应统一书写）`,
      conflict.slice(0, 10).map(x => `"${x.es}" → ${x.raw.join(' | ')}`));
  }
  console.log(`  同词同义异写（格式类，自动归一） ${fmtOnly.length} 个`);
  console.log(`  同词多义（分单元给语境义，设计如此，非缺陷） ${polysemy.length} 个`);

  // 2. 同一西语词的 level 分布（跨等级复现是合理的，但低等级不该过高）
  const levelMap = new Map();
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    const k = norm(w.es);
    if (!levelMap.has(k)) levelMap.set(k, new Set());
    levelMap.get(k).add(l.level);
  })));

  // 3. 语法术语一致性（同一概念的不同译名）
  const terms = new Map();
  const allGrammarText = [];
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.grammar || []).forEach(g => allGrammarText.push(g.title + ' ' + g.desc))));
  d.GRAMMAR_QUIZZES.forEach(s => { allGrammarText.push(s.topic); s.questions.forEach(q => allGrammarText.push(q.explain)); });
  const joined = allGrammarText.join(' ');
  // 常见术语的多种写法
  // 只检查「中文译名之间的不一致」。
  // 西语原形（preterito indefinido / imperfecto 等）是刻意保留的对照标注，
  // 属于正确的教学做法，不应判为问题——本脚本早期版本曾误报，已更正判定逻辑。
  const termPairs = [
    // [标准译名, [需统一的其他中文译名]]
    ['虚拟式', ['虚拟语气']],
    ['陈述式', ['直陈式', '陈述语气']],
    ['简单过去时', ['简单过去式']],
    ['未完成过去时', ['过去未完成时']],
    ['命令式', ['祈使式']],
    ['被动语态', ['被动式']],
    ['关系从句', ['定语从句']],
    ['与格', ['间接格']],
  ];
  termPairs.forEach(([canon, variants]) => {
    const used = [canon, ...variants].filter(v => joined.includes(v));
    if (used.length > 1) {
      add('P2', 'D', `术语「${canon}」存在多种中文译名并存：${used.join(' / ')}（建议统一）`);
    }
  });

  console.log(`  释义需统一的词 ${conflict.length} 个 / 术语不统一见上方`);
}

console.log('');

// ---------- E CEFR 难度错配 ----------
console.log('── E. CEFR 难度错配 ──');
{
  // 启发式：在高等级单元里出现「过于基础」的词，或在低等级单元里出现「明显高阶」的词
  const BASIC_HINTS = /^(hola|adiós|gracias|buenos días|sí|no|por favor|agua|pan|casa|coche)$/i;
  const ADVANCED_HINTS = /(subjuntivo|hipérbaton|ontología|epistemología|inconmensurabilidad|hermenéutica|axiología|teleología)/i;
  const tooBasicHigh = [];
  const tooHardLow = [];
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    const li = levelIdx(l.level);
    if (li >= 3 && BASIC_HINTS.test((w.es || '').trim())) tooBasicHigh.push(`[${l.level}/${u.id}] "${w.es}"`);
    if (li <= 1 && ADVANCED_HINTS.test(w.es || '')) tooHardLow.push(`[${l.level}/${u.id}] "${w.es}"`);
  })));
  if (tooBasicHigh.length) add('P2', 'E', `有 ${tooBasicHigh.length} 个基础词出现在 B2 及以上单元`, tooBasicHigh.slice(0, 8));
  if (tooHardLow.length) add('P1', 'E', `有 ${tooHardLow.length} 个明显高阶的术语出现在 A1/A2 单元`, tooHardLow.slice(0, 8));

  // 各等级词汇的「长度/复杂度」画像，用于发现异常
  const stats = {};
  LEVELS.forEach(lv => { stats[lv] = { n: 0, lenSum: 0, multiWord: 0 }; });
  Object.values(d.COURSES).forEach(l => l.units.forEach(u => (u.vocab || []).forEach(w => {
    const s = stats[l.level];
    if (!s) return;
    s.n++;
    s.lenSum += (w.es || '').length;
    if ((w.es || '').split(/\s+/).length > 1) s.multiWord++;
  })));
  console.log('  各等级词条特征（平均字符数 / 多词比例）：');
  LEVELS.forEach(lv => {
    const s = stats[lv];
    if (!s.n) return;
    console.log(`    ${lv}: ${(s.lenSum / s.n).toFixed(1)} 字符 / 多词 ${(s.multiWord / s.n * 100).toFixed(0)}%`);
  });
  // 单调性检查：等级越高，平均长度应越大（大致）
  const avg = LEVELS.map(lv => stats[lv].n ? stats[lv].lenSum / stats[lv].n : 0);
  let inversions = 0;
  for (let i = 1; i < avg.length; i++) if (avg[i] && avg[i - 1] && avg[i] < avg[i - 1] - 3) inversions++;
  if (inversions) add('P2', 'E', `有 ${inversions} 处相邻等级的词汇平均长度反常（可能等级错配）`);
  console.log(`  基础词混入高级 ${tooBasicHigh.length} / 高阶术语混入低级 ${tooHardLow.length}`);
}

console.log('\n========================================');
console.log('  审计结果汇总');
console.log('========================================');
const bySev = { P0: [], P1: [], P2: [] };
findings.forEach(f => bySev[f.sev].push(f));
['P0', 'P1', 'P2'].forEach(sev => {
  const label = sev === 'P0' ? '会教错人（必须修）' : sev === 'P1' ? '影响质量（应修）' : '体例问题（可选）';
  console.log(`\n【${sev}】${label} — ${bySev[sev].length} 项`);
  bySev[sev].forEach(f => {
    console.log(`  [${f.cat}] ${f.msg}`);
    (f.detail || []).slice(0, 6).forEach(x => console.log(`        · ${x}`));
    if ((f.detail || []).length > 6) console.log(`        … 另有 ${f.detail.length - 6} 条`);
  });
});

console.log('\n========================================');
console.log('  需母语者 / 人工复核的疑点清单');
console.log('========================================');
if (!review.length) console.log('  （本次脚本未产生自动疑点）');
const byCat = {};
review.forEach(r => { (byCat[r.cat] = byCat[r.cat] || []).push(r); });
Object.entries(byCat).forEach(([cat, arr]) => {
  console.log(`\n  ${cat}（${arr.length} 条）`);
  arr.slice(0, 10).forEach(r => console.log(`    · ${r.msg}`));
  if (arr.length > 10) console.log(`    … 另有 ${arr.length - 10} 条`);
});

const total = findings.reduce((a, f) => a + 1, 0);
console.log(`\n合计：P0 ${bySev.P0.length} 项 / P1 ${bySev.P1.length} 项 / P2 ${bySev.P2.length} 项；需复核疑点 ${review.length} 条`);
process.exit(bySev.P0.length ? 2 : 0);
