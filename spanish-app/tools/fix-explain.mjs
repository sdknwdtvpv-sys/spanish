// 把 31 条「只给结论、没讲规则」的语法题解析改写成可教学的版本：
// 每条都要说清「为什么对」以及「为什么其他选项不对」。
// 用法: node tools/fix-explain.mjs [apply]
import fs from 'node:fs';

const P = 'data/courses.js';
let src = fs.readFileSync(P, 'utf8');

// [题目中的句子片段（用于定位）, 旧解析, 新解析]
const fixes = [
  ['Yo ___ estudiante de medicina.', '身份用 ser。',
   'ser 表身份与职业这一类本质属性：Soy estudiante。estar 只表暂时状态，说「我（现在）是学生」不用 estar。'],
  ['Hoy ___ muy cansado.', '状态用 estar。',
   'estar 表暂时的状态：Hoy estoy cansado（今天累）。说人的性格、本质才用 ser：Soy una persona cansada 是「我是个容易累的人」。'],
  ['Madrid ___ la capital de España.', '事实用 ser。',
   'ser 表客观事实与定义：Madrid es la capital。这类命题不会随时间改变，所以不用 estar。'],
  ['El chocolate ___ muy dulce.', '本质特征用 ser。',
   'ser 表事物的固有特征：El chocolate es dulce（巧克力本身就是甜的）。若说 está dulce，意思是「这一份（今天）偏甜」。'],
  ['Sergio ___ de Barcelona.', '来自某地用 ser。',
   'ser de + 地点表籍贯、来源：Soy de China。注意 estar en 表「人在某地」，两者常被混淆。'],
  ['Aunque ___ tarde, iríamos.', '让步虚拟式表非现实。',
   'aunque + 虚拟式过去时表与现实相反的让步：Aunque fuera tarde, iríamos（哪怕晚，我们也会去）。若用陈述式 fuera→era，则表示已知事实。'],
  ['Salgo ___ Madrid mañana.', 'para 表目的地。',
   'para 表目的地：Salgo para Madrid（动身前往马德里）。por 表「经过、穿过」，用 por Madrid 意思变成「从马德里穿过去」。'],
  ['Estudio español ___ trabajar en España.', 'para 表目的。',
   'para + 不定式表目的：学西语是为了在西班牙工作。por 表原因，且 por + 不定式通常需要搭配（如 por trabajar 表「因为工作」）。'],
  ['Pagué veinte euros ___ el libro.', 'por 表交换、价格。',
   'por 表交换与价格：pagar por algo（为某物付钱）。para 表接收对象或目的，用 para 会把「为书付钱」说成「给书付钱」。'],
  ['Tengo que terminar esto ___ el viernes.', 'para 表截止期限。',
   'para + 时间表截止期限：para el viernes（周五之前）。por 表时间段内的持续，用 por el viernes 意思会变成「整个周五期间」。'],
  ['Lo hice ___ amor.', 'por 表动机、原因。',
   'por 表动机与原因：lo hice por amor（出于爱）。para 表目的，用 para amor 会把「出于爱」说成「为了爱（这个目标）」。'],
  ['El tren pasa ___ aquí.', 'por 表经过的地点。',
   'por 表经过、经由：El tren pasa por aquí。para 表目的地，与「经过」这一动作不相容。'],
  ['Se disculpó ___ llegar tarde.', 'por 表原因。',
   'por + 不定式表原因：为迟到而道歉。para 表目的，与「道歉」这一动作搭配不出「原因」的意思。'],
  ['Voy ___ la autopista.', 'por 表路线。',
   'por 表路线与途经：voy por la autopista（走高速）。para la autopista 会被理解为「前往高速（作为目的地）」。'],
  ['Es un libro ___ niños.', 'para 表适用对象。',
   'para 表对象与适用人群：un libro para niños（面向儿童的书）。por 表原因或交换，与「适用对象」无关。'],
  ['___ veo todos los días.', '直接宾语代词 te。',
   'te 在这里作直接宾语（看见你），不是间接宾语。判断方法：把句子改成「看见你」而不是「对你做某事」，即为直接宾语。'],
  ['___ lo dije ayer.', '间接宾语代词 te。',
   'te 在这里作间接宾语（对你说），后面还有直接宾语 lo。te + lo → te lo，两个代词并存时顺序是「间接在前、直接在后」。'],
  ['Ese libro, ___ he leído ya.', '复指直接宾语用 lo。',
   'lo 复指前置的直接宾语 ese libro（阳性单数）。西语习惯把宾语提到句首后再用代词复指，这是最常见的口语结构之一。'],
  ['Dámelo: «lo» 在句中充当 ___。', 'lo 是直接宾语代词。',
   'lo 是直接宾语（指被给出的物），me 才是间接宾语（给谁）。西语代词顺序固定为「间接 + 直接 + 动词」：dá + me + lo。'],
  ['La casa ___ compramos es grande.', 'que 作直接宾语。',
   '关系代词 que 在从句中作 compramos 的直接宾语（我们买的那座房子）。que 是关系从句中最通用的关系代词，指物指人均可。'],
  ['El libro ___ autor es famoso.', 'cuyo 表所属。',
   'cuyo 表所属关系，且要与其后名词保持性数一致：cuyo autor（阳性单数）、cuya obra、cuyos libros。cuyo 前面不加冠词。'],
  ['La ciudad ___ nací es pequeña.', 'donde 表地点。',
   '先行词是地点（la ciudad）时用关系副词 donde，等于 en la que。用 que 会缺介词，句子不成立。'],
  ['___ llegues, avísame.', 'cuando 表时间。',
   'cuando 表时间。此处指将来的动作，所以从句用虚拟式 llegues；若指已发生的事实则用陈述式。'],
  ['No fui ___ estaba enfermo.', 'porque 表原因。',
   'porque 表原因（因为病了所以没去）。aunque 表让步、cuando 表时间，都解释不了句子的因果关系。'],
  ['___ llueva, iremos.', 'aunque 表让步。',
   'aunque + 虚拟式表让步（即使下雨我们也会去）。用 si 表条件，语义会变成「如果下雨就去」，与 iremos 的坚定语气相冲。'],
  ['Estudia ___ aprobar.', 'para 表目的。',
   'para + 不定式表目的（学习是为了通过）。porque 后面必须接完整句子（porque quiere aprobar），不能直接接不定式。'],
  ['___ trabajes, tendrás éxito.', 'si 表条件。',
   'si 表条件（如果你努力就会成功）。此处用虚拟式是因为 si 从句的内容属于假设，注意 si 从句在标准西语中不用未来时。'],
  ['Lo hice ___ tú me dijiste.', 'como 表方式。',
   'como 表方式（照你说的那样做）。que 引导名词性从句时不表方式，用 que 句子结构不成立。'],
  ['Ese es el motivo ___ me fui.', '介词 + 关系代词。',
   '先行词是 motivo（原因）时必须带介词 por：por el que（= por el cual）。缺介词是这一结构的典型错误。'],
  ['No ___ permite la entrada a menores.', 'se 无人称否定式。',
   'se + 第三人称单数构成无人称句，否定式为 no se permite（不允许）。被动 se 与无人称 se 形式相同，此处没有明确施动者，属无人称用法。'],
  ['Hay alguien que ___ eso.', '肯定存在 → 陈述式。',
   'hay alguien 表确实存在这样的人，所以关系从句用陈述式 hace。若改成 no hay nadie，存在被否定，就要改用虚拟式 haga。'],
];

const apply = process.argv[2] === 'apply';
let ok = 0, miss = [];

for (const [frag, oldEx, newEx] of fixes) {
  // 用「句子片段 + 旧解析」双条件定位，避免误伤
  const re = new RegExp("(sentence:'" + frag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    "', options:\\[[^\\]]*\\], correct:\\d+, explain:')" + oldEx.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "(')", 'g');
  const hits = (src.match(re) || []).length;
  if (hits !== 1) { miss.push(`${frag}  [${hits}]`); continue; }
  ok++;
  if (apply) src = src.replace(re, '$1' + newEx.replace(/\$/g, '$$$$') + '$2');
}

console.log(`可改写 ${ok} / ${fixes.length}`);
if (miss.length) { console.log('未唯一命中：'); miss.forEach((m) => console.log('   ' + m)); }
if (apply && ok === fixes.length) { fs.writeFileSync(P, src); console.log('已写入 ' + P); }
else if (apply) { console.log('存在未命中项，未写入'); }
