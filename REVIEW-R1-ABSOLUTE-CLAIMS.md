# R1 复核任务单：绝对化教学断言（60 条，已预分类）

**交付对象**：有资质的西班牙语教师（DELE 考官 / 西语专业讲师 / 具教学经验的母语者）

---

## ⚠️ 先读这一节：本批已预分类，实际需要判断的只有 46 条

脚本按关键词（必须/只能/不能用/一律/永远/绝不/不可）筛出 60 条，我随后**逐条读过并分了三类**。
结果是：**关键词命中了大量非断言文本**。

| 类别 | 条数 | 含义 | 需要老师做什么 |
|---|---|---|---|
| 🔴 **真绝对** | 40 | 确实是对语法规则的绝对断言 | 核实是否真的无例外 |
| 🟡 **规范建议** | 6 | 是教学惯例/语域偏好，不是无例外的语法规则 | 确认表述会不会让学习者误读成禁令 |
| ⚪ **误报** | 14 | 关键词出现在**非断言**位置 | **可跳过** |

**误报为什么这么多**——脚本匹配的是字符，不是语义：

- 「**不可**数名词」——「不可」是词类术语的一部分
- 「tienes que（你**必须**）」——这是动词的**中文释义**（you must）
- 「**必须**谨慎的无人称句」——语用建议，不涉及语法

**这一步把教师工作量从 60 条压到 46 条**，其中 9 条我判断最可能有真问题。

---

## 建议优先复核这 9 条（附我的理由）

**1. estar de + 名词表状态**（`71b5d1d303d5`）

> 「不能用 ser 替换」——estar de＋名词表状态是固定搭配，但「不能替换」是教学简化。建议改为「这里用 estar de 是固定说法」，避免学习者以为存在语法禁令

**2. 情感动词 + 虚拟式**（`66fe37e9324d`）

> 「一律用虚拟式」太强。情感类动词通常接虚拟式，但「一律」会让学习者以为没有例外。建议改为「通常接虚拟式」

**3. 情感类动词 + 虚拟式**（`0cba95665aa8`）

> 与「情感动词 + 虚拟式」同类重复，「一律」需改

**4. 被动语态 (Voz pasiva)**（`b4fb499cf479`）

> 「必须用 ser 被动而非 se 被动」很可能是**教学简化**：两种被动多数语境可互换，差异在语体与信息焦点。建议复核这条是否有依据

**5. 建议表达 debes / deberías**（`d353dc70e97b`）

> **优先看**：讲解称「debes 必须用从句」。西语是 deber + 不定式，不存在「debes que」结构。请确认这条的表述是否准确

**6. 让步句 aunque / por más que / a pesar de**（`077a7efebc2d`）

> **经典易错点**：aunque + 陈述式（已知事实）vs + 虚拟式（假设），两种都合法且意思不同。若讲解说「必须接虚拟式」则**是错的**。本批最该优先看的一条

**7. 拉丁语遗留结构与公文语域**（`a3ddccd04c24`）

> **优先看**：称公文语域「不能用将来时 será」也「不能用虚拟式/条件式」。需确认这是语域惯例还是语法禁令——表述为「不能」会误导

**8. 对比与并列的书面连接**（`a3a62aebd9ac`）

> **优先看**：「不能用 pero」——需确认具体结构。某些对比结构中 pero 可用，说死会误导

**9. 原因、目的与条件的连接**（`fded25a92eab`）

> 「必须放句首」——como 表原因时确实只能放句首；但本条在讲 ya que。建议复核表述是否让学习者混淆两者

---

## 核验时对照的来源

见 `spanish-app/data/grammar-sources.json`。核查「某条绝对断言是否成立」时最对口的是
**RAE《泛西班牙语疑难词典》（DPD）**——它的体例就是「有人问能不能用 X，官方回答」。

---

## 全部 60 条（含预分类与说明）

### 1. 🔴 真绝对　[讲解] Adjetivos 形容词配合

**原文**：颜色、大小、形状形容词必须与名词在性和数上一致。una camisa roja, unos zapatos negros.

**我的标注**：性数一致是硬规则。唯一细节是少数以重读元音结尾的形容词（israelí→israelíes）复数变化不同，但那属正字法，不影响本条成立

`id: a68b903a2506` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 2. 🔴 真绝对　[讲解] jugar a + 运动/游戏

**原文**：jugar 后面接运动或游戏时必须加 a：Juego al tenis / Juego a las cartas。jugar al + 阳性运动（al fútbol），jugar a la + 阴性（a la pelota）。u→ue 变位：juego / juegas / juega。

**我的标注**：jugar a + 运动/游戏 确为固定搭配。但 jugar 表「玩道具」时用 con（jugar con la pelota）；本条只说「接运动或游戏」，边界是对的

`id: f7ba623ec6c0` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 3. ⚪ 误报　[讲解] 建议与义务的初级表达

**原文**：debes + 不定式（你应该）/ tienes que（你必须）/ hay que（应该，无人称）/ es mejor que + 虚拟式（最好是）。看病场景中医生常用这些句式给出建议。

**我的标注**：「你必须」是 tienes que 的中文释义（you must），不是语法断言

`id: 378c1bcc4daf` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 4. ⚪ 误报　[讲解] 食物的量与容器表达

**原文**：un vaso de agua / una taza de té / una botella de vino / un kilo de patatas / medio kilo de tomate / una docena de huevos。注意 un poco de（一点）后接不可数名词。

**我的标注**：「不可数名词」是词类术语，「不可」在此不表断言

`id: 84ecce13b7f6` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 5. ⚪ 误报　[讲解] tener que / hay que / deber

**原文**：tener que + 不定式（某人必须）：Tengo que estudiar；hay que + 不定式（客观需要、无人称）：Hay que entregarlo hoy；deber + 不定式（应该，含建议）：Deberías repasar。

**我的标注**：同为动词释义「必须」

`id: 8b520b033d17` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 6. 🟡 规范建议　**★ 优先**　[讲解] estar de + 名词表状态

**原文**：estar de baja（病假）/ estar de vacaciones（休假）/ estar de turno（值班）/ estar en paro（失业）。这是固定搭配，不能用 ser 替换。

**我的标注**：「不能用 ser 替换」——estar de＋名词表状态是固定搭配，但「不能替换」是教学简化。建议改为「这里用 estar de 是固定说法」，避免学习者以为存在语法禁令

`id: 71b5d1d303d5` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 7. 🔴 真绝对　[讲解] 表达可能与不确定（初阶）

**原文**：Quizá / Tal vez / Puede que + 虚拟式 / Seguramente + 陈述式。注意 puede que 后面必须用虚拟式：Puede que llueva（不能用 llueve）。

**我的标注**：puede que 后接虚拟式成立。需确认讲解是否也说明 quizá / tal vez 可用陈述式——若暗示「表可能都用虚拟式」则会误导

`id: 44bcff625523` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 8. 🟡 规范建议　**★ 优先**　[讲解] 情感动词 + 虚拟式

**原文**：alegrarse de que / sentir que / molestar que / sorprender que 等表情感的动词，从句一律用虚拟式：Me alegro de que hayas venido。注意主语不同时才用从句，主语相同则用不定式：Me alegro de verte。

**我的标注**：「一律用虚拟式」太强。情感类动词通常接虚拟式，但「一律」会让学习者以为没有例外。建议改为「通常接虚拟式」

`id: 66fe37e9324d` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 9. ⚪ 误报　[讲解] 表达义务与必要性的多种方式

**原文**：hay que + 不定式（泛泛的必要，无人称）；deber + 不定式（道义上应当）；tener que（客观必须）；es necesario / urgente / imprescindible + 不定式 或 que + 虚拟式。hay que 没有主语，是最常用的公共呼吁句式。

**我的标注**：重复条目，关键词同为动词释义

`id: 16aa428110a3` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 10. 🔴 真绝对　[讲解] 未来时与条件式预测

**原文**：未来时表预测：Las temperaturas subirán dos grados。条件式表假设后果：Si no actuamos, las consecuencias serían irreversibles。注意 si 从句不能用未来时或条件式：Si no actuamos（现在时），不能用 si no actuaremos。

**我的标注**：si 从句不用将来时/条件式成立。需确认是否覆盖 si + 未完成过去时 → 条件式 的组合

`id: 05ac1542c1fd` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 11. 🟡 规范建议　**★ 优先**　[讲解] 情感类动词 + 虚拟式

**原文**：me alegra que / me molesta que / me sorprende que + 虚拟式。主句表达情感时，从句一律用虚拟式。

**我的标注**：与「情感动词 + 虚拟式」同类重复，「一律」需改

`id: 0cba95665aa8` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 12. 🔴 真绝对　[讲解] 被动与无人称在报道中

**原文**：fue sancionado / se le impuso una multa / se anunció que + 陈述式。体育报道常用自复被动与无人称，注意与格代词不可省：Se le impuso una sanción de dos años。

**我的标注**：「与格代词不可省」——需确认讲解说的范围（se le impuso 中 le 是否必需、以及 se 的歧义处理）

`id: 771662d59042` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 13. 🔴 真绝对　[讲解] 因果与后果的连接方式

**原文**：a causa de / debido a / por culpa de（含负面评价）+ 名词；como consecuencia de；de ahí que + 虚拟式（因此……）；lo que se tradujo en + 名词（结果是）。de ahí que 后面必须用虚拟式，这是 C1 常考点。

**我的标注**：de ahí que + 虚拟式成立

`id: 61637056f9ca` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 14. ⚪ 误报　[讲解] 表达义务与禁令（技术伦理）

**原文**：haber de / deber / tener que + 不定式（义务，语气递增）；estar obligado a；quedar prohibido；no caber + 不定式（不能……）：No cabe ignorar el riesgo。表示「必须谨慎」的无人称句：Cabe / Procede / Conviene + 不定式。

**我的标注**：「必须谨慎」是语用建议，不是语法规则

`id: b50901b87fc6` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 15. ⚪ 误报　[讲解] 预设的识别与利用

**原文**：「¿Por qué dejaste de fumar?」预设了对方曾吸烟。识别预设是辩论中的关键技能：否定一个含预设的问题，必须先指出预设本身不成立，否则会陷入对方设定的框架。

**我的标注**：「必须先指出预设」是论证策略建议，与语法无关

`id: 33469051f091` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 16. ⚪ 误报　[讲解] 表达义务与许可的层级

**原文**：deber + 不定式（道义上应当）/ tener que（客观必须）/ haber de（正式，多用于书面）/ poder（许可）。deber de + 不定式则表推测，与义务无关——这是最常被混淆的一对。

**我的标注**：「必须」同为动词释义

`id: 35a9ad7f3eaf` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 17. 🔴 真绝对　[讲解] 法律评论文本的无人称与被动

**原文**：se imputa / se le acusa de / se le condena por / se aprecia la agravante de。注意西班牙语用「与格代词 + 被动」：Se le acusa de fraude（他被指控欺诈），le 不可省略。

**我的标注**：法律评论文本中与格代词不可省，规则成立

`id: 9965cb33f86a` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 18. 🔴 真绝对　[讲解] 表达因果、让步与限度的精密结构

**原文**：a fuerza de + 不定式 / por mucho que + 虚拟式 / en la medida en que / aun a riesgo de。por mucho que insista（无论他怎么坚持）后面必须用虚拟式。

**我的标注**：因果/让步结构中的虚拟式要求，需确认覆盖面

`id: a7c2bcb92283` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 19. 🔴 真绝对　[解析] 虚拟式现在时 (Subjuntivo presente)

> 题目：`Ojalá ___ sol mañana.`

**原文**：ojalá 后必须用虚拟式。

**我的标注**：虚拟式现在时的典型用法，成立

`id: 40c4a59cfea0` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 20. ⚪ 误报　[解析] 虚拟式过去时 (Subjuntivo imperfecto)

> 题目：`Ojalá ___ aquí ahora.`

**原文**：ojalá 表不可能实现的愿望，用过去时虚拟式。

**我的标注**：「不可能实现的愿望」是概念描述，非断言

`id: 35bc9be467d1` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 21. 🔴 真绝对　[解析] 关系从句与连接词

> 题目：`Estudia ___ aprobar.`

**原文**：para + 不定式表目的（学习是为了通过）。porque 后面必须接完整句子（porque quiere aprobar），不能直接接不定式。

**我的标注**：porque 接完整从句，成立

`id: fa874bd77a0e` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 22. 🔴 真绝对　[解析] 关系从句与连接词

> 题目：`Ese es el motivo ___ me fui.`

**原文**：先行词是 motivo（原因）时必须带介词 por：por el que（= por el cual）。缺介词是这一结构的典型错误。

**我的标注**：关系代词带前置词 por el que，成立

`id: eb974bb75c0b` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 23. 🔴 真绝对　**★ 优先**　[解析] 被动语态 (Voz pasiva)

> 题目：`Ese cuadro ___ pintado por Velázquez.`

**原文**：有明确施动者，必须用 ser 被动而非 se 被动。

**我的标注**：「必须用 ser 被动而非 se 被动」很可能是**教学简化**：两种被动多数语境可互换，差异在语体与信息焦点。建议复核这条是否有依据

`id: b4fb499cf479` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 24. 🔴 真绝对　[解析] 连接词与语式配合

> 题目：`Llévate el paraguas ___ llueva.`

**原文**：表条件、且从句用虚拟式（llueva）时用 en caso de que + 虚拟式。por si 后面必须接陈述式：por si llueve，所以 por si 不能接 llueva。这是两者的核心区别。

**我的标注**：已核实：por si + 陈述式。见 data/grammar-sources.json 的 preciseCitations

`id: 7a6f01fa1b37` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 25. 🔴 真绝对　[解析] Ser 的变位与用法

> 题目：`Yo ___ de China.`

**原文**：ser 表籍贯与来源：soy de China。estar 表位置或暂时状态，说来源只能用 ser。

**我的标注**：「只能用 ser」需确认语境（表来源/籍贯时确实用 ser de）

`id: e3d4d846aa7b` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 26. 🔴 真绝对　[解析] Llamarse 与自我介绍

> 题目：`Yo me ___ Ana.`

**原文**：llamarse 是自复动词，必须带反身代词：yo me llamo, tú te llamas, él se llama。

**我的标注**：自复代词必需，成立

`id: 8ca42841b456` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 27. 🔴 真绝对　[解析] Llamarse 与自我介绍

> 题目：`¿Cómo te ___ tú?`

**原文**：问对方名字用 tú 形式 te llamas。自复代词 te 与动词 llamas 必须成对出现。

**我的标注**：代词与动词人称一致，成立

`id: df143d7c95c0` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 28. 🔴 真绝对　[解析] 疑问词 ¿Cómo? / ¿De dónde? / ¿Qué?

> 题目：`¿___ te llamas?`

**原文**：问名字用 ¿Cómo te llamas?（字面「你怎么称呼自己」）。qué 问的是事物，不能用于问名字。

**我的标注**：¿Cómo? 不用于问名字——需确认表述（问名字是 ¿Cómo te llamas?）

`id: cf13bf3901ec` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 29. 🔴 真绝对　[解析] 形容词的性数一致

> 题目：`una casa ___`

**原文**：形容词必须与名词的性和数一致：casa 是阴性单数，所以用 blanca。

**我的标注**：形容词性数一致，与第 1 条同域

`id: 4fb8dff64d08` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 30. ⚪ 误报　[解析] 否定句与疑问句

> 题目：`No ___ nada.`

**原文**：双重否定在西语中是必须的：No sé nada（我什么都不知道）。saber 第一人称是 sé（不规则）。

**我的标注**：「必须的」是口语化表述，非语法断言

`id: 5e785464ae18` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 31. 🔴 真绝对　[解析] Querer + 动词原形

> 题目：`No ___ que vengas, es tarde.`

**原文**：主语不同（我 vs 你）时必须用 que + 虚拟式：no quiero que vengas。这是不定式与从句的分界点。

**我的标注**：否定意愿动词接虚拟式，成立

`id: 956f02e61b2c` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 32. 🔴 真绝对　[解析] Jugar a + 运动与游戏

> 题目：`___ al fútbol los sábados.`

**原文**：jugar 后接运动必须加 a：jugar al fútbol。jugar 词干变化 u→ue：juego, juegas, juega...

**我的标注**：与「jugar a」条重复

`id: 02a12cb09b04` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 33. ⚪ 误报　[解析] 义务与必要性的表达

> 题目：`___ que estudiar más.`

**原文**：tener que + 不定式表个人必须：tengo que estudiar。tener 按主语变位。

**我的标注**：同动词释义情形

`id: 2814086791ef` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 34. 🔴 真绝对　**★ 优先**　[解析] 建议表达 debes / deberías

> 题目：`Te ___ que lo pienses dos veces.`

**原文**：aconsejar que + 虚拟式：Te aconsejo que lo pienses。主语不同时必须用从句，且从句用虚拟式。

**我的标注**：**优先看**：讲解称「debes 必须用从句」。西语是 deber + 不定式，不存在「debes que」结构。请确认这条的表述是否准确

`id: d353dc70e97b` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 35. 🔴 真绝对　[解析] 条件句三型

> 题目：`Si ___ tiempo, te acompaño.`

**原文**：第一类真实条件句：si + 陈述式现在时，主句用现在时/将来时/命令式。si 从句中不能用将来时。

**我的标注**：条件句不用将来时，成立

`id: 81659750ae07` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 36. 🔴 真绝对　[解析] 礼貌请求与指令

> 题目：`No ___ usted el móvil durante la reunión.`

**原文**：正式否定命令式同样用虚拟式：no use。命令式的否定形式一律用虚拟式。

**我的标注**：礼貌请求用虚拟式/条件式大体成立，需确认「一律」的边界

`id: d13a9c61f834` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 37. 🟡 规范建议　**★ 优先**　[解析] 让步句 aunque / por más que / a pesar de

> 题目：`Por más que ___, no cambiará de opinión.`

**原文**：por más que 后必须接虚拟式，表「无论怎么……」。这是固定搭配，与 aunque 的两种可能不同。

**我的标注**：**经典易错点**：aunque + 陈述式（已知事实）vs + 虚拟式（假设），两种都合法且意思不同。若讲解说「必须接虚拟式」则**是错的**。本批最该优先看的一条

`id: 077a7efebc2d` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 38. ⚪ 误报　[解析] 让步句 aunque / por más que / a pesar de

> 题目：`___ del mal tiempo, la excursión fue un éxito.`

**原文**：a pesar de + 名词（或不定式）。aunque 后面必须接完整从句，不能直接接名词。

**我的标注**：「必须接完整从句」指连接词需接从句，属结构描述

`id: e399a0302895` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 39. 🔴 真绝对　[解析] 因果与后果的正式结构

> 题目：`Llovió toda la semana, ___ que se cancelara el partido.`

**原文**：de ahí que + 虚拟式 ＝ 因此（导致某结果）。de ahí que 后必须用虚拟式，这是常考点。

**我的标注**：与 de ahí que 条重复

`id: bbc32aeedc66` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 40. ⚪ 误报　[解析] 表达同意与不同意

> 题目：`No es que no me ___ tu propuesta, es que no tengo presupuesto.`

**原文**：no es que 用来否认对方假定的前提，从句须用虚拟式 guste；gusta、gustó 是陈述式，gustaría 是条件式，都不能用在此结构后。

**我的标注**：「不能用在此结构后」指某词不适用于该搭配，非语法禁令

`id: 37b36823d58c` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 41. 🔴 真绝对　[解析] 程度与进展的动词搭配

> 题目：`La tensión en la frontera tiende a ___ en los meses de invierno.`

**原文**：tender a 后必须接不定式，故用带代词的 agudizarse；agudiza 是变位动词，agudizado 是分词，agudizando 是副动词。

**我的标注**：这些动词接不定式，需确认是否全部如此

`id: 2a49e52ce57b` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 42. 🟡 规范建议　**★ 优先**　[解析] 拉丁语遗留结构与公文语域

> 题目：`Si ___ necesario, se convocará una reunión extraordinaria.`

**原文**：条件从句用将来虚拟式 fuere，属法律文书的古体表达；si 后不能用将来时 será，也不能用虚拟式 sea 或条件式 sería。

**我的标注**：**优先看**：称公文语域「不能用将来时 será」也「不能用虚拟式/条件式」。需确认这是语域惯例还是语法禁令——表述为「不能」会误导

`id: a3ddccd04c24` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 43. 🔴 真绝对　[解析] 预设的识别与利用

> 题目：`—¿Por qué dejaste de venir a clase? —No es que ___ dejado de venir: nunca me matriculé.`

**原文**：要否认对方的前提，须用 no es que 加虚拟式 haya dejado；he、había、hube 都是陈述式，该结构后必须用虚拟式。

**我的标注**：与预设条相关

`id: 7972d87a2b0e` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 44. 🔴 真绝对　[解析] 国家与语言名词

> 题目：`Vivo en Francia, pero soy ___.`

**原文**：国籍用形容词 francés；国名 Francia。中文说「我是法国（人）」，西语必须用国籍形容词。

**我的标注**：「必须用国籍形容词」需确认语境（也可说 soy de + 国家）

`id: 3c28dc06e008` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 45. 🔴 真绝对　[解析] 表目的的表达

> 题目：`Cerró la ventana ___ no tener frío.`

**原文**：para + 不定式表目的，主语与主句相同。para que 后面必须接从句（para que no tuviera frío），不能直接接不定式。

**我的标注**：para que 接虚拟式，成立

`id: 01a68e3581ee` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 46. 🔴 真绝对　[解析] 金钱表达与小数

> 题目：`Un millón ___ euros es mucho dinero.`

**原文**：millón 后面必须加 de：un millón de euros。这是与 mil 的重要区别（mil euros 不加 de）。

**我的标注**：「必须加 de」需确认范围（millones de 确实带 de，但 cien euros 不带）

`id: 864a6dc72624` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 47. 🔴 真绝对　[解析] 法律与行政文书的固定句式

> 题目：`___ lo dispuesto en el artículo anterior, se deniega la solicitud.`

**原文**：conforme a ＝ 依照。de acuerdo 后必须加 con 才能接名词。

**我的标注**：搭配需 con 才能接名词，属固定搭配

`id: c89871c80d36` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 48. 🔴 真绝对　**★ 优先**　[解析] 对比与并列的书面连接

> 题目：`No se trata de eficiencia, ___ de legitimidad.`

**原文**：no... sino... ＝ 不是……而是。这是纠正性对举，不能用 pero。

**我的标注**：**优先看**：「不能用 pero」——需确认具体结构。某些对比结构中 pero 可用，说死会误导

`id: a3a62aebd9ac` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 49. 🔴 真绝对　[解析] 表「回避」与「坚持」的动词

> 题目：`___ en su postura pese a las críticas.`

**原文**：empeñarse en ＝ 执意于。自复动词必须带代词：se empeñó。

**我的标注**：自复动词带代词，成立

`id: ffd91762e510` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 50. 🔴 真绝对　[解析] 方位与位置

> 题目：`El gato está ___ la mesa.`

**原文**：debajo de ＝ 在……下面。debajo 是副词，接名词必须加 de。

**我的标注**：方位表达带 de，成立

`id: 39f45533b389` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 51. 🔴 真绝对　[解析] 出发与到达的动词搭配

> 题目：`El tren llega ___ Sevilla a las ocho.`

**原文**：llegar a + 地点 ＝ 到达某地。这是固定搭配，不能用 en。

**我的标注**：「不能用 en」需确认是哪个动词的介词选择（llegar a / salir de）

`id: 1066d14956d0` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 52. ⚪ 误报　[解析] 义务与许可的层级

> 题目：`No ___ justificar esa decisión.`

**原文**：no cabe + 不定式 ＝ 无法、没有余地。书面语中表「不可能/不该」的正式说法。

**我的标注**：「不可能/不该」的正式说法，概念描述

`id: 88fc011ad5e7` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 53. 🔴 真绝对　[解析] 自复动词表投入与兴趣

> 题目：`___ mucho a la lectura desde niño.`

**原文**：自复动词必须带代词：se aficionó。缺了 se 句子不成立。

**我的标注**：与自复动词条重复

`id: b440bfd10f71` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 54. ⚪ 误报　[解析] 客户服务的礼貌表达

> 题目：`Sentimos las ___ ocasionadas.`

**原文**：标准致歉句式是 Sentimos las molestias（给您带来不便，很抱歉）。gracias 不能用在这个结构里。

**我的标注**：「不能用在这个结构里」指搭配限制

`id: 6b6f4b039903` · 判定：☐ 确认是误报（可跳过）　☐ 其实仍需复核

### 55. 🔴 真绝对　[解析] 意图、决心与未来推测

> 题目：`___ que llueva esta tarde: mira esas nubes.`

**原文**：puede que + 虚拟式 ＝ 可能会。这里 llueva 是虚拟式，所以前面必须是 puede que。

**我的标注**：与 puede que 条重复

`id: 0dcf7640bddd` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 56. 🔴 真绝对　[解析] 态度与人际关系的固定搭配

> 题目：`Me ___ vergüenza hablar en público.`

**原文**：dar vergüenza 的主语是事物，人用与格：Me da vergüenza。这里不能用 tener 或 ser。

**我的标注**：caer bien 用与格而非 tener/ser，成立

`id: 1ef7084e08a8` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 57. 🔴 真绝对　[解析] 损坏、故障与修理的动词

> 题目：`He llamado al fontanero para que ___ la gotera.`

**原文**：para que 后面必须用虚拟式：para que arregle。如果主语相同则用 para + 不定式：He llamado para arreglar…（但这里主语不同）。

**我的标注**：para que 接虚拟式，与目的条重复

`id: 2b9a742784c7` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 58. 🔴 真绝对　[解析] 法律文本的义务、禁止与例外

> 题目：`Se insta a las partes ___ respeten el alto el fuego.`

**原文**：instar a que + 虚拟式（敦促各方做某事）。instar a 后面接名词或不定式，接从句必须加 que 并配虚拟式。

**我的标注**：instar a que + 虚拟式，成立

`id: 47e24b6f9e9f` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 59. 🟡 规范建议　**★ 优先**　[解析] 原因、目的与条件的连接

> 题目：`___ que no había plazas, tuvimos que esperar.`

**原文**：ya que ＝ 既然、由于（引出已知原因）。Como 也能表原因但必须放句首，这里已放句首却不是 Como 的位置（后面跟 que）——固定搭配是 ya que。

**我的标注**：「必须放句首」——como 表原因时确实只能放句首；但本条在讲 ya que。建议复核表述是否让学习者混淆两者

`id: fded25a92eab` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导

### 60. 🔴 真绝对　[解析] 保留与限定（salvo que / a condición de que）

> 题目：`Acepto el acuerdo, ___ se respete el calendario.`

**原文**：a condición de que 后面必须接虚拟式：a condición de que se respete。写成 a condición de 时后面接名词或不定式才成立。

**我的标注**：a condición de que + 虚拟式，成立

`id: a676988d67f4` · 判定：☐ 成立　☐ 有例外（需修正）　☐ 表述误导
