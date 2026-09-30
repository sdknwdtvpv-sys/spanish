# -*- coding: utf-8 -*-
"""批次 44：补初学者口语练习（A1/A2/B1 各 15 句 / 共 45 句）

起因：audit 发现口语练习等级分布严重偏高级——A1/A2/B1 各只有 5 句，
而 B2/C1/C2 各 20 句。初学者对着屏幕开口最难，练习量却最少。
本批把三个低等级提到 20 句，与高级对齐（5/5/5/20/20/20 → 20/20/20/20/20/20）。
"""

BATCH = [
    # ---------------- A1 ----------------
    {'level': 'A1', 'es': 'Buenos días, ¿tiene una mesa libre?', 'zh': '早上好，有空桌吗？', 'slow': 'Buenos días,… ¿tiene una mesa libre?', 'vocab': ['Buenos días', 'una mesa libre']},
    {'level': 'A1', 'es': '¿Cuánto cuesta esto? Es muy bonito.', 'zh': '这个多少钱？很好看。', 'slow': '¿Cuánto cuesta esto?… Es muy bonito.', 'vocab': ['Cuánto cuesta', 'muy bonito']},
    {'level': 'A1', 'es': 'Vivo en un piso pequeño con mi familia.', 'zh': '我和家人住在一间小公寓里。', 'slow': 'Vivo en un piso pequeño con mi familia.', 'vocab': ['Vivo en', 'mi familia']},
    {'level': 'A1', 'es': 'Me levanto a las siete y desayuno café.', 'zh': '我七点起床，早餐喝咖啡。', 'slow': 'Me levanto a las siete y desayuno café.', 'vocab': ['Me levanto', 'desayuno']},
    {'level': 'A1', 'es': 'Hoy hace mucho frío, ¿verdad?', 'zh': '今天很冷，是吧？', 'slow': 'Hoy hace mucho frío,… ¿verdad?', 'vocab': ['Hace mucho frío', 'verdad']},
    {'level': 'A1', 'es': '¿Puedes hablar más despacio, por favor?', 'zh': '你能说慢一点吗？', 'slow': '¿Puedes hablar más despacio,… por favor?', 'vocab': ['más despacio', 'por favor']},
    {'level': 'A1', 'es': 'No entiendo esta palabra, ¿me la explicas?', 'zh': '我不懂这个词，能解释一下吗？', 'slow': 'No entiendo esta palabra,… ¿me la explicas?', 'vocab': ['No entiendo', 'me la explicas']},
    {'level': 'A1', 'es': 'Mi color favorito es el azul.', 'zh': '我最喜欢的颜色是蓝色。', 'slow': 'Mi color favorito es el azul.', 'vocab': ['color favorito', 'el azul']},
    {'level': 'A1', 'es': 'El sábado voy al mercado con mi madre.', 'zh': '周六我和妈妈去市场。', 'slow': 'El sábado voy al mercado con mi madre.', 'vocab': ['voy al mercado', 'mi madre']},
    {'level': 'A1', 'es': 'Me gusta mucho esta ciudad.', 'zh': '我很喜欢这座城市。', 'slow': 'Me gusta mucho esta ciudad.', 'vocab': ['Me gusta mucho', 'esta ciudad']},
    {'level': 'A1', 'es': '¿A qué hora abre la tienda?', 'zh': '商店几点开门？', 'slow': '¿A qué hora abre la tienda?', 'vocab': ['A qué hora', 'la tienda']},
    {'level': 'A1', 'es': 'Tengo dos hermanos y una hermana.', 'zh': '我有两个兄弟和一个姐妹。', 'slow': 'Tengo dos hermanos y una hermana.', 'vocab': ['Tengo dos hermanos', 'una hermana']},
    {'level': 'A1', 'es': 'Perdón, ¿este autobús va al centro?', 'zh': '请问这趟公交去市中心吗？', 'slow': 'Perdón,… ¿este autobús va al centro?', 'vocab': ['este autobús', 'al centro']},
    {'level': 'A1', 'es': 'Estoy aprendiendo español desde enero.', 'zh': '我从一月开始学西语。', 'slow': 'Estoy aprendiendo español desde enero.', 'vocab': ['Estoy aprendiendo', 'desde enero']},
    {'level': 'A1', 'es': '¿Me trae la cuenta, por favor?', 'zh': '请把账单给我好吗？', 'slow': '¿Me trae la cuenta,… por favor?', 'vocab': ['Me trae', 'la cuenta']},
    # ---------------- A2 ----------------
    {'level': 'A2', 'es': 'El verano pasado estuve dos semanas en México.', 'zh': '去年夏天我在墨西哥待了两周。', 'slow': 'El verano pasado estuve dos semanas en México.', 'vocab': ['El verano pasado', 'dos semanas']},
    {'level': 'A2', 'es': 'Todavía no he terminado el trabajo de historia.', 'zh': '我还没写完历史作业。', 'slow': 'Todavía no he terminado el trabajo de historia.', 'vocab': ['Todavía no he terminado', 'el trabajo']},
    {'level': 'A2', 'es': 'Creo que deberías descansar un poco más.', 'zh': '我觉得你该多休息一下。', 'slow': 'Creo que deberías descansar un poco más.', 'vocab': ['deberías descansar', 'un poco más']},
    {'level': 'A2', 'es': 'Cuando era niño, jugaba al fútbol todos los días.', 'zh': '我小时候每天踢足球。', 'slow': 'Cuando era niño,… jugaba al fútbol todos los días.', 'vocab': ['Cuando era niño', 'todos los días']},
    {'level': 'A2', 'es': '¿Te apetece ir al cine esta noche?', 'zh': '今晚想去看电影吗？', 'slow': '¿Te apetece ir al cine esta noche?', 'vocab': ['Te apetece', 'esta noche']},
    {'level': 'A2', 'es': 'He reservado una mesa para las nueve.', 'zh': '我订了九点的位子。', 'slow': 'He reservado una mesa para las nueve.', 'vocab': ['He reservado', 'una mesa']},
    {'level': 'A2', 'es': 'Si tengo tiempo, te llamo por la tarde.', 'zh': '如果我有时间，下午给你打电话。', 'slow': 'Si tengo tiempo,… te llamo por la tarde.', 'vocab': ['Si tengo tiempo', 'por la tarde']},
    {'level': 'A2', 'es': 'Me duele la espalda desde el lunes.', 'zh': '我从周一开始背疼。', 'slow': 'Me duele la espalda desde el lunes.', 'vocab': ['Me duele la espalda', 'desde el lunes']},
    {'level': 'A2', 'es': 'Estoy buscando un piso cerca del trabajo.', 'zh': '我在找工作附近的房子。', 'slow': 'Estoy buscando un piso cerca del trabajo.', 'vocab': ['Estoy buscando', 'cerca del trabajo']},
    {'level': 'A2', 'es': 'Antes vivía en el campo, ahora en la ciudad.', 'zh': '以前我住在乡下，现在住在城里。', 'slow': 'Antes vivía en el campo,… ahora en la ciudad.', 'vocab': ['Antes vivía', 'ahora']},
    {'level': 'A2', 'es': '¿Has estado alguna vez en Barcelona?', 'zh': '你去过巴塞罗那吗？', 'slow': '¿Has estado alguna vez en Barcelona?', 'vocab': ['Has estado', 'alguna vez']},
    {'level': 'A2', 'es': 'Acabo de recibir tu mensaje, perdona.', 'zh': '我刚收到你的消息，抱歉。', 'slow': 'Acabo de recibir tu mensaje,… perdona.', 'vocab': ['Acabo de recibir', 'perdona']},
    {'level': 'A2', 'es': 'Voy a apuntarme a un curso de cocina.', 'zh': '我打算报一个烹饪课。', 'slow': 'Voy a apuntarme a un curso de cocina.', 'vocab': ['Voy a apuntarme', 'un curso']},
    {'level': 'A2', 'es': 'Este restaurante es más caro que el otro.', 'zh': '这家餐厅比那家贵。', 'slow': 'Este restaurante es más caro que el otro.', 'vocab': ['más caro que', 'el otro']},
    {'level': 'A2', 'es': 'Cuando termine el examen, saldremos a celebrarlo.', 'zh': '考完试我们就出去庆祝。', 'slow': 'Cuando termine el examen,… saldremos a celebrarlo.', 'vocab': ['Cuando termine', 'a celebrarlo']},
    # ---------------- B1 ----------------
    {'level': 'B1', 'es': 'Llevo dos años viviendo en esta ciudad y me gusta mucho.', 'zh': '我在这座城市住了两年，很喜欢。', 'slow': 'Llevo dos años viviendo en esta ciudad y me gusta mucho.', 'vocab': ['Llevo dos años', 'me gusta mucho']},
    {'level': 'B1', 'es': 'Aunque llueva, vamos a salir esta tarde.', 'zh': '即使下雨，我们今天下午也要出去。', 'slow': 'Aunque llueva,… vamos a salir esta tarde.', 'vocab': ['Aunque llueva', 'esta tarde']},
    {'level': 'B1', 'es': 'Me parece que la situación ha mejorado bastante.', 'zh': '我觉得情况好转了不少。', 'slow': 'Me parece que la situación ha mejorado bastante.', 'vocab': ['Me parece que', 'ha mejorado']},
    {'level': 'B1', 'es': 'Si hubiera sabido eso antes, habría actuado distinto.', 'zh': '要是我早知道，就会另作处理。', 'slow': 'Si hubiera sabido eso antes,… habría actuado distinto.', 'vocab': ['Si hubiera sabido', 'distinto']},
    {'level': 'B1', 'es': 'El problema es que nadie quiere asumir la responsabilidad.', 'zh': '问题在于没有人愿意承担责任。', 'slow': 'El problema es que nadie quiere asumir la responsabilidad.', 'vocab': ['El problema es que', 'asumir la responsabilidad']},
    {'level': 'B1', 'es': 'Estoy de acuerdo en parte, pero hay matices importantes.', 'zh': '我部分同意，但有些重要的细微差别。', 'slow': 'Estoy de acuerdo en parte,… pero hay matices importantes.', 'vocab': ['de acuerdo en parte', 'matices']},
    {'level': 'B1', 'es': 'Es importante que todos participen en la decisión.', 'zh': '重要的是所有人都参与这个决定。', 'slow': 'Es importante que todos participen en la decisión.', 'vocab': ['Es importante que', 'participen']},
    {'level': 'B1', 'es': 'No creo que sea tan difícil como parece.', 'zh': '我觉得没有看上去那么难。', 'slow': 'No creo que sea tan difícil como parece.', 'vocab': ['No creo que', 'tan difícil']},
    {'level': 'B1', 'es': 'Cuando llegué a casa, ya habían cenado.', 'zh': '我到家时，他们已经吃过晚饭了。', 'slow': 'Cuando llegué a casa,… ya habían cenado.', 'vocab': ['Cuando llegué', 'ya habían cenado']},
    {'level': 'B1', 'es': 'A pesar del mal tiempo, la excursión fue un éxito.', 'zh': '尽管天气不好，远足还是很成功。', 'slow': 'A pesar del mal tiempo,… la excursión fue un éxito.', 'vocab': ['A pesar del', 'fue un éxito']},
    {'level': 'B1', 'es': 'Me interesa mucho el tema de la energía renovable.', 'zh': '我对可再生能源这个主题很感兴趣。', 'slow': 'Me interesa mucho el tema de la energía renovable.', 'vocab': ['Me interesa mucho', 'energía renovable']},
    {'level': 'B1', 'es': 'En cuanto tenga los datos, te los envío.', 'zh': '我一拿到数据就发给你。', 'slow': 'En cuanto tenga los datos,… te los envío.', 'vocab': ['En cuanto tenga', 'te los envío']},
    {'level': 'B1', 'es': 'Lo que más me cuesta es hablar en público.', 'zh': '我最大的困难是当众讲话。', 'slow': 'Lo que más me cuesta es hablar en público.', 'vocab': ['Lo que más me cuesta', 'en público']},
    {'level': 'B1', 'es': 'Deberíamos haber reservado con más antelación.', 'zh': '我们本该更早预订的。', 'slow': 'Deberíamos haber reservado con más antelación.', 'vocab': ['Deberíamos haber', 'con más antelación']},
    {'level': 'B1', 'es': 'Por lo visto, el proyecto se retrasará hasta junio.', 'zh': '看样子项目要推迟到六月。', 'slow': 'Por lo visto,… el proyecto se retrasará hasta junio.', 'vocab': ['Por lo visto', 'se retrasará']}
]
