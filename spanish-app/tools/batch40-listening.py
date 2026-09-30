# -*- coding: utf-8 -*-
"""批次 40：补初学者听力材料（A1/A2/B1 各 4 段）

起因：audit 发现听力材料严重偏高级——A1 4 段 / A2 4 段 / B1 3 段，
而 B2 11 / C1 10 / C2 8。而 A1/A2 的单元数（14/13）并不少。
对初学者来说听力是最大障碍，却恰好是练习量最少的等级。
本批把三个低等级补到 8/8/7。"""


def D(title, speaker, dur, es, zh, kv, qs, level):
    return {'level': level, 'title': title, 'speaker': speaker, 'duration': dur,
            'es': es, 'zh': zh, 'keyVocab': kv, 'questions': qs}


BATCH = [
    # ---------------- A1 ----------------
    D('在服装店', 'Dependienta / Cliente', '约 35 秒',
      "DEPENDIENTA: Buenos días, ¿le puedo ayudar?\n"
      "CLIENTE: Sí, busco una camisa azul.\n"
      "DEPENDIENTA: ¿Qué talla usa?\n"
      "CLIENTE: La cuarenta.\n"
      "DEPENDIENTA: Aquí tiene. ¿Quiere probársela?\n"
      "CLIENTE: Sí, ¿dónde está el probador?\n"
      "DEPENDIENTA: Al fondo, a la derecha.",
      "店员：早上好，需要帮忙吗？\n"
      "顾客：是的，我在找一件蓝色衬衫。\n"
      "店员：您穿什么尺码？\n"
      "顾客：40 码。\n"
      "店员：给您。要试穿吗？\n"
      "顾客：好，试衣间在哪里？\n"
      "店员：在最后面，右手边。",
      [{'es': 'Una camisa azul', 'zh': '一件蓝色衬衫'},
       {'es': '¿Qué talla usa?', 'zh': '您穿什么尺码？'},
       {'es': 'La cuarenta', 'zh': '40 码'},
       {'es': 'probársela', 'zh': '试穿它（自复动词 + 代词）'},
       {'es': 'el probador', 'zh': '试衣间'},
       {'es': 'Al fondo', 'zh': '在最后面、在里头'}],
      [{'q': '¿Qué busca el cliente?', 'a': 'Una camisa azul.'},
       {'q': '¿Qué talla usa?', 'a': 'La cuarenta.'},
       {'q': '¿Dónde está el probador?', 'a': 'Al fondo, a la derecha.'}],
      'A1'),

    D('介绍家人', 'Ana / Luis', '约 30 秒',
      "ANA: ¡Hola, Luis! ¿Quién es esa chica de la foto?\n"
      "LUIS: Es mi hermana Marta. Tiene veinte años.\n"
      "ANA: ¿Y estudia o trabaja?\n"
      "LUIS: Estudia Medicina. Y el niño es mi sobrino.\n"
      "ANA: ¡Qué guapo! ¿Cuántos años tiene?\n"
      "LUIS: Cinco. Es hijo de mi hermano mayor.",
      "安娜：嗨，路易斯！照片里那个女孩是谁？\n"
      "路易斯：是我妹妹玛尔塔。她二十岁。\n"
      "安娜：那她是上学还是工作？\n"
      "路易斯：学医。那个小男孩是我侄子。\n"
      "安娜：真可爱！他几岁了？\n"
      "路易斯：五岁。是我哥哥的儿子。",
      [{'es': 'mi hermana', 'zh': '我的妹妹'},
       {'es': 'Tiene veinte años', 'zh': '她二十岁'},
       {'es': 'mi sobrino', 'zh': '我的侄子'},
       {'es': '¿Cuántos años tiene?', 'zh': '他几岁了？'},
       {'es': 'mi hermano mayor', 'zh': '我的哥哥'}],
      [{'q': '¿Quién es Marta?', 'a': 'Es la hermana de Luis.'},
       {'q': '¿Qué estudia Marta?', 'a': 'Estudia Medicina.'},
       {'q': '¿Cuántos años tiene el sobrino?', 'a': 'Cinco años.'}],
      'A1'),

    D('问时间与约见', 'Turista / Policía', '约 30 秒',
      "TURISTA: Perdón, ¿tiene hora?\n"
      "POLICÍA: Sí, son las diez y cuarto.\n"
      "TURISTA: Gracias. ¿A qué hora abre el museo?\n"
      "POLICÍA: A las diez y media.\n"
      "TURISTA: ¿Y cierra los lunes?\n"
      "POLICÍA: Sí, los lunes está cerrado.\n"
      "TURISTA: Muy amable, gracias.",
      "游客：打扰一下，请问几点了？\n"
      "警察：十点一刻。\n"
      "游客：谢谢。博物馆几点开门？\n"
      "警察：十点半。\n"
      "游客：那周一关门吗？\n"
      "警察：是的，周一闭馆。\n"
      "游客：您太客气了，谢谢。",
      [{'es': '¿Tiene hora?', 'zh': '请问几点了？（客气的问法）'},
       {'es': 'las diez y cuarto', 'zh': '十点一刻'},
       {'es': '¿A qué hora abre?', 'zh': '几点开门？'},
       {'es': 'las diez y media', 'zh': '十点半'},
       {'es': 'está cerrado', 'zh': '关门、闭馆'},
       {'es': 'Muy amable', 'zh': '您太客气了（道谢用语）'}],
      [{'q': '¿Qué hora es?', 'a': 'Son las diez y cuarto.'},
       {'q': '¿A qué hora abre el museo?', 'a': 'A las diez y media.'},
       {'q': '¿Qué día está cerrado?', 'a': 'Los lunes.'}],
      'A1'),

    D('在餐厅点菜', 'Camarero / Cliente', '约 40 秒',
      "CAMARERO: Buenas noches. ¿Ya saben qué van a tomar?\n"
      "CLIENTE: De primero, sopa de verduras. De segundo, pollo asado.\n"
      "CAMARERO: ¿Y para beber?\n"
      "CLIENTE: Agua sin gas, por favor.\n"
      "CAMARERO: ¿Quieren postre?\n"
      "CLIENTE: Sí, dos flanes. Y la cuenta, cuando pueda.\n"
      "CAMARERO: Enseguida.",
      "服务员：晚上好。想好点什么了吗？\n"
      "顾客：头盘要蔬菜汤，主菜要烤鸡。\n"
      "服务员：喝的呢？\n"
      "顾客：请给不带气的水。\n"
      "服务员：要甜点吗？\n"
      "顾客：要两份焦糖布丁。方便的话，把账单也拿来。\n"
      "服务员：马上就来。",
      [{'es': 'De primero', 'zh': '头盘（第一道菜）'},
       {'es': 'De segundo', 'zh': '主菜（第二道菜）'},
       {'es': 'Agua sin gas', 'zh': '不带气的水'},
       {'es': 'el postre', 'zh': '甜点'},
       {'es': 'la cuenta', 'zh': '账单'},
       {'es': 'Enseguida', 'zh': '马上、立刻'}],
      [{'q': '¿Qué pide de primero el cliente?', 'a': 'Sopa de verduras.'},
       {'q': '¿Qué bebe?', 'a': 'Agua sin gas.'},
       {'q': '¿Qué postre pide?', 'a': 'Dos flanes.'}],
      'A1'),

    # ---------------- A2 ----------------
    D('预约看医生', 'Recepcionista / Paciente', '约 45 秒',
      "RECEPCIONISTA: Consulta del doctor Ruiz, buenos días.\n"
      "PACIENTE: Hola, quería pedir cita para esta semana.\n"
      "RECEPCIONISTA: ¿Le viene bien el jueves a las cinco?\n"
      "PACIENTE: Mejor el viernes por la mañana, si es posible.\n"
      "RECEPCIONISTA: El viernes a las once y media, entonces.\n"
      "PACIENTE: Perfecto. ¿Tengo que traer algo?\n"
      "RECEPCIONISTA: Su tarjeta sanitaria y el informe anterior.",
      "接待员：鲁伊斯医生诊室，早上好。\n"
      "病人：你好，我想约这周的时间。\n"
      "接待员：周四五点方便吗？\n"
      "病人：如果可以的话，周五上午更好。\n"
      "接待员：那就周五十一点半。\n"
      "病人：好的。我需要带什么吗？\n"
      "接待员：您的医疗卡和之前的检查报告。",
      [{'es': 'pedir cita', 'zh': '预约'},
       {'es': '¿Le viene bien?', 'zh': '您方便吗？'},
       {'es': 'si es posible', 'zh': '如果可能的话'},
       {'es': 'la tarjeta sanitaria', 'zh': '医疗卡'},
       {'es': 'el informe', 'zh': '报告、诊断书'}],
      [{'q': '¿Para cuándo quiere la cita el paciente?', 'a': 'Para esta semana, preferiblemente el viernes por la mañana.'},
       {'q': '¿A qué hora es la cita?', 'a': 'A las once y media.'},
       {'q': '¿Qué tiene que traer?', 'a': 'Su tarjeta sanitaria y el informe anterior.'}],
      'A2'),

    D('在银行办卡', 'Empleado / Cliente', '约 50 秒',
      "EMPLEADO: Buenos días, ¿en qué puedo ayudarle?\n"
      "CLIENTE: Quería abrir una cuenta corriente.\n"
      "EMPLEADO: ¿Es para nómina o para ahorrar?\n"
      "CLIENTE: Para que me ingresen el sueldo.\n"
      "EMPLEADO: Entonces le recomiendo la cuenta joven, sin comisiones.\n"
      "CLIENTE: ¿Necesito algún documento?\n"
      "EMPLEADO: Su DNI y un justificante de domicilio.\n"
      "CLIENTE: Lo traigo mañana mismo.",
      "职员：早上好，有什么可以帮您？\n"
      "客户：我想开一个活期账户。\n"
      "职员：是用来发工资还是储蓄？\n"
      "客户：让公司把工资打进来。\n"
      "职员：那我推荐青年账户，免手续费。\n"
      "客户：需要什么证件吗？\n"
      "职员：身份证和一份住址证明。\n"
      "客户：我明天就带来。",
      [{'es': 'abrir una cuenta corriente', 'zh': '开活期账户'},
       {'es': 'la nómina', 'zh': '工资（月薪）'},
       {'es': 'ingresar el sueldo', 'zh': '存入工资'},
       {'es': 'sin comisiones', 'zh': '免手续费'},
       {'es': 'el justificante de domicilio', 'zh': '住址证明'},
       {'es': 'mañana mismo', 'zh': '明天就（强调）'}],
      [{'q': '¿Qué quiere hacer el cliente?', 'a': 'Abrir una cuenta corriente.'},
       {'q': '¿Para qué es la cuenta?', 'a': 'Para que le ingresen el sueldo.'},
       {'q': '¿Qué documentos necesita?', 'a': 'Su DNI y un justificante de domicilio.'}],
      'A2'),

    D('买火车票', 'Empleado / Viajera', '约 45 秒',
      "EMPLEADO: Buenos días, ¿qué desea?\n"
      "VIAJERA: Un billete de ida y vuelta a Valencia, por favor.\n"
      "EMPLEADO: ¿Para qué día?\n"
      "VIAJERA: Para el sábado, ida por la mañana y vuelta el domingo.\n"
      "EMPLEADO: Solo quedan plazas en segunda clase.\n"
      "VIAJERA: No importa. ¿Cuánto cuesta?\n"
      "EMPLEADO: Cuarenta y ocho euros con el descuento de ida y vuelta.\n"
      "VIAJERA: Perfecto, pago con tarjeta.",
      "售票员：早上好，您要什么？\n"
      "旅客：一张到瓦伦西亚的往返票，谢谢。\n"
      "售票员：哪天的？\n"
      "旅客：周六，上午去，周日回。\n"
      "售票员：只剩二等座的票了。\n"
      "旅客：没关系。多少钱？\n"
      "售票员：含往返折扣一共四十八欧。\n"
      "旅客：好的，我刷卡。",
      [{'es': 'un billete de ida y vuelta', 'zh': '一张往返票'},
       {'es': 'la ida', 'zh': '去程'},
       {'es': 'la vuelta', 'zh': '回程'},
       {'es': 'segunda clase', 'zh': '二等座'},
       {'es': 'No importa', 'zh': '没关系'},
       {'es': 'el descuento', 'zh': '折扣'}],
      [{'q': '¿Adónde va la viajera?', 'a': 'A Valencia.'},
       {'q': '¿Cuándo vuelve?', 'a': 'El domingo.'},
       {'q': '¿Cuánto cuesta el billete?', 'a': 'Cuarenta y ocho euros.'}],
      'A2'),

    D('谈论周末计划', 'Marta / Diego', '约 40 秒',
      "MARTA: ¿Qué vas a hacer este fin de semana?\n"
      "DIEGO: Voy a ir a la montaña con unos amigos. ¿Y tú?\n"
      "MARTA: Yo tengo que estudiar para el examen del lunes.\n"
      "DIEGO: ¡Qué rollo! ¿Te apetece salir el viernes por la noche?\n"
      "MARTA: Vale, pero no muy tarde.\n"
      "DIEGO: Tranquila, cenamos y volvemos pronto.\n"
      "MARTA: Perfecto, quedamos a las nueve.",
      "玛尔塔：这周末你打算做什么？\n"
      "迭戈：我要跟几个朋友去山里。你呢？\n"
      "玛尔塔：我得准备周一的考试。\n"
      "迭戈：真没劲！周五晚上想出去吗？\n"
      "玛尔塔：行，但别太晚。\n"
      "迭戈：放心，吃个饭就早点回来。\n"
      "玛尔塔：好，九点见。",
      [{'es': '¿Qué vas a hacer?', 'zh': '你打算做什么？'},
       {'es': 'Voy a ir', 'zh': '我打算去'},
       {'es': 'tengo que estudiar', 'zh': '我得学习'},
       {'es': '¡Qué rollo!', 'zh': '真没劲！真扫兴！'},
       {'es': '¿Te apetece?', 'zh': '你想吗？有兴趣吗？'},
       {'es': 'quedamos a las nueve', 'zh': '我们约九点见'}],
      [{'q': '¿Qué va a hacer Diego el fin de semana?', 'a': 'Va a ir a la montaña con unos amigos.'},
       {'q': '¿Por qué no puede salir Marta mucho tiempo?', 'a': 'Porque tiene que estudiar para el examen del lunes.'},
       {'q': '¿A qué hora quedan?', 'a': 'A las nueve.'}],
      'A2'),

    # ---------------- B1 ----------------
    D('办图书证', 'Bibliotecaria / Usuario', '约 55 秒',
      "BIBLIOTECARIA: Buenas tardes, ¿es la primera vez que viene?\n"
      "USUARIO: Sí, quería hacerme el carné de la biblioteca.\n"
      "BIBLIOTECARIA: Necesito su documento de identidad y una foto.\n"
      "USUARIO: Aquí tiene. ¿Cuántos libros puedo sacar?\n"
      "BIBLIOTECARIA: Hasta cuatro, durante veintiún días.\n"
      "USUARIO: ¿Y si me retraso en devolverlos?\n"
      "BIBLIOTECARIA: Se bloquea el carné unos días, pero no hay multa.\n"
      "USUARIO: Menos mal. ¿Hay sala de estudio?\n"
      "BIBLIOTECARIA: Sí, en la segunda planta, hasta las diez.",
      "图书管理员：下午好，您是第一次来吗？\n"
      "用户：是的，我想办张借书证。\n"
      "图书管理员：需要您的身份证件和一张照片。\n"
      "用户：给您。我可以借几本书？\n"
      "图书管理员：最多四本，为期二十一天。\n"
      "用户：如果我还晚了会怎样？\n"
      "图书管理员：借书证会被停用几天，不过没有罚款。\n"
      "用户：那就好。有自习室吗？\n"
      "图书管理员：有，在二楼，开到十点。",
      [{'es': 'el carné de la biblioteca', 'zh': '借书证'},
       {'es': 'el documento de identidad', 'zh': '身份证件'},
       {'es': 'sacar libros', 'zh': '借书'},
       {'es': 'retrasarse en devolverlos', 'zh': '还晚了'},
       {'es': 'Se bloquea el carné', 'zh': '借书证被停用'},
       {'es': 'la multa', 'zh': '罚款'},
       {'es': 'Menos mal', 'zh': '那就好、还好'}],
      [{'q': '¿Qué necesita el usuario para hacerse el carné?', 'a': 'Su documento de identidad y una foto.'},
       {'q': '¿Cuántos libros puede sacar y por cuánto tiempo?', 'a': 'Hasta cuatro libros durante veintiún días.'},
       {'q': '¿Qué pasa si devuelve los libros tarde?', 'a': 'Se le bloquea el carné unos días, pero no hay multa.'}],
      'B1'),

    D('处理银行卡问题', 'Operadora / Cliente', '约 60 秒',
      "OPERADORA: Atención al cliente, ¿en qué puedo ayudarle?\n"
      "CLIENTE: Me han cobrado dos veces la misma compra.\n"
      "OPERADORA: ¿Tiene a mano el número de la operación?\n"
      "CLIENTE: Sí, aquí lo tengo.\n"
      "OPERADORA: Veo el duplicado. Le devolvemos el importe en tres días hábiles.\n"
      "CLIENTE: ¿Y si no llega?\n"
      "OPERADORA: Vuelva a llamar con ese número y se abre una reclamación formal.\n"
      "CLIENTE: Entendido. ¿Me lo puede enviar por escrito?\n"
      "OPERADORA: Por supuesto, le mando un correo ahora mismo.",
      "客服：客服中心，有什么可以帮您？\n"
      "客户：同一笔消费被扣了两次。\n"
      "客服：您手边有交易单号吗？\n"
      "客户：有，我这儿有。\n"
      "客服：我看到这笔重复扣款了。款项会在三个工作日内退回。\n"
      "客户：如果没到账呢？\n"
      "客服：带着这个单号再打来，就会正式立案投诉。\n"
      "客户：明白了。能书面发给我吗？\n"
      "客服：当然，我现在就给您发邮件。",
      [{'es': 'Me han cobrado dos veces', 'zh': '被扣了两次钱'},
       {'es': 'el número de la operación', 'zh': '交易单号'},
       {'es': 'el duplicado', 'zh': '重复的那笔'},
       {'es': 'el importe', 'zh': '金额'},
       {'es': 'tres días hábiles', 'zh': '三个工作日'},
       {'es': 'una reclamación formal', 'zh': '正式投诉'},
       {'es': 'por escrito', 'zh': '以书面形式'}],
      [{'q': '¿Cuál es el problema del cliente?', 'a': 'Le han cobrado dos veces la misma compra.'},
       {'q': '¿Cuándo le devolverán el dinero?', 'a': 'En tres días hábiles.'},
       {'q': '¿Qué puede hacer si no llega la devolución?', 'a': 'Volver a llamar con el número de la operación para abrir una reclamación formal.'}],
      'B1'),

    D('租房看房', 'Agente / Inquilina', '约 60 秒',
      "AGENTE: Este es el piso. Son sesenta metros y tiene dos habitaciones.\n"
      "INQUILINA: ¿Está incluida la comunidad en el alquiler?\n"
      "AGENTE: Sí, la comunidad y el agua. La luz va aparte.\n"
      "INQUILINA: ¿Desde cuándo se puede entrar?\n"
      "AGENTE: Desde el uno del mes que viene.\n"
      "INQUILINA: ¿Y cuánto piden de fianza?\n"
      "AGENTE: Un mes de fianza y otro de garantía.\n"
      "INQUILINA: ¿Se admiten mascotas?\n"
      "AGENTE: El propietario prefiere que no, pero se puede negociar.",
      "中介：这就是那套房子。六十平米，两个房间。\n"
      "租客：租金里包含物业费吗？\n"
      "中介：包含物业费和水费。电费另算。\n"
      "租客：什么时候可以入住？\n"
      "中介：下个月一号起。\n"
      "租客：押金要多少？\n"
      "中介：一个月押金加一个月保证金。\n"
      "租客：可以养宠物吗？\n"
      "中介：房东倾向于不养，不过可以商量。",
      [{'es': 'la comunidad', 'zh': '物业费'},
       {'es': 'va aparte', 'zh': '另算、单算'},
       {'es': 'la fianza', 'zh': '押金'},
       {'es': 'la garantía', 'zh': '保证金'},
       {'es': 'Se admiten mascotas', 'zh': '可以养宠物'},
       {'es': 'el propietario', 'zh': '房东、业主'},
       {'es': 'se puede negociar', 'zh': '可以商量'}],
      [{'q': '¿Qué incluye el alquiler?', 'a': 'La comunidad y el agua; la luz va aparte.'},
       {'q': '¿Cuánto piden de fianza?', 'a': 'Un mes de fianza y otro de garantía.'},
       {'q': '¿Qué opina el propietario sobre las mascotas?', 'a': 'Prefiere que no haya, pero se puede negociar.'}],
      'B1'),

    D('讨论环保习惯', 'Sara / Tomás', '约 55 秒',
      "SARA: ¿Tú reciclas en casa?\n"
      "TOMÁS: Sí, separamos el vidrio, el papel y el plástico.\n"
      "SARA: Nosotros además hacemos compost con los restos de comida.\n"
      "TOMÁS: ¿Y eso no huele mal?\n"
      "SARA: Si lo tapas bien, no. Y reduce mucho la basura.\n"
      "TOMÁS: Lo que me cuesta es no usar bolsas de plástico.\n"
      "SARA: Yo llevo siempre una bolsa de tela en el bolso.\n"
      "TOMÁS: Buena idea. Además el agua del grifo aquí es potable.\n"
      "SARA: Sí, así no compramos botellas. Ahorras dinero y plástico.",
      "萨拉：你在家回收吗？\n"
      "托马斯：回收，我们把玻璃、纸和塑料分开。\n"
      "萨拉：我们还用厨余做堆肥。\n"
      "托马斯：那不会有味道吗？\n"
      "萨拉：盖严实就不会。而且能减少很多垃圾。\n"
      "托马斯：我觉得难的是不用塑料袋。\n"
      "萨拉：我包里总是带一个布袋。\n"
      "托马斯：好主意。而且这里的自来水是可以喝的。\n"
      "萨拉：对，这样就不用买瓶装水。既省钱又省塑料。",
      [{'es': 'reciclar', 'zh': '回收'},
       {'es': 'separar el vidrio', 'zh': '把玻璃分开'},
       {'es': 'el compost', 'zh': '堆肥'},
       {'es': 'los restos de comida', 'zh': '厨余、剩饭'},
       {'es': 'la bolsa de tela', 'zh': '布袋'},
       {'es': 'el agua del grifo es potable', 'zh': '自来水可饮用'}],
      [{'q': '¿Qué separa Tomás en casa?', 'a': 'El vidrio, el papel y el plástico.'},
       {'q': '¿Qué hace Sara con los restos de comida?', 'a': 'Hace compost.'},
       {'q': '¿Por qué no compran botellas de agua?', 'a': 'Porque el agua del grifo es potable, así ahorran dinero y plástico.'}],
      'B1'),
]
