# -*- coding: utf-8 -*-
"""批次 55：补齐结构类语法点的练习（4 组 / 16 题）

audit-gaps 报出 25 个未覆盖语法点，逐条判定后分两类：
- **可出题的结构** 4 个，本批覆盖：近义动词辨析（escuchar/oír）、
  表「学习/研究」的动词搭配、量化与程度表达、数据与趋势的表述
- **内容绑定的表达** 19 个（点菜礼貌句式、祝贺句式、投诉表达、
  网络社交动词、艺术评论表达等），已在搭配库中作为语块覆盖，
  不硬拆成选择题——否则会把「学语法」变成「背搭配」
"""
GROUPS = [
    ('近义动词辨析：escuchar 与 oír', [
        ('___ música mientras trabajo.', ['Escucho', 'Oigo', 'Me escucho', 'Escucho a'], 0,
         'escuchar ＝ 主动去听（有意识）。oír ＝ 听到（被动接收声音）。听音乐是主动行为，用 escuchar，直接接宾语不加 a。'),
        ('No te ___ bien, habla más alto.', ['oigo', 'escucho', 'me oigo', 'oigo a'], 0,
         '「我听不清你」是声音接收问题，用 oír。escuchar 表主动聆听，与此处语义不符。'),
        ('Le ___ con atención durante toda la reunión.', ['escuché', 'oí', 'me escuché', 'oí a'], 0,
         'escuchar con atención ＝ 认真倾听（主动）。oír 是被动感知，不能与「注意力」搭配。'),
        ('De repente ___ un ruido extraño.', ['oí', 'escuché', 'me oí', 'escuché a'], 0,
         '突发的声音是被动接收到的，用 oír。「突然听到」是 oír 的典型语境。'),
    ]),
    ('表「学习/研究」的动词搭配', [
        ('___ inglés desde hace tres años.', ['Estudio', 'Estudio a', 'Aprendo a', 'Aprendo de'], 0,
         'estudiar 直接接学科，不加介词。aprender 后面接名词时也不加 a（aprendo inglés），a 只用于 aprender a + 不定式。'),
        ('Estoy ___ a nadar este verano.', ['aprendiendo', 'estudiando', 'aprendiendo de', 'estudiando a'], 0,
         'aprender a + 不定式 ＝ 学会做某事。estudiar 后不接不定式表技能习得。'),
        ('Los investigadores ___ sobre el cambio climático.', ['investigan', 'investigan a', 'estudian a', 'aprenden de'], 0,
         'investigar sobre ＝ 研究某主题。investigar 直接接宾语时指「调查（案件）」，接主题要用 sobre。'),
        ('Se ha ___ en profundidad ese fenómeno.', ['profundizado', 'profundizando', 'profundizar', 'profundiza'], 0,
         'profundizar en ＝ 深入研究。haber + 分词构成完成时，所以用 profundizado。'),
    ]),
    ('量化与程度表达', [
        ('Conviene ___ el consumo de sal.', ['reducir', 'reducir a', 'reducirse', 'reducir de'], 0,
         'reducir + 名词 ＝ 减少某物的量。reducirse a 表「缩减为」，语义不同。'),
        ('Hay que ___ la ingesta de verduras.', ['aumentar', 'aumentar a', 'aumentarse', 'aumentar de'], 0,
         'aumentar + 名词（增加某物）。注意与 aumentarse 的区别：后者更强调自身增长。'),
        ('Sustituye el azúcar ___ fruta.', ['por', 'a', 'de', 'en'], 0,
         'sustituir A por B ＝ 用 B 替代 A。介词固定为 por，这是常考的搭配。'),
        ('El consumo se ha ___ un diez por ciento.', ['reducido en', 'reducido a', 'reducido de', 'reducido por'], 0,
         'reducirse en + 幅度 ＝ 减少了多少。注意与 reducido a（减少到某个值）的区别：en 表幅度，a 表终点。'),
    ]),
    ('数据与趋势的表述', [
        ('La vivienda ___ la subida de precios.', ['encabeza', 'encabeza a', 'encabeza en', 'encabezando'], 0,
         'encabezar + 名词 ＝ 位居……之首。encabezar 直接接宾语，不加介词。'),
        ('El precio se ha ___ en una década.', ['duplicado', 'duplicando', 'duplicar', 'duplica'], 0,
         'duplicarse ＝ 翻倍。完成时用过去分词 duplicado。'),
        ('La tasa se sitúa ___ encima de la media.', ['por', 'en', 'a', 'de'], 0,
         'situarse por encima de ＝ 位于……之上。por encima de / por debajo de 是固定的方位短语。'),
        ('El sector ___ un descenso del tres por ciento.', ['registró', 'registró a', 'registró en', 'registrando'], 0,
         'registrar + 名词 ＝ 录得、记录到（数据）。这是经济报道中描述数据的标准动词。'),
    ]),
]
