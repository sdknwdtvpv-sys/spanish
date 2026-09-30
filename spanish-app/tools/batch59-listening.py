# -*- coding: utf-8 -*-
"""批次 59：把听力分布拉平（A1 +2 / B1 +2 / C2 +2）

原分布 A1 8 / A2 8 / B1 7 / B2 11 / C1 10 / C2 8，B2 明显偏高。
本批补 A1、B1、C2 各 2 段，补完为 10/8/9/11/10/10。

（另：本批修正了两处标题重复——B1 内两个「讨论环保习惯」、
A2 与 B1 同名的「租房看房」，已改名区分。）
"""


def D(level, title, speaker, dur, es, zh, kv, qs):
    return {'level': level, 'title': title, 'speaker': speaker, 'duration': dur,
            'es': es, 'zh': zh, 'keyVocab': kv, 'questions': qs}


BATCH = [
    # ---------------- A1 ----------------
    D('A1', '在面包店', 'Dependienta / Cliente', '约 30 秒',
      "DEPENDIENTA: Buenos días, ¿qué le pongo?\n"
      "CLIENTE: Una barra de pan, por favor.\n"
      "DEPENDIENTA: ¿Algo más?\n"
      "CLIENTE: Sí, dos cruasanes.\n"
      "DEPENDIENTA: Son dos euros con cincuenta.\n"
      "CLIENTE: Aquí tiene. Gracias.",
      "店员：早上好，您要什么？\n"
      "顾客：一根面包，谢谢。\n"
      "店员：还要别的吗？\n"
      "顾客：要，两个牛角包。\n"
      "店员：一共两块五。\n"
      "顾客：给您。谢谢。",
      [{'es': '¿Qué le pongo?', 'zh': '您要什么？（店里问顾客）'},
       {'es': 'Una barra de pan', 'zh': '一根长面包'},
       {'es': 'El cruasán', 'zh': '牛角包'},
       {'es': 'Aquí tiene', 'zh': '给您（递东西时）'}],
      [{'q': '¿Qué compra el cliente?', 'a': 'Una barra de pan y dos cruasanes.'},
       {'q': '¿Cuánto cuesta?', 'a': 'Dos euros con cincuenta.'}]),

    D('A1', '打电话约朋友', 'Ana / Pablo', '约 30 秒',
      "ANA: ¿Diga? \n"
      "PABLO: Hola, Ana, soy Pablo. ¿Qué haces esta tarde?\n"
      "ANA: Nada especial. ¿Por qué?\n"
      "PABLO: ¿Quieres ir al cine?\n"
      "ANA: Vale. ¿A qué hora?\n"
      "PABLO: A las siete, si te parece bien.\n"
      "ANA: Perfecto, hasta luego.",
      "安娜：喂？\n"
      "巴勃罗：安娜你好，我是巴勃罗。你今天下午做什么？\n"
      "安娜：没什么特别的。怎么了？\n"
      "巴勃罗：想去看电影吗？\n"
      "安娜：好啊。几点？\n"
      "巴勃罗：七点，如果你觉得可以。\n"
      "安娜：好，待会儿见。",
      [{'es': '¿Diga?', 'zh': '喂？（接电话）'},
       {'es': 'Soy Pablo', 'zh': '我是巴勃罗'},
       {'es': 'Nada especial', 'zh': '没什么特别的'},
       {'es': 'Si te parece bien', 'zh': '如果你觉得可以'},
       {'es': 'Hasta luego', 'zh': '待会儿见'}],
      [{'q': '¿Quién llama?', 'a': 'Pablo.'},
       {'q': '¿Qué van a hacer?', 'a': 'Van a ir al cine.'},
       {'q': '¿A qué hora quedan?', 'a': 'A las siete.'}]),

    # ---------------- B1 ----------------
    D('B1', '谈职业规划', 'Orientadora / Álvaro', '约 65 秒',
      "ORIENTADORA: Cuéntame, ¿tienes claro qué quieres hacer?\n"
      "ÁLVARO: No del todo. Me interesa la tecnología, pero no sé en qué área.\n"
      "ORIENTADORA: ¿Has pensado en hacer prácticas antes de decidir?\n"
      "ÁLVARO: La verdad es que no. Pensaba que primero había que elegir.\n"
      "ORIENTADORA: No necesariamente. Probar te da información que ningún test da.\n"
      "ÁLVARO: Tiene sentido. ¿Dónde puedo buscar prácticas?\n"
      "ORIENTADORA: En la bolsa de empleo de la universidad y en algunos programas públicos.\n"
      "ÁLVARO: Voy a mirarlo esta semana.",
      "指导老师：说说看，你清楚自己想做什么吗？\n"
      "阿尔瓦罗：不完全清楚。我对技术感兴趣，但不知道具体哪个方向。\n"
      "指导老师：你考虑过先实习再决定吗？\n"
      "阿尔瓦罗：其实没有。我以为得先选定方向。\n"
      "指导老师：不一定。试过才能获得任何测评都给不了的信息。\n"
      "阿尔瓦罗：有道理。我在哪里能找到实习？\n"
      "指导老师：学校的就业平台，还有一些公共项目。\n"
      "阿尔瓦罗：我这周就去看看。",
      [{'es': '¿Tienes claro?', 'zh': '你清楚吗？'},
       {'es': 'No del todo', 'zh': '不完全'},
       {'es': 'hacer prácticas', 'zh': '实习'},
       {'es': 'Tiene sentido', 'zh': '有道理'},
       {'es': 'la bolsa de empleo', 'zh': '就业平台、招聘库'},
       {'es': 'Voy a mirarlo', 'zh': '我去看看'}],
      [{'q': '¿Tiene claro Álvaro lo que quiere hacer?', 'a': 'No del todo: le interesa la tecnología pero no sabe en qué área.'},
       {'q': '¿Qué le sugiere la orientadora?', 'a': 'Que haga prácticas antes de decidir, porque probar da información que ningún test da.'},
       {'q': '¿Dónde puede buscar prácticas?', 'a': 'En la bolsa de empleo de la universidad y en algunos programas públicos.'}]),

    D('B1', '与房东沟通维修问题', 'Inquilino / Casera', '约 60 秒',
      "INQUILINO: Buenos días, le llamo por la calefacción.\n"
      "CASERA: ¿Qué le pasa?\n"
      "INQUILINO: Lleva tres días sin funcionar y en casa hace mucho frío.\n"
      "CASERA: Lo siento. ¿Ha mirado si es la caldera?\n"
      "INQUILINO: Sí, y el técnico dice que hay que cambiar una pieza.\n"
      "CASERA: De acuerdo, mándame el presupuesto y lo arreglamos.\n"
      "INQUILINO: ¿Se encarga usted del pago?\n"
      "CASERA: Sí, eso corre de mi cuenta según el contrato.",
      "租客：您好，我打电话是说暖气的事。\n"
      "房东：怎么了？\n"
      "租客：已经三天不工作了，家里很冷。\n"
      "房东：抱歉。您看过是不是锅炉的问题吗？\n"
      "租客：看了，技术员说需要换一个零件。\n"
      "房东：好，把报价发给我，我们处理。\n"
      "租客：您负责付款吗？\n"
      "房东：是的，按合同这由我承担。",
      [{'es': 'le llamo por', 'zh': '我打电话是为了……'},
       {'es': 'sin funcionar', 'zh': '不能工作、坏了'},
       {'es': 'la caldera', 'zh': '锅炉'},
       {'es': 'el presupuesto', 'zh': '报价'},
       {'es': 'corre de mi cuenta', 'zh': '由我承担'},
       {'es': 'según el contrato', 'zh': '按合同'}],
      [{'q': '¿Por qué llama el inquilino?', 'a': 'Porque la calefacción lleva tres días sin funcionar.'},
       {'q': '¿Qué dice el técnico?', 'a': 'Que hay que cambiar una pieza.'},
       {'q': '¿Quién paga la reparación?', 'a': 'La casera, según el contrato.'}]),

    # ---------------- C2 ----------------
    D('C2', '学术对谈：何为证据', 'Profesora Ríos / Doctor Vega', '约 90 秒',
      "RÍOS: Hablamos de evidencia como si fuera una sola cosa, y no lo es.\n"
      "VEGA: En efecto. Está la evidencia que uno produce y la que hereda del campo.\n"
      "RÍOS: Y no pesan igual. Un dato replicado vale más que uno llamativo.\n"
      "VEGA: De acuerdo, aunque replicar tampoco garantiza gran cosa si el diseño era malo.\n"
      "RÍOS: Ahí está el problema: la replicación valida el procedimiento, no la pregunta.\n"
      "VEGA: Se puede replicar impecablemente una pregunta irrelevante.\n"
      "RÍOS: Y publicarla, porque el método es correcto.\n"
      "VEGA: Lo cual deja al lector con la impresión de que sabemos más de lo que sabemos.",
      "里奥斯教授：我们谈论证据时，仿佛它是单一的东西，其实不是。\n"
      "维加博士：确实。有你自己产生的证据，也有从领域里继承来的证据。\n"
      "里奥斯教授：而两者的分量不同。一个被重复验证的数据比一个惊人的数据更有价值。\n"
      "维加博士：同意，不过如果设计本身很糟，重复验证也保证不了什么。\n"
      "里奥斯教授：问题就在这里：重复验证的是程序，而不是问题本身。\n"
      "维加博士：一个无关紧要的问题也可以被无懈可击地重复验证。\n"
      "里奥斯教授：而且能发表，因为方法是对的。\n"
      "维加博士：这就让读者以为我们知道的东西比实际更多。",
      [{'es': 'la evidencia heredada', 'zh': '继承来的证据'},
       {'es': 'no pesan igual', 'zh': '分量不同'},
       {'es': 'un dato replicado', 'zh': '被重复验证的数据'},
       {'es': 'el diseño experimental', 'zh': '实验设计'},
       {'es': 'impecablemente', 'zh': '无懈可击地'},
       {'es': 'una pregunta irrelevante', 'zh': '一个无关紧要的问题'},
       {'es': 'sabemos más de lo que sabemos', 'zh': '我们知道的比实际更多'}],
      [{'q': '¿Por qué sostiene Ríos que la evidencia no es «una sola cosa»?', 'a': 'Porque distingue entre la evidencia que uno produce y la que hereda del campo, y ambas no pesan igual.'},
       {'q': '¿Qué objeción plantea Vega a la replicación?', 'a': 'Que replicar no garantiza gran cosa si el diseño era malo: la replicación valida el procedimiento, no la pregunta.'},
       {'q': '¿Cuál es la consecuencia que señalan al final?', 'a': 'Que se puede replicar y publicar una pregunta irrelevante, lo cual deja al lector con la impresión de que sabemos más de lo que sabemos.'}]),

    D('C2', '文化评论：怀旧的用途', 'Crítico Salas / Editora Nuria', '约 85 秒',
      "SALAS: La nostalgia se ha convertido en un género comercial.\n"
      "NURIA: Y en un argumento político, lo cual es más preocupante.\n"
      "SALAS: Se invoca un pasado que nunca existió para descalificar el presente.\n"
      "NURIA: Lo curioso es que ese pasado idealizado suele ser reciente.\n"
      "SALAS: Dos o tres décadas, como mucho. Antes de eso, silencio.\n"
      "NURIA: Porque la nostalgia necesita una pérdida reconocible, no una antigua.\n"
      "SALAS: Y cuanto más vaga es la pérdida, más fácil resulta proyectar en ella lo que se quiere.\n"
      "NURIA: De ahí que sirva tan bien para vender y para gobernar.",
      "萨拉斯评论家：怀旧已经变成了一种商业类型。\n"
      "努里亚编辑：而且成了一种政治论据，这更令人担忧。\n"
      "萨拉斯评论家：人们援引一个从未存在过的过去，用来否定现在。\n"
      "努里亚编辑：有意思的是，那个被理想化的过去通常是近期的。\n"
      "萨拉斯评论家：最多二三十年。再往前就沉默了。\n"
      "努里亚编辑：因为怀旧需要一个可辨认的丧失，而不是古老的丧失。\n"
      "萨拉斯评论家：而丧失越模糊，就越容易在上面投射想要的东西。\n"
      "努里亚编辑：所以它既好用来卖东西，也好用来治理。",
      [{'es': 'la nostalgia', 'zh': '怀旧'},
       {'es': 'un género comercial', 'zh': '商业类型'},
       {'es': 'descalificar el presente', 'zh': '否定现在'},
       {'es': 'un pasado idealizado', 'zh': '被理想化的过去'},
       {'es': 'una pérdida reconocible', 'zh': '可辨认的丧失'},
       {'es': 'cuanto más vaga', 'zh': '越模糊'},
       {'es': 'proyectar en ella', 'zh': '在上面投射'},
       {'es': 'De ahí que sirva', 'zh': '所以它有用（de ahí que + 虚拟式）'}],
      [{'q': '¿Qué dos funciones atribuye Salas a la nostalgia?', 'a': 'Se ha convertido en un género comercial y en un argumento político.'},
       {'q': '¿Por qué el pasado idealizado suele ser reciente?', 'a': 'Porque la nostalgia necesita una pérdida reconocible, no una antigua; por eso se remonta dos o tres décadas como mucho.'},
       {'q': '¿Qué efecto tiene la vaguedad de la pérdida?', 'a': 'Que resulta más fácil proyectar en ella lo que se quiere, de ahí que sirva tanto para vender como para gobernar.'}]),
]
