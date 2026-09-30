/**
 * 西语屈折还原（轻量启发式）
 * 目的：判断例句中是否出现了某词条的「某种形式」，避免把正常变位当成错误。
 * 不做完整形态学分析，只用「词干匹配」+ 规则后缀剥离。
 */
const stripAccents = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** 取出一个词条里所有「实词」的词干候选 */
export function stemsOf(term) {
  const t = (term || '').trim();
  // 去掉注释性括号、斜杠并列
  const cleaned = t.replace(/\(.*?\)/g, ' ').replace(/[/|]/g, ' ');
  const words = cleaned.split(/\s+/).filter(w => w.length >= 3 && !/^(el|la|los|las|un|una|unos|unas|de|del|a|al|en|con|por|para|que|y|o|se|su|mi|tu|lo)$/i.test(w));
  const out = [];
  words.forEach(w => {
    const base = stripAccents(w.replace(/[¿?¡!.,;:]/g, ''));
    // 候选词干：原形 + 逐级剥离后缀。多候选可提高召回。
    const cands = new Set([base]);
    // 自复动词：levantarse → levantar
    if (/se$/.test(base) && base.length > 5) cands.add(base.slice(0, -2));
    // 名词/形容词复数与性
    if (/(es|os|as)$/.test(base) && base.length > 5) cands.add(base.slice(0, -2));
    if (/(s)$/.test(base) && base.length > 4) cands.add(base.slice(0, -1));
    // 动词：按最长后缀优先剥离
    const sfx = [
      'aríamos', 'eríamos', 'iríamos', 'aremos', 'eremos', 'iremos',
      'aciones', 'iciones', 'amiento', 'imiento', 'ísimo', 'ísima',
      'ando', 'iendo', 'ados', 'idos', 'ada', 'idas', 'ado', 'ido',
      'aría', 'ería', 'iría', 'aste', 'iste', 'aron', 'ieron',
      'aba', 'abamos', 'ían', 'amos', 'emos', 'imos',
      'ará', 'erá', 'irá', 'ar', 'er', 'ir',
      'as', 'es', 'os', 'an', 'en', 'a', 'o', 'e', 'ía',
    ];
    sfx.forEach(s => {
      if (base.endsWith(s) && base.length - s.length >= 4) {
        cands.add(base.slice(0, base.length - s.length));
      }
    });
    cands.forEach(c => { if (c.length >= 4) out.push(c); });
  });
  return [...new Set(out)];
}

/** 判断例句中是否包含该词条的某个形态 */
export function exampleCoversTerm(term, example) {
  const ex = stripAccents(example || '');
  const stems = stemsOf(term);
  if (!stems.length) return true;
  // 至少一个实词词干出现在例句里即视为覆盖
  return stems.some(st => ex.includes(st));
}

/** 判断词条是否包含例句里的某个实词（用于反向检查） */
export function termCoversExampleWord(term, example) {
  const st = stemsOf(term);
  const ex = stripAccents(example || '');
  const exWords = ex.replace(/[¿?¡!.,;:]/g, ' ').split(/\s+/).filter(w => w.length >= 4);
  return exWords.some(w => st.some(s => w.startsWith(s) || s.startsWith(w.slice(0, Math.max(4, w.length - 3)))));
}

export { stripAccents };
