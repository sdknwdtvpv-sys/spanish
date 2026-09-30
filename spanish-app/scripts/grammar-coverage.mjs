/**
 * 语法点 ↔ 语法题库 覆盖映射
 *
 * 为什么需要显式映射：语法点标题是「知识点描述」（如「动词 ser · 现在时」），
 * 题库主题是「分类名」（如「Ser 的变位与用法」），两者字面几乎不会相同。
 * 用标题字符串匹配只会得出「194 个语法点没有练习」这种无法行动的错误结论。
 *
 * 这里的规则是：一个语法点被覆盖，当且仅当它的标题命中某条规则的
 * any 关键词，并且题库里存在命中同一规则的 to 关键词的主题。
 */
export const QUIZ_TOPIC_ALIASES = [
  { any: ['ser', 'estar'], to: ['ser', 'estar'] },
  { any: ['llamarse', 'me llamo', 'te llamas'], to: ['llamarse'] },
  { any: ['疑问词', 'cómo', 'de dónde', 'qué'], to: ['疑问词'] },
  { any: ['数字', '0 - 100', '基数'], to: ['数字'] },
  { any: ['时间', 'hora', '钟点'], to: ['表达时间', '时间'] },
  { any: ['星期'], to: ['星期'] },
  { any: ['名词的性', '性的', '阴阳性'], to: ['名词的性'] },
  { any: ['定冠词', '不定冠词', '冠词'], to: ['冠词'] },
  { any: ['形容词', '性数一致'], to: ['形容词'] },
  { any: ['现在时', 'presente'], to: ['现在时', 'presente', '动词变位'] },
  { any: ['所有格', 'posesivo'], to: ['所有格'] },
  { any: ['否定', '疑问句'], to: ['否定', '疑问句'] },
  { any: ['preterito', '简单过去时', '未完成过去时', 'imperfecto'], to: ['preterito', '简单过去时', '未完成过去时'] },
  { any: ['虚拟式现在时', 'subjuntivo'], to: ['虚拟式', 'subjuntivo'] },
  { any: ['虚拟式过去时'], to: ['虚拟式过去时'] },
  { any: ['虚拟式完成时', '虚拟式过去完成'], to: ['虚拟式完成时', '虚拟式过去完成'] },
  { any: ['命令式', 'imperativo'], to: ['imperativo', '命令式'] },
  { any: ['代词', '与格', '宾格'], to: ['代词', '与格', '宾语'] },
  { any: ['por', 'para'], to: ['por', 'para'] },
  { any: ['关系从句', '关系代词', 'cuyo'], to: ['关系从句'] },
  { any: ['连接词', '从句'], to: ['连接词', '关系从句'] },
  { any: ['被动', 'pasiva'], to: ['被动'] },
  { any: ['无人称', 'se'], to: ['无人称', 'se'] },
  { any: ['间接引语', 'estilo indirecto'], to: ['间接引语'] },
  { any: ['条件句', '条件式', 'si '], to: ['条件句', '条件式'] },
  { any: ['语式', 'modo', 'indicativo'], to: ['语式', 'indicativo'] },
  { any: ['介词', 'régimen'], to: ['介词'] },
  { any: ['惯用', '语域', 'registro'], to: ['惯用', '语域'] },
  { any: ['比较级', '比较', 'más', 'tan'], to: ['比较', '关系从句'] },
  { any: ['将来时', 'futuro', 'ir a '], to: ['将来时', 'futuro', '语式'] },
];

/** 某个语法点标题是否被现有题库主题覆盖 */
export function grammarPointCovered(pointTitle, topicNames) {
  const t = (pointTitle || '').toLowerCase();
  const topics = topicNames.map((x) => (x || '').toLowerCase());
  for (const rule of QUIZ_TOPIC_ALIASES) {
    if (!rule.any.some((k) => t.includes(k.toLowerCase()))) continue;
    if (topics.some((tp) => rule.to.some((k) => tp.includes(k.toLowerCase())))) return true;
  }
  // 兜底：标题前 4 字直接出现在某个主题名里
  const head = t.replace(/[（(][^）)]*[）)]/g, '').trim().slice(0, 4);
  if (head.length >= 3 && topics.some((tp) => tp.includes(head))) return true;
  return false;
}
