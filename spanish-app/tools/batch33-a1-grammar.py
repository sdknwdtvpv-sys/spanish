# -*- coding: utf-8 -*-
"""批次 33：A1 语法专项题库（12 组 / 60 题）

背景：原语法题库 20 个主题全部集中在 B1–C2，而 A1 有 39 个语法点、
A2 有 37 个，合计 76 个语法点在题库里一个对应主题都没有。
初学者阶段反而无题可练，这是本脚本要补的缺口。

题目格式与既有题库完全一致：
  {sentence:'...', options:[...], correct:0, explain:'...'}
"""

GROUPS = [
    ('Ser 的变位与用法', [
        ('Yo ___ de China.', ['soy', 'estoy', 'es', 'somos'], 0,
         'ser 表籍贯与来源：soy de China。estar 表位置或暂时状态，说来源只能用 ser。'),
        ('María ___ profesora.', ['es', 'está', 'son', 'soy'], 0,
         'ser 表职业：María es profesora。主语是第三人称单数，所以用 es 而不是 son。'),
        ('Nosotros ___ estudiantes.', ['somos', 'estamos', 'son', 'sois'], 0,
         'nosotros 对应 ser 的 nosotros somos。注意 somos 与 son（他们/你们敬称）不要混。'),
        ('¿Tú ___ español?', ['eres', 'es', 'soy', 'estás'], 0,
         'tú 对应 eres。ser 的现在时变位：soy, eres, es, somos, sois, son。'),
    ]),
    ('Llamarse 与自我介绍', [
        ('Yo me ___ Ana.', ['llamo', 'llamas', 'llama', 'llamamos'], 0,
         'llamarse 是自复动词，必须带反身代词：yo me llamo, tú te llamas, él se llama。'),
        ('¿Cómo te ___ tú?', ['llamas', 'llamo', 'llama', 'llamáis'], 0,
         '问对方名字用 tú 形式 te llamas。自复代词 te 与动词 llamas 必须成对出现。'),
        ('Él se ___ Carlos.', ['llama', 'llamo', 'llamas', 'llaman'], 0,
         '第三人称单数用 se llama。反身代词随人称变化，动词也随人称变化。'),
    ]),
    ('疑问词 ¿Cómo? / ¿De dónde? / ¿Qué?', [
        ('¿De ___ eres?', ['dónde', 'quién', 'cuándo', 'cómo'], 0,
         '问来源用 ¿De dónde eres?（你从哪里来）。dónde 表地点，前面加 de 才表「来自」。'),
        ('¿___ te llamas?', ['Cómo', 'Qué', 'Quién', 'Dónde'], 0,
         '问名字用 ¿Cómo te llamas?（字面「你怎么称呼自己」）。qué 问的是事物，不能用于问名字。'),
        ('¿___ es esto?', ['Qué', 'Cómo', 'Quién', 'Dónde'], 0,
         '问「这是什么」用 ¿Qué es esto?。quién 问人，cómo 问方式。'),
        ('¿___ es tu profesor?', ['Quién', 'Qué', 'Cómo', 'Cuándo'], 0,
         '问「谁」用 quién。注意疑问词都带重音符号，与关系词 que/ quien 区分。'),
    ]),
    ('数字 0-100', [
        ('Tengo ___ años.', ['veinte', 'veinte y', 'dos diez', 'viente'], 0,
         '20 = veinte。西语 21-29 连写（veintiuno, veintidós），不是 veinte y uno；30 以上才用 y（treinta y uno）。'),
        ('Hay ___ libros en la mesa.', ['tres', 'treses', 'tercero', 'trece'], 0,
         '基数词 tres 不随名词变化。tercero 是序数词「第三」，trece 是 13。'),
        ('Mi número es el ___.', ['cincuenta', 'cincuenta y', 'quince cero', 'cinco diez'], 0,
         '50 = cincuenta。基数词表示数量或编号时保持单数形式。'),
    ]),
    ('表达时间', [
        ('¿Qué hora ___?', ['es', 'son', 'está', 'hay'], 0,
         '问「几点了」固定说 ¿Qué hora es?（单数）。回答一点用 es la una，其余用 son las dos。'),
        ('___ las tres de la tarde.', ['Son', 'Es', 'Están', 'Hay'], 0,
         '三点及以后用复数 son las + 数字。只有一点（la una）和「正午/午夜」用单数 es。'),
        ('La clase empieza ___ las nueve.', ['a', 'en', 'de', 'por'], 0,
         '「在几点」用 a + las + 数字：a las nueve。en 用于月份（en enero），不用于钟点。'),
    ]),
    ('星期的表达', [
        ('___ lunes voy al gimnasio.', ['El', 'En', 'De', 'A'], 0,
         '「在周一」用 el lunes（定冠词 + 星期）。星期名首字母不大写。'),
        ('No trabajo ___ martes.', ['los', 'las', 'en', 'de'], 0,
         '表每周重复用复数：los martes（每周二）。单次用 el martes。'),
        ('Hoy es ___.', ['miércoles', 'Miércoles', 'el miércoles', 'de miércoles'], 0,
         '说「今天是星期几」用 Hoy es + 星期名，不加冠词，且不大写。'),
    ]),
    ('名词的性与数', [
        ('___ libro es interesante.', ['El', 'La', 'Lo', 'Los'], 0,
         'libro 是阳性单数名词，用定冠词 el。多数以 -o 结尾的名词为阳性。'),
        ('___ casa es grande.', ['La', 'El', 'Lo', 'Las'], 0,
         'casa 是阴性单数，用 la。多数以 -a 结尾的名词为阴性，但有例外（el día, el mapa）。'),
        ('Las ___ son caras.', ['flores', 'flor', 'floreses', 'la flor'], 0,
         '名词变复数：元音结尾加 -s（flor → flores 属辅音结尾加 -es）。冠词 las 已表明是复数阴性。'),
        ('___ problema es difícil.', ['El', 'La', 'Los', 'Las'], 0,
         'problema 虽以 -a 结尾，但它是阳性（源自希腊语 -ma 结尾的词多为阳性）。这类例外需要单独记。'),
    ]),
    ('定冠词与不定冠词', [
        ('Quiero ___ café, por favor.', ['un', 'una', 'el', 'unos'], 0,
         'café 是阳性单数，不定冠词用 un。首次提到、不确定的对象用不定冠词。'),
        ('Necesito ___ agua.', ['un', 'una', 'el', 'uno'], 0,
         'agua 是阴性名词，但重读 a 开头时用 un（不是 una），这是为避免两个 a 音连读。'),
        ('___ niños juegan en el parque.', ['Los', 'Las', 'Un', 'El'], 0,
         '特指「那些孩子」用定冠词复数 los。niños 是阳性复数。'),
        ('Es ___ estudiante muy aplicada.', ['una', 'un', 'la', 'el'], 0,
         'estudiante 是通性名词，性别由冠词体现；aplicada 是阴性形式，说明指的是女性，所以用 una。'),
    ]),
    ('形容词的性数一致', [
        ('una casa ___', ['blanca', 'blanco', 'blancas', 'blancos'], 0,
         '形容词必须与名词的性和数一致：casa 是阴性单数，所以用 blanca。'),
        ('unos libros ___', ['nuevos', 'nuevo', 'nueva', 'nuevas'], 0,
         'libros 是阳性复数，形容词用 nuevos。形容词的复数与名词同步。'),
        ('El chico es ___.', ['alto', 'alta', 'altos', 'altas'], 0,
         'chico 是阳性单数，形容词用 alto。以 -o 结尾的形容词有四种形式（o/a/os/as）。'),
        ('Ana y Luis son ___.', ['simpáticos', 'simpático', 'simpática', 'simpáticas'], 0,
         '主语一男一女混合时，形容词用阳性复数：simpáticos。这是西语的「阳性优先」规则。'),
    ]),
    ('现在时规则动词变位', [
        ('Yo ___ español todos los días.', ['hablo', 'hablas', 'habla', 'hablamos'], 0,
         '-ar 动词现在时：yo hablo。词尾依次是 -o, -as, -a, -amos, -áis, -an。'),
        ('Tú ___ pan por la mañana.', ['comes', 'como', 'come', 'comemos'], 0,
         '-er 动词：tú comes。注意 -er 与 -ir 动词的 nosotros 形式不同（comemos / vivimos）。'),
        ('Ella ___ en Madrid.', ['vive', 'vivo', 'vives', 'viven'], 0,
         '-ir 动词第三人称单数：ella vive。变位规则与 -er 动词基本相同。'),
        ('Nosotros ___ la tarea juntos.', ['hacemos', 'hacéis', 'hacen', 'hago'], 0,
         'nosotros 对应 -emos 词尾：hacemos。hacer 第一人称单数是 hago（不规则），但 nosotros 形式规则。'),
    ]),
    ('所有格形容词', [
        ('___ hermana se llama Lucía.', ['Mi', 'Mí', 'Yo', 'Me'], 0,
         'mi 是「我的」短尾形式，直接放在名词前，且不随名词性别变化：mi hermano / mi hermana。'),
        ('¿Dónde está ___ coche?', ['tu', 'tú', 'ti', 'te'], 0,
         'tu 是形容词「你的」（无重音），tú 是代词「你」（带重音）。这是最常考的区分。'),
        ('___ padres viven en Sevilla.', ['Mis', 'Mi', 'Míos', 'Mías'], 0,
         '修饰复数名词时所有格也用复数：mis padres。míos 是后置的长尾形式（los padres míos）。'),
        ('___ casa es muy grande.', ['Nuestra', 'Nuestro', 'Nuestros', 'Nuestras'], 0,
         'nuestro 随名词变化：casa 是阴性单数，所以用 nuestra。'),
    ]),
    ('否定句与疑问句', [
        ('___ hablo inglés.', ['No', 'Nunca no', 'Sin', 'Ni'], 0,
         '否定句在动词前加 no：No hablo inglés。西语不用助动词 do 之类的结构。'),
        ('¿___ tú estudiar español?', ['Quieres', 'Querer', 'Quiere', 'Quiero'], 0,
         '一般疑问句只需把疑问词或语序调整，动词按主语变位：¿Quieres tú...? 也可省略 tú。'),
        ('No ___ nada.', ['sé', 'sabo', 'sé que', 'saber'], 0,
         '双重否定在西语中是必须的：No sé nada（我什么都不知道）。saber 第一人称是 sé（不规则）。'),
    ]),
]


def js(s):
    """输出 JS 单引号字符串"""
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def render():
    out = []
    out.append("")
    out.append("  // ---- A1 基础语法专项（补齐 A1 语法点无对应练习的缺口）----")
    for topic, qs in GROUPS:
        out.append("  {topic:%s, questions:[" % js(topic))
        for sent, opts, correct, exp in qs:
            out.append("    {sentence:%s, options:[%s], correct:%d, explain:%s},"
                       % (js(sent), ", ".join(js(o) for o in opts), correct, js(exp)))
        # 去掉最后一行的尾逗号（保持数组末尾无逗号，与既有风格一致）
        out[-1] = out[-1].rstrip(',')
        out.append("  ]},")
    out[-1] = out[-1].rstrip(',')
    return "\n".join(out)


if __name__ == '__main__':
    import json
    print(json.dumps({'topics': [t for t, _ in GROUPS],
                      'questions': sum(len(q) for _, q in GROUPS)},
                     ensure_ascii=False))
    with open('tools/_a1_grammar_block.js', 'w', encoding='utf-8') as f:
        f.write(render())
    print('已生成 tools/_a1_grammar_block.js')
