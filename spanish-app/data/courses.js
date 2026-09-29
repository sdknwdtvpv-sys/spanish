/* ============================================
   Lingua · 完整西语学习内容库
   ============================================ */

const COURSES = {

  /* -------- A1 · 入门起步 -------- */
  A1: {
    level: 'A1', title: '入门起步', subtitle: 'Principiante',
    description: '从零开始。8 个单元覆盖最基础的日常交流场景。',
    color: '#C0563A',
    units: [
      { id:'a1-u1', title:'问候与介绍', subtitle:'Saludos y Presentaciones', lessons:10, duration:'约 30 分钟',
        vocab:[          {es:'Hola', zh:'你好', example:'Hola, ¿cómo estás?'},
          {es:'Buenos días', zh:'早上好', example:'Buenos días, señor.'},
          {es:'Buenas tardes', zh:'下午好', example:'Buenas tardes, ¿en qué puedo ayudarle?'},
          {es:'Buenas noches', zh:'晚上好 / 晚安', example:'Buenas noches, hasta mañana.'},
          {es:'Adiós', zh:'再见', example:'Adiós, cuídate.'},
          {es:'Hasta luego', zh:'待会儿见', example:'Hasta luego, voy a volver pronto.'},
          {es:'Hasta mañana', zh:'明天见', example:'Hasta mañana, amiga.'},
          {es:'Me llamo', zh:'我叫……', example:'Me llamo Ana López.'},
          {es:'Mi nombre es', zh:'我的名字是', example:'Mi nombre es Pablo.'},
          {es:'Mucho gusto', zh:'很高兴认识你', example:'Mucho gusto en conocerte.'},
          {es:'Encantado / Encantada', zh:'很高兴见到你', example:'Encantado, soy Juan.'},
          {es:'¿Cómo te llamas?', zh:'你叫什么名字？', example:'Hola, ¿cómo te llamas?'},
          {es:'¿Cómo estás?', zh:'你好吗？', example:'¿Cómo estás hoy?'},
          {es:'Estoy muy bien', zh:'我很好', example:'Estoy muy bien, gracias.'},
          {es:'Estoy regular', zh:'我还可以', example:'Estoy regular, un poco cansado.'},
          {es:'¿De dónde eres?', zh:'你来自哪里？', example:'¿De dónde eres?'},
          {es:'Soy de China', zh:'我来自中国', example:'Soy de China, de Beijing.'},
          {es:'Yo también', zh:'我也是', example:'¡Yo también soy de Madrid!'},
          {es:'Muchas gracias', zh:'非常感谢', example:'Muchas gracias por tu ayuda.'},
          {es:'De nada', zh:'不客气', example:'De nada, ha sido un placer.'},
          {es:'¿Qué tal?', zh:'怎么样？', example:'¡Hola! ¿Qué tal?'},
          {es:'Encantado', zh:'幸会（男）', example:'Encantado de conocerte.'},
          {es:'Señor', zh:'先生', example:'Buenos días, señor.'},
          {es:'Señora', zh:'女士', example:'Buenas tardes, señora.'},
          {es:'Cómo te va', zh:'你过得怎么样', example:'¿Cómo te va todo?'},
          {es:'Nos vemos', zh:'再见 / 回头见', example:'Nos vemos mañana.'},
          {es:'Igualmente', zh:'同样地 / 彼此彼此', example:'Mucho gusto. — Igualmente.'},
          {es:'Por favor', zh:'请', example:'Un café, por favor.'},
],
        grammar:[
          {title:'动词 ser · 现在时 (soy / eres / es / somos / sois / son)', desc:'最基础的"是"的表达，用于身份、国籍、特征。Yo soy estudiante. Él es español.'},
          {title:'Me llamo / Te llamas 句式', desc:'用于自我介绍和询问对方名字，是最常用的口语套话。'},
          {title:'¿Cómo? / ¿De dónde? 疑问词', desc:'学习用简单疑问词发起对话。问号和感叹号在西语中需要成对书写（¿ … ? ¡ … !）。'}
        ]
      },

      { id:'a1-u2', title:'数字与时间', subtitle:'Números y Hora', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Uno (1)', zh:'一', example:'Tengo un libro.'},
          {es:'Dos (2)', zh:'二', example:'Mis ojos son dos.'},
          {es:'Tres (3)', zh:'三', example:'Son las tres.'},
          {es:'Cuatro (4)', zh:'四', example:'Cuatro estaciones tiene el año.'},
          {es:'Cinco (5)', zh:'五', example:'Los dedos de la mano son cinco.'},
          {es:'Seis (6)', zh:'六', example:'El seis es mi número favorito.'},
          {es:'Siete (7)', zh:'七', example:'Tengo siete años.'},
          {es:'Ocho (8)', zh:'八', example:'El ocho es símbolo de infinito.'},
          {es:'Nueve (9)', zh:'九', example:'Nueve personas en la mesa.'},
          {es:'Diez (10)', zh:'十', example:'Diez dedos tengo.'},
          {es:'Veinte (20)', zh:'二十', example:'Tengo veinte años.'},
          {es:'Treinta (30)', zh:'三十', example:'Mi madre tiene treinta y cinco.'},
          {es:'Cien (100)', zh:'一百', example:'Cuesta cien euros.'},
          {es:'¿Qué hora es?', zh:'几点了？', example:'Perdón, ¿qué hora es?'},
          {es:'Son las ...', zh:'现在是……点', example:'Son las dos y media.'},
          {es:'Es la una', zh:'现在一点', example:'Es la una de la tarde.'},
          {es:'Minuto', zh:'分钟', example:'Espera un minuto.'},
          {es:'Hora', zh:'小时 / 点钟', example:'Una hora son sesenta minutos.'},
          {es:'Mañana', zh:'明天 / 上午', example:'Hasta mañana.'},
          {es:'Ayer', zh:'昨天', example:'Ayer fui al cine.'},
          {es:'Hoy', zh:'今天', example:'Hoy hace sol.'},
          {es:'Semana', zh:'星期 / 周', example:'Una semana tiene siete días.'},
          {es:'Domingo', zh:'星期日', example:'El domingo descanso.'},
          {es:'Lunes', zh:'星期一', example:'El lunes trabajo.'},
        
          {es:'La semana', zh:'星期 / 周', example:'La semana tiene siete días.'},
          {es:'El mes', zh:'月份', example:'El mes que viene viajo.'},
          {es:'El año', zh:'年', example:'El año pasado fui a México.'},
          {es:'El lunes', zh:'星期一', example:'El lunes tengo clase.'},
          {es:'El sábado', zh:'星期六', example:'El sábado no trabajo.'},
          {es:'El domingo', zh:'星期日', example:'El domingo descanso.'},
          {es:'Mediodía', zh:'中午', example:'Comemos al mediodía.'},
          {es:'Medianoche', zh:'午夜', example:'Llegó a medianoche.'},
          {es:'El reloj', zh:'钟 / 表', example:'El reloj marca las tres.'},
          {es:'Temprano', zh:'早', example:'Me levanto temprano.'},
          {es:'Tarde', zh:'晚 / 迟', example:'Llegó tarde a la reunión.'},
        ],
        grammar:[
          {title:'数字 0 - 100', desc:'uno, dos, tres... hasta cien。注意 21-29 是 veintiuno, veintidós... 而 31 以上要加 y：treinta y uno。'},
          {title:'表达时间的句型', desc:'整点用 es la una / son las dos；半点用 y media；一刻用 y cuarto。¿Qué hora es? — Son las tres y cuarto.'},
          {title:'星期的表达', desc:'星期前面不用加 el：El lunes voy → Lunes voy 也可以。首字母不大写。'}
        ]
      },

      { id:'a1-u3', title:'家庭与物品', subtitle:'Familia y Objetos', lessons:10, duration:'约 30 分钟',
        vocab:[
          {es:'Familia', zh:'家庭', example:'Mi familia es grande.'},
          {es:'Padre', zh:'父亲', example:'Mi padre es médico.'},
          {es:'Madre', zh:'母亲', example:'Mi madre es maestra.'},
          {es:'Hijo', zh:'儿子', example:'Tienen un hijo.'},
          {es:'Hija', zh:'女儿', example:'Su hija es muy lista.'},
          {es:'Hermano', zh:'兄弟', example:'Tengo un hermano mayor.'},
          {es:'Hermana', zh:'姐妹', example:'Mi hermana se llama Lucía.'},
          {es:'Abuelo', zh:'祖父', example:'Mi abuelo tiene ochenta años.'},
          {es:'Abuela', zh:'祖母', example:'Mi abuela cocina muy bien.'},
          {es:'Casa', zh:'房子 / 家', example:'Mi casa es pequeña pero acogedora.'},
          {es:'Puerta', zh:'门', example:'Abre la puerta, por favor.'},
          {es:'Ventana', zh:'窗户', example:'La ventana está cerrada.'},
          {es:'Libro', zh:'书', example:'Leo un libro interesante.'},
          {es:'Teléfono', zh:'电话', example:'Mi teléfono es nuevo.'},
          {es:'Comida', zh:'食物', example:'La comida está rica.'},
          {es:'Agua', zh:'水', example:'Quiero agua fría.'},
          {es:'Pan', zh:'面包', example:'Cada mañana desayuno pan.'},
          {es:'Café', zh:'咖啡', example:'Tomamos un café juntos.'},
          {es:'Leche', zh:'牛奶', example:'Me gusta la leche caliente.'},
          {es:'Fruta', zh:'水果', example:'Como fruta todos los días.'},
          {es:'Manzana', zh:'苹果', example:'Una manzana al día.'},
          {es:'Zapato', zh:'鞋子', example:'Necesito unos zapatos nuevos.'},
          {es:'Ropa', zh:'衣服', example:'Me gusta tu ropa.'},
        
          {es:'El hermano', zh:'兄弟', example:'Mi hermano estudia medicina.'},
          {es:'La hermana', zh:'姐妹', example:'Mi hermana vive en Madrid.'},
          {es:'El abuelo', zh:'祖父', example:'Mi abuelo tiene ochenta años.'},
          {es:'La abuela', zh:'祖母', example:'Mi abuela cocina muy bien.'},
          {es:'El primo', zh:'表/堂兄弟', example:'Mi primo es profesor.'},
          {es:'La mesa', zh:'桌子', example:'El libro está sobre la mesa.'},
          {es:'La silla', zh:'椅子', example:'Siéntate en la silla.'},
          {es:'La cama', zh:'床', example:'Duermo ocho horas en la cama.'},
          {es:'La ventana', zh:'窗户', example:'Abre la ventana, hace calor.'},
          {es:'La llave', zh:'钥匙', example:'He perdido las llaves.'},
        ],
        grammar:[
          {title:'名词的性（阳性 / 阴性）', desc:'大多数 -o 结尾为阳性（el libro），-a 结尾为阴性（la manzana）。但有很多例外，需要慢慢积累。'},
          {title:'定冠词 el / la / los / las', desc:'指定特定事物。el padre, la madre, los hijos, las hijas。'},
          {title:'所有格形容词 mi / tu / su / nuestro', desc:'我的书 = mi libro。注意 nuestro 要与名词配合：nuestra casa.'}
        ]
      },

      { id:'a1-u4', title:'自我介绍', subtitle:'Presentación Personal', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Nombre', zh:'名字', example:'¿Cuál es tu nombre?'},
          {es:'Apellido', zh:'姓氏', example:'Mi apellido es García.'},
          {es:'Edad', zh:'年龄', example:'¿Cuántos años tienes?'},
          {es:'Años', zh:'岁', example:'Tengo veinticinco años.'},
          {es:'Profesión', zh:'职业', example:'¿Cuál es tu profesión?'},
          {es:'Estudiante', zh:'学生', example:'Soy estudiante de medicina.'},
          {es:'Profesor', zh:'老师', example:'Mi profesor es muy paciente.'},
          {es:'Doctor', zh:'医生', example:'El doctor me atendió bien.'},
          {es:'Ingeniero', zh:'工程师', example:'Su hijo es ingeniero.'},
          {es:'Abogado', zh:'律师', example:'Mi amigo es abogado.'},
          {es:'Cocina', zh:'厨师', example:'Ella es cocinera.'},
          {es:'Empresa', zh:'公司', example:'Trabajo en una empresa grande.'},
          {es:'Ciudad', zh:'城市', example:'Vivo en una ciudad pequeña.'},
          {es:'País', zh:'国家', example:'China es un país grande.'},
          {es:'España', zh:'西班牙', example:'Me gustaría visitar España.'},
          {es:'México', zh:'墨西哥', example:'Mi tía vive en México.'},
          {es:'Argentina', zh:'阿根廷', example:'Buenos Aires es la capital.'},
          {es:'Idioma', zh:'语言', example:'Hablar varios idiomas es útil.'},
          {es:'Español', zh:'西班牙语', example:'Estoy aprendiendo español.'},
          {es:'Inglés', zh:'英语', example:'También hablo inglés.'},
        
          {es:'El apellido', zh:'姓', example:'Mi apellido es García.'},
          {es:'La edad', zh:'年龄', example:'¿Qué edad tienes?'},
          {es:'Casado', zh:'已婚的', example:'Estoy casado desde 2019.'},
          {es:'Soltero', zh:'未婚的', example:'Mi hermano sigue soltero.'},
          {es:'El barrio', zh:'街区 / 社区', example:'Vivo en un barrio tranquilo.'},
          {es:'La dirección', zh:'地址', example:'¿Cuál es tu dirección?'},
          {es:'El correo', zh:'邮件 / 邮局', example:'Te mando un correo.'},
          {es:'Aficionado', zh:'爱好者', example:'Soy aficionado a la fotografía.'},
          {es:'El hobby', zh:'爱好', example:'Mi hobby es cocinar.'},
          {es:'Simpático', zh:'友善的', example:'Tu amigo es muy simpático.'},
        ],
        grammar:[
          {title:'Ser vs Estar（初阶）', desc:'Ser 用于永久/本质（soy estudiante），Estar 用于临时/状态（estoy cansado）。是西语最重要的区分之一。'},
          {title:'Tener + años / hambre / frío', desc:'西语用 tener 表达很多状态。Tengo 20 años. Tengo hambre. Tengo frío.'},
          {title:'国家 / 语言名词', desc:'España → español。很多语言形容词可直接当名词：hablar español = hablar el idioma español。'}
        ]
      },

      { id:'a1-u5', title:'日常活动', subtitle:'Actividades Diarias', lessons:10, duration:'约 30 分钟',
        vocab:[          {es:'Levantarse', zh:'起床', example:'Me levanto a las siete.'},
          {es:'Desayunar', zh:'吃早餐', example:'Desayuno a las ocho.'},
          {es:'Ir al trabajo', zh:'去上班', example:'Voy al trabajo en autobús.'},
          {es:'Ir a clase', zh:'去上课', example:'Voy a clase todos los días.'},
          {es:'Comer', zh:'吃午饭', example:'Comemos a las dos.'},
          {es:'Almorzar', zh:'吃午餐', example:'Hoy almuerzo fuera.'},
          {es:'Tomar café', zh:'喝咖啡', example:'Tomamos un café después.'},
          {es:'Descansar', zh:'休息', example:'Los fines de semana descanso.'},
          {es:'Leer', zh:'阅读', example:'Leo un libro cada semana.'},
          {es:'Escribir', zh:'写', example:'Escribo cartas a mis amigos.'},
          {es:'Escuchar música', zh:'听音乐', example:'Escucho música latina.'},
          {es:'Ver la televisión', zh:'看电视', example:'Veo la televisión por la noche.'},
          {es:'Dormir', zh:'睡觉', example:'Duermo ocho horas al día.'},
          {es:'Cenar', zh:'吃晚饭', example:'Cenamos a las nueve.'},
          {es:'Bañarse', zh:'洗澡', example:'Me baño cada mañana.'},
          {es:'Vestirse', zh:'穿衣服', example:'Me visto en cinco minutos.'},
          {es:'Caminar', zh:'走路 / 散步', example:'Camino al trabajo todos los días.'},
          {es:'Correr', zh:'跑步', example:'Me gusta correr en el parque.'},
          {es:'Hacer ejercicio', zh:'做运动', example:'Hago ejercicio dos veces a semana.'},
          {es:'Limpiar', zh:'打扫', example:'Limpio mi casa los sábados.'},
          {es:'Cocinar', zh:'做饭', example:'Me encanta cocinar paella.'},
          {es:'Salir', zh:'出门 / 外出', example:'Esta noche salgo con amigos.'},
          {es:'Volver', zh:'回来', example:'Vuelvo a las seis.'},
          {es:'Trabajar', zh:'工作', example:'Trabajo de lunes a viernes.'},
          {es:'Estudiar', zh:'学习', example:'Estudio español dos horas al día.'},
          {es:'Despertarse', zh:'醒来', example:'Me despierto a las siete.'},
          {es:'Ducharse', zh:'洗澡', example:'Me ducho por la mañana.'},
          {es:'Acostarse', zh:'上床睡觉', example:'Me acuesto tarde.'},
          {es:'Pasear', zh:'散步', example:'Paseamos por el parque.'},
],
        grammar:[
          {title:'规则动词现在时（-ar / -er / -ir）', desc:'hablar: hablo, hablas, habla, hablamos, habláis, hablan。comer / vivir 同理。'},
          {title:'反身代词 me / te / se / nos / os / se', desc:'Me levanto, te levantas, se levanta... 表示自己做给自己的动作。'},
          {title:'频率副词 siempre / a veces / nunca', desc:'siempre 在动词前：siempre estudio. nunca 要与否定搭配：no estudio nunca / nunca estudio.'}
        ]
      },

      { id:'a1-u6', title:'购物', subtitle:'Compras', lessons:8, duration:'约 25 分钟',
        vocab:[          {es:'Tienda', zh:'商店', example:'Voy a la tienda.'},
          {es:'Mercado', zh:'市场', example:'El mercado está cerca.'},
          {es:'Supermercado', zh:'超市', example:'Compro todo en el supermercado.'},
          {es:'Ropa', zh:'衣服', example:'Necesito ropa nueva.'},
          {es:'Zapatos', zh:'鞋子', example:'Me gustan estos zapatos.'},
          {es:'Camisa', zh:'衬衫', example:'Una camisa blanca, por favor.'},
          {es:'Pantalón', zh:'裤子', example:'Estos pantalones son cómodos.'},
          {es:'Precio', zh:'价格', example:'¿Cuál es el precio?'},
          {es:'Barato', zh:'便宜', example:'Esto es muy barato.'},
          {es:'Caro', zh:'贵', example:'Esto es demasiado caro.'},
          {es:'Descuento', zh:'折扣', example:'Hay un descuento del 50%.'},
          {es:'Cuánto cuesta', zh:'多少钱？', example:'¿Cuánto cuesta esto?'},
          {es:'Dinero', zh:'钱', example:'No tengo mucho dinero.'},
          {es:'Efectivo', zh:'现金', example:'Pago en efectivo.'},
          {es:'Tarjeta', zh:'信用卡', example:'Pago con tarjeta.'},
          {es:'Ticket', zh:'小票 / 门票', example:'Me da el ticket, por favor.'},
          {es:'Grande', zh:'大', example:'Necesito una talla grande.'},
          {es:'Pequeño', zh:'小', example:'Este es muy pequeño.'},
          {es:'Talla', zh:'尺码', example:'¿Qué talla usa?'},
          {es:'Colores', zh:'颜色', example:'¿Tienen otros colores?'},
          {es:'Rojo', zh:'红色', example:'Quiero el rojo.'},
          {es:'Azul', zh:'蓝色', example:'El azul es mi color favorito.'},
          {es:'Negro', zh:'黑色', example:'Llevo unos zapatos negros.'},
          {es:'Blanco', zh:'白色', example:'Una camisa blanca.'},
          {es:'Amarillo', zh:'黄色', example:'El amarillo es alegre.'},
          {es:'La tienda', zh:'商店', example:'Voy a la tienda de ropa.'},
          {es:'El precio', zh:'价格', example:'El precio es razonable.'},
          {es:'La talla', zh:'尺码', example:'¿Tiene una talla más grande?'},
          {es:'El descuento', zh:'折扣', example:'Hay un descuento del veinte por ciento.'},
          {es:'Pagar', zh:'付款', example:'¿Puedo pagar con tarjeta?'},
          {es:'La caja', zh:'收银台', example:'Pague en la caja, por favor.'},
          {es:'La bolsa', zh:'袋子', example:'¿Me da una bolsa?'},
          {es:'Probarse', zh:'试穿', example:'¿Puedo probarme esta camisa?'},
],
        grammar:[
          {title:'Qué / Cuál / Cuánto 的用法', desc:'Qué 用于无范围提问；Cuál 从几个中选；Cuánto 问数量。¿Qué quieres? ¿Cuál prefieres? ¿Cuánto cuesta?'},
          {title:'Adjetivos 形容词配合', desc:'颜色、大小、形状形容词必须与名词在性和数上一致。una camisa roja, unos zapatos negros.'},
          {title:'Poder + 动词原形', desc:'¿Puedo probarme? = 我能试穿吗？ Poder 是万能动词。'}
        ]
      },

      { id:'a1-u7', title:'餐厅点餐', subtitle:'En el Restaurante', lessons:8, duration:'约 25 分钟',
        vocab:[          {es:'Restaurante', zh:'餐厅', example:'El restaurante es muy bonito.'},
          {es:'Camarero', zh:'服务员', example:'El camarero es muy amable.'},
          {es:'Menú', zh:'菜单', example:'Pásame el menú, por favor.'},
          {es:'Carta', zh:'菜单（正式）', example:'La carta está en español.'},
          {es:'Entrada', zh:'前菜', example:'Como ensalada de entrada.'},
          {es:'Plato principal', zh:'主菜', example:'Mi plato principal es paella.'},
          {es:'Postre', zh:'甜点', example:'Un postre para mí.'},
          {es:'Aperitivo', zh:'开胃酒', example:'Tomamos un aperitivo antes.'},
          {es:'Cerveza', zh:'啤酒', example:'Una cerveza, por favor.'},
          {es:'Vino', zh:'葡萄酒', example:'Vino tinto con carne.'},
          {es:'Agua mineral', zh:'矿泉水', example:'Dos aguas minerales.'},
          {es:'Paella', zh:'海鲜饭', example:'La paella es típica de Valencia.'},
          {es:'Tortilla', zh:'土豆饼', example:'La tortilla española es deliciosa.'},
          {es:'Jamón', zh:'火腿', example:'Jamón ibérico, por favor.'},
          {es:'Queso', zh:'奶酪', example:'Plato de quesos para compartir.'},
          {es:'Pan con tomate', zh:'番茄面包', example:'En Cataluña se come mucho pan con tomate.'},
          {es:'Caliente', zh:'热的', example:'La sopa está caliente.'},
          {es:'Frío', zh:'冷的', example:'Una ensalada fría.'},
          {es:'Rico', zh:'好吃', example:'¡Qué rico está!'},
          {es:'Buen provecho', zh:'慢慢吃', example:'¡Buen provecho!'},
          {es:'La cuenta', zh:'结账', example:'La cuenta, por favor.'},
          {es:'La carta', zh:'菜单 / 信', example:'¿Me trae la carta?'},
          {es:'El primer plato', zh:'第一道菜', example:'De primer plato, sopa.'},
          {es:'El postre', zh:'甜点', example:'De postre, flan.'},
          {es:'La propina', zh:'小费', example:'Dejamos una propina.'},
          {es:'Delicioso', zh:'美味的', example:'La paella estaba deliciosa.'},
          {es:'Sin gluten', zh:'无麸质', example:'¿Tienen opciones sin gluten?'},
          {es:'Para llevar', zh:'外带', example:'Lo quiero para llevar.'},
          {es:'La especialidad', zh:'特色菜', example:'¿Cuál es la especialidad de la casa?'},
          {es:'Reservar', zh:'预订', example:'Quiero reservar una mesa.'},
],
        grammar:[
          {title:'Querer + 动词原形', desc:'Quiero pedir la cuenta. Quisiera 是更礼貌的委婉表达，虚拟式用法。'},
          {title:'Pedírselo / Pasármelo 等宾语代词组合', desc:'me, te, lo, la 放在动词前：Lo quiero. Te lo doy.'},
          {title:'餐饮场景常用句式', desc:'¿Qué me recomienda? / ¿Está todo bien? / ¿Nos cobra por separado?' }
        ]
      },

      { id:'a1-u8', title:'交通出行', subtitle:'Transportes', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Aeropuerto', zh:'机场', example:'Llegamos al aeropuerto a las cinco.'},
          {es:'Avión', zh:'飞机', example:'El avión vuela alto.'},
          {es:'Pasaporte', zh:'护照', example:'Necesito mi pasaporte.'},
          {es:'Equipaje', zh:'行李', example:'Mi equipaje es pesado.'},
          {es:'Tarjeta de embarque', zh:'登机牌', example:'No olvides tu tarjeta de embarque.'},
          {es:'Tren', zh:'火车', example:'El tren es muy cómodo.'},
          {es:'Estación', zh:'车站', example:'¿Dónde está la estación de tren?'},
          {es:'Metro', zh:'地铁', example:'Voy en metro.'},
          {es:'Autobús', zh:'公交车', example:'El autobús va cada diez minutos.'},
          {es:'Taxi', zh:'出租车', example:'Llamo a un taxi.'},
          {es:'Coche', zh:'汽车', example:'Conduzco mi coche al trabajo.'},
          {es:'Carretera', zh:'公路', example:'Vamos por la carretera.'},
          {es:'GPS', zh:'GPS / 导航', example:'El GPS nos guía bien.'},
          {es:'Gasolina', zh:'汽油', example:'El coche necesita gasolina.'},
          {es:'Paso de peatones', zh:'人行横道', example:'Cruce por el paso de peatones.'},
          {es:'Derecha', zh:'右边', example:'Gira a la derecha.'},
          {es:'Izquierda', zh:'左边', example:'A la izquierda hay una tienda.'},
          {es:'Recto', zh:'直行', example:'Sigue recto.'},
          {es:'Cerca de', zh:'在……附近', example:'La estación está cerca de mi casa.'},
          {es:'Lejos de', zh:'离……远', example:'El aeropuerto está lejos.'},
          {es:'Perdido', zh:'迷路', example:'Estoy perdido, necesito ayuda.'},
        
          {es:'El billete', zh:'票', example:'Compré un billete de ida.'},
          {es:'El andén', zh:'站台', example:'El tren sale del andén tres.'},
          {es:'El retraso', zh:'延误', example:'El vuelo lleva dos horas de retraso.'},
          {es:'La parada', zh:'车站', example:'Bájate en la próxima parada.'},
          {es:'El conductor', zh:'司机', example:'El conductor fue muy amable.'},
          {es:'Perderse', zh:'迷路', example:'Me perdí en el centro.'},
          {es:'El mapa', zh:'地图', example:'Mira el mapa del metro.'},
          {es:'A la derecha', zh:'向右', example:'Gire a la derecha.'},
          {es:'A la izquierda', zh:'向左', example:'Siga recto y luego a la izquierda.'},
          {es:'Cerca', zh:'近', example:'La estación está cerca.'},
        ],
        grammar:[
          {title:'方位介词 en / a / de / por / para', desc:'en el aeropuerto, a la derecha, de Madrid a Barcelona。por la calle, para viajar。'},
          {title:'命令式初步（tú 形式）', desc:'Gira a la izquierda. Sigue recto. Dime el camino. 是问路指路的关键。'},
          {title:'estar perdido / quedar + adj', desc:'Estoy perdido. Me queda lejos. Quedar 表距离、剩余。'}
        ]
      }
    ]
  },

  /* -------- A2 · 初级进阶 -------- */
  A2: {
    level: 'A2', title: '初级进阶', subtitle: 'Elemental',
    description: '能在常见场景中进行简单交流，描述日常活动、经历、感受。',
    color: '#D3982A',
    units: [
      { id:'a2-u1', title:'家庭与社交圈', subtitle:'Familia y Círculo Social', lessons:12, duration:'约 40 分钟',
        vocab:[          {es:'Tío', zh:'叔叔 / 舅舅', example:'Mi tío vive en Barcelona.'},
          {es:'Tía', zh:'阿姨 / 姑姑', example:'Mi tía es muy simpática.'},
          {es:'Primo', zh:'表兄弟', example:'Mi primo se casó el año pasado.'},
          {es:'Prima', zh:'表姐妹', example:'Tengo una prima artista.'},
          {es:'Sobrino', zh:'侄子', example:'Mi sobrino tiene dos años.'},
          {es:'Sobrina', zh:'侄女', example:'Mi sobrina juega al piano.'},
          {es:'Padre / madre políticos', zh:'岳父 / 岳母', example:'Mis suegros vienen este fin de semana.'},
          {es:'Novio', zh:'男朋友', example:'Su novio es arquitecto.'},
          {es:'Novia', zh:'女朋友', example:'Mi novia es mexicana.'},
          {es:'Esposo', zh:'丈夫', example:'Su esposo es abogado.'},
          {es:'Esposa', zh:'妻子', example:'Mi esposa trabaja en el hospital.'},
          {es:'Amigo', zh:'朋友', example:'Es mi mejor amigo desde niño.'},
          {es:'Amiga', zh:'朋友（女）', example:'Tengo una amiga muy divertida.'},
          {es:'Conocido', zh:'熟人', example:'Es un conocido del trabajo.'},
          {es:'Vecino', zh:'邻居', example:'Nuestros vecinos son muy amables.'},
          {es:'Compañero', zh:'同学 / 同事', example:'Mi compañero de piso es francés.'},
          {es:'Reunión', zh:'聚会', example:'Tengo una reunión con la familia.'},
          {es:'Fiesta', zh:'派对', example:'Esta noche hay una fiesta.'},
          {es:'Cumpleaños', zh:'生日', example:'Mañana es mi cumpleaños.'},
          {es:'Invitación', zh:'邀请', example:'Recibí una invitación a su boda.'},
          {es:'Invitar', zh:'邀请', example:'¿Me invitas a tu casa?'},
          {es:'Celebrar', zh:'庆祝', example:'Vamos a celebrar el éxito.'},
          {es:'El suegro', zh:'岳父 / 公公', example:'Mi suegro es muy simpático.'},
          {es:'La cuñada', zh:'嫂子 / 弟媳', example:'Mi cuñada trabaja en un banco.'},
          {es:'El sobrino', zh:'侄子', example:'Mi sobrino tiene cinco años.'},
          {es:'El vecino', zh:'邻居', example:'Mis vecinos son muy ruidosos.'},
          {es:'El conocido', zh:'熟人', example:'Es solo un conocido.'},
          {es:'La pareja', zh:'伴侣 / 情侣', example:'Vienen con sus parejas.'},
          {es:'El novio', zh:'男朋友', example:'Su novio es arquitecto.'},
          {es:'La boda', zh:'婚礼', example:'La boda será en junio.'},
          {es:'Llevarse bien', zh:'相处融洽', example:'Me llevo bien con mi familia.'},
],
        grammar:[
          {title:'所有格形容词完整表', desc:'mi(s), tu(s), su(s), nuestro(s)/nuestra(s), vuestro(s)/vuestra(s), su(s)。nuestro 要配合名词性数。'},
          {title:'estar con / ir con / salir con', desc:'表示和某人一起做某事。Salgo con mis amigos los sábados.'},
          {title:'hace + 时间 + que', desc:'表示"已经……多久了"。Hace dos años que estudio español.'}
        ]
      },

      { id:'a2-u2', title:'描述外貌与性格', subtitle:'Describir Apariencia y Personalidad', lessons:10, duration:'约 30 分钟',
        vocab:[          {es:'Alto', zh:'高', example:'Es muy alto.'},
          {es:'Bajo', zh:'矮', example:'Mi abuelo es bajo.'},
          {es:'Gordo', zh:'胖', example:'Está un poco gordo.'},
          {es:'Delgado', zh:'瘦', example:'Es delgado pero fuerte.'},
          {es:'Rojo', zh:'红色（头发）', example:'Tiene el pelo rojo.'},
          {es:'Rubio', zh:'金发', example:'Es un hombre rubio.'},
          {es:'Morocho', zh:'黑头发', example:'Es morocho y guapo.'},
          {es:'Calvo', zh:'秃', example:'Es calvo pero muy simpático.'},
          {es:'Ojos azules', zh:'蓝眼睛', example:'Tiene ojos azules muy bonitos.'},
          {es:'Ojos marrones', zh:'棕色眼睛', example:'Sus ojos son marrones.'},
          {es:'Gafas', zh:'眼镜', example:'Lleva gafas de sol.'},
          {es:'Joven', zh:'年轻', example:'Es muy joven para su cargo.'},
          {es:'Mayor', zh:'年长', example:'Mi hermano mayor tiene treinta.'},
          {es:'Guapo', zh:'帅', example:'Es un hombre guapo.'},
          {es:'Bonita', zh:'漂亮', example:'Es una mujer muy bonita.'},
          {es:'Simpático', zh:'友好', example:'Es muy simpático con todos.'},
          {es:'Alegre', zh:'开朗', example:'Es una persona alegre.'},
          {es:'Serio', zh:'严肃', example:'Es un hombre serio y responsable.'},
          {es:'Trabajador', zh:'勤奋', example:'Mi jefe es muy trabajador.'},
          {es:'Perezoso', zh:'懒', example:'Es un poco perezoso.'},
          {es:'Inteligente', zh:'聪明', example:'Su hijo es muy inteligente.'},
          {es:'Gracioso', zh:'幽默', example:'Es el más gracioso de la clase.'},
          {es:'El bigote', zh:'胡子', example:'Lleva bigote desde joven.'},
          {es:'Las gafas', zh:'眼镜', example:'Llevo gafas para leer.'},
          {es:'El pelo', zh:'头发', example:'Tiene el pelo rizado.'},
          {es:'Tímido', zh:'害羞的', example:'Es un chico tímido.'},
          {es:'Antipático', zh:'不友好的', example:'El jefe parece antipático.'},
],
        grammar:[
          {title:'Ser 表示外貌 / 性格', desc:'描述某人的特征用 ser。Es alto. Es simpático. Es inteligente.'},
          {title:'比较级 más / menos / tan ... como', desc:'Es más alto que yo. Es menos tímido que ella. Es tan alto como su padre.'},
          {title:'Llevar + 衣物饰品', desc:'Llevo una camisa. Lleva gafas. Lleva el pelo corto. 强调"戴着/穿着"的状态。'}
        ]
      },

      { id:'a2-u3', title:'谈论过去', subtitle:'Hablar del Pasado', lessons:12, duration:'约 40 分钟',
        vocab:[
          {es:'Ayer', zh:'昨天', example:'Ayer fui al cine.'},
          {es:'Anteayer', zh:'前天', example:'Anteayer llovió mucho.'},
          {es:'La semana pasada', zh:'上周', example:'La semana pasada estuve en Madrid.'},
          {es:'El año pasado', zh:'去年', example:'El año pasado viajé a Japón.'},
          {es:'En enero', zh:'在一月', example:'En enero hace mucho frío.'},
          {es:'Nacer', zh:'出生', example:'Nací en 1995.'},
          {es:'Infancia', zh:'童年', example:'Mi infancia fue muy feliz.'},
          {es:'Colegio', zh:'学校', example:'Fui al colegio con mi hermano.'},
          {es:'Primero / Segundo', zh:'第一 / 第二', example:'Estudié medicina en la universidad.'},
          {es:'Graduarse', zh:'毕业', example:'Me gradué en 2018.'},
          {es:'Conocer', zh:'认识（人）', example:'Conocí a mi novia en la universidad.'},
          {es:'Conocer ( lugar )', zh:'参观（地方）', example:'Conocí Sevilla el año pasado.'},
          {es:'Viajar', zh:'旅行', example:'Viajé a Francia el verano pasado.'},
          {es:'Aprender', zh:'学习', example:'Aprendí español hace tres años.'},
          {es:'Tener hambre', zh:'饿了', example:'Tuve mucha hambre ayer.'},
          {es:'Tener frío', zh:'冷', example:'Anoche tuve mucho frío.'},
        
          {es:'El recuerdo', zh:'回忆', example:'Tengo buenos recuerdos de aquel viaje.'},
          {es:'Aquella vez', zh:'那一次', example:'Aquella vez no dije nada.'},
          {es:'De repente', zh:'突然', example:'De repente empezó a llover.'},
          {es:'Al final', zh:'最后', example:'Al final decidimos quedarnos.'},
          {es:'Entonces', zh:'那时 / 于是', example:'Entonces yo tenía diez años.'},
          {es:'Soler', zh:'惯常（做某事）', example:'Solía caminar por el río.'},
          {es:'Contar', zh:'讲述', example:'Mi abuela contaba historias.'},
          {es:'Recordar', zh:'记得', example:'Recuerdo perfectamente ese día.'},
          {es:'Olvidar', zh:'忘记', example:'Olvidé cerrar la puerta.'},
          {es:'Suceder', zh:'发生', example:'¿Qué sucedió aquella noche?'},
        ],
        grammar:[
          {title:'Preterito Indefinido（简单过去时）规则动词', desc:'-ar: -é, -aste, -ó, -amos, -asteis, -aron。-er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron。'},
          {title:'Preterito 高频不规则动词', desc:'Ser/Ir: fui, fuiste, fue... （同形）。Tener: tuve, tuviste, tuvo... Hacer: hice, hiciste, hizo...'},
          {title:'Ayer / La semana pasada 等时间标志', desc:'这些词直接触发简单过去时，不用搭配别的时态。'}
        ]
      },

      { id:'a2-u4', title:'表达喜好', subtitle:'Gustos y Preferencias', lessons:8, duration:'约 28 分钟',
        vocab:[          {es:'Me gusta', zh:'我喜欢', example:'Me gusta el café.'},
          {es:'Me gusta mucho', zh:'我很喜欢', example:'Me gusta mucho la música.'},
          {es:'No me gusta', zh:'我不喜欢', example:'No me gusta el pescado.'},
          {es:'A mí me gusta', zh:'我（强调）喜欢', example:'A mí me gusta más el té.'},
          {es:'Encantar', zh:'特别喜欢', example:'Me encanta la paella.'},
          {es:'Odios', zh:'讨厌', example:'Odio el ruido.'},
          {es:'Preferir', zh:'更喜欢', example:'Prefiero el té al café.'},
          {es:'Puede ser', zh:'可能吧', example:'Puede ser que tenga razón.'},
          {es:'Depende', zh:'看情况', example:'Depende del tiempo.'},
          {es:'Claro que sí', zh:'当然', example:'¿Quieres venir? Claro que sí.'},
          {es:'Claro que no', zh:'当然不', example:'¿Puedo fumar aquí? Claro que no.'},
          {es:'Tal vez', zh:'也许', example:'Tal vez venga mañana.'},
          {es:'Odio', zh:'讨厌', example:'Odio levantarme temprano.'},
          {es:'Interesar', zh:'使感兴趣', example:'Me interesa la historia.'},
          {es:'Apasionar', zh:'使着迷', example:'Le apasiona el cine.'},
          {es:'El gusto', zh:'喜好 / 品味', example:'Es una cuestión de gustos.'},
          {es:'Dar igual', zh:'都行 / 无所谓', example:'Me da igual, tú decides.'},
          {es:'Merecer la pena', zh:'值得', example:'Vale la pena verlo.'},
          {es:'Aburrir', zh:'使厌烦', example:'Las noticias me aburren.'},
          {es:'Divertido', zh:'有趣的', example:'Es una película muy divertida.'},
],
        grammar:[
          {title:'Gustar 的真正用法', desc:'动词和后面的名词/动词一致。Me gusta el libro. Me gustan los libros. Me gusta leer.'}
        ]
      },

      { id:'a2-u5', title:'天气与季节', subtitle:'Tiempo y Estaciones', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Hace sol', zh:'晴天', example:'Hace sol, vayamos a la playa.'},
          {es:'Hace frío', zh:'冷', example:'Hace frío esta mañana.'},
          {es:'Hace calor', zh:'热', example:'Hace mucho calor en verano.'},
          {es:'Hace viento', zh:'刮风', example:'Hace mucho viento hoy.'},
          {es:'Llueve', zh:'下雨', example:'Ahora llueve.'},
          {es:'Nieva', zh:'下雪', example:'¡Nieva! Qué bonito.'},
          {es:'Está nublado', zh:'阴天', example:'Hoy está nublado.'},
          {es:'Está lloviendo', zh:'正在下雨', example:'Mira, está lloviendo.'},
          {es:'La temperatura', zh:'温度', example:'La temperatura es de 25 grados.'},
          {es:'Grados', zh:'度', example:'30 grados centígrados.'},
          {es:'Verano', zh:'夏天', example:'El verano me gusta mucho.'},
          {es:'Invierno', zh:'冬天', example:'En invierno nieva.'},
          {es:'Otoño', zh:'秋天', example:'El otoño es mi estación favorita.'},
          {es:'Primavera', zh:'春天', example:'En primavera hay flores.'},
          {es:'Vacaciones de verano', zh:'暑假', example:'Mis vacaciones de verano son en julio.'},
          {es:'Fin de semana', zh:'周末', example:'Fin de semana voy a la playa.'},
        
          {es:'La nube', zh:'云', example:'El cielo está lleno de nubes.'},
          {es:'La tormenta', zh:'暴风雨', example:'Viene una tormenta fuerte.'},
          {es:'El rayo', zh:'闪电', example:'Un rayo iluminó el cielo.'},
          {es:'La niebla', zh:'雾', example:'Hay mucha niebla esta mañana.'},
          {es:'El grado', zh:'度', example:'Estamos a treinta grados.'},
          {es:'Húmedo', zh:'潮湿的', example:'El clima aquí es muy húmedo.'},
          {es:'Seco', zh:'干燥的', example:'El verano fue muy seco.'},
          {es:'La primavera', zh:'春天', example:'En primavera todo florece.'},
          {es:'El otoño', zh:'秋天', example:'El otoño es mi estación favorita.'},
          {es:'El invierno', zh:'冬天', example:'En invierno nieva mucho.'},
        ],
        grammar:[
          {title:'Hace + 天气名词', desc:'固定搭配：hace calor / hace frío / hace sol / hace viento / hace buen tiempo。'},
          {title:'Llover / nevar / hacer', desc:'这三个动词无主语，都是无人称动词。Llueve. Nieva. Hace viento.'},
          {title:'Está + gerundio（现在进行时）', desc:'Está lloviendo. Estoy comiendo. Estás leyendo.'}
        ]
      },

      { id:'a2-u6', title:'在医院', subtitle:'En el Hospital', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Enfermo', zh:'生病', example:'Estoy enfermo.'},
          {es:'Enfermedad', zh:'疾病', example:'Es una enfermedad común.'},
          {es:'Dolor', zh:'疼痛', example:'Me duele la cabeza.'},
          {es:'Dolor de cabeza', zh:'头痛', example:'Tengo mucho dolor de cabeza.'},
          {es:'Dolor de estómago', zh:'胃痛', example:'Me duele el estómago.'},
          {es:'Gripe', zh:'感冒 / 流感', example:'Tengo gripe.'},
          {es:'Resfriado', zh:'感冒', example:'Estoy resfriado.'},
          {es:'Fiebre', zh:'发烧', example:'Tengo fiebre de 38 grados.'},
          {es:'Cough', zh:'咳嗽', example:'Tengo tos.'},
          {es:'Dolor de garganta', zh:'喉咙痛', example:'Me duele la garganta al tragar.'},
          {es:'Doctora', zh:'女医生', example:'La doctora me recetó pastillas.'},
          {es:'Receta', zh:'处方', example:'Me dio una receta.'},
          {es:'Medicina', zh:'药', example:'Toma la medicina tres veces al día.'},
          {es:'Pastilla', zh:'药片', example:'Una pastilla después de comer.'},
          {es:'Farmacia', zh:'药店', example:'Voy a la farmacia.'},
          {es:'Hospital', zh:'医院', example:'Estuvo en el hospital dos días.'},
          {es:'Operación', zh:'手术', example:'Tuvo una operación el año pasado.'},
          {es:'Salud', zh:'健康', example:'¡Salud! (brindis)'},
          {es:'Me siento mal', zh:'我不舒服', example:'Me siento mal, voy a casa.'},
          {es:'Me siento mejor', zh:'我好点了', example:'Con el medicamento me siento mejor.'},
        
          {es:'El síntoma', zh:'症状', example:'¿Cuáles son sus síntomas?'},
          {es:'La fiebre', zh:'发烧', example:'Tiene fiebre alta.'},
          {es:'La tos', zh:'咳嗽', example:'Esta tos no se me quita.'},
          {es:'El dolor', zh:'疼痛', example:'Siento dolor en el pecho.'},
          {es:'La receta', zh:'处方', example:'Aquí tiene la receta.'},
          {es:'El análisis', zh:'化验', example:'Los análisis salieron bien.'},
          {es:'La cita', zh:'预约', example:'Tengo cita a las cinco.'},
          {es:'La urgencia', zh:'急诊', example:'Fuimos a urgencias.'},
          {es:'Curarse', zh:'痊愈', example:'Se curó en una semana.'},
          {es:'Descansar', zh:'休养', example:'Debe descansar unos días.'},
        ],
        grammar:[
          {title:'Me duele + 身体部位', desc:'无人称用法。Me duele la cabeza. Me duelen los pies.'},
          {title:'Tener + 病痛名词', desc:'Tengo fiebre. Tengo gripe. Tengo dolor de... 与 me duele 可以互换。'},
          {title:'命令式（usted 正式形式）', desc:'Déme una receta. Siéntese aquí. Tráigame agua. 比 tú 形式更礼貌。'}
        ]
      },

      { id:'a2-u7', title:'工作与学习', subtitle:'Trabajo y Estudio', lessons:12, duration:'约 40 分钟',
        vocab:[          {es:'Trabajo', zh:'工作 / 职位', example:'Busco trabajo.'},
          {es:'Empleo', zh:'就业', example:'El empleo está difícil.'},
          {es:'Entrevista', zh:'面试', example:'Tengo una entrevista mañana.'},
          {es:'Currículum', zh:'简历', example:'He enviado mi currículum.'},
          {es:'Carta de presentación', zh:'求职信', example:'La carta de presentación debe ser breve.'},
          {es:'Horario', zh:'时间表', example:'Mi horario es de 9 a 5.'},
          {es:'Oficina', zh:'办公室', example:'Estoy en la oficina.'},
          {es:'Reunión', zh:'会议', example:'Tenemos una reunión a las 10.'},
          {es:'Jefe', zh:'老板', example:'Mi jefe es muy exigente.'},
          {es:'Compañeros', zh:'同事', example:'Mis compañeros son muy agradables.'},
          {es:'Sueldo', zh:'工资', example:'Mi sueldo no es muy alto.'},
          {es:'Vacaciones', zh:'假期', example:'Me tocan dos semanas de vacaciones.'},
          {es:'Universidad', zh:'大学', example:'Estudio en la Universidad Complutense.'},
          {es:'Matrícula', zh:'注册 / 学费', example:'Pagué la matrícula esta semana.'},
          {es:'Profesor / a', zh:'老师', example:'Mi profesor es muy bueno.'},
          {es:'Asignatura', zh:'科目', example:'Mi asignatura favorita es la historia.'},
          {es:'Examen', zh:'考试', example:'Tengo un examen mañana.'},
          {es:'Nota', zh:'分数 / 笔记', example:'Saqué una buena nota.'},
          {es:'Aprobar', zh:'通过（考试）', example:'Aprobé el examen de español.'},
          {es:'Suspender', zh:'挂科', example:'Suspendí matemáticas el año pasado.'},
          {es:'Biblioteca', zh:'图书馆', example:'Estudio en la biblioteca.'},
          {es:'Tutoría', zh:'辅导', example:'Tengo tutoría con el profesor.'},
          {es:'Prácticas', zh:'实习', example:'Hago prácticas en una empresa.'},
          {es:'Graduarse', zh:'毕业', example:'Me gradúo este año.'},
          {es:'La empresa', zh:'公司', example:'Trabajo en una empresa española.'},
          {es:'El puesto', zh:'职位', example:'Ocupa un puesto directivo.'},
          {es:'El sueldo', zh:'工资', example:'El sueldo es competitivo.'},
          {es:'La carrera', zh:'专业 / 职业', example:'Estudia la carrera de Derecho.'},
          {es:'La beca', zh:'奖学金', example:'Consiguió una beca en el extranjero.'},
          {es:'La asignatura', zh:'课程 / 科目', example:'Es mi asignatura favorita.'},
          {es:'El horario', zh:'时间表', example:'Mi horario es flexible.'},
          {es:'La reunión', zh:'会议', example:'Tenemos una reunión a las diez.'},
          {es:'El plazo', zh:'截止期限', example:'El plazo termina el viernes.'},
],
        grammar:[
          {title:'Ser 表示职业 / estar 表示暂时状态', desc:'Soy ingeniero（职业）. Estoy de prácticas（暂时）.'},
          {title:'现在进行时完整', desc:'Estoy trabajando. Está estudiando. Estamos teniendo una reunión. 正在进行的动作。'},
          {title:'ir a + 动词（将来）', desc:'Voy a tener una entrevista mañana. 最常用的将来时形式之一。'}
        ]
      },

      { id:'a2-u8', title:'旅行预订', subtitle:'Reservas y Viajes', lessons:10, duration:'约 35 分钟',
        vocab:[          {es:'Reservar', zh:'预订', example:'Reservo una habitación.'},
          {es:'Reserva', zh:'预订', example:'Tengo una reserva a nombre de García.'},
          {es:'Hotel', zh:'酒店', example:'El hotel es muy cómodo.'},
          {es:'Habitación', zh:'房间', example:'Una habitación doble.'},
          {es:'Single', zh:'单人房', example:'Pido una single.'},
          {es:'Doble', zh:'双人房', example:'Una habitación doble, por favor.'},
          {es:'Con desayuno', zh:'含早餐', example:'La habitación con desayuno.'},
          {es:'Sin desayuno', zh:'不含早餐', example:'Prefiero sin desayuno.'},
          {es:'Llegada', zh:'到达', example:'La llegada es a las tres.'},
          {es:'Salida', zh:'离开', example:'La salida es a las doce.'},
          {es:'Aerolínea', zh:'航空公司', example:'Vuelo de Iberia.'},
          {es:'Vuelo', zh:'航班', example:'Nuestro vuelo sale a las 8.'},
          {es:'Escala', zh:'转机', example:'El vuelo tiene una escala.'},
          {es:'Turista', zh:'游客', example:'Hay muchos turistas en la ciudad.'},
          {es:'Guía turístico', zh:'导游', example:'El guía turístico lo explica todo.'},
          {es:'Moneda', zh:'货币', example:'La moneda de España es el euro.'},
          {es:'Euro', zh:'欧元', example:'Cuesta cincuenta euros.'},
          {es:'Factura', zh:'发票', example:'¿Me da una factura?'},
          {es:'Cancelar', zh:'取消', example:'Tuve que cancelar el viaje.'},
          {es:'Seguro de viaje', zh:'旅行保险', example:'Comprar un seguro de viaje.'},
          {es:'La reserva', zh:'预订', example:'Tengo una reserva a nombre de López.'},
          {es:'El alojamiento', zh:'住宿', example:'El alojamiento incluye desayuno.'},
          {es:'La habitación doble', zh:'双人房', example:'Quisiera una habitación doble.'},
          {es:'La llegada', zh:'到达', example:'La llegada está prevista a las seis.'},
          {es:'La salida', zh:'离开', example:'La salida es a mediodía.'},
          {es:'Confirmar', zh:'确认', example:'¿Puede confirmar la reserva?'},
          {es:'El equipaje', zh:'行李', example:'Mi equipaje pesa demasiado.'},
          {es:'La tarjeta de embarque', zh:'登机牌', example:'Muestra la tarjeta de embarque.'},
          {es:'La aduana', zh:'海关', example:'Pasamos por la aduana sin problemas.'},
],
        grammar:[
          {title:'一般现在时表计划好的将来', desc:'El vuelo sale a las 8. Llegamos mañana. 表示确定的安排。'},
          {title:'por + 原因 / para + 目的', desc:'Voy por trabajo（原因）. Voy para conocer la ciudad（目的）.'},
          {title:'礼貌表达 Desear / Quisiera', desc:'Desearía reservar una habitación. Quisiera hablar con el gerente. 比 quiero 更正式礼貌。'}
        ]
      }
    ]
  },

  /* -------- B1 · 中级能力 -------- */
  B1: {
    level: 'B1', title: '中级能力', subtitle: 'Intermedio',
    description: '能应对大部分日常交流，表达观点、感受、经历。',
    color: '#5F7043',
    units: [
      { id:'b1-u1', title:'工作晋升与职业发展', subtitle:'Carrera Profesional', lessons:10, duration:'约 35 分钟',
        vocab:[
          {es:'Ascenso', zh:'晋升', example:'Espero conseguir un ascenso este año.'},
          {es:'Despedida', zh:'解雇', example:'Recibí una carta de despedida.'},
          {es:'Renunciar', zh:'辞职', example:'Renuncié a mi trabajo anterior.'},
          {es:'Cambio de trabajo', zh:'换工作', example:'Decidí un cambio de trabajo.'},
          {es:'Explotación', zh:'剥削', example:'Las condiciones de explotación son inaceptables.'},
          {es:'Contrato', zh:'合同', example:'Firmamos un contrato de dos años.'},
          {es:'Contrato indefinido', zh:'永久合同', example:'Por fin tengo un contrato indefinido.'},
          {es:'Periodo de prueba', zh:'试用期', example:'El periodo de prueba es de tres meses.'},
          {es:'Salario', zh:'薪资', example:'Mi salario aumentó un 10%.'},
          {es:'Horas extra', zh:'加班费', example:'Recibo horas extra cada mes.'},
          {es:'Beneficios sociales', zh:'福利', example:'Tiene buenos beneficios sociales.'},
          {es:'Vacaciones pagadas', zh:'带薪假期', example:'Son 22 días de vacaciones pagadas.'},
          {es:'Seguridad social', zh:'社保', example:'La empresa paga la seguridad social.'},
          {es:'Baja por enfermedad', zh:'病假', example:'Estoy de baja por enfermedad.'},
          {es:'Baja por maternidad', zh:'产假', example:'Tuvo tres meses de baja por maternidad.'},
          {es:'Convenio colectivo', zh:'集体合同', example:'Se rigen por el convenio colectivo.'},
          {es:'Sindicato', zh:'工会', example:'Los sindicatos convocan huelga.'},
          {es:'Huelga', zh:'罢工', example:'La huelga duró tres días.'},
          {es:'Producción', zh:'生产 / 产量', example:'La producción aumentó un 20%.'},
          {es:'Mercado', zh:'市场', example:'El mercado está en crisis.'},
          {es:'Crisis económica', zh:'经济危机', example:'La crisis económica afecta a todos.'},
          {es:'Desempleo', zh:'失业', example:'El desempleo subió el último trimestre.'},
          {es:'Emprendedor', zh:'创业者', example:'Es un emprendedor nato.'},
          {es:'Startup', zh:'创业公司', example:'Trabajo en una startup de tecnología.'},
          {es:'Proyecto', zh:'项目', example:'Mi proyecto es muy interesante.'},
          {es:'Equipo', zh:'团队', example:'Tenemos un equipo muy dinámico.'},
        
          {es:'La entrevista', zh:'面试', example:'La entrevista fue bien.'},
          {es:'El currículum', zh:'简历', example:'Envié mi currículum ayer.'},
          {es:'El ascenso', zh:'晋升', example:'Le dieron un ascenso merecido.'},
          {es:'El contrato', zh:'合同', example:'Firmé un contrato indefinido.'},
          {es:'El becario', zh:'实习生', example:'Empezó como becario.'},
          {es:'La experiencia', zh:'经验', example:'Tiene diez años de experiencia.'},
          {es:'La habilidad', zh:'技能', example:'Es una habilidad muy valorada.'},
          {es:'El equipo', zh:'团队', example:'Trabajo en un equipo pequeño.'},
          {es:'El liderazgo', zh:'领导力', example:'Demuestra buen liderazgo.'},
          {es:'El despido', zh:'解雇', example:'El despido fue improcedente.'},
          {es:'La jornada', zh:'工作日', example:'Tengo jornada completa.'},
          {es:'El título', zh:'学位 / 头衔', example:'Tiene un título de posgrado.'},
        ],
        grammar:[
          {title:'Preterito vs Imperfecto', desc:'两个过去时的区别核心。Indefinido 表完结/点动作；Imperfecto 表背景/习惯/未完成。Cuando llegué (indef), él trabajaba (imperf).'},
          {title:'被动语态 ser + participio', desc:'El contrato fue firmado ayer. Los productos serán entregados mañana.'},
          {title:'间接引语初步', desc:'Dijo que vendría. Pensó que era difícil. 转述他人的话。'}
        ]
      },

      { id:'b1-u2', title:'环境与可持续发展', subtitle:'Medio Ambiente y Sostenibilidad', lessons:8, duration:'约 30 分钟',
        vocab:[
          {es:'Contaminación', zh:'污染', example:'La contaminación del aire es grave.'},
          {es:'Contaminación del agua', zh:'水污染', example:'El río sufre contaminación del agua.'},
          {es:'Reciclar', zh:'回收', example:'Reciclamos papel, plástico y vidrio.'},
          {es:'Reciclaje', zh:'回收利用', example:'El reciclaje es obligatorio.'},
          {es:'Energía solar', zh:'太阳能', example:'Cada vez más energía solar.'},
          {es:'Energía eólica', zh:'风能', example:'Los aerogeneradores producen energía eólica.'},
          {es:'Cambio climático', zh:'气候变化', example:'El cambio climático es real.'},
          {es:'Calentamiento global', zh:'全球变暖', example:'El calentamiento global acelera el deshielo.'},
          {es:'Deshielo', zh:'融化', example:'El deshielo de los polares es preocupante.'},
          {es:'Biodiversidad', zh:'生物多样性', example:'Protegemos la biodiversidad.'},
          {es:'Ecosistema', zh:'生态系统', example:'El ecosistema amazónico está en peligro.'},
          {es:'Energía renovable', zh:'可再生能源', example:'Invertimos en energías renovables.'},
          {es:'Consumo', zh:'消费 / 消耗', example:'El consumo excesivo daña el planeta.'},
          {es:'Huella ecológica', zh:'生态足迹', example:'Reducir mi huella ecológica.'},
          {es:'Residuos', zh:'废物', example:'Separar los residuos.'},
          {es:'Plástico', zh:'塑料', example:'Evitar envases de plástico.'},
          {es:'Orgánico', zh:'有机', example:'Comemos productos orgánicos.'},
          {es:'Cultivar', zh:'种植', example:'Cultivamos nuestro propio huerto.'},
          {es:'Árbol', zh:'树', example:'Plantamos árboles cada año.'},
          {es:'Bosque', zh:'森林', example:'Los bosques nos dan oxígeno.'},
        
          {es:'El reciclaje', zh:'回收', example:'El reciclaje es fundamental.'},
          {es:'La contaminación', zh:'污染', example:'La contaminación del aire empeora.'},
          {es:'La energía renovable', zh:'可再生能源', example:'Apuestan por energías renovables.'},
          {es:'El calentamiento global', zh:'全球变暖', example:'El calentamiento global es urgente.'},
          {es:'La sequía', zh:'干旱', example:'La sequía afecta al sur.'},
          {es:'Sostenible', zh:'可持续的', example:'Buscamos un modelo sostenible.'},
          {es:'La huella de carbono', zh:'碳足迹', example:'Reduce tu huella de carbono.'},
          {es:'El residuo', zh:'废弃物', example:'Los residuos deben separarse.'},
          {es:'Consumir', zh:'消耗 / 消费', example:'Consumimos demasiada energía.'},
          {es:'La especie', zh:'物种', example:'Muchas especies están en peligro.'},
          {es:'Proteger', zh:'保护', example:'Hay que proteger los bosques.'},
          {es:'Concienciar', zh:'提高意识', example:'Campañas para concienciar a la gente.'},
        ],
        grammar:[
          {title:'与可持续性相关的正式表达', desc:'Debemos reducir las emisiones. Es necesario proteger el planeta.'},
          {title:'被动语态正式用法', desc:'La ley fue aprobada por el congreso. 被动语态在新闻和说明文里非常高频。'},
          {title:'es necesario / es importante / es fundamental', desc:'表达观点的关键句式。Es fundamental proteger el medio ambiente.'}
        ]
      },

      { id:'b1-u3', title:'科技与社交媒体', subtitle:'Tecnología y Redes Sociales', lessons:10, duration:'约 35 分钟',
        vocab:[          {es:'Ordenador', zh:'电脑', example:'Necesito un ordenador nuevo.'},
          {es:'Teléfono móvil', zh:'手机', example:'Mi teléfono móvil es viejo.'},
          {es:'Tablet', zh:'平板电脑', example:'Uso una tablet para estudiar.'},
          {es:'Internet', zh:'互联网', example:'Busca en Internet.'},
          {es:'WiFi', zh:'WiFi', example:'¿Hay WiFi aquí?'},
          {es:'Red social', zh:'社交网络', example:'Uso varias redes sociales.'},
          {es:'Cuenta', zh:'账号', example:'Mi cuenta de Instagram.'},
          {es:'Contraseña', zh:'密码', example:'Cambia tu contraseña.'},
          {es:'Publicar', zh:'发布', example:'Publico fotos todos los días.'},
          {es:'Me gusta (网络)', zh:'点赞', example:'Me gusta tu foto.'},
          {es:'Comentar', zh:'评论', example:'Comento las noticias.'},
          {es:'Seguir', zh:'关注', example:'Sigo a muchos influencers.'},
          {es:'Mensaje', zh:'消息', example:'Te envié un mensaje.'},
          {es:'Llamar por teléfono', zh:'打电话', example:'Te llamé por teléfono pero no estabas.'},
          {es:'Videollamada', zh:'视频通话', example:'Hacemos videollamadas con la familia.'},
          {es:'Inteligencia artificial', zh:'人工智能', example:'La inteligencia artificial avanza rápido.'},
          {es:'Robot', zh:'机器人', example:'Los robots harán muchos trabajos.'},
          {es:'Aplicación', zh:'App', example:'Descargué una aplicación nueva.'},
          {es:'Datos', zh:'数据', example:'Protege tus datos personales.'},
          {es:'Seguridad', zh:'安全', example:'La seguridad en línea es importante.'},
          {es:'Hacker', zh:'黑客', example:'Un hacker robó datos.'},
          {es:'Virus', zh:'病毒', example:'Tengo un virus en el ordenador.'},
          {es:'Actualizar', zh:'更新', example:'Actualiza tu software.'},
          {es:'Descargar', zh:'下载', example:'Descargué una película.'},
          {es:'Subir (archivo)', zh:'上传', example:'Subí la foto a la nube.'},
          {es:'La red social', zh:'社交网络', example:'Paso horas en las redes sociales.'},
          {es:'La pantalla', zh:'屏幕', example:'Mira menos la pantalla.'},
          {es:'El archivo', zh:'文件', example:'Adjunto el archivo en el correo.'},
          {es:'La contraseña', zh:'密码', example:'He olvidado la contraseña.'},
          {es:'El algoritmo', zh:'算法', example:'El algoritmo decide qué vemos.'},
          {es:'La privacidad', zh:'隐私', example:'La privacidad es un derecho.'},
          {es:'El dato', zh:'数据', example:'Protegen nuestros datos personales.'},
          {es:'La nube', zh:'云端', example:'Guardo las fotos en la nube.'},
          {es:'Compartir', zh:'分享', example:'Compartió el enlace con todos.'},
],
        grammar:[
          {title:'网络社交常用动词', desc:'Publicar, comentar, darle like, seguir, compartir, etiquetar, chatear...'},
          {title:'未来时 Ir a + 动词 / 简单将来时', desc:'Voy a estudiar esta noche. Estudiaré esta noche. 前者更口语，后者更书面。'},
          {title:'反义疑问句（初步）', desc:'Es divertido, ¿no? No está mal, ¿verdad? 口语中非常高频。'}
        ]
      },

      { id:'b1-u4', title:'艺术与文学入门', subtitle:'Introducción al Arte y la Literatura', lessons:10, duration:'约 35 分钟',
        vocab:[
          {es:'Arte', zh:'艺术', example:'Me encanta el arte español.'},
          {es:'Arquitectura', zh:'建筑', example:'Gaudí es un genio de la arquitectura.'},
          {es:'Pintura', zh:'绘画', example:'La pintura de Picasso es famosa.'},
          {es:'Pintor', zh:'画家', example:'Velázquez es un gran pintor.'},
          {es:'Escultura', zh:'雕塑', example:'La escultura de Julio Le Parc.'},
          {es:'Música clásica', zh:'古典音乐', example:'Me gusta la música clásica.'},
          {es:'Música española', zh:'西班牙音乐', example:'La música española es muy variada.'},
          {es:'Flamenco', zh:'弗拉门戈', example:'El flamenco es patrimonio de la humanidad.'},
          {es:'Literatura', zh:'文学', example:'Leo mucha literatura.'},
          {es:'Novela', zh:'小说', example:'Cien años de soledad es una novela maestra.'},
          {es:'Poema', zh:'诗', example:'Me gustan los poemas de Neruda.'},
          {es:'Dramaturgo', zh:'剧作家', example:'Lope de Vega es un gran dramaturgo.'},
          {es:'Teatro', zh:'剧院 / 戏剧', example:'Vamos al teatro el sábado.'},
          {es:'Cine', zh:'电影', example:'Vamos al cine.'},
          {es:'Película', zh:'电影', example:'Vi una película española reciente.'},
          {es:'Director', zh:'导演', example:'Almodóvar es un director famoso.'},
          {es:'Actor', zh:'演员', example:'Penélope Cruz es una actriz premiada.'},
          {es:'Museo', zh:'博物馆', example:'El Prado es el museo más importante.'},
          {es:'Exposición', zh:'展览', example:'Hay una exposición de Dalí.'},
          {es:'Obra maestra', zh:'杰作', example:'Las Meninas es una obra maestra.'},
          {es:'Género', zh:'类型 / 体裁', example:'¿Qué género de música te gusta?'},
          {es:'Tema', zh:'主题', example:'El tema central es el amor.'},
          {es:'Personaje', zh:'人物 / 角色', example:'El personaje principal es muy interesante.'},
        
          {es:'La novela', zh:'小说', example:'Es una novela fascinante.'},
          {es:'El autor', zh:'作者', example:'El autor firma ejemplares hoy.'},
          {es:'El personaje', zh:'人物', example:'El personaje principal es complejo.'},
          {es:'El argumento', zh:'情节', example:'El argumento me enganchó.'},
          {es:'La obra', zh:'作品 / 剧作', example:'Vimos una obra de Lorca.'},
          {es:'La escultura', zh:'雕塑', example:'La escultura es de mármol.'},
          {es:'La exposición', zh:'展览', example:'Hay una exposición en el museo.'},
          {es:'El cuadro', zh:'画作', example:'Este cuadro es de Goya.'},
          {es:'El ensayo', zh:'散文 / 论文', example:'Escribió un ensayo sobre el amor.'},
          {es:'El poema', zh:'诗', example:'Recitó un poema de Neruda.'},
          {es:'La trama', zh:'情节线索', example:'La trama tiene muchos giros.'},
          {es:'Inolvidable', zh:'难忘的', example:'Fue una experiencia inolvidable.'},
        ],
        grammar:[
          {title:'gustar 进阶 + 主语前置', desc:'Me gusta la obra de Gaudí. A mí lo que más me impresiona es...'},
          {title:'比较级和最高级完整', desc:'Goya es más famoso que... Picasso es uno de los pintores más influyentes del siglo XX.'},
          {title:'与艺术评论相关的表达', desc:'Es una obra magistral. Me conmueve profundamente. Tiene mucha fuerza expresiva.'}
        ]
      },

      { id:'b1-u5', title:'健康生活与运动', subtitle:'Salud y Deporte', lessons:8, duration:'约 30 分钟',
        vocab:[
          {es:'Saludable', zh:'健康的', example:'Una vida saludable es importante.'},
          {es:'Equilibrado', zh:'均衡', example:'Comer de forma equilibrada.'},
          {es:'Ejercicio físico', zh:'体育运动', example:'Hacer ejercicio físico regularmente.'},
          {es:'Deporte', zh:'运动', example:'¿Qué deporte te gusta?'},
          {es:'Fútbol', zh:'足球', example:'El fútbol es el deporte más popular.'},
          {es:'Baloncesto', zh:'篮球', example:'Juego al baloncesto con amigos.'},
          {es:'Natación', zh:'游泳', example:'La natación es muy completa.'},
          {es:'Tenis', zh:'网球', example:'Juego al tenis los sábados.'},
          {es:'Yoga', zh:'瑜伽', example:'Hago yoga para relajarme.'},
          {es:'Ciclismo', zh:'骑行', example:'El ciclismo es muy saludable.'},
          {es:'Gimnasio', zh:'健身房', example:'Voy al gimnasio tres veces a semana.'},
          {es:'Entrenamiento', zh:'训练', example:'Mi entrenamiento dura una hora.'},
          {es:'Musculatura', zh:'肌肉', example:'Trabajo la musculatura de las piernas.'},
          {es:'Estiramiento', zh:'拉伸', example:'Haz estiramientos antes y después.'},
          {es:'Lesión', zh:'受伤', example:'Tuve una lesión en la rodilla.'},
          {es:'Dieta', zh:'饮食', example:'Llevar una dieta sana.'},
          {es:'Calorías', zh:'卡路里', example:'Contar las calorías.'},
          {es:'Proteínas', zh:'蛋白质', example:'Necesitas más proteínas.'},
          {es:'Vitaminas', zh:'维生素', example:'Las frutas tienen vitaminas.'},
          {es:'Descanso', zh:'休息', example:'El descanso es tan importante como el ejercicio.'},
          {es:'Dormir bien', zh:'睡好', example:'Es fundamental dormir bien.'},
          {es:'Estresado', zh:'压力大', example:'Estoy muy estresado estos días.'},
          {es:'Relax', zh:'放松', example:'Necesito tiempo para relax.'},
        
          {es:'El entrenamiento', zh:'训练', example:'El entrenamiento dura una hora.'},
          {es:'El músculo', zh:'肌肉', example:'Me duelen los músculos.'},
          {es:'Estirar', zh:'拉伸', example:'No olvides estirar después.'},
          {es:'La resistencia', zh:'耐力', example:'Mejora tu resistencia corriendo.'},
          {es:'El descanso', zh:'休息', example:'El descanso es parte del plan.'},
          {es:'La dieta', zh:'饮食', example:'Lleva una dieta equilibrada.'},
          {es:'La proteína', zh:'蛋白质', example:'Necesitas más proteínas.'},
          {es:'El estrés', zh:'压力', example:'El estrés afecta a la salud.'},
          {es:'Relajarse', zh:'放松', example:'Intento relajarme con yoga.'},
          {es:'El hábito', zh:'习惯', example:'Crear un hábito lleva tiempo.'},
          {es:'La lesión', zh:'受伤', example:'Se recuperó de una lesión.'},
          {es:'Rendir', zh:'发挥 / 产出', example:'Rindo mejor por la mañana.'},
        ],
        grammar:[
          {title:'es importante / es fundamental + que', desc:'Es importante que hagas ejercicio. Es fundamental que duermas bien. 触发虚拟式现在时。'},
          {title:'Hace + 时间 + que + 现在时', desc:'Hace dos años que hago yoga. 也可用 Llevo dos años haciendo yoga.'},
          {title:'建议表达 debes / deberías', desc:'Debes comer más verduras. Deberías hacer ejercicio cada día.'}
        ]
      }
    ]
  },

  /* -------- B2 · 中级进阶 -------- */
  B2: {
    level: 'B2', title: '中级进阶', subtitle: 'Intermedio Alto',
    description: '能流畅交流，理解复杂文本，表达观点和立场。',
    color: '#2E5C8A',
    units: [
      { id:'b2-u1', title:'文化与身份认同', subtitle:'Cultura e Identidad', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'Patrimonio cultural', zh:'文化遗产', example:'La Alhambra es patrimonio cultural.'},
          {es:'Folclore', zh:'民俗', example:'El folclore andaluz es único.'},
          {es:'Tradición', zh:'传统', example:'Las tradiciones familiares son importantes.'},
          {es:'Aniversario', zh:'周年纪念', example:'El aniversario de la constitución.'},
          {es:'Diada', zh:'地区节庆日', example:'La Diada de Cataluña.'},
          {es:'Feria', zh:'集市 / 节庆', example:'La Feria de Abril en Sevilla.'},
          {es:'Semana Santa', zh:'圣周', example:'En Semana Santa hay procesiones.'},
          {es:'Gastronomía', zh:'美食', example:'La gastronomía española es variada.'},
          {es:'Paella valenciana', zh:'瓦伦西亚海鲜饭', example:'La verdadera paella valenciana no lleva marisco.'},
          {es:'Jamón ibérico', zh:'伊比利亚火腿', example:'El jamón ibérico es una exquisitez.'},
          {es:'Tapas', zh:'塔帕斯', example:'Ir de tapas es muy español.'},
          {es:'Churros', zh:'西班牙油条', example:'Churros con chocolate para desayunar.'},
          {es:'Flamenco', zh:'弗拉门戈', example:'El flamenco originario de Andalucía.'},
          {es:'Toreo', zh:'斗牛', example:'El toreo es polémico hoy en día.'},
          {es:'Sociedad', zh:'社会', example:'La sociedad española cambió mucho.'},
          {es:'Inmigración', zh:'移民', example:'La inmigración es un fenómeno global.'},
          {es:'Emigración', zh:'移民（移出）', example:'Muchos españoles emigraron en los años 60.'},
          {es:'Identidad nacional', zh:'民族认同', example:'La identidad nacional es compleja.'},
          {es:'Regionalismo', zh:'地方主义', example:'Cada región tiene sus propias costumbres.'},
          {es:'Castellano', zh:'卡斯蒂利亚语（正式称呼）', example:'El castellano es la lengua oficial.'},
          {es:'Dialecto', zh:'方言', example:'Hay muchos dialectos del español.'},
          {es:'Acento', zh:'口音', example:'El acento argentino es muy distinto.'},
          {es:'Palabra', zh:'单词', example:'Cada palabra tiene su historia.'},
          {es:'Léxico', zh:'词汇', example:'El léxico mexicano tiene muchas diferencias.'},
        
          {es:'La identidad', zh:'身份认同', example:'La identidad cultural es compleja.'},
          {es:'La costumbre', zh:'习俗', example:'Es una costumbre muy antigua.'},
          {es:'El patrimonio', zh:'遗产', example:'Protegen el patrimonio histórico.'},
          {es:'La tradición', zh:'传统', example:'Mantienen vivas sus tradiciones.'},
          {es:'El estereotipo', zh:'刻板印象', example:'Hay que superar los estereotipos.'},
          {es:'La diversidad', zh:'多样性', example:'La diversidad nos enriquece.'},
          {es:'Pertenecer', zh:'属于', example:'Pertenezco a dos culturas.'},
          {es:'La raíz', zh:'根源', example:'Sus raíces están en Andalucía.'},
          {es:'El choque cultural', zh:'文化冲击', example:'Sufrí un choque cultural.'},
          {es:'Integrarse', zh:'融入', example:'Le costó integrarse al principio.'},
          {es:'La lengua materna', zh:'母语', example:'Su lengua materna es el quechua.'},
          {es:'Reivindicar', zh:'主张 / 捍卫', example:'Reivindican su derecho a la tierra.'},
        ],
        grammar:[
          {title:'虚拟式现在时用法总结', desc:'表达愿望、怀疑、情感、可能性、命令。是 B2 的核心。Ojalá venga. Dudo que venga. Me alegro de que venga.'},
          {title:'Ser / Estar 深度辨析', desc:'Ser 更本质；Estar 更临时。但有很多惯用搭配：estar de pie, estar de vacaciones, ser de aquí...'},
          {title:'正式书面语结构', desc:'Con el fin de que, a fin de que, por + infinitive, al + infinitive. 这些在 B2 的书面表达中高频。'}
        ]
      },

      { id:'b2-u2', title:'全球化与社会议题', subtitle:'Globalización y Temas Sociales', lessons:10, duration:'约 40 分钟',
        vocab:[
          {es:'Globalización', zh:'全球化', example:'La globalización cambió todo.'},
          {es:'Desarrollo sostenible', zh:'可持续发展', example:'El desarrollo sostenible es esencial.'},
          {es:'Pobreza', zh:'贫困', example:'La pobreza no se ha erradicado.'},
          {es:'Desigualdad', zh:'不平等', example:'La desigualdad crece cada día.'},
          {es:'Hambre', zh:'饥饿', example:'Millones sufren hambre.'},
          {es:'Refugiado', zh:'难民', example:'Los refugiados necesitan ayuda.'},
          {es:'Derechos humanos', zh:'人权', example:'Defender los derechos humanos.'},
          {es:'Democracia', zh:'民主', example:'La democracia se debe defender.'},
          {es:'Dictadura', zh:'独裁', example:'Sufrieron una dictadura de 40 años.'},
          {es:'Guerra', zh:'战争', example:'La guerra siempre trae sufrimiento.'},
          {es:'Paz', zh:'和平', example:'Trabajar por la paz.'},
          {es:'Unión Europea', zh:'欧盟', example:'España forma parte de la Unión Europea.'},
          {es:'Mercado común', zh:'共同市场', example:'El mercado común Europeo es una realidad.'},
          {es:'Tratado', zh:'条约', example:'Firmaron un tratado de paz.'},
          {es:'Política', zh:'政治 / 政策', example:'La política actual es compleja.'},
          {es:'Partido político', zh:'政党', example:'Hay muchos partidos políticos.'},
          {es:'Elecciones', zh:'选举', example:'Las elecciones serán en noviembre.'},
          {es:'Votar', zh:'投票', example:'Todos deben votar.'},
          {es:'Sufragio', zh:'选举权', example:'El sufragio es universal.'},
          {es:'Manifestación', zh:'示威', example:'Hubo una manifestación ayer.'},
          {es:'Indignación', zh:'愤慨', example:'Hay mucha indignación social.'},
          {es:'Redistribución', zh:'再分配', example:'Una redistribución más justa de la riqueza.'},
        
          {es:'La desigualdad', zh:'不平等', example:'La desigualdad sigue creciendo.'},
          {es:'La migración', zh:'移民', example:'La migración es un fenómeno global.'},
          {es:'El desempleo', zh:'失业', example:'El desempleo juvenil es alto.'},
          {es:'La pobreza', zh:'贫困', example:'Medidas para reducir la pobreza.'},
          {es:'La brecha salarial', zh:'工资差距', example:'La brecha salarial persiste.'},
          {es:'El desarrollo', zh:'发展', example:'Impulsan el desarrollo rural.'},
          {es:'La sanidad pública', zh:'公共卫生', example:'Defienden la sanidad pública.'},
          {es:'La educación', zh:'教育', example:'La educación es la base de todo.'},
          {es:'El derecho', zh:'权利', example:'Es un derecho fundamental.'},
          {es:'La política social', zh:'社会政策', example:'Debatieron la política social.'},
          {es:'Invertir', zh:'投资', example:'Hay que invertir en investigación.'},
          {es:'La sostenibilidad', zh:'可持续性', example:'La sostenibilidad ya no es opcional.'},
        ],
        grammar:[
          {title:'虚拟式现在时 + 主句现在时/将来时', desc:'是 B2 的核心语法。Es necesario que... Queremos que... Cuando llegues (subj), te esperaré.'},
          {title:'过去时 + 虚拟式过去时', desc:'Dudaba que hubiera venido. Esperaba que fueras. 一致性法则（consecución de tiempos）。'},
          {title:'书面议论文结构', desc:'Por un lado... por otro lado... / Además... / Sin embargo... / Por tanto... 组织论点的关键。'}
        ]
      },
      { id:'b2-u3', title:'论证与观点表达', subtitle:'Argumentación y Opinión', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'Argumentar', zh:'论证、据理力争', example:'Conviene argumentar con datos, no con opiniones.'},
          {es:'La tesis', zh:'论点', example:'Su tesis se sostiene en tres pruebas sólidas.'},
          {es:'La premisa', zh:'前提', example:'Partimos de una premisa discutible.'},
          {es:'La objeción', zh:'反驳意见', example:'Anticipó las objeciones antes de que surgieran.'},
          {es:'El contraargumento', zh:'反论', example:'Un buen contraargumento fortalece el debate.'},
          {es:'Refutar', zh:'驳倒', example:'Refutó la hipótesis con un solo ejemplo.'},
          {es:'Rebatir', zh:'反驳', example:'Rebatió cada punto sin perder la calma.'},
          {es:'Matizar', zh:'限定、补充说明', example:'Permítame matizar esa afirmación.'},
          {es:'Corroborar', zh:'证实、佐证', example:'Los hechos corroboran su versión.'},
          {es:'Sustentar', zh:'支撑（论点）', example:'¿En qué datos sustenta usted esa conclusión?'},
          {es:'Inferir', zh:'推断', example:'De ahí se infiere una consecuencia grave.'},
          {es:'Presuponer', zh:'预设、假定', example:'Esa crítica presupone mala fe.'},
          {es:'La falacia', zh:'谬误', example:'Es una falacia de falsa dicotomía.'},
          {es:'El sesgo', zh:'偏见、偏差', example:'Reconozco mi propio sesgo al juzgarlo.'},
          {es:'La ambigüedad', zh:'含糊、歧义', example:'La ambigüedad del texto da pie a lecturas opuestas.'},
          {es:'Coherente', zh:'前后一致的', example:'Su postura es coherente de principio a fin.'},
          {es:'Contundente', zh:'有力的、不容置疑的', example:'Fue un argumento contundente.'},
          {es:'Concluyente', zh:'结论性的', example:'La prueba no resulta concluyente.'},
          {es:'Discutible', zh:'有争议的', example:'Es una decisión cuanto menos discutible.'},
          {es:'Legítimo', zh:'正当的', example:'Es legítimo discrepar sin descalificar.'},
          {es:'Pertinente', zh:'切题的、相关的', example:'Su observación es muy pertinente.'},
          {es:'Irrebatible', zh:'无可辩驳的', example:'Presentó una cifra irrebatible.'},
          {es:'Aducir', zh:'援引（理由）', example:'Adujo motivos personales para ausentarse.'},
          {es:'Alegar', zh:'申辩、声称', example:'Alegó que nadie le había avisado.'},
          {es:'Esgrimir', zh:'挥舞、搬出（论据）', example:'Esgrimió un informe oficial como prueba.'},
          {es:'Invocar', zh:'援引、诉诸', example:'Invocó el reglamento para justificarse.'},
          {es:'Cuestionar', zh:'质疑', example:'Cuestióno esa cifra por falta de fuente.'},
          {es:'Impugnar', zh:'对……提出异议', example:'La defensa impugnó el testimonio.'},
          {es:'Desvirtuar', zh:'使失去说服力', example:'Los hechos desvirtúan esa acusación.'},
          {es:'Sopesar', zh:'权衡', example:'Hay que sopesar pros y contras.'},
          {es:'Contraponer', zh:'对照、对立', example:'Contrapuso su experiencia a la teoría.'},
          {es:'En contraste con', zh:'与……形成对比', example:'En contraste con lo esperado, subió la demanda.'},
          {es:'En rigor', zh:'严格说来', example:'En rigor, esa afirmación es inexacta.'},
          {es:'En definitiva', zh:'总而言之', example:'En definitiva, faltan pruebas.'},
          {es:'A todas luces', zh:'显然', example:'Es, a todas luces, una decisión precipitada.'},
          {es:'De ahí que', zh:'因此（+虚拟式）', example:'No hay datos; de ahí que se dude del informe.'},
          {es:'Por consiguiente', zh:'因而', example:'Escasean los fondos; por consiguiente, se aplaza.'},
          {es:'En la medida en que', zh:'就……而言', example:'En la medida en que sea posible, lo intentaremos.'},
          {es:'No obstante', zh:'尽管如此', example:'No obstante, la propuesta sigue en pie.'},
          {es:'Ahora bien', zh:'不过（转折）', example:'Ahora bien, conviene precisar el alcance.'},
          {es:'Dicho esto', zh:'话虽如此', example:'Dicho esto, paso a la segunda cuestión.'},
          {es:'A decir verdad', zh:'说实话', example:'A decir verdad, nunca me convenció.'},
          {es:'Huelga decir', zh:'不必说', example:'Huelga decir que asumo la responsabilidad.'},
          {es:'Cabe preguntarse', zh:'不禁要问', example:'Cabe preguntarse si valió la pena.'},
          {es:'Merece la pena señalar', zh:'值得指出', example:'Merece la pena señalar un detalle.'},
          {es:'Pecar de', zh:'失之于、犯……毛病', example:'El informe peca de optimista.'},
          {es:'Adolecer de', zh:'缺乏、带有（缺陷）', example:'El plan adolece de concreción.'},
          {es:'Carecer de', zh:'缺乏', example:'Carece de fundamento esa sospecha.'},
          {es:'Que yo sepa', zh:'据我所知', example:'Que yo sepa, nadie lo ha autorizado.'},
          {es:'A mi juicio', zh:'依我看', example:'A mi juicio, el problema es otro.'}
        ],
        grammar:[
          {title:'论证动词 + 陈述式 / 虚拟式', desc:'肯定、确信类（afirmar, sostener, es evidente que）接陈述式；否定或怀疑类（no creo que, niego que, es discutible que）接虚拟式。这是 B2 写作最容易出错的地方。'},
          {title:'让步与转折连接词', desc:'aunque + 陈述式（已知事实）/ + 虚拟式（假设）；no obstante, sin embargo, ahora bien 用于正式转折；a pesar de + 名词/不定式。'},
          {title:'表达保留意见的句式', desc:'Permítame matizar… / Hasta cierto punto… / En principio sí, aunque… —— 让论证显得审慎而非武断。'}
        ]
      },
      { id:'b2-u4', title:'媒体与信息素养', subtitle:'Medios y Alfabetización Informacional', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'La fuente', zh:'消息来源', example:'Cita siempre la fuente original.'},
          {es:'El titular', zh:'标题', example:'El titular exagera el contenido.'},
          {es:'El reportaje', zh:'专题报道', example:'Publicaron un reportaje de investigación.'},
          {es:'La crónica', zh:'纪实报道', example:'Su crónica desde la frontera conmovió.'},
          {es:'La editorial', zh:'社论', example:'La editorial criticó la medida.'},
          {es:'El columnista', zh:'专栏作家', example:'Es columnista de un diario nacional.'},
          {es:'La portada', zh:'头版', example:'El escándalo ocupó la portada.'},
          {es:'La tirada', zh:'印数', example:'La tirada supera los cien mil ejemplares.'},
          {es:'El bulo', zh:'谣言、假消息', example:'Desmintieron el bulo en dos horas.'},
          {es:'El rumor', zh:'传闻', example:'Corría el rumor de una dimisión.'},
          {es:'La desinformación', zh:'虚假信息（有组织）', example:'La desinformación circula más rápido que la verdad.'},
          {es:'La manipulación', zh:'操纵', example:'Hubo manipulación evidente de las imágenes.'},
          {es:'El sesgo informativo', zh:'报道偏向', example:'El sesgo informativo es difícil de medir.'},
          {es:'Contrastar', zh:'核实、比对', example:'Hay que contrastar la noticia con otra fuente.'},
          {es:'Verificar', zh:'核实', example:'No consiguieron verificar el dato.'},
          {es:'Desmentir', zh:'否认、辟谣', example:'El ministerio desmintió la cifra.'},
          {es:'Filtrar', zh:'泄露（信息）', example:'Alguien filtró el documento a la prensa.'},
          {es:'Difundir', zh:'传播', example:'La noticia se difundió en minutos.'},
          {es:'Divulgar', zh:'普及、公开', example:'Divulgan ciencia en un podcast.'},
          {es:'Censurar', zh:'审查、删改', example:'Censuraron el párrafo más crítico.'},
          {es:'La audiencia', zh:'受众、收视率', example:'La audiencia cayó tras el cambio de formato.'},
          {es:'El índice de audiencia', zh:'收视率', example:'Lidera el índice de audiencia nocturno.'},
          {es:'La credibilidad', zh:'公信力', example:'La credibilidad del medio quedó dañada.'},
          {es:'La imparcialidad', zh:'公允、不偏不倚', example:'Se exige imparcialidad a los informadores.'},
          {es:'La objetividad', zh:'客观性', example:'La objetividad absoluta no existe.'},
          {es:'Sensacionalista', zh:'耸动的', example:'Un enfoque sensacionalista vende más.'},
          {es:'Veraz', zh:'真实的', example:'Exigimos información veraz.'},
          {es:'Fidedigno', zh:'可靠的', example:'Es una fuente fidedigna.'},
          {es:'Anónimo', zh:'匿名的', example:'Recibió una carta anónima.'},
          {es:'El comunicado', zh:'公报、声明', example:'Emitieron un comunicado escueto.'},
          {es:'La rueda de prensa', zh:'记者会', example:'Convocó una rueda de prensa urgente.'},
          {es:'La entrevista', zh:'采访', example:'Concedió una entrevista exclusiva.'},
          {es:'El debate', zh:'辩论', example:'El debate televisado batió récords.'},
          {es:'El periodismo de investigación', zh:'调查报道', example:'El periodismo de investigación requiere tiempo.'},
          {es:'La libertad de prensa', zh:'新闻自由', example:'Defienden la libertad de prensa.'},
          {es:'La opinión pública', zh:'舆论', example:'La opinión pública cambió de signo.'},
          {es:'La propaganda', zh:'宣传', example:'Es pura propaganda electoral.'},
          {es:'El estereotipo', zh:'刻板印象', example:'El medio reproduce estereotipos de género.'},
          {es:'La alfabetización mediática', zh:'媒介素养', example:'La alfabetización mediática debería enseñarse en la escuela.'},
          {es:'El algoritmo', zh:'算法', example:'El algoritmo decide qué noticias ves.'},
          {es:'La burbuja informativa', zh:'信息茧房', example:'Vivimos en burbujas informativas.'},
          {es:'El ciberacoso', zh:'网络霸凌', example:'Denunció el ciberacoso que sufrió.'},
          {es:'La privacidad', zh:'隐私', example:'La privacidad se vende barata.'},
          {es:'El rastro digital', zh:'数字足迹', example:'Todo deja un rastro digital.'},
          {es:'La huella de datos', zh:'数据痕迹', example:'Borrar la huella de datos es casi imposible.'},
          {es:'Suscitar', zh:'引发（议论）', example:'La medida suscitó un intenso debate.'},
          {es:'Acaparar', zh:'占据（版面、注意力）', example:'El tema acaparó todos los titulares.'},
          {es:'Someter a escrutinio', zh:'置于审视之下', example:'Sometieron el informe a escrutinio público.'},
          {es:'Ponerse en entredicho', zh:'受到质疑', example:'Su versión se puso en entredicho.'},
          {es:'Salir a la luz', zh:'曝光', example:'Los correos salieron a la luz.'}
        ],
        grammar:[
          {title:'被动语态与被动 se', desc:'ser + 过去分词（强调动作，可用 por 引出施动者）；se + 第三人称（更常见于新闻体，如 «Se desmintió la cifra»）。'},
          {title:'转述他人言论', desc:'直接引语与间接引语的时态后移：dijo que…；据传：se dice que / al parecer / según fuentes；辟谣：desmintió haber…'},
          {title:'新闻体常用无人称结构', desc:'Se informa de que… / Cabe señalar que… / Fuentes cercanas al caso aseguran… —— 既客观又避免指名。'}
        ]
      },
      { id:'b2-u5', title:'职场沟通与协作', subtitle:'Comunicación Profesional', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'La reunión de equipo', zh:'团队会议', example:'La reunión de equipo es los lunes.'},
          {es:'El orden del día', zh:'议程', example:'Envío el orden del día esta tarde.'},
          {es:'El acta', zh:'会议纪要', example:'Levantó acta de lo acordado.'},
          {es:'El portavoz', zh:'发言人', example:'Actuó como portavoz del grupo.'},
          {es:'El plazo de entrega', zh:'交付期限', example:'El plazo de entrega vence el viernes.'},
          {es:'La carga de trabajo', zh:'工作量', example:'La carga de trabajo es desigual.'},
          {es:'La prioridad', zh:'优先级', example:'Hay que fijar prioridades.'},
          {es:'Delegar', zh:'委派', example:'Aprender a delegar es esencial.'},
          {es:'Supervisar', zh:'监督', example:'Supervisa a cinco personas.'},
          {es:'Coordinar', zh:'协调', example:'Coordina dos departamentos.'},
          {es:'La retroalimentación', zh:'反馈', example:'Agradezco la retroalimentación honesta.'},
          {es:'El desempeño', zh:'绩效', example:'Su desempeño ha mejorado.'},
          {es:'La evaluación', zh:'考核', example:'La evaluación anual es en diciembre.'},
          {es:'El objetivo', zh:'目标', example:'Los objetivos son ambiciosos.'},
          {es:'El hito', zh:'里程碑', example:'Hemos alcanzado el primer hito.'},
          {es:'El presupuesto', zh:'预算', example:'El presupuesto se agotó en junio.'},
          {es:'El gasto', zh:'支出', example:'Hay que contener el gasto.'},
          {es:'La partida', zh:'预算项目', example:'Esa partida es intocable.'},
          {es:'Rentabilizar', zh:'使产生收益', example:'Debemos rentabilizar la inversión.'},
          {es:'Optimizar', zh:'优化', example:'Optimizamos los procesos internos.'},
          {es:'Agilizar', zh:'加快', example:'Agilizar los trámites es urgente.'},
          {es:'Implementar', zh:'实施', example:'Implementaremos el cambio en marzo.'},
          {es:'Consensuar', zh:'协商一致', example:'Consensuamos la propuesta.'},
          {es:'Sondear', zh:'试探、摸底', example:'Sondeó la opinión del equipo.'},
          {es:'Plantear', zh:'提出', example:'Planteó una duda razonable.'},
          {es:'Exponer', zh:'陈述', example:'Expuso el plan con claridad.'},
          {es:'Aclarar', zh:'澄清', example:'Permítame aclarar un punto.'},
          {es:'Precisar', zh:'明确、细化', example:'Conviene precisar los términos.'},
          {es:'Recalcar', zh:'强调', example:'Recalcó la importancia del plazo.'},
          {es:'Matizar', zh:'补充说明', example:'Quisiera matizar esa cifra.'},
          {es:'Incidir en', zh:'强调、着重', example:'Incidió en la necesidad de datos.'},
          {es:'Puntualizar', zh:'进一步说明', example:'Déjeme puntualizar un detalle.'},
          {es:'Corroborar', zh:'证实', example:'Los hechos corroboran su versión.'},
          {es:'Rebatir', zh:'反驳', example:'Rebatió el argumento sin brusquedad.'},
          {es:'Discrepar', zh:'持不同意见', example:'Discrepo respetuosamente.'},
          {es:'Coincidir', zh:'意见一致', example:'Coincido plenamente con usted.'},
          {es:'Secundar', zh:'附议、支持', example:'Secundó la propuesta de su colega.'},
          {es:'Respaldar', zh:'支持、背书', example:'Respaldó la decisión del comité.'},
          {es:'La discrepancia', zh:'分歧', example:'La discrepancia es constructiva.'},
          {es:'El consenso', zh:'共识', example:'Alcanzamos un consenso amplio.'},
          {es:'La hoja de ruta', zh:'路线图', example:'Presentó una hoja de ruta clara.'},
          {es:'El seguimiento', zh:'跟进', example:'Haremos seguimiento mensual.'},
          {es:'La mejora continua', zh:'持续改进', example:'Apostamos por la mejora continua.'},
          {es:'El margen de maniobra', zh:'操作空间', example:'Tenemos poco margen de maniobra.'},
          {es:'El escollo', zh:'障碍', example:'El escollo principal es el presupuesto.'},
          {es:'La traba', zh:'阻碍', example:'Hay demasiadas trabas burocráticas.'},
          {es:'El imprevisto', zh:'意外情况', example:'Surgió un imprevisto de última hora.'},
          {es:'El margen de error', zh:'容错范围', example:'El margen de error es mínimo.'},
          {es:'Asumir el liderazgo', zh:'承担领导责任', example:'Asumió el liderazgo del proyecto.'},
          {es:'Rendir cuentas', zh:'汇报、负责', example:'Hay que rendir cuentas ante el comité.'},
          {es:'Llegar a un acuerdo', zh:'达成一致', example:'Llegaron a un acuerdo razonable.'},
          {es:'Salirse del guion', zh:'脱离既定流程', example:'El jefe se salió del guion.'}
        ],
        grammar:[
          {title:'表达同意与不同意（分级）', desc:'强烈同意：Estoy totalmente de acuerdo / Sin duda alguna。部分同意：Hasta cierto punto / Comparto la idea, aunque…。委婉反对：Me temo que no lo veo así / Permítame discrepar。'},
          {title:'礼貌请求与指令', desc:'¿Le importaría…? / ¿Sería tan amable de…? / Le agradecería que + 虚拟式 —— 职场中避免直接命令。'},
          {title:'条件与假设的商务表达', desc:'De cumplirse el plazo… / En caso de que + 虚拟式 / Siempre que + 虚拟式 / A condición de que + 虚拟式。'}
        ]
      },
      { id:'b2-u6', title:'法律常识与公民权利', subtitle:'Derecho y Ciudadanía', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'El derecho', zh:'权利；法律', example:'Tienes derecho a guardar silencio.'},
          {es:'El deber', zh:'义务', example:'Es un deber cívico votar.'},
          {es:'La ley', zh:'法律', example:'La ley entró en vigor en enero.'},
          {es:'El reglamento', zh:'条例', example:'El reglamento prohíbe fumar aquí.'},
          {es:'La norma', zh:'规范', example:'La norma se aplica a todos.'},
          {es:'El decreto', zh:'法令', example:'El decreto fue publicado ayer.'},
          {es:'La enmienda', zh:'修正案', example:'Aprobaron una enmienda al texto.'},
          {es:'El artículo', zh:'条款', example:'El artículo 15 lo recoge.'},
          {es:'El párrafo', zh:'段落', example:'Revisa el segundo párrafo.'},
          {es:'El supuesto', zh:'假定情形', example:'En el supuesto de que no comparezca…'},
          {es:'La vigencia', zh:'生效期', example:'La ley tiene vigencia indefinida.'},
          {es:'Derogar', zh:'废止', example:'Derogaron la norma anterior.'},
          {es:'Promulgar', zh:'颁布', example:'El rey promulgó la ley.'},
          {es:'Ratificar', zh:'批准', example:'El parlamento ratificó el tratado.'},
          {es:'Tipificar', zh:'定为犯罪', example:'La conducta está tipificada como delito.'},
          {es:'Delinquir', zh:'犯罪', example:'Quien delinque debe responder.'},
          {es:'El delito', zh:'罪行', example:'Es un delito grave.'},
          {es:'La falta', zh:'轻微违法', example:'Constituye una falta leve.'},
          {es:'La infracción', zh:'违规', example:'La infracción se sanciona con multa.'},
          {es:'La sanción', zh:'处罚', example:'La sanción fue de seiscientos euros.'},
          {es:'La multa', zh:'罚款', example:'Le impusieron una multa.'},
          {es:'La denuncia', zh:'举报、控告', example:'Presentó una denuncia en comisaría.'},
          {es:'La querella', zh:'刑事控告', example:'Interpuso una querella criminal.'},
          {es:'El imputado', zh:'被指控人', example:'El imputado declaró ante el juez.'},
          {es:'El testigo', zh:'证人', example:'El testigo identificó al acusado.'},
          {es:'El peritaje', zh:'鉴定', example:'El peritaje confirmó el daño.'},
          {es:'La prueba', zh:'证据', example:'La prueba es circunstancial.'},
          {es:'El indicio', zh:'线索、间接证据', example:'Hay indicios suficientes.'},
          {es:'La presunción de inocencia', zh:'无罪推定', example:'Rige la presunción de inocencia.'},
          {es:'El habeas corpus', zh:'人身保护令', example:'Solicitó un habeas corpus.'},
          {es:'La detención', zh:'拘留', example:'La detención duró 24 horas.'},
          {es:'El arresto domiciliario', zh:'软禁', example:'Le impusieron arresto domiciliario.'},
          {es:'La libertad provisional', zh:'保释', example:'Quedó en libertad provisional.'},
          {es:'La fianza', zh:'保释金', example:'Pagó una fianza de diez mil euros.'},
          {es:'El juicio oral', zh:'庭审', example:'El juicio oral se celebrará en mayo.'},
          {es:'La vista', zh:'听证', example:'La vista se suspendió.'},
          {es:'El veredicto', zh:'裁决', example:'El jurado emitió su veredicto.'},
          {es:'La condena', zh:'定罪', example:'La condena fue de dos años.'},
          {es:'La absolución', zh:'无罪判决', example:'Se produjo la absolución del acusado.'},
          {es:'La apelación', zh:'上诉', example:'Presentó apelación ante el tribunal superior.'},
          {es:'El indulto', zh:'赦免', example:'Se le concedió el indulto.'},
          {es:'La amnistía', zh:'大赦', example:'La amnistía generó un intenso debate.'},
          {es:'El cómputo', zh:'计算、时限计算', example:'El cómputo del plazo empieza hoy.'},
          {es:'La caducidad', zh:'失效', example:'La caducidad del contrato es en junio.'},
          {es:'La retroactividad', zh:'溯及力', example:'La norma no tiene retroactividad.'},
          {es:'Incurrir en', zh:'触犯、陷入', example:'Incurrió en un error grave.'},
          {es:'Conculcar', zh:'侵犯', example:'La medida conculca derechos básicos.'},
          {es:'Vulnerar', zh:'侵犯、违反', example:'Se vulneró su derecho a la defensa.'},
          {es:'Amparar', zh:'保护、庇护', example:'La ley ampara al consumidor.'},
          {es:'Salvaguardar', zh:'维护、保障', example:'Hay que salvaguardar la intimidad.'},
          {es:'Prescribir', zh:'（时效）届满', example:'El delito ha prescrito.'},
          {es:'Eximir de', zh:'免除', example:'Le eximieron de responsabilidad.'}
        ],
        grammar:[
          {title:'被动与无人称的法律表达', desc:'Se prohíbe / Se autoriza / Queda prohibido / Se establece que + 虚拟式 —— 法律条文的标准句式。'},
          {title:'义务与禁令的表达', desc:'deber + 不定式（义务）、haber de + 不定式（正式）、quedar + 分词（状态）、no podrá + 不定式（禁止）。'},
          {title:'条件与假定（法律语境）', desc:'En el supuesto de que + 虚拟式 / Siempre que + 虚拟式 / A reserva de / Sin perjuicio de —— 用于设定义务的边界。'}
        ]
      },
      { id:'b2-u7', title:'科学与技术创新', subtitle:'Ciencia e Innovación', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'La investigación', zh:'研究', example:'La investigación duró cinco años.'},
          {es:'El ensayo clínico', zh:'临床试验', example:'El ensayo clínico tuvo tres fases.'},
          {es:'La vacuna', zh:'疫苗', example:'La vacuna mostró alta eficacia.'},
          {es:'La patente', zh:'专利', example:'Registraron la patente en Europa.'},
          {es:'El prototipo', zh:'原型', example:'El prototipo superó las pruebas.'},
          {es:'La innovación', zh:'创新', example:'La innovación exige inversión.'},
          {es:'El desarrollo tecnológico', zh:'技术开发', example:'El desarrollo tecnológico avanza rápido.'},
          {es:'La inteligencia artificial', zh:'人工智能', example:'La inteligencia artificial transforma sectores.'},
          {es:'El aprendizaje automático', zh:'机器学习', example:'El aprendizaje automático detecta patrones.'},
          {es:'La robótica', zh:'机器人技术', example:'La robótica industrial crece.'},
          {es:'La biotecnología', zh:'生物技术', example:'La biotecnología abre nuevas vías.'},
          {es:'La nanotecnología', zh:'纳米技术', example:'La nanotecnología permite materiales nuevos.'},
          {es:'La energía renovable', zh:'可再生能源', example:'La energía renovable ya es competitiva.'},
          {es:'La huella ecológica', zh:'生态足迹', example:'Reducir la huella ecológica es prioritario.'},
          {es:'El almacenamiento', zh:'储能', example:'El almacenamiento es el gran reto.'},
          {es:'La eficiencia energética', zh:'能效', example:'Mejorar la eficiencia energética ahorra costes.'},
          {es:'La emisión', zh:'排放', example:'Las emisiones cayeron un cinco por ciento.'},
          {es:'La huella de carbono', zh:'碳足迹', example:'Calculan la huella de carbono del proceso.'},
          {es:'El residuo', zh:'废弃物', example:'Los residuos se reciclan en planta.'},
          {es:'La materia prima', zh:'原材料', example:'La materia prima escasea.'},
          {es:'El avance', zh:'进展', example:'Los avances son notables.'},
          {es:'El obstáculo', zh:'障碍', example:'El obstáculo principal es económico.'},
          {es:'Viabilizar', zh:'使可行', example:'Buscan viabilizar el proyecto.'},
          {es:'Optimizar recursos', zh:'优化资源', example:'Hay que optimizar recursos.'},
          {es:'Escalar', zh:'规模化', example:'Costó escalar la producción.'},
          {es:'Validar', zh:'验证', example:'Validaron los resultados en laboratorio.'},
          {es:'Contrastar datos', zh:'比对数据', example:'Contrastaron los datos con otra fuente.'},
          {es:'Reproducir el experimento', zh:'复现实验', example:'Nadie ha podido reproducir el experimento.'},
          {es:'El margen de mejora', zh:'提升空间', example:'Aún hay margen de mejora.'},
          {es:'La viabilidad', zh:'可行性', example:'Estudian la viabilidad técnica.'},
          {es:'El coste-beneficio', zh:'成本效益', example:'El análisis coste-beneficio es favorable.'},
          {es:'La escalabilidad', zh:'可扩展性', example:'La escalabilidad del sistema está probada.'},
          {es:'La implementación', zh:'落地实施', example:'La implementación llevará un año.'},
          {es:'El despliegue', zh:'部署', example:'El despliegue se hará por fases.'},
          {es:'La infraestructura', zh:'基础设施', example:'La infraestructura es insuficiente.'},
          {es:'El mantenimiento', zh:'维护', example:'El mantenimiento preventivo reduce fallos.'},
          {es:'La obsolescencia', zh:'过时、淘汰', example:'La obsolescencia programada es criticada.'},
          {es:'El reciclaje', zh:'回收', example:'El reciclaje de baterías es complejo.'},
          {es:'La trazabilidad', zh:'可追溯性', example:'Exigen trazabilidad total.'},
          {es:'La certificación', zh:'认证', example:'Obtuvo la certificación europea.'},
          {es:'El estándar', zh:'标准', example:'Cumple el estándar internacional.'},
          {es:'La normativa', zh:'法规', example:'La normativa es más estricta ahora.'},
          {es:'La propiedad intelectual', zh:'知识产权', example:'Protegen su propiedad intelectual.'},
          {es:'El secreto industrial', zh:'商业机密', example:'Guardan celosamente el secreto industrial.'},
          {es:'La divulgación científica', zh:'科学普及', example:'La divulgación científica acerca la ciencia.'},
          {es:'El hallazgo', zh:'发现', example:'El hallazgo se publicó en Nature.'},
          {es:'La evidencia', zh:'证据', example:'La evidencia aún es preliminar.'},
          {es:'El consenso científico', zh:'科学共识', example:'Existe consenso científico al respecto.'},
          {es:'El escéptico', zh:'怀疑者', example:'Los escépticos piden más datos.'},
          {es:'El aval científico', zh:'科学背书', example:'La medida carece de aval científico.'},
          {es:'Arrojar resultados', zh:'得出结果', example:'El estudio arroja resultados prometedores.'}
        ],
        grammar:[
          {title:'科技文本的无人称与被动', desc:'Se ha desarrollado / Los datos fueron procesados / Se prevé que + 虚拟式 —— 强调过程而非施动者。'},
          {title:'表示程度与进展的动词搭配', desc:'experimentar un avance, registrar un aumento, situarse por debajo de, superar el umbral de, duplicar la cifra。'},
          {title:'未来与预测的表达', desc:'Se espera que + 虚拟式 / Es previsible que + 虚拟式 / De mantenerse la tendencia… / A este ritmo… —— 描述技术趋势。'}
        ]
      }
    ]
  },

  /* -------- C1 · 高级精通 -------- */
  C1: {
    level: 'C1', title: '高级精通', subtitle: 'Avanzado',
    description: '能在专业领域、学术讨论和复杂话题上精准表达。',
    color: '#7A2438',
    units: [
      { id:'c1-u1', title:'商务谈判与合同', subtitle:'Negocios y Contratos', lessons:14, duration:'约 50 分钟',
        vocab:[
          {es:'Acuerdo', zh:'协议', example:'Llegamos a un acuerdo.'},
          {es:'Negociación', zh:'谈判', example:'La negociación fue dura pero fructífera.'},
          {es:'Cláusula', zh:'条款', example:'Esta cláusula es desfavorable.'},
          {es:'Acuerdo marco', zh:'框架协议', example:'Firmamos un acuerdo marco.'},
          {es:'Renovable', zh:'可续签', example:'El contrato es renovable.'},
          {es:'Fijar', zh:'确定 / 敲定', example:'Vamos a fijar la fecha.'},
          {es:'Pactar', zh:'约定', example:'Pactamos los términos.'},
          {es:'Condición', zh:'条件', example:'Acepto con estas condiciones.'},
          {es:'Obligación', zh:'义务', example:'Es una obligación legal.'},
          {es:'Responsabilidad', zh:'责任', example:'Asumir la responsabilidad.'},
          {es:'Indemnización', zh:'赔偿', example:'Pedir indemnización por daños.'},
          {es:'Resolución de conflictos', zh:'冲突解决', example:'Necesitamos una resolución de conflictos.'},
          {es:'Arbitraje', zh:'仲裁', example:'Recurrir al arbitraje.'},
          {es:'Veredicto', zh:'裁决', example:'El veredicto fue a nuestro favor.'},
          {es:'Intermediario', zh:'中间人', example:'Actuó como intermediario.'},
          {es:'Contraparte', zh:'对方', example:'La contraparte aceptó.'},
          {es:'Estrategia comercial', zh:'商业策略', example:'Nuestra estrategia comercial cambió.'},
          {es:'Marketing', zh:'市场营销', example:'El marketing digital crece.'},
          {es:'Branding', zh:'品牌塑造', example:'Invertimos mucho en branding.'},
          {es:'Mercado objetivo', zh:'目标市场', example:'Identificamos nuestro mercado objetivo.'},
          {es:'Cuota de mercado', zh:'市场份额', example:'Perdimos cuota de mercado.'},
          {es:'Competencia', zh:'竞争', example:'La competencia es muy dura.'},
          {es:'Fusionar', zh:'合并', example:'Dos empresas van a fusionar.'},
          {es:'Adquisición', zh:'收购', example:'Una adquisición muy polémica.'},
          {es:'Empresa matriz', zh:'母公司', example:'La empresa matriz está en Alemania.'},
          {es:'Filial', zh:'子公司', example:'La filial en México crece mucho.'},
        
          {es:'La cláusula', zh:'条款', example:'Revisa la cláusula octava.'},
          {es:'El convenio', zh:'协议', example:'Firmaron un convenio colectivo.'},
          {es:'La negociación', zh:'谈判', example:'La negociación fue tensa.'},
          {es:'El margen', zh:'利润率 / 余地', example:'El margen es muy estrecho.'},
          {es:'La facturación', zh:'营业额', example:'La facturación creció un diez por ciento.'},
          {es:'El proveedor', zh:'供应商', example:'Cambiamos de proveedor.'},
          {es:'La garantía', zh:'保障 / 质保', example:'El producto tiene dos años de garantía.'},
          {es:'La cláusula abusiva', zh:'不公平条款', example:'La cláusula abusiva fue anulada.'},
          {es:'El litigio', zh:'诉讼', example:'Resolvieron el litigio fuera de los tribunales.'},
          {es:'La cláusula de confidencialidad', zh:'保密条款', example:'Firmó una cláusula de confidencialidad.'},
          {es:'El socio', zh:'合伙人', example:'Es socio fundador de la firma.'},
          {es:'La indemnización', zh:'赔偿金', example:'Exigen una indemnización.'},
          {es:'Ratificar', zh:'批准 / 认可', example:'El consejo ratificó el acuerdo.'},
          {es:'La reunión de seguimiento', zh:'跟进会议', example:'Habrá una reunión de seguimiento.'},
        ],
        grammar:[
          {title:'虚拟式过去时完整（imperfecto 形式）', desc:'Si tuviera más tiempo, lo haría. Ojalá hubiera sabido antes. 是 C1 商务和表达假设的核心。'},
          {title:'正式商务用语', desc:'Por la presente le comunicamos... / Haciendo referencia a su carta... / A la espera de sus noticias, queda atentamente.'},
          {title:'长句结构与从句嵌套', desc:'La cláusula que firmamos ayer establece que la empresa, que lleva dos años en negociaciones, renovará el contrato...'}
        ]
      },

      { id:'c1-u2', title:'学术研究与论文写作', subtitle:'Investigación Académica', lessons:12, duration:'约 45 分钟',
        vocab:[
          {es:'Hipótesis', zh:'假设', example:'Nuestra hipótesis se confirma.'},
          {es:'Metodología', zh:'方法论', example:'La metodología es cuantitativa.'},
          {es:'Análisis', zh:'分析', example:'Análisis cualitativo de datos.'},
          {es:'Estadística', zh:'统计学', example:'Las estadísticas muestran una tendencia.'},
          {es:'Muestra', zh:'样本', example:'La muestra es representativa.'},
          {es:'Variable', zh:'变量', example:'Variables independientes y dependientes.'},
          {es:'Resultado', zh:'结果', example:'Los resultados son contundentes.'},
          {es:'Conclusión', zh:'结论', example:'Llegamos a las siguientes conclusiones.'},
          {es:'Bibliografía', zh:'参考书目', example:'La bibliografía es exhaustiva.'},
          {es:'Cita', zh:'引用', example:'Citar las fuentes correctamente.'},
          {es:'Plagio', zh:'抄袭', example:'El plagio es un delito académico.'},
          {es:'Revisión por pares', zh:'同行评议', example:'El artículo está en revisión por pares.'},
          {es:'Artículo científico', zh:'学术论文', example:'Publicamos un artículo científico.'},
          {es:'Revista académica', zh:'学术期刊', example:'En una revista académica indexada.'},
          {es:'Congreso', zh:'学术会议', example:'Presentamos en un congreso internacional.'},
          {es:'Ponencia', zh:'学术报告', example:'Di una ponencia sobre el tema.'},
          {es:'Abstract', zh:'摘要', example:'El abstract debe ser breve.'},
          {es:'Palabras clave', zh:'关键词', example:'Las palabras clave facilitan la búsqueda.'},
          {es:'Tesis', zh:'论文 / 论点', example:'Defendí mi tesis doctoral.'},
          {es:'Innovación', zh:'创新', example:'Una innovación metodológica.'},
          {es:'Aporte', zh:'贡献', example:'Nuestro aporte es relevante.'},
        
          {es:'La hipótesis', zh:'假设', example:'La hipótesis se confirmó.'},
          {es:'La metodología', zh:'方法论', example:'Explica la metodología empleada.'},
          {es:'La muestra', zh:'样本', example:'La muestra era demasiado pequeña.'},
          {es:'El enfoque', zh:'研究视角', example:'Adoptaron un enfoque cualitativo.'},
          {es:'Citar', zh:'引用', example:'Conviene citar las fuentes.'},
          {es:'La bibliografía', zh:'参考文献', example:'La bibliografía está al final.'},
          {es:'El resumen', zh:'摘要', example:'El resumen no debe superar 200 palabras.'},
          {es:'La conclusión', zh:'结论', example:'Las conclusiones son provisionales.'},
          {es:'El marco teórico', zh:'理论框架', example:'Falta desarrollar el marco teórico.'},
          {es:'La variable', zh:'变量', example:'Controlaron todas las variables.'},
          {es:'Contrastar', zh:'验证 / 对照', example:'Hay que contrastar los datos.'},
          {es:'El sesgo', zh:'偏差', example:'El estudio presenta cierto sesgo.'},
          {es:'La revisión por pares', zh:'同行评审', example:'La revista aplica revisión por pares.'},
          {es:'La tesis doctoral', zh:'博士论文', example:'Defendió su tesis doctoral.'},
        ],
        grammar:[
          {title:'学术书面语结构', desc:'Se ha demostrado que... / Cabe destacar que... / No obstante... / Por consiguiente...'},
          {title:'被动语态 + 无人称 se', desc:'Se analizaron los datos. Se observó una correlación. 学术写作的标配。'},
          {title:'长定语从句与分词短语', desc:'El estudio realizado por investigadores españoles, que duró tres años, demostró que...'}
        ]
      },
      { id:'c1-u3', title:'高级论证与修辞', subtitle:'Argumentación Avanzada y Retórica', lessons:14, duration:'约 55 分钟',
        vocab:[
          {es:'El silogismo', zh:'三段论', example:'Su razonamiento es un silogismo impecable.'},
          {es:'La premisa mayor', zh:'大前提', example:'La premisa mayor del argumento es cuestionable.'},
          {es:'La inferencia', zh:'推论', example:'Esa inferencia no se sostiene.'},
          {es:'La falacia ad hominem', zh:'人身攻击谬误', example:'Respondió con una falacia ad hominem.'},
          {es:'El hombre de paja', zh:'稻草人谬误', example:'Refutó un hombre de paja, no mi tesis.'},
          {es:'La petición de principio', zh:'循环论证', example:'Eso es una petición de principio.'},
          {es:'La generalización apresurada', zh:'以偏概全', example:'Cayó en una generalización apresurada.'},
          {es:'La falsa dicotomía', zh:'假两难', example:'Plantea una falsa dicotomía.'},
          {es:'La correlación espuria', zh:'虚假相关', example:'Es una correlación espuria, no causal.'},
          {es:'El reduccionismo', zh:'简化论', example:'El reduccionismo empobrece el análisis.'},
          {es:'La retórica', zh:'修辞术', example:'Domina la retórica parlamentaria.'},
          {es:'La elocuencia', zh:'雄辩', example:'Su elocuencia convenció al jurado.'},
          {es:'La contundencia', zh:'力度、有力', example:'La contundencia de los datos es indiscutible.'},
          {es:'La vehemencia', zh:'激烈、激昂', example:'Defendió su postura con vehemencia.'},
          {es:'La ironía', zh:'反讽', example:'Empleó la ironía como arma.'},
          {es:'La perífrasis', zh:'迂回说法', example:'Prefiere la perífrasis a la franqueza.'},
          {es:'La atenuación', zh:'缓和、弱化', example:'La atenuación suaviza el reproche.'},
          {es:'El eufemismo', zh:'委婉语', example:'«Ajuste de plantilla» es un eufemismo.'},
          {es:'La hipérbole', zh:'夸张', example:'No es una cifra, es una hipérbole.'},
          {es:'La concesión', zh:'让步', example:'Introdujo una concesión estratégica.'},
          {es:'La réplica', zh:'应答、反驳', example:'Su réplica fue demoledora.'},
          {es:'El alegato', zh:'辩护词、陈词', example:'Cerró con un alegato emotivo.'},
          {es:'La disertación', zh:'学术演讲', example:'Ofreció una disertación brillante.'},
          {es:'La alocución', zh:'正式讲话', example:'La alocución duró veinte minutos.'},
          {es:'El coloquio', zh:'研讨座谈', example:'Participó en un coloquio sobre ética.'},
          {es:'La ponencia', zh:'学术报告', example:'Presentó una ponencia sobre el tema.'},
          {es:'El dictamen', zh:'裁定、鉴定意见', example:'El dictamen pericial fue concluyente.'},
          {es:'El veredicto', zh:'裁决', example:'El veredicto tardó tres días.'},
          {es:'El consenso', zh:'共识', example:'No hay consenso científico al respecto.'},
          {es:'La discrepancia', zh:'分歧', example:'La discrepancia es de fondo, no de forma.'},
          {es:'El escollo', zh:'障碍、暗礁', example:'El principal escollo es presupuestario.'},
          {es:'El resquicio', zh:'缝隙、可乘之机', example:'Aprovechó un resquicio legal.'},
          {es:'El subterfugio', zh:'托词、借口', example:'Eso no es un argumento, es un subterfugio.'},
          {es:'La argucia', zh:'诡辩、狡计', example:'Se valió de una argucia procesal.'},
          {es:'El trasfondo', zh:'背景、深层原因', example:'El trasfondo del conflicto es económico.'},
          {es:'El matiz', zh:'细微差别', example:'Aprecio un matiz importante.'},
          {es:'El cauce', zh:'渠道、途径', example:'Se resolvió por los cauces habituales.'},
          {es:'La tesitura', zh:'处境、局面', example:'Me hallo en una tesitura delicada.'},
          {es:'El menoscabo', zh:'损害、削减', example:'Supone un menoscabo de sus derechos.'},
          {es:'La salvaguarda', zh:'保障、维护', example:'Como salvaguarda de la libertad de expresión.'},
          {es:'El acervo', zh:'积累、共同财富', example:'Forma parte del acervo cultural común.'},
          {es:'La idiosincrasia', zh:'民族特性', example:'La idiosincrasia de cada región.'},
          {es:'El statu quo', zh:'现状', example:'Defienden el statu quo.'},
          {es:'La disyuntiva', zh:'两难选择', example:'Nos hallamos ante una disyuntiva.'},
          {es:'El imperativo', zh:'必须做的事', example:'Reducir emisiones es un imperativo moral.'},
          {es:'La salvaguardia', zh:'防护、保障', example:'La salvaguardia del patrimonio es prioritaria.'},
          {es:'Subyacer', zh:'潜藏于', example:'Subyace un problema de fondo.'},
          {es:'Entrañar', zh:'包含、意味着', example:'La medida entraña riesgos.'},
          {es:'Conllevar', zh:'带来、伴随', example:'Conlleva un coste adicional.'},
          {es:'Desembocar en', zh:'最终导致', example:'El debate desembocó en un acuerdo.'},
          {es:'Desvirtuar', zh:'使失去效力', example:'Esa objeción desvirtúa el argumento.'},
          {es:'Circunscribir', zh:'限定范围', example:'Circunscribámonos al tema central.'},
          {es:'Soslayar', zh:'回避', example:'Soslayó la pregunta incómoda.'},
          {es:'Eludir', zh:'规避', example:'Eludió responder con evasivas.'}
        ],
        grammar:[
          {title:'虚拟式过去完成时 (hubiera + 分词)', desc:'用于与过去事实相反的条件句（Si hubiera sabido…, habría…）和主句为过去的完成时从句（No creía que hubiera llegado）。'},
          {title:'条件句三种类型进阶', desc:'真实条件（si + 陈述式）；非现实现在（si + 虚拟式过去时 → 条件式）；非现实过去（si + 虚拟式过去完成时 → 条件式完成时）。混用会改变含义。'},
          {title:'书面语中的非人称与被动结构', desc:'Se advierte de que… / Cabe deducir que… / Resulta cuanto menos dudoso que… —— 让论断显得克制而有分量。'},
          {title:'让步从句的语式选择', desc:'aunque + 陈述式＝已知事实；aunque + 虚拟式＝假设或无关紧要；por más que + 虚拟式＝强调徒劳。'}
        ]
      },
      { id:'c1-u4', title:'经济与社会政策', subtitle:'Economía y Política Social', lessons:14, duration:'约 55 分钟',
        vocab:[
          {es:'El producto interior bruto', zh:'国内生产总值', example:'El PIB creció un dos por ciento.'},
          {es:'La inflación', zh:'通货膨胀', example:'La inflación se situó en el cuatro por ciento.'},
          {es:'La deflación', zh:'通货紧缩', example:'La deflación retrasa el consumo.'},
          {es:'El déficit público', zh:'财政赤字', example:'El déficit supera el límite europeo.'},
          {es:'La deuda soberana', zh:'主权债务', example:'La prima de riesgo mide la deuda soberana.'},
          {es:'El superávit', zh:'盈余', example:'La balanza comercial registró superávit.'},
          {es:'El ajuste fiscal', zh:'财政紧缩', example:'El ajuste fiscal afectó al gasto social.'},
          {es:'La política monetaria', zh:'货币政策', example:'El banco central endureció la política monetaria.'},
          {es:'La subida de tipos', zh:'加息', example:'La subida de tipos encarece las hipotecas.'},
          {es:'La recaudación', zh:'税收收入', example:'La recaudación aumentó un cinco por ciento.'},
          {es:'La fiscalidad', zh:'税制', example:'Debaten una fiscalidad más progresiva.'},
          {es:'El gravamen', zh:'课税、税负', example:'Un nuevo gravamen a las grandes fortunas.'},
          {es:'La elusión fiscal', zh:'避税', example:'La elusión fiscal erosiona la base tributaria.'},
          {es:'El fraude fiscal', zh:'税务欺诈', example:'El fraude fiscal ronda el ocho por ciento.'},
          {es:'La amnistía fiscal', zh:'税务特赦', example:'La amnistía fiscal fue muy criticada.'},
          {es:'El subsidio', zh:'补贴', example:'El subsidio al desempleo se prorrogó.'},
          {es:'La prestación', zh:'福利金', example:'La prestación por dependencia es insuficiente.'},
          {es:'La renta básica', zh:'基本收入', example:'Debaten implantar una renta básica.'},
          {es:'El ingreso mínimo vital', zh:'最低生活保障', example:'El ingreso mínimo vital alcanza a más familias.'},
          {es:'La desigualdad', zh:'不平等', example:'La desigualdad se ensanchó tras la crisis.'},
          {es:'La brecha salarial', zh:'薪酬差距', example:'La brecha salarial de género persiste.'},
          {es:'La movilidad social', zh:'社会流动性', example:'La movilidad social se ha estancado.'},
          {es:'La precariedad laboral', zh:'就业不稳定', example:'La precariedad laboral afecta a los jóvenes.'},
          {es:'El convenio colectivo', zh:'集体协议', example:'El convenio colectivo caduca en junio.'},
          {es:'La negociación colectiva', zh:'集体谈判', example:'La negociación colectiva se rompió.'},
          {es:'El expediente de regulación', zh:'裁员程序', example:'Presentaron un expediente de regulación.'},
          {es:'El tejido productivo', zh:'产业体系', example:'El tejido productivo es frágil.'},
          {es:'La reconversión', zh:'产业转型', example:'La reconversión industrial dejó secuelas.'},
          {es:'La inversión pública', zh:'公共投资', example:'La inversión pública cayó un diez por ciento.'},
          {es:'La productividad', zh:'生产率', example:'La productividad no acompaña al empleo.'},
          {es:'El circulante', zh:'流动资金', example:'La empresa tiene problemas de circulante.'},
          {es:'La morosidad', zh:'坏账率', example:'La morosidad bancaria repuntó.'},
          {es:'El rescate', zh:'救助', example:'El rescate bancario costó miles de millones.'},
          {es:'La prima de riesgo', zh:'风险溢价', example:'La prima de riesgo se disparó.'},
          {es:'El saneamiento', zh:'整顿、清理', example:'El saneamiento de las cuentas es urgente.'},
          {es:'La austeridad', zh:'紧缩政策', example:'La austeridad frenó la demanda interna.'},
          {es:'El estímulo', zh:'刺激措施', example:'Aprobaron un paquete de estímulo.'},
          {es:'La coyuntura', zh:'经济形势', example:'La coyuntura económica es incierta.'},
          {es:'El ciclo económico', zh:'经济周期', example:'El ciclo económico ha cambiado.'},
          {es:'La recesión', zh:'衰退', example:'La economía entró en recesión técnica.'},
          {es:'El repunte', zh:'回升', example:'Se observa un repunte del consumo.'},
          {es:'La ralentización', zh:'放缓', example:'La ralentización china afecta a Europa.'},
          {es:'La sostenibilidad del sistema', zh:'制度可持续性', example:'Se cuestiona la sostenibilidad del sistema.'},
          {es:'El Estado del bienestar', zh:'福利国家', example:'El Estado del bienestar se tensa.'},
          {es:'La cohesión social', zh:'社会凝聚力', example:'La cohesión social exige políticas activas.'},
          {es:'La equidad', zh:'公平', example:'La equidad no equivale a igualdad.'},
          {es:'La progresividad', zh:'累进性', example:'La progresividad del impuesto es limitada.'},
          {es:'La redistribución', zh:'再分配', example:'La redistribución vía impuestos es escasa.'},
          {es:'El agravio comparativo', zh:'相对不公', example:'Genera un agravio comparativo entre regiones.'},
          {es:'La dotación presupuestaria', zh:'预算拨款', example:'La dotación presupuestaria es insuficiente.'},
          {es:'La partida', zh:'预算科目', example:'Esa partida se recorta un veinte por ciento.'},
          {es:'La enmienda', zh:'修正案', example:'Presentaron una enmienda a la totalidad.'},
          {es:'La ponencia', zh:'议案报告', example:'La ponencia salió adelante con enmiendas.'},
          {es:'El dictamen', zh:'审议意见', example:'El dictamen del consejo fue favorable.'}
        ],
        grammar:[
          {title:'经济报道中的被动与无人称', desc:'Se prevé un crecimiento del… / Los datos difundidos ayer sitúan… / Según las estimaciones… —— 经济新闻的标准句式。'},
          {title:'表达因果与后果的正式结构', desc:'a raíz de, como consecuencia de, merced a, en virtud de, de resultas de —— 比 porque / por eso 更正式。'},
          {title:'数量与趋势表达', desc:'ascender a / descender a / situarse en / experimentar un repunte / registrar un descenso / rondar —— 描述数据变化的核心动词。'}
        ]
      },
      { id:'c1-u5', title:'学术写作与研究方法', subtitle:'Escritura Académica e Investigación', lessons:14, duration:'约 55 分钟',
        vocab:[
          {es:'El planteamiento', zh:'研究设计、提法', example:'El planteamiento del problema es preciso.'},
          {es:'El objetivo general', zh:'总体目标', example:'El objetivo general es describir el fenómeno.'},
          {es:'Los objetivos específicos', zh:'具体目标', example:'Los objetivos específicos se detallan abajo.'},
          {es:'La pregunta de investigación', zh:'研究问题', example:'La pregunta de investigación guía todo el trabajo.'},
          {es:'El estado de la cuestión', zh:'研究现状', example:'El estado de la cuestión ocupa el segundo capítulo.'},
          {es:'La revisión bibliográfica', zh:'文献综述', example:'La revisión bibliográfica es exhaustiva.'},
          {es:'La laguna', zh:'研究空白', example:'Se detecta una laguna en la literatura.'},
          {es:'El corpus', zh:'语料库', example:'El corpus consta de mil textos.'},
          {es:'La muestra representativa', zh:'代表性样本', example:'La muestra no es representativa.'},
          {es:'El sesgo de selección', zh:'选择偏差', example:'Hubo sesgo de selección en la encuesta.'},
          {es:'La validez', zh:'效度', example:'Se cuestiona la validez del instrumento.'},
          {es:'La fiabilidad', zh:'信度', example:'La fiabilidad se midió con alfa de Cronbach.'},
          {es:'La replicabilidad', zh:'可重复性', example:'La replicabilidad es un requisito básico.'},
          {es:'El grupo de control', zh:'对照组', example:'El grupo de control no recibió tratamiento.'},
          {es:'La variable dependiente', zh:'因变量', example:'La variable dependiente es el rendimiento.'},
          {es:'La variable independiente', zh:'自变量', example:'La variable independiente es el método.'},
          {es:'La correlación', zh:'相关性', example:'Existe una correlación significativa.'},
          {es:'La causalidad', zh:'因果关系', example:'Correlación no implica causalidad.'},
          {es:'El hallazgo', zh:'研究发现', example:'El hallazgo principal es sorprendente.'},
          {es:'La evidencia empírica', zh:'实证证据', example:'Falta evidencia empírica suficiente.'},
          {es:'El dato cualitativo', zh:'质性数据', example:'Los datos cualitativos provienen de entrevistas.'},
          {es:'El dato cuantitativo', zh:'量化数据', example:'Los datos cuantitativos se analizaron con SPSS.'},
          {es:'La encuesta', zh:'问卷调查', example:'Diseñaron una encuesta de veinte ítems.'},
          {es:'El cuestionario', zh:'问卷', example:'El cuestionario se validó con expertos.'},
          {es:'La entrevista semiestructurada', zh:'半结构化访谈', example:'Usaron entrevistas semiestructuradas.'},
          {es:'El grupo de discusión', zh:'焦点小组', example:'Organizaron tres grupos de discusión.'},
          {es:'La triangulación', zh:'三角验证', example:'La triangulación refuerza las conclusiones.'},
          {es:'La hipótesis nula', zh:'零假设', example:'Se rechaza la hipótesis nula.'},
          {es:'El margen de error', zh:'误差范围', example:'El margen de error es del tres por ciento.'},
          {es:'La significatividad', zh:'显著性', example:'La significatividad estadística es alta.'},
          {es:'El sesgo del investigador', zh:'研究者偏见', example:'Hay que declarar el sesgo del investigador.'},
          {es:'La limitación', zh:'局限性', example:'El propio estudio reconoce sus limitaciones.'},
          {es:'Las líneas futuras', zh:'未来研究方向', example:'Se apuntan líneas futuras de investigación.'},
          {es:'El resumen ejecutivo', zh:'摘要', example:'El resumen ejecutivo no supera una página.'},
          {es:'La nota al pie', zh:'脚注', example:'Añadió una nota al pie aclaratoria.'},
          {es:'La cita textual', zh:'直接引用', example:'La cita textual va entre comillas.'},
          {es:'El parafraseo', zh:'转述', example:'El parafraseo exige citar la fuente.'},
          {es:'El plagio', zh:'抄袭', example:'El plagio académico se sanciona con severidad.'},
          {es:'La autoría', zh:'作者身份', example:'Se reconoce la autoría compartida.'},
          {es:'La revisión ciega', zh:'盲审', example:'La revista aplica revisión ciega.'},
          {es:'El factor de impacto', zh:'影响因子', example:'El factor de impacto de la revista es alto.'},
          {es:'Publicar en acceso abierto', zh:'开放获取发表', example:'Apuestan por publicar en acceso abierto.'},
          {es:'La difusión', zh:'传播', example:'La difusión de resultados es esencial.'},
          {es:'Arrojar luz sobre', zh:'阐明', example:'El estudio arroja luz sobre el fenómeno.'},
          {es:'Aportar evidencia', zh:'提供证据', example:'Aporta evidencia novedosa.'},
          {es:'Plantear una hipótesis', zh:'提出假设', example:'Plantea tres hipótesis contrastables.'},
          {es:'Someter a prueba', zh:'加以检验', example:'Sometieron la teoría a prueba.'},
          {es:'Refrendar', zh:'印证', example:'Los datos refrendan la hipótesis.'},
          {es:'Rebatir una tesis', zh:'反驳一个论点', example:'Rebate la tesis dominante.'},
          {es:'Zanjar un debate', zh:'了结争论', example:'El estudio no zanja el debate.'},
          {es:'Abordar una cuestión', zh:'探讨一个问题', example:'Aborda la cuestión desde otra óptica.'},
          {es:'Circunscribirse a', zh:'限于', example:'El análisis se circunscribe al caso español.'},
          {es:'Solventar una laguna', zh:'填补空白', example:'La tesis solventa una laguna importante.'},
          {es:'Servir de base', zh:'作为基础', example:'Estos resultados sirven de base para futuros trabajos.'}
        ],
        grammar:[
          {title:'学术写作的无人称与被动', desc:'Se observa que / Se ha demostrado que / Los resultados sugieren que / Cabe concluir que —— 让论述显得客观。'},
          {title:'表达因果、对比与让步的学术连接词', desc:'en tanto que, en la medida en que, si bien, no obstante lo cual, a tenor de, de ahí que + 虚拟式。'},
          {title:'谨慎表达（hedging）', desc:'Parece indicar / Tiende a / En principio / Cabría suponer / Conviene matizar que —— 学术写作避免绝对化。'}
        ]
      }
    ]
  },

  /* -------- C2 · 母语水平 -------- */
  C2: {
    level: 'C2', title: '母语水平', subtitle: 'Maestro',
    description: '接近母语者水平，精准优雅地使用西班牙语。',
    color: '#221A12',
    units: [
      { id:'c2-u1', title:'文学修辞与语言艺术', subtitle:'Arte del Lenguaje', lessons:16, duration:'约 60 分钟',
        vocab:[
          {es:'Matiz', zh:'细微差别', example:'Cada matiz cuenta en su discurso.'},
          {es:'Elocuencia', zh:'雄辩', example:'Admiro su elocuencia natural.'},
          {es:'Retórica', zh:'修辞学', example:'El estudio de la retórica antigua.'},
          {es:'Metáfora', zh:'隐喻', example:'Una metáfora inolvidable.'},
          {es:'Metonimia', zh:'借代', example:'La pluma es más fuerte que la espada (metonimia).'},
          {es:'Ironía', zh:'讽刺', example:'Usa la ironía con maestría.'},
          {es:'Sarcasmo', zh:'挖苦', example:'Su sarcasmo hirió a todos.'},
          {es:'Hipérbole', zh:'夸张', example:'Esa historia es una hipérbole.'},
          {es:'Eufemismo', zh:'委婉语', example:'"Falleció" es un eufemismo.'},
          {es:'Letanía', zh:'连词排比', example:'Una letanía de quejas.'},
          {es:'Arcaísmo', zh:'古语', example:'Lee textos llenos de arcaísmos.'},
          {es:'Neologismo', zh:'新词', example:'"Tuitear" es un neologismo.'},
          {es:'Sociolécto', zh:'社会方言', example:'Cada clase social tiene su sociolecto.'},
          {es:'Registros', zh:'语域', example:'Manejar registros formales e informales.'},
          {es:'Polisemia', zh:'多义性', example:'La polisemia en español es rica.'},
          {es:'Homófono', zh:'同音异义词', example:'"Casa" y "caza" son homófonos.'},
          {es:'Parónimo', zh:'近音词', example:'Afectar vs. efectuar son parónimos.'},
          {es:'Dicrotomía', zh:'二元对立', example:'Una dicotomía falsa.'},
          {es:'Lenguaje figurado', zh:'比喻语言', example:'El lenguaje figurado en la poesía.'},
          {es:'Verso libre', zh:'自由诗', example:'Versos sin métrica ni rima.'},
          {es:'Soneto', zh:'十四行诗', example:'Los sonetos de Quevedo son sublimes.'},
          {es:'Novela negra', zh:'悬疑小说', example:'La novela negra española tiene auge.'},
          {es:'Barroco', zh:'巴洛克', example:'La literatura barroca es compleja.'},
          {es:'Siglo de Oro', zh:'黄金时代', example:'El Quijote es cumbre del Siglo de Oro.'},
        
          {es:'La elipsis', zh:'省略', example:'La elipsis da ritmo al texto.'},
          {es:'La anáfora', zh:'首语重复', example:'La anáfora refuerza la emoción.'},
          {es:'La aliteración', zh:'头韵', example:'La aliteración crea musicalidad.'},
          {es:'El hipérbaton', zh:'倒装', example:'El hipérbaton altera el orden natural.'},
          {es:'La paradoja', zh:'悖论', example:'Enuncia una paradoja deslumbrante.'},
          {es:'El oxímoron', zh:'矛盾修辞', example:'"Silencio atronador" es un oxímoron.'},
          {es:'La prosopopeya', zh:'拟人', example:'La prosopopeya anima lo inanimado.'},
          {es:'El registro', zh:'语域', example:'Cambia de registro según el público.'},
          {es:'La connotación', zh:'内涵 / 言外之意', example:'Esa palabra tiene connotaciones negativas.'},
          {es:'La ambigüedad', zh:'歧义', example:'La ambigüedad puede ser deliberada.'},
          {es:'El aforismo', zh:'格言', example:'Escribe aforismos memorables.'},
          {es:'La sátira', zh:'讽刺文学', example:'La sátira ridiculiza el poder.'},
          {es:'El narrador', zh:'叙述者', example:'El narrador es poco fiable.'},
          {es:'El clímax', zh:'高潮', example:'La novela alcanza su clímax al final.'},
          {es:'El desenlace', zh:'结局', example:'El desenlace resultó inesperado.'},
          {es:'La cadencia', zh:'韵律 / 节奏', example:'La cadencia de sus versos es única.'},
          {es:'La elocuencia', zh:'雄辩', example:'Habló con enorme elocuencia.'},
          {es:'La letanía', zh:'连祷 / 一连串', example:'Una letanía de quejas.'},
          {es:'El matiz irónico', zh:'讽刺意味', example:'Captó el matiz irónico de inmediato.'},
          {es:'La sinestesia', zh:'通感', example:'"Azul sonoro" es una sinestesia.'},
        ],
        grammar:[
          {title:'虚拟式全时态精通', desc:'现在时、过去未完成时、过去完成时、将来时（虽已少用但文学中仍见）。'},
          {title:'条件式（简单 + 复合）', desc:'Debería haberlo sabido. Habría venido si hubieras llamado.'},
          {title:'文学语域：倒装、省略、新词', desc:'Muere el sol. ¡Viva la República!（省略倒装）' }
        ]
      },
      { id:'c2-u2', title:'书面语与文风', subtitle:'Registro Culto y Estilo', lessons:16, duration:'约 60 分钟',
        vocab:[
          {es:'La concisión', zh:'简洁', example:'Prefiere la concisión a la ampulosidad.'},
          {es:'La prolijidad', zh:'冗长', example:'Su prolijidad cansa al lector.'},
          {es:'La ampulosidad', zh:'浮夸', example:'La ampulosidad del estilo lo delata.'},
          {es:'La llaneza', zh:'平实', example:'Escribe con admirable llaneza.'},
          {es:'La sutileza', zh:'精微', example:'La sutileza de su análisis sorprende.'},
          {es:'La agudeza', zh:'敏锐', example:'Su agudeza crítica es proverbial.'},
          {es:'La mordacidad', zh:'尖刻', example:'La mordacidad de sus columnas le costó enemigos.'},
          {es:'La sorna', zh:'讥讽', example:'Lo dijo con sorna.'},
          {es:'La retranca', zh:'含蓄的嘲讽', example:'Habló con retranca gallega.'},
          {es:'La ironía fina', zh:'委婉反讽', example:'Solo un oído atento capta su ironía fina.'},
          {es:'El deje', zh:'口音、余味', example:'Un deje de melancolía recorre el texto.'},
          {es:'El dejo', zh:'余韵', example:'Un dejo amargo en la despedida.'},
          {es:'La cadencia', zh:'节奏韵律', example:'La cadencia de la prosa es envolvente.'},
          {es:'La sonoridad', zh:'音响效果', example:'Cuida la sonoridad de cada verso.'},
          {es:'La métrica', zh:'格律', example:'Respetó la métrica clásica.'},
          {es:'El ritmo', zh:'节奏', example:'El ritmo del relato no decae.'},
          {es:'La aliteración', zh:'头韵', example:'La aliteración produce un efecto hipnótico.'},
          {es:'La anáfora', zh:'首语重复', example:'La anáfora subraya la emoción.'},
          {es:'El epíteto', zh:'修饰语', example:'Abusa del epíteto innecesario.'},
          {es:'La elipsis', zh:'省略', example:'La elipsis deja al lector completar.'},
          {es:'El circunloquio', zh:'绕弯子', example:'Se pierde en circunloquios.'},
          {es:'La digresión', zh:'离题', example:'Una digresión oportuna ilumina el conjunto.'},
          {es:'El excurso', zh:'插叙、题外话', example:'Intercala un excurso erudito.'},
          {es:'La digresión erudita', zh:'掉书袋式的插叙', example:'Su digresión erudita resulta pedante.'},
          {es:'La pedantería', zh:'卖弄学问', example:'La pedantería no es erudición.'},
          {es:'La erudición', zh:'博学', example:'Su erudición no es ostentosa.'},
          {es:'La prosapia', zh:'家世、渊源', example:'Un linaje de cierta prosapia.'},
          {es:'El abolengo', zh:'出身、门第', example:'Presume de abolengo intelectual.'},
          {es:'La ralea', zh:'下等人（贬义）', example:'Desprecia a la ralea con soberbia.'},
          {es:'La calaña', zh:'品质（贬义）', example:'Gente de mala calaña.'},
          {es:'El magín', zh:'想象（口语/古）', example:'Producto de su calenturiento magín.'},
          {es:'La idiosincrasia', zh:'特有性格', example:'La idiosincrasia del pueblo andaluz.'},
          {es:'El talante', zh:'气度、性情', example:'Afrontó la crítica con buen talante.'},
          {es:'La mesura', zh:'节制', example:'Respondió con mesura ejemplar.'},
          {es:'La templanza', zh:'沉稳', example:'Habló con templanza y firmeza.'},
          {es:'La prosopopeya', zh:'拟人', example:'La prosopopeya da voz al río.'},
          {es:'El oxímoron', zh:'矛盾修辞', example:'Un silencio atronador: puro oxímoron.'},
          {es:'La sinestesia', zh:'通感', example:'Un azul sonoro: sinestesia pura.'},
          {es:'El hipérbaton', zh:'倒装', example:'El hipérbaton dificulta la lectura.'},
          {es:'La paradoja', zh:'悖论', example:'Encierra una paradoja lúcida.'},
          {es:'El aforismo', zh:'格言', example:'Colecciona aforismos de autor.'},
          {es:'La sentencia', zh:'警句', example:'Su sentencia se cita todavía.'},
          {es:'La mácula', zh:'瑕疵、污点', example:'Sin mácula estilística alguna.'},
          {es:'El dechado', zh:'典范', example:'Un dechado de precisión.'}
        ],
        grammar:[
          {title:'书面语与口语的语域差异', desc:'书面语倾向：前置形容词（su dilatada trayectoria）、分词结构（finalizado el plazo）、名词化（la consecución de objetivos）、倒装（No sin razón afirmó…）。'},
          {title:'倒装与强调句式', desc:'限定成分前置引起主谓倒装（De aquella época datan…）；双重否定表强调（No en vano…）；强调结构（Fue entonces cuando…）。'},
          {title:'拉丁语遗留结构与古文气', desc:'De ahí que + 虚拟式、No en vano、A fuer de、Por mor de、En aras de —— 使用得当可提升文风，滥用则显做作。'}
        ]
      },
      { id:'c2-u3', title:'专业语域与正式文书', subtitle:'Registros Profesionales y Documentos Formales', lessons:16, duration:'约 60 分钟',
        vocab:[
          {es:'El atestado', zh:'现场笔录', example:'La policía levantó atestado.'},
          {es:'El acta', zh:'会议纪要', example:'Se levantó acta de la reunión.'},
          {es:'El pliego', zh:'标书、条件书', example:'El pliego de condiciones es exigente.'},
          {es:'El concurso público', zh:'公开招标', example:'Adjudicaron el concurso público.'},
          {es:'La licitación', zh:'投标', example:'La licitación quedó desierta.'},
          {es:'El adjudicatario', zh:'中标方', example:'El adjudicatario comenzará en marzo.'},
          {es:'La fianza', zh:'保证金', example:'Exigen una fianza del cinco por ciento.'},
          {es:'La escritura pública', zh:'公证书', example:'Firmaron ante notario la escritura pública.'},
          {es:'El poder notarial', zh:'授权书', example:'Presentó un poder notarial vigente.'},
          {es:'El testamento', zh:'遗嘱', example:'Dejó testamento abierto.'},
          {es:'El heredero', zh:'继承人', example:'El heredero legítimo impugnó el testamento.'},
          {es:'El usufructo', zh:'用益权', example:'Conservó el usufructo vitalicio.'},
          {es:'La servidumbre', zh:'地役权', example:'La finca tiene una servidumbre de paso.'},
          {es:'La plusvalía', zh:'增值、资本利得', example:'Tributó por la plusvalía municipal.'},
          {es:'El arrendamiento', zh:'租赁（正式）', example:'El contrato de arrendamiento es anual.'},
          {es:'La rescisión', zh:'解除（合同）', example:'Solicitó la rescisión del contrato.'},
          {es:'La cláusula penal', zh:'违约金条款', example:'La cláusula penal resultaba abusiva.'},
          {es:'La moratoria', zh:'延期偿付', example:'Concedieron una moratoria de seis meses.'},
          {es:'El aval', zh:'担保', example:'El aval bancario es obligatorio.'},
          {es:'El fiador', zh:'保证人', example:'Necesita un fiador solvente.'},
          {es:'La quiebra', zh:'破产', example:'La empresa declaró la quiebra.'},
          {es:'El concurso de acreedores', zh:'债权人会议（破产程序）', example:'Entró en concurso de acreedores.'},
          {es:'La liquidación', zh:'清算', example:'La liquidación concluyó en abril.'},
          {es:'El pasivo', zh:'负债', example:'El pasivo supera el activo.'},
          {es:'El activo', zh:'资产', example:'El activo incluye tres inmuebles.'},
          {es:'El balance', zh:'资产负债表', example:'El balance arroja pérdidas.'},
          {es:'La auditoría', zh:'审计', example:'La auditoría detectó irregularidades.'},
          {es:'El dictamen pericial', zh:'司法鉴定意见', example:'El dictamen pericial fue determinante.'},
          {es:'La diligencia', zh:'程序、勤勉', example:'Practicaron diligencias previas.'},
          {es:'El emplazamiento', zh:'传唤', example:'Recibió un emplazamiento judicial.'},
          {es:'La demanda', zh:'起诉', example:'Interpuso una demanda por daños.'},
          {es:'El demandante', zh:'原告', example:'El demandante aportó pruebas.'},
          {es:'El demandado', zh:'被告', example:'El demandado no compareció.'},
          {es:'La sentencia firme', zh:'终审判决', example:'La sentencia firme es inapelable.'},
          {es:'El recurso', zh:'上诉', example:'Presentó recurso de apelación.'},
          {es:'La prescripción', zh:'时效届满', example:'Los hechos han prescrito.'},
          {es:'La indemnización', zh:'赔偿', example:'Reclamó una indemnización millonaria.'},
          {es:'El laudo', zh:'仲裁裁决', example:'El laudo arbitral puso fin al litigio.'},
          {es:'La mediación', zh:'调解', example:'Acudieron a mediación voluntaria.'},
          {es:'La conciliación', zh:'和解', example:'La conciliación evitó el juicio.'},
          {es:'El requerimiento', zh:'正式催告', example:'Le enviaron un requerimiento fehaciente.'},
          {es:'El burofax', zh:'挂号传真信', example:'Le remitió un burofax con acuse.'},
          {es:'Fehaciente', zh:'确凿的', example:'Se requiere prueba fehaciente.'},
          {es:'Inapelable', zh:'不可上诉的', example:'La decisión es inapelable.'},
          {es:'De oficio', zh:'依职权', example:'El juez actuó de oficio.'}
        ],
        grammar:[
          {title:'法律与行政文书的固定句式', desc:'A tenor de lo dispuesto en… / En virtud de… / Sin perjuicio de… / A los efectos oportunos… / Conforme a lo estipulado… —— 西班牙语正式文本的高频框架。'},
          {title:'将来时表义务（正式语域）', desc:'正式文书用将来时表命令或义务：El solicitante presentará la documentación en plazo de diez días。（口语用 deberá / tiene que）。'},
          {title:'关系从句的书面变体', desc:'el cual / la cual / cuyo 用于避免歧义和重复；前置词 + 关系代词（en el que, por lo que, merced al cual）。'}
        ]
      },
      { id:'c2-u4', title:'惯用语与成语进阶', subtitle:'Locuciones y Fraseología', lessons:16, duration:'约 60 分钟',
        vocab:[
          {es:'A duras penas', zh:'勉勉强强', example:'A duras penas terminó el maratón.'},
          {es:'A diestro y siniestro', zh:'到处乱来', example:'Gastaba a diestro y siniestro.'},
          {es:'A la postre', zh:'最终、结果', example:'A la postre, teníamos razón.'},
          {es:'A rajatabla', zh:'严格照办', example:'Cumple las normas a rajatabla.'},
          {es:'A troche y moche', zh:'乱糟糟地', example:'Habla a troche y moche.'},
          {es:'A la sazón', zh:'当时', example:'Era, a la sazón, director del centro.'},
          {es:'De buenas a primeras', zh:'突然、冷不丁', example:'De buenas a primeras cambió de idea.'},
          {es:'De golpe y porrazo', zh:'猛然', example:'De golpe y porrazo se quedó sin trabajo.'},
          {es:'En un santiamén', zh:'一眨眼', example:'Lo resolvió en un santiamén.'},
          {es:'En un abrir y cerrar de ojos', zh:'转眼之间', example:'Se esfumó en un abrir y cerrar de ojos.'},
          {es:'Al pie de la letra', zh:'一字不差', example:'Siguió las instrucciones al pie de la letra.'},
          {es:'De cabo a rabo', zh:'从头到尾', example:'Me leí el informe de cabo a rabo.'},
          {es:'De pe a pa', zh:'一五一十地', example:'Me lo contó de pe a pa.'},
          {es:'Ni pincha ni corta', zh:'毫无关系', example:'Ahí yo ni pincho ni corto.'},
          {es:'No tener ni pies ni cabeza', zh:'毫无道理', example:'Ese plan no tiene ni pies ni cabeza.'},
          {es:'Meter la pata', zh:'犯错、出洋相', example:'Metí la pata en la entrevista.'},
          {es:'Tirar la casa por la ventana', zh:'大手大脚', example:'Por la boda tiraron la casa por la ventana.'},
          {es:'Estar en las nubes', zh:'心不在焉', example:'Estás en las nubes hoy.'},
          {es:'Tomar el pelo', zh:'开玩笑、拿人开心', example:'¿Me estás tomando el pelo?'},
          {es:'Quedarse en blanco', zh:'脑子一片空白', example:'Me quedé en blanco en el examen.'},
          {es:'Echar una mano', zh:'帮个忙', example:'¿Me echas una mano con esto?'},
          {es:'Ponerse las botas', zh:'大吃一顿、赚饱', example:'Se puso las botas en el banquete.'},
          {es:'Costar un ojo de la cara', zh:'贵得吓人', example:'El piso cuesta un ojo de la cara.'},
          {es:'Ser pan comido', zh:'小菜一碟', example:'El examen fue pan comido.'},
          {es:'Estar entre la espada y la pared', zh:'进退两难', example:'Me pusiste entre la espada y la pared.'},
          {es:'Echar leña al fuego', zh:'火上浇油', example:'Sus declaraciones echaron leña al fuego.'},
          {es:'Hacer la vista gorda', zh:'睁一只眼闭一只眼', example:'El jefe hace la vista gorda.'},
          {es:'Ir al grano', zh:'直奔主题', example:'Vamos al grano, por favor.'},
          {es:'Andarse por las ramas', zh:'绕弯子', example:'No te andes por las ramas.'},
          {es:'No venir al caso', zh:'文不对题', example:'Ese comentario no viene al caso.'},
          {es:'Traer cola', zh:'引起后续麻烦', example:'El asunto va a traer cola.'},
          {es:'Salirse con la suya', zh:'得逞', example:'Siempre se sale con la suya.'},
          {es:'Hacer oídos sordos', zh:'充耳不闻', example:'Hizo oídos sordos a las críticas.'},
          {es:'Estar al tanto', zh:'知情、了解', example:'Mantenme al tanto, por favor.'},
          {es:'Dar en el clavo', zh:'一针见血', example:'Diste en el clavo con tu diagnóstico.'},
          {es:'Ir viento en popa', zh:'一帆风顺', example:'El negocio va viento en popa.'},
          {es:'Tocar fondo', zh:'跌到谷底', example:'Tocó fondo y empezó a recuperarse.'},
          {es:'Levantar cabeza', zh:'东山再起', example:'No consigue levantar cabeza.'},
          {es:'Pasar por alto', zh:'忽略', example:'No podemos pasar por alto ese detalle.'},
          {es:'Echar por tierra', zh:'彻底否定', example:'Sus pruebas echaron por tierra la hipótesis.'},
          {es:'Sacar los trapos sucios', zh:'揭短', example:'Sacaron los trapos sucios en público.'},
          {es:'Estar con el agua al cuello', zh:'焦头烂额', example:'La empresa está con el agua al cuello.'},
          {es:'Ser uña y carne', zh:'形影不离', example:'Son uña y carne desde niños.'},
          {es:'Llevarse el gato al agua', zh:'占上风', example:'Al final se llevó el gato al agua.'},
          {es:'Planchar la oreja', zh:'睡觉（诙谐）', example:'Me voy a planchar la oreja.'}
        ],
        grammar:[
          {title:'惯用语与语域的选择', desc:'多数惯用语属口语或中性语域，正式文书慎用；部分（a la sazón, a la postre, a fuer de）偏书面。用错语域会显得突兀。'},
          {title:'带虚拟式的固定表达', desc:'Como si + 虚拟式过去时；Por más que + 虚拟式；A menos que + 虚拟式；Ojalá + 虚拟式 —— 惯用语里常见的语式限制。'},
          {title:'惯用语中的前置词搭配', desc:'a duras penas / de cabo a rabo / en un santiamén —— 前置词是固定的，不能随意替换，需整体记忆。'}
        ]
      },
      { id:'c2-u5', title:'哲学与思想论述', subtitle:'Filosofía y Pensamiento', lessons:16, duration:'约 60 分钟',
        vocab:[
          {es:'La ontología', zh:'本体论', example:'La ontología estudia el ser en cuanto ser.'},
          {es:'La epistemología', zh:'认识论', example:'La epistemología analiza el conocimiento.'},
          {es:'La axiología', zh:'价值论', example:'La axiología se ocupa de los valores.'},
          {es:'La teleología', zh:'目的论', example:'Una explicación teleológica apela a fines.'},
          {es:'La dialéctica', zh:'辩证法', example:'Hegel desarrolló una dialéctica del espíritu.'},
          {es:'La fenomenología', zh:'现象学', example:'La fenomenología describe la experiencia vivida.'},
          {es:'El materialismo', zh:'唯物主义', example:'El materialismo niega la sustancia espiritual.'},
          {es:'El idealismo', zh:'唯心主义', example:'El idealismo subordina el ser al pensar.'},
          {es:'El determinismo', zh:'决定论', example:'El determinismo deja poco margen a la libertad.'},
          {es:'El libre albedrío', zh:'自由意志', example:'Defiende la existencia del libre albedrío.'},
          {es:'La contingencia', zh:'偶然性', example:'La contingencia del mundo es evidente.'},
          {es:'La necesidad', zh:'必然性', example:'Distingue entre necesidad y contingencia.'},
          {es:'La sustancia', zh:'实体', example:'La sustancia permanece pese a los cambios.'},
          {es:'El accidente', zh:'偶性', example:'El color es un accidente de la sustancia.'},
          {es:'La esencia', zh:'本质', example:'La esencia precede a la existencia, decía el esencialismo.'},
          {es:'La existencia', zh:'存在', example:'Para el existencialismo, la existencia precede a la esencia.'},
          {es:'La aporía', zh:'难题、悖论', example:'La aporía no admite solución sencilla.'},
          {es:'La antinomia', zh:'二律背反', example:'Kant formuló varias antinomias.'},
          {es:'La síntesis', zh:'综合', example:'La síntesis supera la contradicción.'},
          {es:'La antítesis', zh:'反题', example:'La antítesis niega la tesis.'},
          {es:'La premisa axiomática', zh:'公理性前提', example:'Parte de una premisa axiomática.'},
          {es:'El postulado', zh:'公设', example:'Euclides enunció cinco postulados.'},
          {es:'El corolario', zh:'推论', example:'Como corolario se sigue que…'},
          {es:'La paradoja lógica', zh:'逻辑悖论', example:'La paradoja del mentiroso es clásica.'},
          {es:'El solipsismo', zh:'唯我论', example:'El solipsismo resulta difícil de refutar.'},
          {es:'El escepticismo', zh:'怀疑论', example:'El escepticismo radical se autorrefuta.'},
          {es:'El relativismo', zh:'相对主义', example:'El relativismo cultural admite matices.'},
          {es:'El dogmatismo', zh:'教条主义', example:'El dogmatismo cierra el debate.'},
          {es:'El pragmatismo', zh:'实用主义', example:'El pragmatismo juzga por consecuencias.'},
          {es:'La hermenéutica', zh:'诠释学', example:'La hermenéutica interpreta textos y acciones.'},
          {es:'La exégesis', zh:'注释、解读', example:'Hace una exégesis minuciosa del pasaje.'},
          {es:'El tratado', zh:'论著', example:'Publicó un tratado sobre la justicia.'},
          {es:'El ensayo filosófico', zh:'哲学随笔', example:'Su ensayo filosófico ganó un premio.'},
          {es:'El aforismo', zh:'格言', example:'Sus aforismos son citados a diario.'},
          {es:'El silogismo', zh:'三段论', example:'El silogismo es una forma deductiva.'},
          {es:'La deducción', zh:'演绎', example:'Por deducción se obtiene la conclusión.'},
          {es:'La inducción', zh:'归纳', example:'La inducción no garantiza certeza.'},
          {es:'La abducción', zh:'溯因推理', example:'La abducción formula la hipótesis más plausible.'},
          {es:'La falacia naturalista', zh:'自然主义谬误', example:'Moore acuñó la falacia naturalista.'},
          {es:'La navaja de Ockham', zh:'奥卡姆剃刀', example:'Aplica la navaja de Ockham a las teorías.'},
          {es:'El dualismo', zh:'二元论', example:'El dualismo cartesiano separa mente y cuerpo.'},
          {es:'El monismo', zh:'一元论', example:'El monismo sostiene una sola sustancia.'},
          {es:'La introspección', zh:'内省', example:'La introspección es un método discutido.'},
          {es:'La conciencia', zh:'意识', example:'La conciencia sigue siendo un enigma.'},
          {es:'El yo', zh:'自我', example:'El yo no es una sustancia simple.'},
          {es:'La otredad', zh:'他者性', example:'La otredad se construye frente al nosotros.'},
          {es:'La intersubjetividad', zh:'主体间性', example:'La verdad se forja en la intersubjetividad.'},
          {es:'Inmanente', zh:'内在的', example:'Una finalidad inmanente al proceso.'},
          {es:'Trascendente', zh:'超越的', example:'Lo trascendente excede la experiencia.'},
          {es:'Ineluctable', zh:'不可避免的', example:'El paso del tiempo es ineluctable.'},
          {es:'Inexorable', zh:'不可阻挡的', example:'Un declive inexorable.'},
          {es:'Insondable', zh:'深不可测的', example:'Un misterio insondable.'},
          {es:'Recóndito', zh:'隐秘的、深藏的', example:'Un rincón recóndito de la memoria.'},
          {es:'Soslayar la cuestión', zh:'回避问题', example:'Soslaya la cuestión de fondo.'},
          {es:'Apelar a', zh:'诉诸', example:'Apela a principios morales.'},
          {es:'Dirimir', zh:'裁断、解决', example:'La razón no dirime este conflicto.'}
        ],
        grammar:[
          {title:'抽象名词化与无人称论述', desc:'el devenir, el acaecer, el advenimiento, la irrupción de, la génesis de —— 哲学文本大量使用名词化压缩命题。'},
          {title:'复杂从句嵌套', desc:'El hecho de que + 虚拟式 / Que + 虚拟式作主语 / En la medida en que + 陈述式 / Por cuanto + 陈述式 —— 学术长句的骨架。'},
          {title:'让步与限定的高层次表达', desc:'Aun a riesgo de / No en vano / Salvo en la medida en que / Siempre y cuando + 虚拟式 —— 精确限定论断范围。'}
        ]
      }
    ]
  }
};

/* ============================================
   扁平化词汇表（用于随机复习）
   ============================================ */
/* ============================================
   精读语篇（阅读理解）
   ============================================ */
// 精读语篇（阅读理解）
const READING_PASSAGES = [
  {level:'B2', title:'共享单车为何改变了城市', topic:'城市与交通', minutes:6,
    paragraphs:[
      {es:`Cuando en 2016 aparecieron las primeras bicicletas compartidas sin estación en las calles de Pekín, nadie imaginó la magnitud del fenómeno. Bastaba con escanear un código para desbloquear una bici y dejarla, al terminar el trayecto, en cualquier lugar permitido.`,
       zh:`2016年，当第一批无桩共享单车出现在北京街头时，没有人预料到这一现象的规模。只需扫一个码就能解锁一辆单车，行程结束后把它停在任何允许的地方即可。`},
      {es:`La promesa era sencilla y atractiva: resolver el llamado «último kilómetro», ese tramo incómodo entre la parada del transporte público y el destino final. Para millones de personas, supuso una alternativa real frente al taxi o a caminar bajo la lluvia.`,
       zh:`这个承诺简单而诱人：解决所谓的"最后一公里"，即公共交通站点与最终目的地之间那段别扭的路程。对数以百万计的人来说，它成了替代出租车或冒雨步行的一个真实选择。`},
      {es:`Sin embargo, el éxito trajo consigo problemas imprevistos. Las aceras se saturaron de vehículos amontonados, muchos en mal estado; los operadores, enfrascados en una guerra de precios, acumularon pérdidas millonarias; y las administraciones, pilladas por sorpresa, improvisaron normativas que a menudo llegaban tarde.`,
       zh:`然而，成功也带来了始料未及的问题。人行道被堆积如山的车辆占满，其中许多状况糟糕；运营商陷于价格战，累积了巨额亏损；而措手不及的行政部门临时制定规章，往往为时已晚。`},
      {es:`Lo que ocurrió después resulta más interesante que el auge inicial. Varias ciudades dejaron de limitarse a prohibir y empezaron a regular con criterios claros: cupos máximos por operador, obligación de retirar las bicis averiadas en plazos concretos y sistemas de aparcamiento señalizados. El resultado, lejos de ser perfecto, fue notablemente mejor.`,
       zh:`此后发生的事情比最初的繁荣更有意思。一些城市不再只满足于禁止，而是开始以明确的标准进行规范：单一运营商的最高投放配额、限期清理故障车辆的义务，以及划定的停车区域。结果虽远非完美，却明显更好。`},
      {es:`La lección quizá trascienda el caso concreto. Las innovaciones que irrumpen con fuerza suelen desbordar los marcos existentes, y la tentación de responder con prohibiciones es comprensible pero poco eficaz. Regular a tiempo, con datos y con margen para corregir, parece haber funcionado mejor que prohibir a destiempo.`,
       zh:`这个教训或许超出了具体案例本身。强势涌现的创新往往会冲垮既有的框架，而以禁令回应的诱惑可以理解，却收效甚微。及时且基于数据、并留有修正余地的规范，似乎比事后的禁止更有效。`}
    ],
    glossary:[
      {es:'el trayecto', zh:'行程、路段'},
      {es:'el último kilómetro', zh:'最后一公里'},
      {es:'el tramo', zh:'一段路程'},
      {es:'la acera', zh:'人行道'},
      {es:'amontonado', zh:'堆积的'},
      {es:'enfrascarse en', zh:'埋头于、陷入'},
      {es:'millonario', zh:'数以百万计的'},
      {es:'improvisar', zh:'临时应付、即兴而为'},
      {es:'el cupo', zh:'配额'},
      {es:'averiado', zh:'故障的、损坏的'},
      {es:'señalizado', zh:'有标识的'},
      {es:'trascender', zh:'超越'},
      {es:'irrumpir', zh:'闯入、涌现'},
      {es:'desbordar', zh:'溢出、冲垮'},
      {es:'a destiempo', zh:'不合时宜地、为时已晚'}
    ],
    structures:[
      {es:`Bastaba con escanear un código para desbloquear una bici y dejarla, al terminar el trayecto, en cualquier lugar permitido.`,
       note:`bastar con + 不定式，表示「只需……就够了」。中间的 al terminar el trayecto 是插入的时间状语，插在动词和它的宾语补足语之间，是西语常见的「分隔」手法，翻译时要还原语序。`},
      {es:`los operadores, enfrascados en una guerra de precios, acumularon pérdidas millonarias`,
       note:`enfrascados en… 是过去分词短语作后置定语（相当于一个省略了 which were 的定语从句）。这类结构在书面语里极为常见，能让句子更紧凑，但要注意分词的性与数必须和中心词一致。`},
      {es:`El resultado, lejos de ser perfecto, fue notablemente mejor.`,
       note:`lejos de + 不定式 ＝「远非、不但没有」。这里同样是用逗号插入，起让步作用。注意它和表示距离的 lejos de（远离）要区分。`},
      {es:`Regular a tiempo, con datos y con margen para corregir, parece haber funcionado mejor que prohibir a destiempo.`,
       note:`主语是一个不定式短语（Regular a tiempo…），谓语 parece 用第三人称单数。haber funcionado 是完成不定式，表示「（到当时为止）已经奏效」，与 parece 搭配表示推测过去。`}
    ],
    questions:[
      {q:'¿Qué problema resolvían las bicicletas compartidas?', a:'El llamado «último kilómetro» entre el transporte público y el destino final.'},
      {q:'¿Qué problemas trajo el éxito?', a:'Aceras saturadas, operadores con pérdidas millonarias y normativas improvisadas.'},
      {q:'¿Qué cambio de enfoque se produjo después?', a:'Las ciudades pasaron de prohibir a regular con criterios claros.'},
      {q:'¿Cuál es la lección general del texto?', a:'Que regular a tiempo con datos y margen de corrección funciona mejor que prohibir a destiempo.'}
    ]
  },
  {level:'B2', title:'为什么我们记不住读过的东西', topic:'认知与学习', minutes:6,
    paragraphs:[
      {es:`Pocas sensaciones resultan tan frustrantes como terminar un libro y descubrir que apenas recordamos su contenido. La reacción habitual es culpar a la memoria, pero el problema suele estar en cómo leemos, no en cuánto retenemos.`,
       zh:`很少有哪种感受比读完一本书却发现自己几乎记不住内容更令人沮丧。通常的反应是怪罪记忆力，但问题往往出在我们怎么读，而不是我们能记住多少。`},
      {es:`La lectura pasiva —esa que consiste en deslizar la vista por las líneas mientras la mente divaga— produce una ilusión de comprensión. Creemos haber entendido porque las frases nos resultan familiares, aunque no hayamos reconstruido su significado.`,
       zh:`被动阅读——也就是目光在字行间滑过、思绪却在游荡的那种——会产生一种「懂了」的错觉。我们以为自己理解了，因为这些句子读起来熟悉，尽管我们并没有重建它们的含义。`},
      {es:`La investigación sobre aprendizaje señala que la comprensión se consolida cuando el lector genera algo: una pregunta, un resumen, un ejemplo propio. Dicho de otro modo, recordamos lo que elaboramos, no lo que simplemente recibimos.`,
       zh:`关于学习的研究指出，当读者产出某些东西时，理解才会巩固：一个问题、一段摘要、一个自己的例子。换句话说，我们记住的是自己加工过的东西，而不是仅仅接收到的。`},
      {es:`De ahí que las técnicas más eficaces resulten, paradójicamente, las más incómodas: cerrar el libro y tratar de explicar lo leído, escribir preguntas que el texto responde o compararlo con algo que ya sabíamos. Todas exigen un esfuerzo que la lectura cómoda evita.`,
       zh:`因此，最有效的技巧反而悖论式地是最不舒服的：合上书试着复述所读内容、写下文本能回答的问题，或者把它与已知的东西作比较。它们都要求付出一种舒适阅读所回避的努力。`},
      {es:`Esto no significa que leer por placer sea una pérdida de tiempo. Significa que, si el objetivo es aprender, conviene interrumpir la lectura de vez en cuando y hacer algo con ella. La incomodidad, en este caso, no es un síntoma de que algo va mal: es la señal de que algo está ocurriendo.`,
       zh:`这并不意味着为消遣而读书是浪费时间。它的意思是，如果目标是学习，就该时不时打断阅读，拿它做点什么。在这种情况下，不适感并不是出了问题，而是正在发生什么的信号。`}
    ],
    glossary:[
      {es:'frustrante', zh:'令人沮丧的'},
      {es:'retener', zh:'记住、保持'},
      {es:'divagar', zh:'走神、漫谈'},
      {es:'la ilusión de comprensión', zh:'理解的错觉'},
      {es:'reconstruir', zh:'重建'},
      {es:'consolidarse', zh:'巩固'},
      {es:'elaborar', zh:'加工、制作'},
      {es:'paradójicamente', zh:'悖论式地'},
      {es:'de ahí que', zh:'因此（+虚拟式）'},
      {es:'exigir', zh:'要求'},
      {es:'el síntoma', zh:'症状、信号'},
      {es:'conviene', zh:'宜、应当'}
    ],
    structures:[
      {es:`Pocas sensaciones resultan tan frustrantes como terminar un libro y descubrir que apenas recordamos su contenido.`,
       note:`tan… como… 表示同级比较。这里主语 Pocas sensaciones 与后面的不定式短语作对比项。注意 apenas 在这里是「几乎不」，不是「刚刚」。`},
      {es:`Creemos haber entendido porque las frases nos resultan familiares, aunque no hayamos reconstruido su significado.`,
       note:`haber entendido 是完成不定式，作 creer 的直接宾语，表示「认为自己已经懂了」。aunque + 虚拟式（hayamos）表示让步且说话人对该事实持保留态度。`},
      {es:`De ahí que las técnicas más eficaces resulten, paradójicamente, las más incómodas.`,
       note:`de ahí que 后面必须接虚拟式（resulten），这是固定要求。paradójicamente 用逗号插入作评注性状语。`},
      {es:`La incomodidad, en este caso, no es un síntoma de que algo va mal: es la señal de que algo está ocurriendo.`,
       note:`un síntoma de que 后面用陈述式（va mal），因为这是说话人认定的事实；如果换成 no es que…，则需用虚拟式。冒号后的 es la señal de que 起对比强调作用。`}
    ],
    questions:[
      {q:'¿Por qué la lectura pasiva resulta engañosa?', a:'Porque produce una ilusión de comprensión: las frases resultan familiares sin que se reconstruya el significado.'},
      {q:'¿Qué dice la investigación sobre la comprensión?', a:'Que se consolida cuando el lector genera algo propio.'},
      {q:'Cite dos técnicas eficaces mencionadas.', a:'Cerrar el libro y explicar lo leído; escribir preguntas que el texto responde.'},
      {q:'¿Cómo interpreta el texto la incomodidad?', a:'Como señal de que algo está ocurriendo, no como síntoma de que algo va mal.'}
    ]
  },
  {level:'B2', title:'城市的噪音与健康', topic:'健康与环境', minutes:6,
    paragraphs:[
      {es:`El ruido del tráfico rara vez se percibe como un problema sanitario. Sin embargo, la Organización Mundial de la Salud lo sitúa entre los principales riesgos ambientales para la salud, por detrás únicamente de la contaminación del aire.`,
       zh:`交通噪音很少被视为一个健康问题。然而，世界卫生组织将其列为环境健康的主要风险之一，仅次于空气污染。`},
      {es:`El mecanismo no es tan intuitivo como parece. El oído capta el sonido, pero es el cerebro quien lo interpreta como amenaza; esa interpretación activa respuestas de estrés que, mantenidas durante años, afectan al sistema cardiovascular.`,
       zh:`其机制并不像看上去那么直观。耳朵捕捉声音，但把它解读为威胁的是大脑；这种解读会激活应激反应，而长期持续便会影响心血管系统。`},
      {es:`Lo llamativo es que los efectos se producen incluso durante el sueño. Aunque quien duerme no recuerde haberse despertado, el organismo registra cada subida de intensidad y responde con microdespertares que fragmentan el descanso sin dejar rastro consciente.`,
       zh:`值得注意的是，这些影响甚至在睡眠中也发生。即便睡着的人不记得自己醒过，身体仍会记录每一次强度的升高，并以微觉醒作出反应，在不留下意识痕迹的情况下使休息变得破碎。`},
      {es:`Por eso los expertos insisten en que las medidas deben centrarse en la fuente y no solo en el aislamiento acústico de las viviendas. Aislar ayuda, desde luego, pero traslada el problema a quien no puede permitirse reformar su casa.`,
       zh:`因此专家坚持认为，措施应当着眼于源头，而不只是住宅的隔音。隔音固然有帮助，但它把问题转嫁给了无力改造住房的人。`},
      {es:`Las soluciones que han dado mejores resultados combinan varias capas: asfalto fonoabsorbente, límites de velocidad nocturnos, peatonalización de calles residenciales y planificación urbana que evite situar hospitales y escuelas junto a vías rápidas.`,
       zh:`效果最好的方案结合了多个层面：吸音沥青、夜间限速、住宅街道步行化，以及避免把医院和学校设在快速路旁的城市规划。`}
    ],
    glossary:[
      {es:'el ruido', zh:'噪音'},
      {es:'sanitario', zh:'卫生的、健康的'},
      {es:'la amenaza', zh:'威胁'},
      {es:'cardiovascular', zh:'心血管的'},
      {es:'llamativo', zh:'引人注意的'},
      {es:'el microdespertar', zh:'微觉醒'},
      {es:'fragmentar', zh:'使破碎'},
      {es:'el aislamiento acústico', zh:'隔音'},
      {es:'trasladar', zh:'转移'},
      {es:'fonoabsorbente', zh:'吸音的'},
      {es:'la vía rápida', zh:'快速路'},
      {es:'la capa', zh:'层面、层'}
    ],
    structures:[
      {es:`la Organización Mundial de la Salud lo sitúa entre los principales riesgos ambientales para la salud, por detrás únicamente de la contaminación del aire.`,
       note:`lo sitúa 中的 lo 是直接宾语代词，前指 el ruido。por detrás únicamente de… 表示排名位置，「仅次于」。`},
      {es:`es el cerebro quien lo interpreta como amenaza`,
       note:`es… quien… 是强调句式，用于强调主语（el cerebro）。注意 quien 与先行词单复数一致；此处也可用 el que。`},
      {es:`Aunque quien duerme no recuerde haberse despertado, el organismo registra cada subida de intensidad.`,
       note:`quien duerme 是名词性关系从句作主语，意为「睡着的那个人」。recuerde 用虚拟式，因为 aunque 在此表让步且对事实不作断言。haberse despertado 是完成不定式的自复形式。`},
      {es:`Aislar ayuda, desde luego, pero traslada el problema a quien no puede permitirse reformar su casa.`,
       note:`Aislar 是名词化不定式作主语。a quien no puede… 中 quien 是关系代词，前面带前置词 a，表「转嫁给（某个）无力……的人」。`}
    ],
    questions:[
      {q:'¿Qué lugar ocupa el ruido entre los riesgos ambientales según la OMS?', a:'El segundo, solo por detrás de la contaminación del aire.'},
      {q:'¿Dónde se produce realmente la interpretación del sonido como amenaza?', a:'En el cerebro, no en el oído.'},
      {q:'¿Por qué el ruido afecta incluso a quien no se despierta?', a:'Porque el organismo registra las subidas de intensidad y responde con microdespertares.'},
      {q:'¿Por qué los expertos prefieren actuar sobre la fuente?', a:'Porque el aislamiento traslada el problema a quien no puede costearlo.'}
    ]
  }
];

/* ============================================
   独立学习模块语料
   ============================================ */

// 语法专项练习题库
const GRAMMAR_QUIZZES = [
  // Ser vs Estar
  {topic:'Ser vs Estar', questions:[
    {sentence:'Yo ___ estudiante de medicina.', options:['soy','estoy','tengo','hay'], correct:0, explain:'身份用 ser。'},
    {sentence:'Hoy ___ muy cansado.', options:['soy','estoy','tengo','hay'], correct:1, explain:'状态用 estar。'},
    {sentence:'Madrid ___ la capital de España.', options:['es','está','tiene','hay'], correct:0, explain:'事实用 ser。'},
    {sentence:'La conferencia ___ en el salón principal.', options:['es','está','tiene','hay'], correct:1, explain:'地点/正在进行的活动用 estar。'},
    {sentence:'El chocolate ___ muy dulce.', options:['es','está','tiene','hay'], correct:0, explain:'本质特征用 ser。'},
    {sentence:'Este café ___ frío ya.', options:['es','está','tiene','hay'], correct:1, explain:'临时状态（原本热的现在凉了）用 estar。'},
    {sentence:'Sergio ___ de Barcelona.', options:['es','está','tiene','hay'], correct:0, explain:'来自某地用 ser。'},
    {sentence:'___ las tres de la tarde.', options:['Son','Están','Tienen','Hay'], correct:0, explain:'时间用 ser（soy/eres/es/somos/sois/son）。'}
  ]},
  
  // 现在时不规则动词
  {topic:'Presente de Verbos Irregulares', questions:[
    {sentence:'Yo ___ (hacer) la tarea ahora.', options:['hago','haces','hace','hacer'], correct:0, explain:'hacer 第一人称单数不规则：hago。haces 第二人称，hace 第三人称。'},
    {sentence:'Él ___ (conocer) a mi hermana.', options:['conoce','conoces','conozco','conocerá'], correct:0, explain:'conocer o→ue 变化，但第三人称保持 conoce（不变元音）。conozco 是第一人称单数。'},
    {sentence:'Nosotros ___ (tener) mucha hambre.', options:['tenemos','tiene','tienen','tenemos que'], correct:0, explain:'tener 第一人称复数：tenemos。tiene 单三，tienen 单三（ustedes）。'},
    {sentence:'Ellos ___ (ir) al mercado.', options:['van','vas','va','irán'], correct:0, explain:'ir 完全不规则：voy, vas, va, vamos, vais, van。van 是第三人称复数。'},
    {sentence:'Yo ___ (poder) ayudarte.', options:['puedo','puede','podemos','podré'], correct:0, explain:'poder o→ue：puedo, puedes, puede, podemos... 第一人称用 puedo。'},
    {sentence:'Ella ___ (querer) un café.', options:['quiere','quiero','quieres','querrá'], correct:0, explain:'querer e→ie：quiero, quieres, quiere, queremos... ella 第三人称用 quiere。'},
    {sentence:'Nosotros ___ (empezar) a las ocho.', options:['empezamos','empiezo','empieza','empezaré'], correct:0, explain:'empezar e→ie 变化，但第一人称复数：empezamos（元音不变化）。empiezo 单一，empieza 单三。'},
    {sentence:'Tú ___ (dar) muy buenos consejos.', options:['das','da','doy','darás'], correct:0, explain:'dar 完全不规则：doy, das, da, damos, dais, dan。tú 第二人称是 das。'}
  ]},
  
  // Preterito 不规则
  {topic:'Preterito Indefinido Irregular', questions:[
    {sentence:'Ayer yo ___ (ir) al cine.', options:['fui','iba','iré','he ido'], correct:0, explain:'ir 的简单过去时同 ser：fui, fuiste, fue, fuimos, fuisteis, fueron。iba 是过去未完成时。'},
    {sentence:'Ella ___ (tener) que trabajar el sábado.', options:['tuvo','tenía','tendrá','ha tenido'], correct:0, explain:'tener 过去时：tuve, tuviste, tuvo, tuvimos... tuvo 是第三人称单数过去式。tenía 是过去未完成时。'},
    {sentence:'Nosotros ___ (hacer) una fiesta.', options:['hicimos','hacíamos','haríamos','hemos hecho'], correct:0, explain:'hacer 过去时：hice, hiciste, hizo, hicimos... hicimos 是我们做了。hacíamos 是过去未完成时（经常做）。'},
    {sentence:'El año pasado ellos ___ (conocer) París.', options:['conocieron','conocían','conocerán','han conocido'], correct:0, explain:'conocer 过去时：conocí, conociste, conoció, conocimos, conocisteis, conocieron。conocieron 是第三人称复数。'},
    {sentence:'Tú ___ (ver) la película anoche?', options:['viste','veías','verás','has visto'], correct:0, explain:'ver 过去时：vi, viste, vio, vimos, visteis, vieron。viste 是第二人称过去式。veías 是过去未完成时。'},
    {sentence:'Yo ___ (poder) aprobar el examen de la semana pasada.', options:['pude','podía','podré','he podido'], correct:0, explain:'poder 过去时：pude, pudiste, pudo, pudimos, pudisteis, pudieron。pude 是第一人称单数过去式。podía 是过去未完成时。'}
  ]},
  
  // 虚拟式现在时
  {topic:'Subjuntivo Presente', questions:[
    {sentence:'Espero que tú ___ (venir) mañana.', options:['vengas','vienes','vendrás','venías'], correct:0, explain:'esperar que 触发虚拟式。venir 虚拟式：venga, vengas, venga, vengamos, vengáis, vengan。'},
    {sentence:'Ojalá ___ (hacer) buen tiempo.', options:['haga','hace','hará','hizo'], correct:0, explain:'ojalá 后接虚拟式。hacer 虚拟式：haga, hagas, haga, hagamos...'},
    {sentence:'Dudo que él ___ (estar) en casa.', options:['esté','está','estará','estuvo'], correct:0, explain:'dudar que 后接虚拟式。estar 虚拟式不规则：esté, estés, esté...'},
    {sentence:'Me alegro de que ___ (tener) éxito.', options:['tengas','tienes','tendrás','tuviste'], correct:0, explain:'alegrarse de que 后接虚拟式。tener 虚拟式：tenga, tengas, tenga...'},
    {sentence:'Quiero que me ___ (decir) la verdad.', options:['digas','dices','dirás','dijiste'], correct:0, explain:'querer que 后接虚拟式。decir 虚拟式：diga, digas, diga, digamos, digáis, digan。'},
    {sentence:'No creo que ___ (ser) verdad.', options:['sea','es','será','fue'], correct:0, explain:'no creer que 后接虚拟式。ser 虚拟式：sea, seas, sea, seamos, seáis, sean。'}
  ]},
  
  // 命令式
  {topic:'Modo Imperativo', questions:[
    {sentence:'___ (venir) aquí, por favor.', options:['Ven','Viene','Vengas','Venir'], correct:0, explain:'tú 命令式：venir → ven。'},
    {sentence:'No ___ (hablar) tan alto.', options:['hables','habla','hablas','hablar'], correct:0, explain:'tú 否定命令式用虚拟式现在时第二人称：no hables。'},
    {sentence:'___ (abrir) la puerta, señora.', options:['Abra','Abres','Abre','Abrir'], correct:0, explain:'usted 命令式 = 虚拟式现在时第三人称：abra。'},
    {sentence:'___ (comer) juntos, ¿vale?', options:['Comamos','Comemos','Comer','Comeremos'], correct:0, explain:'nosotros 劝诱命令式 = 虚拟式现在时第一人称复数：comamos。'},
    {sentence:'___ (traer) tu identificación. (tú)', options:['Trae','Traiga','Traes','Traerás'], correct:0, explain:'traer 的 tú 命令式不规则：trae。（traiga 是 usted 形式）'}
  ]},
  
  // 直接宾语代词
  {topic:'Pronombres de Objeto Directo', questions:[
    {sentence:'El libro? Sí, ___ he leído.', options:['lo','le','se','la'], correct:0, explain:'libro 阳性单数直接宾语 → lo。'},
    {sentence:'Las frutas? No, ___ no me gustan.', options:['las','les','se','los'], correct:0, explain:'frutas 阴性复数直接宾语 → las。'},
    {sentence:'¿Me llamas? Sí, ___ llamo ahora mismo.', options:['te','me','lo','le'], correct:0, explain:'tú 第二人称直接宾语 → te。'},
    {sentence:'A la profesora? Sí, ___ voy a preguntar.', options:['la','le','se','los'], correct:1, explain:'间接宾语 a la profesora → le。Preguntar algo a alguien。'},
    {sentence:'A Juan? No, ___ no conozco.', options:['lo','le','se','la'], correct:0, explain:'conocer 直接宾语，a Juan → lo（阳性）。'}
  ]}  ,
  {topic:'虚拟式现在时 (Subjuntivo presente)', questions:[
    {sentence:'Espero que ___ a tiempo.', options:['llegues','llegas','llegarás','llegabas'], correct:0, explain:'esperar que 后接虚拟式。'},
    {sentence:'No creo que ___ razón.', options:['tengas','tienes','tendrás','tenías'], correct:0, explain:'否定信念动词（no creer）后接虚拟式。'},
    {sentence:'Quiero que ___ conmigo.', options:['vengas','vienes','vendrás','venías'], correct:0, explain:'querer que 表达愿望，用虚拟式。'},
    {sentence:'Es necesario que ___ más.', options:['estudies','estudias','estudiarás','estudiabas'], correct:0, explain:'es necesario que 表价值判断，用虚拟式。'},
    {sentence:'Dudo que ___ verdad.', options:['sea','es','será','era'], correct:0, explain:'dudar que 表怀疑，用虚拟式。'},
    {sentence:'Me alegro de que ___ bien.', options:['estés','estás','estarás','estabas'], correct:0, explain:'情感表达（alegrarse de que）用虚拟式。'},
    {sentence:'Es posible que ___ mañana.', options:['llueva','llueve','lloverá','llovía'], correct:0, explain:'es posible que 表可能性，用虚拟式。'},
    {sentence:'Ojalá ___ sol mañana.', options:['haga','hace','hará','hacía'], correct:0, explain:'ojalá 后必须用虚拟式。'},
    {sentence:'Le pido que ___ la puerta.', options:['cierre','cierra','cerrará','cerraba'], correct:0, explain:'pedir que 表请求，用虚拟式。'},
    {sentence:'Es una pena que no ___ venir.', options:['puedas','puedes','podrás','podías'], correct:0, explain:'es una pena que 表情感，用虚拟式。'},
    {sentence:'Antes de que ___, avísame.', options:['te vayas','te vas','te irás','te ibas'], correct:0, explain:'antes de que 后接虚拟式。'},
    {sentence:'Cuando ___ mayor, seré médico.', options:['sea','soy','seré','era'], correct:0, explain:'cuando 指将来时用虚拟式。'},
    {sentence:'Aunque ___ frío, saldremos.', options:['haga','hace','hará','hacía'], correct:0, explain:'aunque + 将来/不确定用虚拟式。'},
    {sentence:'Sin que nadie lo ___, se marchó.', options:['supiera','supo','sabrá','sabía'], correct:0, explain:'sin que 后接虚拟式。'},
    {sentence:'No es cierto que ___ culpable.', options:['sea','es','será','era'], correct:0, explain:'no es cierto que 表否定判断，用虚拟式。'},
    {sentence:'Busco a alguien que ___ inglés.', options:['hable','habla','hablará','hablaba'], correct:0, explain:'寻找不确定的对象用虚拟式。'},
    {sentence:'Conviene que ___ descansar.', options:['vayas','vas','irás','ibas'], correct:0, explain:'convenir que 表建议，用虚拟式。'},
    {sentence:'Por más que ___, no te creerá.', options:['insistas','insistes','insistirás','insistías'], correct:0, explain:'por más que 表让步，用虚拟式。'},
    {sentence:'Es importante que ___ puntual.', options:['seas','eres','serás','eras'], correct:0, explain:'es importante que 用虚拟式。'},
    {sentence:'A menos que ___, no iremos.', options:['llueva','llueve','lloverá','llovía'], correct:0, explain:'a menos que 后接虚拟式。'}
  ]},
  {topic:'虚拟式过去时 (Subjuntivo imperfecto)', questions:[
    {sentence:'Si ___ dinero, viajaría más.', options:['tuviera','tengo','tendré','tenía'], correct:0, explain:'与现在事实相反的条件句：si + 虚拟式过去时。'},
    {sentence:'Me pidió que le ___ la verdad.', options:['dijera','digo','diré','decía'], correct:0, explain:'主句过去时，从句用虚拟式过去时。'},
    {sentence:'Quisiera que ___ más temprano.', options:['llegaras','llegas','llegarás','llegabas'], correct:0, explain:'过去愿望用虚拟式过去时。'},
    {sentence:'Si ___ rico, compraría una isla.', options:['fuera','soy','seré','era'], correct:0, explain:'虚拟式过去时表非现实假设。'},
    {sentence:'No creía que ___ tan difícil.', options:['fuera','es','será','era'], correct:0, explain:'主句为过去时，从句相应用过去时虚拟式。'},
    {sentence:'Le aconsejé que ___ reposo.', options:['hiciera','hace','hará','hacía'], correct:0, explain:'aconsejar que 用虚拟式，主句过去时则用过去时虚拟式。'},
    {sentence:'Era necesario que ___ antes.', options:['llegáramos','llegamos','llegaremos','llegábamos'], correct:0, explain:'era necesario que 后接过去时虚拟式。'},
    {sentence:'Si ___ tiempo, te acompañaría.', options:['tuviera','tengo','tendré','tenía'], correct:0, explain:'非现实条件用虚拟式过去时。'},
    {sentence:'Ojalá ___ aquí ahora.', options:['estuviera','está','estará','estaba'], correct:0, explain:'ojalá 表不可能实现的愿望，用过去时虚拟式。'},
    {sentence:'Como si ___ un niño.', options:['fuera','es','será','era'], correct:0, explain:'como si 后固定用虚拟式过去时。'},
    {sentence:'Dudaba que ___ capaz.', options:['fuera','es','será','era'], correct:0, explain:'主句过去时 + dudar que → 过去时虚拟式。'},
    {sentence:'Me alegró que ___ venido.', options:['hubieras','has','habrás','habías'], correct:0, explain:'主句过去时，从句先于主句 → 虚拟式过去完成时。'},
    {sentence:'Si lo ___ sabido, habría venido.', options:['hubiera','he','habré','había'], correct:0, explain:'与过去事实相反：si + 虚拟式过去完成时。'},
    {sentence:'Le sugerí que ___ otra vez.', options:['intentara','intenta','intentará','intentaba'], correct:0, explain:'sugerir que 用虚拟式过去时。'},
    {sentence:'Aunque ___ tarde, iríamos.', options:['fuera','es','será','era'], correct:0, explain:'让步虚拟式表非现实。'},
    {sentence:'No había nadie que lo ___.', options:['conociera','conoce','conocerá','conocía'], correct:0, explain:'先行词不存在 → 虚拟式过去时。'},
    {sentence:'Si ___ más joven, estudiaría otra carrera.', options:['fuera','soy','seré','era'], correct:0, explain:'非现实假设用虚拟式过去时。'},
    {sentence:'Te dije que no ___ así.', options:['hablaras','hablas','hablarás','hablabas'], correct:0, explain:'decir que 命令/请求含义时用虚拟式过去时。'},
    {sentence:'Era posible que ___ equivocado.', options:['estuviera','está','estará','estaba'], correct:0, explain:'era posible que 用过去时虚拟式。'},
    {sentence:'Por si ___, llévate el paraguas.', options:['lloviera','llueve','lloverá','llovía'], correct:0, explain:'por si 后接虚拟式过去时。'}
  ]},
  {topic:'简单过去时 vs 未完成过去时', questions:[
    {sentence:'Ayer ___ al cine con mis amigos.', options:['fui','iba','voy','iré'], correct:0, explain:'一次性完成的动作 → 简单过去时。'},
    {sentence:'Cuando era niño, ___ al parque todos los días.', options:['iba','fui','voy','iré'], correct:0, explain:'过去习惯性动作 → 未完成过去时。'},
    {sentence:'___ las tres cuando llamaste.', options:['Eran','Fueron','Son','Serán'], correct:0, explain:'过去的时间描述 → 未完成过去时。'},
    {sentence:'El año pasado ___ a España.', options:['viajé','viajaba','viajo','viajaré'], correct:0, explain:'明确的过去时间点、一次性事件 → 简单过去时。'},
    {sentence:'Mientras ___, sonó el teléfono.', options:['leía','leí','leo','leeré'], correct:0, explain:'正在进行的背景动作 → 未完成过去时。'},
    {sentence:'De repente ___ a llover.', options:['empezó','empezaba','empieza','empezará'], correct:0, explain:'突发动作 → 简单过去时。'},
    {sentence:'Todos los veranos ___ a la playa.', options:['íbamos','fuimos','vamos','iremos'], correct:0, explain:'反复发生的过去动作 → 未完成过去时。'},
    {sentence:'Anoche ___ una película muy buena.', options:['vi','veía','veo','veré'], correct:0, explain:'具体过去时间的一次动作 → 简单过去时。'},
    {sentence:'___ veinte años cuando se casó.', options:['Tenía','Tuvo','Tiene','Tendrá'], correct:0, explain:'描述年龄状态 → 未完成过去时。'},
    {sentence:'El lunes ___ tres horas estudiando.', options:['pasé','pasaba','paso','pasaré'], correct:0, explain:'有明确时长和终点 → 简单过去时。'},
    {sentence:'Mientras ella ___, él cocinaba.', options:['estudiaba','estudió','estudia','estudiará'], correct:0, explain:'两个同时进行的过去动作 → 都用未完成过去时。'},
    {sentence:'___ y ___ la puerta.', options:['Entré / cerré','Entraba / cerraba','Entro / cierro','Entraré / cerraré'], correct:0, explain:'连续完成的动作 → 简单过去时。'},
    {sentence:'Aquella casa ___ muy antigua.', options:['era','fue','es','será'], correct:0, explain:'描写过去的状态 → 未完成过去时。'},
    {sentence:'___ tres veces al médico el mes pasado.', options:['Fui','Iba','Voy','Iré'], correct:0, explain:'明确次数的过去事件 → 简单过去时。'},
    {sentence:'Cuando llegué, ellos ya ___.', options:['habían comido','comieron','comen','comerán'], correct:0, explain:'过去的过去 → 过去完成时。'},
    {sentence:'Siempre ___ café por la mañana.', options:['tomaba','tomé','tomo','tomaré'], correct:0, explain:'过去的一贯习惯 → 未完成过去时。'},
    {sentence:'___ mucho frío aquel invierno.', options:['Hacía','Hizo','Hace','Hará'], correct:0, explain:'过去的天气背景描写 → 未完成过去时。'},
    {sentence:'___ el informe en dos días.', options:['Terminé','Terminaba','Termino','Terminaré'], correct:0, explain:'限定时间内完成的动作 → 简单过去时。'},
    {sentence:'Mientras ___ por la calle, me encontré a Juan.', options:['caminaba','caminé','camino','caminaré'], correct:0, explain:'背景动作 → 未完成过去时；插入事件 → 简单过去时。'},
    {sentence:'La fiesta ___ muy animada.', options:['estaba','estuvo','está','estará'], correct:0, explain:'描写过去场景 → 未完成过去时。'}
  ]},
  {topic:'por vs para', questions:[
    {sentence:'Este regalo es ___ ti.', options:['para','por','a','de'], correct:0, explain:'para 表对象、接受者。'},
    {sentence:'Gracias ___ tu ayuda.', options:['por','para','de','con'], correct:0, explain:'gracias por 固定搭配，表原因。'},
    {sentence:'Salgo ___ Madrid mañana.', options:['para','por','a','en'], correct:0, explain:'para 表目的地。'},
    {sentence:'Caminé ___ el parque.', options:['por','para','a','en'], correct:0, explain:'por 表经过、穿越的场所。'},
    {sentence:'Estudio español ___ trabajar en España.', options:['para','por','de','a'], correct:0, explain:'para 表目的。'},
    {sentence:'Pagué veinte euros ___ el libro.', options:['por','para','de','en'], correct:0, explain:'por 表交换、价格。'},
    {sentence:'Tengo que terminar esto ___ el viernes.', options:['para','por','en','a'], correct:0, explain:'para 表截止期限。'},
    {sentence:'Lo hice ___ amor.', options:['por','para','de','con'], correct:0, explain:'por 表动机、原因。'},
    {sentence:'___ ser tan joven, habla muy bien.', options:['Para','Por','De','Con'], correct:0, explain:'para 表「考虑到、相对于」。'},
    {sentence:'El tren pasa ___ aquí.', options:['por','para','a','en'], correct:0, explain:'por 表经过的地点。'},
    {sentence:'Compré flores ___ mi madre.', options:['para','por','a','de'], correct:0, explain:'para 表给予的对象。'},
    {sentence:'Estoy preocupado ___ el examen.', options:['por','para','de','en'], correct:0, explain:'preocuparse por 表因某事担心。'},
    {sentence:'___ mí, no hay problema.', options:['Para','Por','De','En'], correct:0, explain:'para mí 表「就我而言」。'},
    {sentence:'Trabajo ___ una empresa española.', options:['para','por','en','a'], correct:0, explain:'trabajar para 表雇主。'},
    {sentence:'Se disculpó ___ llegar tarde.', options:['por','para','de','en'], correct:0, explain:'por 表原因。'},
    {sentence:'La carta fue escrita ___ Cervantes.', options:['por','para','de','con'], correct:0, explain:'被动语态的施动者用 por。'},
    {sentence:'Voy ___ la autopista.', options:['por','para','a','en'], correct:0, explain:'por 表路线。'},
    {sentence:'Es un libro ___ niños.', options:['para','por','de','a'], correct:0, explain:'para 表适用对象。'},
    {sentence:'___ lo general, llega puntual.', options:['Por','Para','De','En'], correct:0, explain:'por lo general 固定短语。'},
    {sentence:'Luchar ___ la libertad.', options:['por','para','de','a'], correct:0, explain:'luchar por 表为目标奋斗。'}
  ]},
  {topic:'宾语与与格代词', questions:[
    {sentence:'¿El libro? ___ leí ayer.', options:['Lo','Le','La','Les'], correct:0, explain:'直接宾语阳性单数用 lo。'},
    {sentence:'¿Las cartas? ___ envié ayer.', options:['Las','Los','Les','La'], correct:0, explain:'直接宾语阴性复数用 las。'},
    {sentence:'___ di el regalo a María.', options:['Le','La','Lo','Les'], correct:0, explain:'间接宾语（给她）用 le。'},
    {sentence:'___ di el libro a ellos.', options:['Les','Los','Le','Las'], correct:0, explain:'间接宾语复数用 les。'},
    {sentence:'___ veo todos los días.', options:['Te','Tú','Ti','Tu'], correct:0, explain:'直接宾语代词 te。'},
    {sentence:'___ lo dije ayer.', options:['Te','Tú','Ti','Tu'], correct:0, explain:'间接宾语代词 te。'},
    {sentence:'___ compré un coche a mi hijo.', options:['Le','Lo','La','Les'], correct:0, explain:'给他买车 → 间接宾语 le。'},
    {sentence:'¿Me prestas el bolígrafo? Sí, ___ presto.', options:['te lo','lo te','te le','le te'], correct:0, explain:'间接 + 直接：te lo。'},
    {sentence:'___ expliqué la lección a los alumnos.', options:['Les','Los','Le','Las'], correct:0, explain:'向学生讲解 → 间接宾语 les。'},
    {sentence:'Ese libro, ___ he leído ya.', options:['lo','le','la','los'], correct:0, explain:'复指直接宾语用 lo。'},
    {sentence:'A María ___ gustan las flores.', options:['le','la','lo','les'], correct:0, explain:'gustar 类动词的主语是物，人是间接宾语 → le。'},
    {sentence:'___ invité a cenar.', options:['Los','Les','Le','Las'], correct:0, explain:'invitar a alguien 的直接宾语用 los。'},
    {sentence:'Dámelo: 其中 «lo» 指代：', options:['直接宾语','间接宾语','主语','所有格'], correct:0, explain:'lo 是直接宾语代词。'},
    {sentence:'¿Has visto a Ana? Sí, ___ vi en el mercado.', options:['la','le','lo','las'], correct:0, explain:'直接宾语阴性单数用 la。'},
    {sentence:'___ duele la cabeza.', options:['Me','Yo','Mi','Mí'], correct:0, explain:'doler 结构：me duele。'},
    {sentence:'Se ___ olvidó las llaves.', options:['le','la','lo','les'], correct:0, explain:'se le olvidó 结构表无意忘记。'},
    {sentence:'___ escribí una carta a mi abuela.', options:['Le','La','Lo','Les'], correct:0, explain:'给祖母写信 → 间接宾语 le。'},
    {sentence:'Os ___ recomendamos.', options:['lo','le','les','la'], correct:0, explain:'os lo recomendamos：间接 os + 直接 lo。'},
    {sentence:'___ conozco desde hace años.', options:['Lo','Le','La','Les'], correct:0, explain:'conocer a alguien 的直接宾语用 lo。'},
    {sentence:'No ___ digas nada a ella.', options:['le','la','lo','les'], correct:0, explain:'对她说 → 间接宾语 le。'}
  ]},
  {topic:'关系从句与连接词', questions:[
    {sentence:'El hombre ___ vive allí es mi tío.', options:['que','quien','cual','cuyo'], correct:0, explain:'限定性关系从句用 que。'},
    {sentence:'La casa ___ compramos es grande.', options:['que','quien','cual','donde'], correct:0, explain:'que 作直接宾语。'},
    {sentence:'El libro ___ autor es famoso.', options:['cuyo','que','quien','cual'], correct:0, explain:'cuyo 表所属。'},
    {sentence:'La ciudad ___ nací es pequeña.', options:['donde','que','quien','cual'], correct:0, explain:'donde 表地点。'},
    {sentence:'No es eso ___ quiero.', options:['lo que','que','quien','cual'], correct:0, explain:'lo que 表「……的东西」。'},
    {sentence:'___ llegues, avísame.', options:['Cuando','Si','Aunque','Porque'], correct:0, explain:'cuando 表时间。'},
    {sentence:'No fui ___ estaba enfermo.', options:['porque','para','aunque','cuando'], correct:0, explain:'porque 表原因。'},
    {sentence:'___ llueva, iremos.', options:['Aunque','Porque','Cuando','Si'], correct:0, explain:'aunque 表让步。'},
    {sentence:'Estudia ___ aprobar.', options:['para','por','porque','aunque'], correct:0, explain:'para 表目的。'},
    {sentence:'Es tan alto ___ su padre.', options:['como','que','cual','cuanto'], correct:0, explain:'tan... como 表同等比较。'},
    {sentence:'Es más listo ___ yo.', options:['que','como','cual','de'], correct:0, explain:'más... que 表比较。'},
    {sentence:'___ trabajes, tendrás éxito.', options:['Si','Aunque','Cuando','Porque'], correct:0, explain:'si 表条件。'},
    {sentence:'No sé ___ vendrá.', options:['si','que','cual','quien'], correct:0, explain:'间接疑问用 si 表「是否」。'},
    {sentence:'El chico ___ me presentaron es simpático.', options:['que','quien','cual','cuyo'], correct:0, explain:'关系代词 que 作宾语。'},
    {sentence:'Tanto tú ___ yo estamos de acuerdo.', options:['como','que','y','o'], correct:0, explain:'tanto... como 表「既……又」。'},
    {sentence:'___ estudies, no aprobarás.', options:['A menos que','Aunque','Porque','Cuando'], correct:0, explain:'a menos que 表「除非」。'},
    {sentence:'Lo hice ___ tú me dijiste.', options:['como','que','cual','cuanto'], correct:0, explain:'como 表方式。'},
    {sentence:'Ese es el motivo ___ me fui.', options:['por el que','que','quien','cual'], correct:0, explain:'介词 + 关系代词。'},
    {sentence:'___ más lo pienso, menos lo entiendo.', options:['Cuanto','Tanto','Como','Que'], correct:0, explain:'cuanto más... menos 表比例关系。'},
    {sentence:'Dime ___ quieres.', options:['lo que','que','cual','quien'], correct:0, explain:'lo que 作宾语，表「你想要的东西」。'}
  ]}
];

// 口语跟读语料（真实西语对话）
const SPEAKING_SENTENCES = [
  // A1
  {level:'A1', es:'Hola, ¿cómo estás? Me llamo Ana.', zh:'你好，你好吗？我叫安娜。', slow:'Hola… ¿cómo estás?… Me llamo… Ana.', vocab:['Hola','cómo estás','Me llamo']},
  {level:'A1', es:'Mucho gusto, encantada de conocerte.', zh:'很高兴认识你。', slow:'Mucho gusto… encantada… de conocerte.', vocab:['Mucho gusto','encantada','conocerte']},
  {level:'A1', es:'¿De dónde eres? Yo soy de Madrid.', zh:'你来自哪里？我来自马德里。', slow:'¿De dónde eres?… Yo… soy de Madrid.', vocab:['De dónde eres','soy de']},
  {level:'A1', es:'Me gusta el café con leche, ¿y a ti?', zh:'我喜欢加奶咖啡，你呢？', slow:'Me gusta… el café… con leche… ¿y a ti?', vocab:['Me gusta','café con leche','¿y a ti?']},
  {level:'A1', es:'Son las tres y media, tenemos que irnos.', zh:'三点半了，我们得走了。', slow:'Son las tres… y media… tenemos que irnos.', vocab:['Son las tres','y media','tenemos que']},
  
  // A2
  {level:'A2', es:'Ayer fui al supermercado y compré frutas y verduras.', zh:'昨天我去超市买了水果和蔬菜。', slow:'Ayer… fui al supermercado… y compré… frutas… y verduras.', vocab:['Ayer','fui al supermercado','compré']},
  {level:'A2', es:'Tengo una entrevista de trabajo la semana que viene.', zh:'我下星期有个工作面试。', slow:'Tengo… una entrevista… de trabajo… la semana que viene.', vocab:['entrevista de trabajo','la semana que viene']},
  {level:'A2', es:'Estoy cansada, me voy a dormir temprano esta noche.', zh:'我累了，今晚要早点睡。', slow:'Estoy cansada… me voy a dormir… temprano… esta noche.', vocab:['Estoy cansada','dormir temprano','esta noche']},
  {level:'A2', es:'¿Has visto la nueva película de Almodóvar?', zh:'你看过阿莫多瓦的新电影吗？', slow:'¿Has visto… la nueva película… de Almodóvar?', vocab:['has visto','nueva película','Almodóvar']},
  {level:'A2', es:'Si quieres, podemos ir a tomar algo después.', zh:'如果你愿意，我们之后可以喝点什么。', slow:'Si quieres… podemos ir… a tomar algo… después.', vocab:['Si quieres','podemos ir','tomar algo']},
  
  // B1
  {level:'B1', es:'El año pasado viajé por Andalucía y me encantó Granada.', zh:'去年我游历了安达卢西亚，非常喜欢格拉纳达。', slow:'El año pasado… viajé… por Andalucía… y me encantó… Granada.', vocab:['El año pasado','viajé por','me encantó']},
  {level:'B1', es:'Creo que es importante cuidar el medio ambiente.', zh:'我认为保护环境很重要。', slow:'Creo que… es importante… cuidar… el medio ambiente.', vocab:['Creo que','es importante','medio ambiente']},
  {level:'B1', es:'Llevo tres años estudiando español y todavía me cuesta.', zh:'我学了三年西语，还是觉得难。', slow:'Llevo tres años… estudiando español… y todavía… me cuesta.', vocab:['Llevo tres años','estudiando español','todavía me cuesta']},
  {level:'B1', es:'Mi jefe me ha prometido un ascenso a final de año.', zh:'老板答应年底给我晋升。', slow:'Mi jefe… me ha prometido… un ascenso… a final de año.', vocab:['me ha prometido','ascenso','a final de año']},
  {level:'B1', es:'Si el tiempo está bueno, iremos a la playa este fin de semana.', zh:'如果天气好，我们周末去海滩。', slow:'Si el tiempo… está bueno… iremos… a la playa… este fin de semana.', vocab:['Si el tiempo','iremos a la playa','fin de semana']},
  
  // B2
  {level:'B2', es:'Aunque llovía, decidimos salir a caminar por el parque.', zh:'虽然下雨，我们还是决定去公园散步。', slow:'Aunque llovía… decidimos salir… a caminar… por el parque.', vocab:['Aunque','decidimos','caminar por']},
  {level:'B2', es:'Me gustaría que escribieras un artículo para nuestro blog.', zh:'我希望你为我们的博客写篇文章。', slow:'Me gustaría que… escribieras… un artículo… para nuestro blog.', vocab:['Me gustaría que','escribieras','artículo','blog']},
  {level:'B2', es:'La globalización ha transformado radicalmente nuestras vidas.', zh:'全球化从根本上改变了我们的生活。', slow:'La globalización… ha transformado… radicalmente… nuestras vidas.', vocab:['La globalización','ha transformado','radicalmente']},
  {level:'B2', es:'Si hubiera tenido más tiempo, habría preparado algo mejor.', zh:'如果当时有更多时间，我会准备得更好。', slow:'Si hubiera tenido… más tiempo… habría preparado… algo mejor.', vocab:['Si hubiera tenido','habría preparado']},
  {level:'B2', es:'Los jóvenes de hoy en día se comunican principalmente por redes sociales.', zh:'现在的年轻人主要通过社交网络交流。', slow:'Los jóvenes… de hoy en día… se comunican… principalmente… por redes sociales.', vocab:['de hoy en día','se comunican','principalmente','redes sociales']},

  
  // C1 —— 抽象议题、论证与委婉表达
  {level:'C1', es:'A menos que se tomen medidas drásticas, el problema no dejará de agravarse.', zh:'除非采取果断措施，否则问题只会不断恶化。', slow:'A menos que… se tomen medidas drásticas… el problema… no dejará de agravarse.', vocab:['A menos que','medidas drásticas','agravarse']},
  {level:'C1', es:'Cabe destacar que la propuesta, si bien ambiciosa, adolece de un presupuesto realista.', zh:'值得指出的是，该提案虽有雄心，却缺乏切合实际的预算。', slow:'Cabe destacar… que la propuesta… si bien ambiciosa… adolece de… un presupuesto realista.', vocab:['Cabe destacar','si bien','adolecer de']},
  {level:'C1', es:'Lejos de amilanarse ante las críticas, redobló sus esfuerzos por sacar el proyecto adelante.', zh:'面对批评他非但没有退缩，反而加倍努力推动项目。', slow:'Lejos de amilanarse… ante las críticas… redobló sus esfuerzos… por sacar el proyecto adelante.', vocab:['Lejos de','amilanarse','redoblar esfuerzos']},
  {level:'C1', es:'Me da la impresión de que se está pasando por alto un factor determinante.', zh:'我觉得有个决定性因素被忽略了。', slow:'Me da la impresión… de que se está pasando por alto… un factor determinante.', vocab:['Me da la impresión','pasar por alto','determinante']},
  {level:'C1', es:'Por más que insistiera, no conseguiría convencer a un público tan escéptico.', zh:'无论他怎样坚持，也无法说服如此怀疑的听众。', slow:'Por más que insistiera… no conseguiría convencer… a un público… tan escéptico.', vocab:['Por más que','insistiera','escéptico']},

  // C2 —— 近母语：文学、修辞与高级惯用
  {level:'C2', es:'De haberlo sabido, jamás me habría embarcado en semejante empresa.', zh:'早知如此，我绝不会投身于这样一桩事业。', slow:'De haberlo sabido… jamás… me habría embarcado… en semejante empresa.', vocab:['De haberlo sabido','jamás','embarcarse en']},
  {level:'C2', es:'Su discurso, salpicado de citas eruditas, dejó entrever un dejo de resignación.', zh:'他的演讲点缀着博学的引文，却流露出几分无奈。', slow:'Su discurso… salpicado de citas eruditas… dejó entrever… un dejo de resignación.', vocab:['salpicado de','dejar entrever','dejo']},
  {level:'C2', es:'No es tanto que carezca de argumentos, cuanto que rehúye el debate frontal.', zh:'与其说他缺乏论据，不如说他在回避正面交锋。', slow:'No es tanto… que carezca de argumentos… cuanto que… rehúye el debate frontal.', vocab:['no es tanto… cuanto que','carecer de','rehuir']},
  {level:'C2', es:'A fuerza de tanto aplazarlo, el asunto acabó por convertirse en un lastre insostenible.', zh:'由于一再拖延，这件事最终成了无法承受的负担。', slow:'A fuerza de tanto aplazarlo… el asunto… acabó por convertirse… en un lastre insostenible.', vocab:['A fuerza de','acabar por','lastre']},
  {level:'C2', es:'Quien pretenda zanjar un dilema semejante con una sola frase peca de ingenuidad.', zh:'谁想用一句话就了结这样的两难，那未免太天真了。', slow:'Quien pretenda zanjar… un dilema semejante… con una sola frase… peca de ingenuidad.', vocab:['zanjar','pecar de','ingenuidad']}
];

// 听力训练语料（真实场景对话）
const LISTENING_PASSAGES = [
  {level:'A1', title:'在咖啡馆', speaker:'Camarero / Cliente', duration:'约 30 秒',
    es:`CAMARERO: Buenas tardes, señor.\nCLIENTE: Buenas tardes. Una mesa para dos, por favor.\nCAMARERO: Síganme, por favor. ¿Qué desean tomar?\nCLIENTE: Un café con leche y una agua mineral.\nCAMARERO: ¿Algo más?\nCLIENTE: No, gracias. ¿Me trae el menú?`,
    zh:'服务员：下午好，先生。\n顾客：下午好。请给我一张两人桌。\n服务员：请跟我来。您想喝点什么？\n顾客：一杯奶咖和一瓶矿泉水。\n服务员：还要别的吗？\n顾客：不了谢谢。能给我菜单吗？',
    keyVocab:[
      {es:'Una mesa para dos', zh:'一张两人桌'},
      {es:'Síganme', zh:'请跟我来（usted 命令式）'},
      {es:'Café con leche', zh:'奶咖'},
      {es:'Agua mineral', zh:'矿泉水'},
      {es:'Me trae el menú', zh:'能把菜单拿来吗？'}
    ],
    questions:[
      {q:'¿Cuántas personas hay?', a:'Dos.'},
      {q:'¿Qué toma el cliente?', a:'Un café con leche y un agua mineral.'},
      {q:'¿Pide algo de comer?', a:'No, todavía no.'}
    ]
  },
  {level:'A1', title:'问路', speaker:'Paseante / Turista', duration:'约 25 秒',
    es:`TURISTA: Perdón, ¿me dice cómo llegar a la estación de tren?\nPASEANTE: Sí, claro. Siga recto y gire a la izquierda en el semáforo.\nTURISTA: ¿Está lejos?\nPASEANTE: No, está a cinco minutos caminando.\nTURISTA: Muchas gracias.\nPASEANTE: De nada. ¡Buena suerte!`,
    zh:'游客：对不起，您能告诉我去火车站怎么走吗？\n路人：当然可以。直走，在红绿灯处左转。\n游客：远吗？\n路人：不远，走路五分钟。\n游客：非常感谢。\n路人：不客气。祝你好运！',
    keyVocab:[
      {es:'¿Me dice cómo llegar a...', zh:'能告诉我怎么到...吗？'},
      {es:'Siga recto', zh:'直走（usted）'},
      {es:'Gire a la izquierda', zh:'左转'},
      {es:'Semáforo', zh:'红绿灯'},
      {es:'Está a cinco minutos caminando', zh:'走路五分钟'}
    ],
    questions:[
      {q:'¿Adónde quiere ir el turista?', a:'A la estación de tren.'},
      {q:'¿Está cerca o lejos?', a:'Está cerca, cinco minutos caminando.'}
    ]
  },
  {level:'A2', title:'求职面试', speaker:'Entrevistadora / Candidato', duration:'约 45 秒',
    es:`ENTREVISTADORA: Cuéntame algo sobre ti.\nCANDIDATO: Soy ingeniero de software con cinco años de experiencia en empresas tecnológicas.\nENTREVISTADORA: ¿Por qué te interesa nuestra empresa?\nCANDIDATO: Porque vuestros proyectos son muy innovadores y creo que puedo aportar mucho.\nENTREVISTADORA: Muy bien. ¿Tienes alguna pregunta para nosotros?\nCANDIDATO: Sí. ¿Cuál es el equipo con el que trabajaría?`,
    zh:'面试官：跟我说说你自己吧。\n应聘者：我是软件工程师，在科技公司有五年经验。\n面试官：为什么对我们公司感兴趣？\n应聘者：因为你们的项目很创新，我认为我能贡献很多。\n面试官：好的。你有什么问题想问我们吗？\n应聘者：有的。我会和哪个团队一起工作？',
    keyVocab:[
      {es:'Cuéntame algo sobre ti', zh:'跟我说说你自己'},
      {es:'ingeniero de software', zh:'软件工程师'},
      {es:'innovadores', zh:'创新的'},
      {es:'aportar mucho', zh:'贡献很多'},
      {es:'equipos con el que trabajaría', zh:'我会一起工作的团队'}
    ],
    questions:[
      {q:'¿Qué experiencia tiene el candidato?', a:'Cinco años como ingeniero de software.'},
      {q:'¿Por qué le gusta la empresa?', a:'Por los proyectos innovadores.'},
      {q:'¿Qué pregunta hace al final?', a:'Sobre el equipo con el que trabajaría.'}
    ]
  },
  {level:'A2', title:'朋友聊天：周末计划', speaker:'María / Pablo', duration:'约 40 秒',
    es:`MARÍA: ¿Qué vas a hacer este fin de semana?\nPABLO: No sé todavía. ¿Tienes algún plan?\nMARÍA: El sábado voy a ver una exposición de arte contemporáneo. ¿Quieres venir?\nPABLO: Me gustaría, pero tengo que estudiar para un examen.\nMARÍA: ¿Y el domingo?\nPABLO: El domingo estoy libre. Podríamos ir de tapas.\nMARÍA: ¡Perfecto! Te llamo el sábado por la noche.`,
    zh:'玛利亚：你周末打算做什么？\n巴勃罗：还不知道。你有什么计划吗？\n玛利亚：周六我去看当代艺术展。你想来吗？\n巴勃罗：很想去，但我得备考。\n玛利亚：那周日呢？\n巴勃罗：周日我有空。我们可以去吃塔帕斯。\n玛利亚：太好了！周六晚上我给你打电话。',
    keyVocab:[
      {es:'Exposición de arte contemporáneo', zh:'当代艺术展'},
      {es:'Tengo que estudiar para un examen', zh:'我得备考'},
      {es:'Estoy libre', zh:'我有空'},
      {es:'Ir de tapas', zh:'去吃塔帕斯（西班牙特色小食）'}
    ],
    questions:[
      {q:'¿Qué hace María el sábado?', a:'Va a una exposición.'},
      {q:'¿Por qué no puede Pablo ir el sábado?', a:'Porque tiene que estudiar.'},
      {q:'¿Cuándo van a ir de tapas?', a:'El domingo.'}
    ]
  },
  {level:'B1', title:'机场对话', speaker:'Agente de Check-in / Pasajero', duration:'约 50 秒',
    es:`AGENTE: Buenos días. Su pasaporte y su billete, por favor.\nPASAJERO: Aquí los tiene. Vuelo IB321 a Barcelona.\nAGENTE: Sí. ¿Cuántas maletas lleva?\nPASAJERO: Dos facturadas y una de mano.\nAGENTE: Una maleta más de lo permitido. Tendrá que pagar un suplemento.\nPASAJERO: Oh, vaya. ¿Cuánto cuesta?\nAGENTE: Cincuenta euros. ¿Paga con tarjeta?\nPASAJERO: Sí. Aquí tiene.\nAGENTE: Gracias. Su tarjeta de embarque. Puerta de salida número 15, a las once y media. Disfrute del vuelo.`,
    zh:'值机柜台：早上好。请出示护照和机票。\n旅客：给您。IB321 飞往巴塞罗那的航班。\n值机：好的。您有几件行李？\n旅客：两件托运，一件手提。\n值机：多了一件，需要付超重费。\n旅客：哦，糟糕。多少钱？\n值机：50 欧元。刷卡吗？\n旅客：是的，给你。\n值机：好的。这是您的登机牌。11:30，15 号登机口。祝您旅途愉快。',
    keyVocab:[
      {es:'Pasaporte y billete', zh:'护照和机票'},
      {es:'Dos maletas facturadas', zh:'两件托运'},
      {es:'Equipaje de mano', zh:'手提行李'},
      {es:'Suplemento', zh:'附加费 / 超重费'},
      {es:'Tarjeta de embarque', zh:'登机牌'},
      {es:'Puerta de salida', zh:'登机口'}
    ],
    questions:[
      {q:'¿A dónde vuela el pasajero?', a:'A Barcelona.'},
      {q:'¿Cuántas maletas puede llevar gratis?', a:'Una facturada.'},
      {q:'¿Cuánto paga de suplemento?', a:'Cincuenta euros.'},
      {q:'¿Cuál es la puerta y la hora?', a:'Puerta 15, a las once y media.'}
    ]
  },
  {level:'B2', title:'电台访谈摘要', speaker:'Periodista / Experto en Medio Ambiente', duration:'约 1 分钟',
    es:`PERIODISTA: Bienvenido, doctor Sánchez. Háblenos sobre el cambio climático.\nEXPERTO: Gracias. El cambio climático es una realidad indiscutible. Los datos muestran que la temperatura media global ha subido casi un grado en los últimos cien años.\nPERIODISTA: ¿Cuáles son las consecuencias más visibles?\nEXPERTO: El deshielo de los glaciares, el aumento del nivel del mar y eventos climáticos extremos como huracanes más intensos.\nPERIODISTA: ¿Qué podemos hacer los ciudadanos?\nEXPERTO: Reducir nuestro consumo de energía, usar transporte público y reciclar. Pero sobre todo, presionar a los gobiernos para que adopten políticas más ambiciosas.`,
    zh:'记者：欢迎桑切斯博士。请给我们讲讲气候变化。\n专家：谢谢。气候变化是无可争议的事实。数据显示过去一百年全球平均气温上升了近一度。\n记者：最明显的后果是什么？\n专家：冰川融化、海平面上升、以及更强烈的飓风等极端气候事件。\n记者：我们普通市民能做什么？\n专家：减少能源消耗、使用公共交通、回收。但最重要的是向政府施压，让他们采取更有雄心的政策。',
    keyVocab:[
      {es:'Indiscutible', zh:'无可争议的'},
      {es:'Temperatura media global', zh:'全球平均气温'},
      {es:'Deshielo de los glaciares', zh:'冰川融化'},
      {es:'Nivel del mar', zh:'海平面'},
      {es:'Eventos climáticos extremos', zh:'极端气候事件'},
      {es:'Políticas más ambiciosas', zh:'更有雄心的政策'}
    ],
    questions:[
      {q:'¿Cuánto ha subido la temperatura?', a:'Casi un grado en cien años.'},
      {q:'Mencione dos consecuencias.', a:'El deshielo y el aumento del nivel del mar.'},
      {q:'¿Qué pide a los gobiernos?', a:'Que adopten políticas más ambiciosas.'}
    ]
  },
  {level:'C1', title:'圆桌辩论：人工智能与就业', speaker:'Moderadora / Economista / Ingeniera', duration:'约 2 分钟',
    es:`MODERADORA: Buenas tardes. El tema de hoy es espinoso: ¿la inteligencia artificial destruye empleo o lo transforma?\nECONOMISTA: Permítame matizar la premisa. Historicamente, la tecnologia ha reconfigurado el mercado laboral más que eliminarlo, aunque las transiciones nunca han sido indoloras.\nINGENIERA: Coincido en parte, pero conviene no caer en el optimismo complaciente. La diferencia radica en la velocidad: los puestos que desaparecen exigen una reconversión que el sistema formativo no alcanza a absorber.\nMODERADORA: ¿Qué papel deberían desempeñar las administraciones públicas?\nECONOMISTA: A mi juicio, su tarea consiste en garantizar redes de protección y formación continua, no en frenar la innovación.\nINGENIERA: Yo añadiría que, sin una fiscalidad redistributiva, los beneficios se concentrarán en muy pocas manos.\nMODERADORA: Un apunte para cerrar: ¿son ustedes optimistas?\nECONOMISTA: Moderadamente. Depende de las decisiones que tomemos en la próxima década.\nINGENIERA: Prefiero decir que soy prudente, no pesimista.`,
    zh:'主持人：下午好。今天的话题相当棘手：人工智能是在摧毁就业，还是在改造就业？\n经济学家：请允许我对这个前提做个澄清。从历史上看，技术更多是在重构劳动力市场，而不是消灭它，尽管转型从来都不是无痛的。\n工程师：我部分同意，但不宜陷入盲目的乐观。差别在于速度：消失的岗位要求人们转型，而培训体系来不及吸收。\n主持人：公共行政部门应当扮演什么角色？\n经济学家：依我看，它们的任务是保障保护网和持续培训，而不是遏制创新。\n工程师：我还要补充，如果没有再分配的税收制度，收益会集中在极少数人手里。\n主持人：最后问一句：你们乐观吗？\n经济学家：适度乐观。取决于我们未来十年做出什么选择。\n工程师：我更愿意说我是谨慎，而不是悲观。',
    keyVocab:[
      {es:'El tema es espinoso', zh:'话题很棘手'},
      {es:'Permítame matizar la premisa', zh:'请允许我对前提作澄清'},
      {es:'optimismo complaciente', zh:'一厢情愿的乐观'},
      {es:'La diferencia radica en...', zh:'差别在于……'},
      {es:'reconversión profesional', zh:'职业转型'},
      {es:'A mi juicio', zh:'依我看'},
      {es:'fiscalidad redistributiva', zh:'再分配税收制度'}
    ],
    questions:[
      {q:'¿Cuál es el tema del debate?', a:'El impacto de la inteligencia artificial en el empleo.'},
      {q:'¿En qué coincide parcialmente la ingeniera?', a:'En que la tecnología reconfigura el mercado laboral.'},
      {q:'¿Dónde sitúa ella el problema principal?', a:'En la velocidad del cambio y la falta de recualificación.'},
      {q:'¿Qué pide la ingeniera además de formación?', a:'Una fiscalidad redistributiva.'}
    ]
  },
  {level:'C2', title:'文学访谈：写作与记忆', speaker:'Entrevistador / Novelista', duration:'约 2 分 30 秒',
    es:`ENTREVISTADOR: Su última novela se adentra en terrenos que rozan lo autobiográfico. ¿Le costó despojarse de pudor?\nNOVELISTA: En absoluto. Siempre he sostenido que quien escribe no debe nada a su intimidad, pero tampoco puede hurtarle del todo lo que ha vivido. La memoria, en fin, es un material esquivo: cuanto más la forzamos, más se nos escabulle.\nENTREVISTADOR: Hay quien sostiene que toda escritura es, en el fondo, una forma encubierta de autobiografía.\nNOVELISTA: Es una afirmación seductora y, como casi todas las afirmaciones seductoras, media verdad. Uno escribe con lo que es, desde luego, pero también con lo que querría ser y con lo que teme llegar a ser.\nENTREVISTADOR: ¿Y el estilo? Se le ha reprochado cierta inclinación a la frase larga.\nNOVELISTA: Los reproches me tienen sin cuidado. Detesto la prosa que se allana para no incomodar a nadie; prefiero una sintaxis que obligue al lector a detenerse y respirar. Aunque, se lo concedo, ese camino tiene sus riesgos.\nENTREVISTADOR: ¿Está trabajando en algo nuevo?\nNOVELISTA: En algo que, de momento, se me resiste. Y ojalá siga resistiéndose un tiempo: cuando un libro deja de oponer resistencia, es señal de que ha dejado de interesarme.`,
    zh:'采访者：您最新的小说触及了近乎自传的领域。放下矜持困难吗？\n小说家：一点也不。我一直认为，写作的人不欠自己的私生活什么，但也不能完全回避自己经历过的。说到底，记忆是一种难以捉摸的材料：我们越是用力去抓，它越是溜走。\n采访者：有人认为，一切写作本质上都是变相的自传。\n小说家：这是个诱人的说法，而和几乎所有诱人的说法一样，只有一半是真的。人确实是带着自己本来的样子去写，但也带着自己想成为的样子、以及害怕成为的样子去写。\n采访者：那风格呢？有人批评您偏好长句。\n小说家：批评我并不在意。我讨厌那种为了不得罪任何人而变得平淡的散文；我宁愿选择一种迫使读者停下来喘口气的句法。不过，我承认，这条路有它的风险。\n采访者：在写新东西吗？\n小说家：在写某个目前还在抗拒我的东西。但愿它再多抗拒一阵子：当一本书不再抗拒你，就说明它已经不再让我感兴趣了。',
    keyVocab:[
      {es:'rozar lo autobiográfico', zh:'近乎自传'},
      {es:'despojarse de pudor', zh:'放下矜持'},
      {es:'hurtar', zh:'回避、偷走'},
      {es:'un material esquivo', zh:'难以捉摸的材料'},
      {es:'escabullirse', zh:'溜走、逃脱'},
      {es:'media verdad', zh:'半真半假'},
      {es:'tener sin cuidado', zh:'毫不在意'},
      {es:'sintaxis', zh:'句法'}
    ],
    questions:[
      {q:'¿Qué opina la novelista sobre la memoria como material?', a:'Que es esquiva: cuanto más se la fuerza, más se escabulle.'},
      {q:'¿Cómo califica la idea de que toda escritura es autobiografía?', a:'Una afirmación seductora pero solo media verdad.'},
      {q:'¿Por qué defiende la frase larga?', a:'Porque obliga al lector a detenerse y respirar.'},
      {q:'¿Qué significa para ella que un libro oponga resistencia?', a:'Que sigue interesándole.'}
    ]
  },
  {level:'A1', title:'在超市', speaker:'Dependienta / Cliente', duration:'约 35 秒',
    es:`DEPENDIENTA: Buenos días, ¿le atiendo?\nCLIENTE: Sí, busco leche y pan, por favor.\nDEPENDIENTA: La leche está al fondo, a la derecha. El pan está aquí al lado.\nCLIENTE: Gracias. ¿Cuánto cuesta el pan?\nDEPENDIENTA: Un euro con veinte.\nCLIENTE: Muy bien. ¿Puedo pagar con tarjeta?\nDEPENDIENTA: Claro que sí.`,
    zh:'店员：早上好，需要帮忙吗？\n顾客：是的，我想找牛奶和面包。\n店员：牛奶在里面，右手边。面包就在旁边。\n顾客：谢谢。面包多少钱？\n店员：一欧二十。\n顾客：好的。可以刷卡吗？\n店员：当然可以。',
    keyVocab:[
      {es:'¿Le atiendo?', zh:'需要为您服务吗？'},
      {es:'al fondo', zh:'在里面、尽头'},
      {es:'al lado', zh:'在旁边'},
      {es:'¿Cuánto cuesta?', zh:'多少钱？'},
      {es:'pagar con tarjeta', zh:'刷卡支付'}
    ],
    questions:[
      {q:'¿Qué busca el cliente?', a:'Leche y pan.'},
      {q:'¿Dónde está la leche?', a:'Al fondo, a la derecha.'},
      {q:'¿Cómo quiere pagar?', a:'Con tarjeta.'}
    ]
  },
  {level:'A1', title:'自我介绍', speaker:'Ana / Luis', duration:'约 30 秒',
    es:`ANA: Hola, me llamo Ana. ¿Y tú?\nLUIS: Yo soy Luis. Mucho gusto.\nANA: Encantada. ¿De dónde eres?\nLUIS: Soy de México, pero vivo en Barcelona.\nANA: ¡Qué bien! Yo soy española, de Valencia.\nLUIS: ¿Y a qué te dedicas?\nANA: Soy profesora de inglés.`,
    zh:'安娜：你好，我叫安娜。你呢？\n路易斯：我是路易斯。很高兴认识你。\n安娜：幸会。你来自哪里？\n路易斯：我来自墨西哥，但住在巴塞罗那。\n安娜：真好！我是西班牙人，来自瓦伦西亚。\n路易斯：你是做什么工作的？\n安娜：我是英语老师。',
    keyVocab:[
      {es:'Mucho gusto', zh:'很高兴认识你'},
      {es:'¿De dónde eres?', zh:'你来自哪里？'},
      {es:'vivo en', zh:'我住在'},
      {es:'¿A qué te dedicas?', zh:'你做什么工作？'},
      {es:'profesora', zh:'女教师'}
    ],
    questions:[
      {q:'¿De dónde es Luis?', a:'De México.'},
      {q:'¿Dónde vive ahora?', a:'En Barcelona.'},
      {q:'¿Cuál es la profesión de Ana?', a:'Es profesora de inglés.'}
    ]
  },
  {level:'A2', title:'看医生', speaker:'Médica / Paciente', duration:'约 45 秒',
    es:`MÉDICA: Buenos días, ¿qué le pasa?\nPACIENTE: Me duele la garganta desde hace tres días y tengo fiebre.\nMÉDICA: ¿Ha tomado algo?\nPACIENTE: Solo paracetamol, pero no me ha hecho mucho efecto.\nMÉDICA: Abra la boca, por favor. Sí, tiene la garganta muy inflamada.\nPACIENTE: ¿Es grave?\nMÉDICA: No se preocupe. Le receto un antibiótico y mucho reposo.`,
    zh:'医生：早上好，您哪里不舒服？\n患者：我喉咙痛了三天，还发烧。\n医生：吃过什么药吗？\n患者：只吃了扑热息痛，但效果不大。\n医生：请张开嘴。是的，喉咙发炎很厉害。\n患者：严重吗？\n医生：别担心。我给您开抗生素，多休息。',
    keyVocab:[
      {es:'¿Qué le pasa?', zh:'您怎么了？'},
      {es:'Me duele la garganta', zh:'我喉咙痛'},
      {es:'desde hace tres días', zh:'已经三天了'},
      {es:'inflamada', zh:'发炎的'},
      {es:'Le receto', zh:'我给您开（药）'},
      {es:'reposo', zh:'休息'}
    ],
    questions:[
      {q:'¿Qué síntomas tiene el paciente?', a:'Dolor de garganta y fiebre.'},
      {q:'¿Qué medicina ha tomado?', a:'Paracetamol.'},
      {q:'¿Qué le receta la médica?', a:'Un antibiótico y reposo.'}
    ]
  },
  {level:'A2', title:'租房看房', speaker:'Agente / Inquilina', duration:'约 50 秒',
    es:`AGENTE: Este es el piso. Tiene dos habitaciones y un baño.\nINQUILINA: ¿Cuánto es el alquiler mensual?\nAGENTE: Ochocientos euros, gastos incluidos.\nINQUILINA: ¿Está amueblado?\nAGENTE: Sí, completamente. La cocina es nueva.\nINQUILINA: ¿Hay ascensor?\nAGENTE: No, es un tercer piso sin ascensor.\nINQUILINA: Entiendo. ¿Puedo pensarlo hasta mañana?`,
    zh:'中介：这就是那套房子。有两个卧室和一个卫生间。\n租客：月租多少？\n中介：八百欧，含杂费。\n租客：带家具吗？\n中介：是的，全配。厨房是新的。\n租客：有电梯吗？\n中介：没有，是三楼没电梯。\n租客：明白了。我可以考虑到明天吗？',
    keyVocab:[
      {es:'el alquiler mensual', zh:'月租'},
      {es:'gastos incluidos', zh:'含杂费'},
      {es:'amueblado', zh:'带家具的'},
      {es:'ascensor', zh:'电梯'},
      {es:'tercer piso', zh:'三楼'}
    ],
    questions:[
      {q:'¿Cuántas habitaciones tiene el piso?', a:'Dos.'},
      {q:'¿Cuánto cuesta al mes?', a:'Ochocientos euros, gastos incluidos.'},
      {q:'¿Tiene ascensor?', a:'No, es un tercero sin ascensor.'}
    ]
  },
  {level:'B1', title:'工作面试：讨论经验', speaker:'Reclutadora / Candidato', duration:'约 1 分钟',
    es:`RECLUTADORA: Veo que trabajó dos años en una startup. ¿Por qué se marchó?\nCANDIDATO: Buscaba un proyecto con más recorrido. La empresa era muy pequeña y no había margen para crecer.\nRECLUTADORA: ¿Cuál diría que es su mayor fortaleza?\nCANDIDATO: La capacidad de aprender rápido. Cuando entré, no sabía nada del sector y en tres meses llevaba yo solo un proyecto completo.\nRECLUTADORA: ¿Y su mayor debilidad?\nCANDIDATO: Me cuesta delegar. Tiendo a querer controlarlo todo, y soy consciente de que eso no escala.\nRECLUTADORA: Se lo agradezco, es una respuesta sincera.`,
    zh:'招聘主管：我看到您在一家初创公司工作了两年。为什么离职？\n应聘者：我想找一个更有发展空间的项​​目。那家公司很小，没有成长余地。\n招聘主管：您认为自己最大的优势是什么？\n应聘者：快速学习的能力。刚入职时我对这个行业一无所知，三个月后我已经独自负责一个完整项目了。\n招聘主管：那最大的缺点呢？\n应聘者：我不太会授权。总想什么都自己掌控，我也明白这样无法规模化。\n招聘主管：谢谢您，这是个很坦诚的回答。',
    keyVocab:[
      {es:'con más recorrido', zh:'更有发展空间'},
      {es:'no había margen para crecer', zh:'没有成长余地'},
      {es:'mayor fortaleza', zh:'最大优势'},
      {es:'delegar', zh:'授权、分派任务'},
      {es:'no escala', zh:'无法规模化'},
      {es:'sincera', zh:'坦诚的'}
    ],
    questions:[
      {q:'¿Por qué dejó el candidato su trabajo anterior?', a:'Buscaba un proyecto con más recorrido.'},
      {q:'¿Cuál es su mayor fortaleza?', a:'La capacidad de aprender rápido.'},
      {q:'¿Qué debilidad reconoce?', a:'Le cuesta delegar.'}
    ]
  },
  {level:'B1', title:'讨论环保习惯', speaker:'Elena / Marcos', duration:'约 55 秒',
    es:`ELENA: Últimamente intento reducir el plástico. Llevo bolsas de tela al mercado.\nMARCOS: Yo empecé hace poco a separar la basura, pero reconozco que me cuesta.\nELENA: Lo difícil es la constancia, ¿verdad?\nMARCOS: Totalmente. Al principio te parece un rollo, pero luego se convierte en rutina.\nELENA: En mi oficina hemos puesto puntos de reciclaje y funciona bastante bien.\nMARCOS: Es buena idea. A veces basta con que alguien dé el primer paso.\nELENA: Exacto. Si cada uno pone su granito de arena, se nota.`,
    zh:'埃莱娜：最近我在尽量减少塑料。去市场都带布袋。\n马科斯：我刚开始垃圾分类，但说实话挺难的。\n埃莱娜：难的是坚持，对吧？\n马科斯：完全同意。一开始觉得是麻烦事，后来就成了习惯。\n埃莱娜：我们办公室放了回收点，效果还不错。\n马科斯：好主意。有时候只要有人迈出第一步就够了。\n埃莱娜：没错。每个人都出一份力，就能看到效果。',
    keyVocab:[
      {es:'reducir el plástico', zh:'减少塑料'},
      {es:'bolsas de tela', zh:'布袋'},
      {es:'separar la basura', zh:'垃圾分类'},
      {es:'la constancia', zh:'坚持'},
      {es:'puntos de reciclaje', zh:'回收点'},
      {es:'poner su granito de arena', zh:'出一份力'}
    ],
    questions:[
      {q:'¿Qué hace Elena para reducir el plástico?', a:'Lleva bolsas de tela al mercado.'},
      {q:'¿Qué le cuesta a Marcos?', a:'Separar la basura con constancia.'},
      {q:'¿Qué han puesto en la oficina de Elena?', a:'Puntos de reciclaje.'}
    ]
  },
  {level:'B2', title:'学术讲座：睡眠与记忆', speaker:'Conferenciante', duration:'约 1 分 30 秒',
    es:`CONFERENCIANTE: Buenos días. Hoy abordaré la relación entre el sueño y la consolidación de la memoria.\nDurante décadas se creyó que dormir era un estado pasivo, una simple pausa. Hoy sabemos que ocurre todo lo contrario.\nMientras dormimos, el cerebro reorganiza lo aprendido durante el día y lo transfiere a la memoria a largo plazo.\nLos estudios demuestran que quienes duermen menos de seis horas rinden hasta un treinta por ciento peor en tareas de retención.\nConviene aclarar que no basta con dormir mucho: la calidad importa tanto como la cantidad.\nEn conclusión, si pretenden aprender algo nuevo, dormir bien no es una pérdida de tiempo, sino parte del proceso.`,
    zh:'演讲者：早上好。今天我要讲的是睡眠与记忆巩固之间的关系。\n几十年来人们认为睡眠是一种被动状态，只是一段简单的停顿。如今我们知道恰恰相反。\n我们睡觉时，大脑会重新组织白天学到的东西，并将其转入长期记忆。\n研究表明，睡眠少于六小时的人在记忆保持任务上表现差多达百分之三十。\n需要说明的是，光睡得久还不够：睡眠质量和时长同样重要。\n总之，如果你想学会新东西，睡好觉不是浪费时间，而是学习过程的一部分。',
    keyVocab:[
      {es:'consolidación de la memoria', zh:'记忆巩固'},
      {es:'estado pasivo', zh:'被动状态'},
      {es:'memoria a largo plazo', zh:'长期记忆'},
      {es:'retención', zh:'保持、记忆'},
      {es:'no basta con...', zh:'仅仅……还不够'},
      {es:'conviene aclarar', zh:'有必要说明'}
    ],
    questions:[
      {q:'¿Qué creencia antigua se menciona?', a:'Que dormir era un estado pasivo.'},
      {q:'¿Qué hace el cerebro mientras dormimos?', a:'Reorganiza lo aprendido y lo transfiere a la memoria a largo plazo.'},
      {q:'¿Cuánto rinden peor quienes duermen menos de seis horas?', a:'Hasta un treinta por ciento.'},
      {q:'¿Qué importa además de la cantidad de sueño?', a:'La calidad.'}
    ]
  },
  {level:'B2', title:'播客片段：城市生活成本', speaker:'Presentadora / Invitado', duration:'约 1 分 20 秒',
    es:`PRESENTADORA: Hoy hablamos del encarecimiento de la vivienda en las grandes ciudades. ¿Es un fenómeno inevitable?\nINVITADO: Inevitable no diría, pero desde luego es estructural. Llevamos décadas construyendo menos de lo que necesitamos.\nPRESENTADORA: Muchos culpan a los alquileres turísticos.\nINVITADO: Es un factor, aunque no el único. El problema de fondo es que la oferta no ha seguido el ritmo de la demanda.\nPRESENTADORA: ¿Qué medidas funcionarían?\nINVITADO: No existe una solución mágica. Hace falta construir más vivienda pública y regular ciertos usos, pero sin caer en medidas que ahuyenten la inversión.\nPRESENTADORA: O sea, que no hay atajos.\nINVITADO: Me temo que no.`,
    zh:'主持人：今天我们来聊大城市住房越来越贵的问题。这是不可避免的现象吗？\n嘉宾：我不会说不可避免，但它确实是结构性的。几十年来我们建的房子一直少于所需。\n主持人：很多人把责任归到旅游短租上。\n嘉宾：这是一个因素，但不是唯一的。根本问题在于供给没有跟上需求的节奏。\n主持人：什么措施会有效？\n嘉宾：没有万能药方。需要建更多公共住房、规范某些用途，但又不能采取把投资吓跑的措施。\n主持人：也就是说，没有捷径。\n嘉宾：恐怕是的。',
    keyVocab:[
      {es:'encarecimiento de la vivienda', zh:'住房涨价'},
      {es:'estructural', zh:'结构性的'},
      {es:'alquileres turísticos', zh:'旅游短租'},
      {es:'oferta y demanda', zh:'供给与需求'},
      {es:'vivienda pública', zh:'公共住房'},
      {es:'ahuyentar la inversión', zh:'吓跑投资'}
    ],
    questions:[
      {q:'¿Cómo califica el invitado el problema?', a:'Estructural.'},
      {q:'¿Cuál es el problema de fondo según él?', a:'Que la oferta no ha seguido el ritmo de la demanda.'},
      {q:'¿Qué dos medidas propone?', a:'Construir más vivienda pública y regular ciertos usos.'}
    ]
  },
  {level:'C1', title:'学术研讨：语言与思维', speaker:'Ponente / Comentarista', duration:'约 2 分钟',
    es:`PONENTE: La hipótesis de Sapir-Whorf sostiene que la lengua que hablamos condiciona nuestra manera de percibir la realidad.\nCOMENTARISTA: Permítame disentir en parte. Si se interpreta en su versión fuerte, resulta insostenible; en su versión débil, en cambio, es bastante plausible.\nPONENTE: De acuerdo. Nadie defiende hoy que el idioma determine el pensamiento de forma absoluta.\nCOMENTARISTA: Lo que sí parece demostrado es que influye en la facilidad con que categorizamos ciertos matices. Los hablantes de lenguas con más términos para los colores los distinguen con mayor rapidez.\nPONENTE: Ahí radica precisamente el interés del asunto: no en lo que nos impide pensar, sino en lo que nos facilita expresar.\nCOMENTARISTA: Y conviene no exagerar la conclusión. Que un idioma facilite una distinción no implica que quienes no la tienen sean incapaces de percibirla.\nPONENTE: Matiz imprescindible, sin duda.`,
    zh:'发言者：萨皮尔-沃尔夫假说认为，我们所说的语言会制约我们感知现实的方式。\n评论人：请允许我部分不同意。如果按其强式解读，它站不住脚；但按其弱式解读，则相当可信。\n发言者：我同意。今天没有人主张语言绝对决定思维。\n评论人：似乎已获证实的是，它确实会影响我们为某些细微差别分类的难易程度。词汇中颜色词更多的语言使用者，辨别颜色更快。\n发言者：问题恰恰就在这里：不在于语言妨碍我们思考什么，而在于它让我们更容易表达什么。\n评论人：结论不宜夸大。一种语言便于做出某种区分，并不意味着没有这种区分的人就无法感知它。\n发言者：这个限定必不可少。',
    keyVocab:[
      {es:'la hipótesis de Sapir-Whorf', zh:'萨皮尔-沃尔夫假说'},
      {es:'condicionar', zh:'制约、影响'},
      {es:'disentir', zh:'持不同意见'},
      {es:'insostenible', zh:'站不住脚的'},
      {es:'plausible', zh:'可信的'},
      {es:'categorizar matices', zh:'为细微差别分类'},
      {es:'ahí radica', zh:'恰恰就在这里'},
      {es:'matiz imprescindible', zh:'必不可少的限定'}
    ],
    questions:[
      {q:'¿Qué sostiene la hipótesis de Sapir-Whorf?', a:'Que la lengua condiciona nuestra percepción de la realidad.'},
      {q:'¿Qué opina el comentarista de la versión fuerte?', a:'Que es insostenible.'},
      {q:'¿Qué parece demostrado según él?', a:'Que la lengua influye en la facilidad para categorizar matices.'},
      {q:'¿Qué matiz añade al final?', a:'Que facilitar una distinción no implica que otros sean incapaces de percibirla.'}
    ]
  },
  {level:'C2', title:'文化评论：论翻译的限度', speaker:'Crítico / Traductora', duration:'约 2 分 30 秒',
    es:`CRÍTICO: Se ha dicho hasta la saciedad que toda traducción es una traición. ¿Comparte semejante sentencia?\nTRADUCTORA: La comparto en su intención, no en su fatalismo. Traicionar no es lo mismo que fracasar: se traiciona el texto para serle fiel al efecto que busca producir.\nCRÍTICO: Es una reformulación elegante. ¿Y qué sucede con la poesía, donde la forma es inseparable del sentido?\nTRADUCTORA: Ahí el traductor se enfrenta a un dilema irresoluble y debe optar. Yo suelo anteponer la música del verso al sentido literal, a sabiendas de que alguien me lo reprochará.\nCRÍTICO: Hay quien sostiene lo contrario: que la fidelidad semántica está por encima de todo.\nTRADUCTORA: Es una postura respetable, aunque peca de cierta ingenuidad. Supone que existe un sentido único y estable, cuando en realidad el significado se construye también con el ritmo y la sonoridad.\nCRÍTICO: ¿Cabría entonces hablar de traducciones definitivas?\nTRADUCTORA: No hay tales. Cada generación vuelve a traducir los clásicos porque cada época oye en ellos algo distinto. Eso, lejos de ser un defecto, es la prueba de que siguen vivos.`,
    zh:'评论家：人们反复说，一切翻译都是背叛。您认同这种说法吗？\n译者：我认同它的用意，但不认同它的宿命论。背叛不等于失败：你之所以背叛文本，是为了忠实于它想要产生的效果。\n评论家：这是个优雅的重述。那么在诗歌中呢？形式与意义不可分割。\n译者：在那里译者面对一个无解的两难，必须做出取舍。我通常把诗句的音乐性置于字面意义之上，明知有人会因此责难我。\n评论家：也有人主张相反：语义的忠实高于一切。\n译者：这种立场值得尊重，但未免有点天真。它假定存在一个唯一而稳定的意义，而实际上意义也由节奏和音响构成。\n评论家：那还能谈得上定本译作吗？\n译者：没有这种东西。每一代人都重新翻译经典，因为每个时代从中听到的东西不同。而这远非缺陷，恰恰证明它们仍然活着。',
    keyVocab:[
      {es:'hasta la saciedad', zh:'一再地、反复地'},
      {es:'semejante sentencia', zh:'这样的论断'},
      {es:'fatalismo', zh:'宿命论'},
      {es:'dilema irresoluble', zh:'无解的两难'},
      {es:'anteponer A a B', zh:'把 A 置于 B 之上'},
      {es:'a sabiendas de que', zh:'明知'},
      {es:'pecar de ingenuidad', zh:'失之于天真'},
      {es:'sonoridad', zh:'音响、音韵'}
    ],
    questions:[
      {q:'¿En qué sentido comparte la traductora la sentencia?', a:'En su intención, pero no en su fatalismo.'},
      {q:'¿Qué antepone ella en la poesía?', a:'La música del verso al sentido literal.'},
      {q:'¿Por qué considera ingenua la postura contraria?', a:'Porque supone un sentido único y estable.'},
      {q:'¿Qué opina de las traducciones definitivas?', a:'Que no existen: cada época vuelve a traducir los clásicos.'}
    ]
  },
  {level:'B2', title:'播客：远程办公的得失', speaker:'Presentador / Consultora', duration:'约 1 分 30 秒',
    es:`PRESENTADOR: El teletrabajo se ha consolidado. ¿Es una mejora indiscutible?
CONSULTORA: indiscutible no lo es, aunque sí irreversible. La clave está en distinguir entre flexibilidad y desarraigo.
PRESENTADOR: ¿A qué se refiere?
CONSULTORA: A que trabajar desde casa elimina desplazamientos, pero también erosiona los vínculos informales que sostienen la cultura de una empresa.
PRESENTADOR: Muchos empleados dicen que rinden más.
CONSULTORA: Y es cierto en tareas que requieren concentración. El problema surge en lo que depende de la creatividad colectiva.
PRESENTADOR: ¿Cuál sería el equilibrio?
CONSULTORA: Un modelo híbrido con reglas claras: días presenciales obligatorios para el trabajo colaborativo y libertad para el individual.`,
    zh:`主持人：远程办公已经站稳脚跟。它毫无疑问是进步吗？
顾问：并非毫无疑问，但确实不可逆转。关键在于区分「灵活」和「疏离」。
主持人：您指的是什么？
顾问：指的是在家工作省去了通勤，但也侵蚀了维系企业文化的那些非正式联系。
主持人：很多员工说自己效率更高了。
顾问：在需要专注的任务上确实如此。问题出在依赖集体创造力的工作上。
主持人：那平衡点在哪？
顾问：一种规则清晰的混合模式：协作性工作必须到岗，个人性工作则可以自由安排。`,
    keyVocab:[
      {es:'indiscutible', zh:'无可争议的'},
      {es:'irreversible', zh:'不可逆转的'},
      {es:'desarraigo', zh:'疏离、失去归属'},
      {es:'erosionar', zh:'侵蚀'},
      {es:'vínculos informales', zh:'非正式联系'},
      {es:'modelo híbrido', zh:'混合模式'}
    ],
    questions:[
      {q:'¿Cómo califica la consultora el teletrabajo?', a:'No indiscutible, pero irreversible.'},
      {q:'¿Qué se pierde al trabajar desde casa?', a:'Los vínculos informales.'},
      {q:'¿Dónde surge el problema?', a:'En las tareas que dependen de la creatividad colectiva.'},
      {q:'¿Qué modelo propone?', a:'Un modelo híbrido con reglas claras.'}
    ]
  },
  {level:'B2', title:'大学讲座：认知偏差', speaker:'Profesora', duration:'约 1 分 30 秒',
    es:`PROFESORA: Hoy trataremos los sesgos cognitivos, esos atajos mentales que nos permiten decidir rápido pero nos inducen a error.
El sesgo de confirmación consiste en buscar únicamente la información que respalda lo que ya creemos.
El de anclaje nos hace depender excesivamente del primer dato que recibimos.
Y el de disponibilidad nos lleva a sobreestimar lo que recordamos con más facilidad, no lo que es más probable.
Ninguno de nosotros está libre de ellos, por mucha formación que tenga.
La buena noticia es que pueden mitigarse: basta con preguntarse qué evidencia nos haría cambiar de opinión.`,
    zh:`教授：今天我们讲认知偏差——那些让我们快速决策、却也导致错误的心理捷径。
确认偏差是指只寻找支持自己既有看法的信息。
锚定偏差让我们过度依赖最先接收到的那个数据。
可得性偏差则让我们高估更容易回想起来的事，而不是更可能发生的事。
无论受过多少训练，没有人能完全避开这些偏差。
好消息是它们可以被缓解：只要问自己「什么证据能让我改变看法」。`,
    keyVocab:[
      {es:'sesgo cognitivo', zh:'认知偏差'},
      {es:'atajo mental', zh:'心理捷径'},
      {es:'sesgo de confirmación', zh:'确认偏差'},
      {es:'anclaje', zh:'锚定效应'},
      {es:'disponibilidad', zh:'可得性偏差'},
      {es:'mitigar', zh:'缓解'}
    ],
    questions:[
      {q:'¿Qué es un sesgo cognitivo?', a:'Un atajo mental que permite decidir rápido pero induce a error.'},
      {q:'¿En qué consiste el sesgo de confirmación?', a:'En buscar solo la información que respalda lo que ya creemos.'},
      {q:'¿Qué nos hace el sesgo de disponibilidad?', a:'Sobreestimar lo que recordamos con más facilidad.'},
      {q:'¿Cómo pueden mitigarse?', a:'Preguntándose qué evidencia haría cambiar de opinión.'}
    ]
  },
  {level:'C1', title:'专家访谈：算法与公共决策', speaker:'Entrevistador / Catedrática', duration:'约 2 分钟',
    es:`ENTREVISTADOR: Cada vez más administraciones delegan decisiones en algoritmos. ¿Es prudente?
CATEDRÁTICA: Depende de qué decisiones. Automatizar la asignación de recursos puede ser eficiente; automatizar la valoración de personas es harina de otro costal.
ENTREVISTADOR: ¿Dónde está el riesgo?
CATEDRÁTICA: En que un algoritmo aprende de datos históricos, y esos datos arrastran las injusticias del pasado. Si no se corrige, la máquina las reproduce a escala.
ENTREVISTADOR: Se defiende que son más objetivos que un funcionario.
CATEDRÁTICA: Es una objetividad engañosa. Cambiar el criterio de una persona por el de un modelo no elimina el juicio: lo desplaza a quien lo diseñó.
ENTREVISTADOR: ¿Qué salvaguardas exige usted?
CATEDRÁTICA: Tres: auditar los resultados, poder impugnar la decisión ante un humano y publicar cómo funciona el sistema. Sin lo tercero, lo primero es palabrería.`,
    zh:`采访者：越来越多行政机构把决策交给算法。这明智吗？
教授：取决于什么决策。自动化资源分配可能很高效；自动化对人的评价则是另一回事。
采访者：风险在哪里？
教授：风险在于算法从历史数据中学习，而那些数据带着过去的不公正。如果不加纠正，机器会把它们成规模地复制出来。
采访者：有人主张算法比公务员更客观。
教授：这是一种具有欺骗性的客观性。用模型的标准取代个人的判断，并没有消除判断，只是把它转移给了设计者。
采访者：您要求哪些保障措施？
教授：三条：审计结果、能够向人类提出异议、公开系统如何运作。没有第三条，第一条就是空话。`,
    keyVocab:[
      {es:'delegar en', zh:'把……委托给'},
      {es:'harina de otro costal', zh:'完全是另一回事'},
      {es:'arrastrar injusticias', zh:'带着不公正'},
      {es:'objetividad engañosa', zh:'具有欺骗性的客观性'},
      {es:'desplazar el juicio', zh:'转移判断'},
      {es:'salvaguarda', zh:'保障措施'},
      {es:'impugnar', zh:'提出异议'},
      {es:'palabrería', zh:'空话'}
    ],
    questions:[
      {q:'¿Qué distinción hace la catedrática?', a:'Entre automatizar recursos y automatizar la valoración de personas.'},
      {q:'¿De dónde viene el riesgo principal?', a:'De que los datos históricos arrastran injusticias del pasado.'},
      {q:'¿Por qué rechaza el argumento de la objetividad?', a:'Porque no elimina el juicio, solo lo desplaza al diseñador.'},
      {q:'¿Cuáles son las tres salvaguardas?', a:'Auditar resultados, poder impugnar ante un humano y publicar el funcionamiento.'}
    ]
  },
  {level:'C1', title:'圆桌讨论：教育与就业错配', speaker:'Moderadora / Rector / Empresaria', duration:'约 2 分钟',
    es:`MODERADORA: Se repite que sobran titulados y faltan técnicos. ¿Es tan simple?
RECTOR: Es una simplificación cómoda. Lo que ocurre es un desajuste entre lo que se enseña y lo que se demanda, y ese desajuste no es culpa exclusiva de la universidad.
EMPRESARIA: Coincido en parte, pero desde la empresa percibimos que muchos egresados llegan sin hábitos de trabajo en equipo.
RECTOR: Y desde la universidad observamos que muchas ofertas exigen experiencia que nadie está dispuesto a proporcionar. Es una pescadilla que se muerde la cola.
MODERADORA: ¿Cómo se rompe ese círculo?
EMPRESARIA: Con formación dual real, no con convenios de escaparate.
RECTOR: Y con financiación estable. Sin recursos, cualquier reforma se queda en el enunciado.
MODERADORA: Es decir, que el problema no admite atajos.
RECTOR: Me temo que no.`,
    zh:`主持人：人们总说毕业生过剩、技术人才短缺。事情有这么简单吗？
校长：这是一种省事的简化。真实情况是所教与所需之间的错配，而这个错配不能全怪大学。
企业家：我部分同意，但从企业角度看，很多毕业生来了却没有团队协作的习惯。
校长：而从大学角度看，很多招聘要求经验，却没人愿意提供这个经验。这是个咬自己尾巴的循环。
主持人：怎么打破这个循环？
企业家：靠真正的双元制培养，而不是做样子的合作协议。
校长：还要有稳定的经费。没有资源，任何改革都只停留在口头上。
主持人：也就是说，这个问题没有捷径。
校长：恐怕没有。`,
    keyVocab:[
      {es:'desajuste', zh:'错配、脱节'},
      {es:'egresado', zh:'毕业生'},
      {es:'hábitos de trabajo en equipo', zh:'团队协作习惯'},
      {es:'pescadilla que se muerde la cola', zh:'恶性循环'},
      {es:'formación dual', zh:'双元制培养'},
      {es:'convenio de escaparate', zh:'做样子的协议'}
    ],
    questions:[
      {q:'¿Cómo califica el rector la afirmación inicial?', a:'Una simplificación cómoda.'},
      {q:'¿Qué percibe la empresaria?', a:'Que los egresados llegan sin hábitos de trabajo en equipo.'},
      {q:'¿Qué critica el rector de las ofertas de empleo?', a:'Que exigen experiencia que nadie proporciona.'},
      {q:'¿Qué dos condiciones se mencionan para romper el círculo?', a:'Formación dual real y financiación estable.'}
    ]
  },
  {level:'C2', title:'学术辩论：何为好的翻译', speaker:'Moderador / Filóloga / Traductor', duration:'约 2 分 30 秒',
    es:`MODERADOR: ¿Existe la traducción perfecta?
FILÓLOGA: Existe la traducción irreprochable en un sentido y nefasta en otro. Toda elección implica una renuncia.
TRADUCTOR: Discrepo del adjetivo «nefasta». Una renuncia consciente no empobrece: jerarquiza. El error no es renunciar, sino renunciar sin saberlo.
MODERADOR: ¿Y la fidelidad?
FILÓLOGA: La fidelidad literal suele traicionar el efecto. Traducir «no tiene pelos en la lengua» por «il n'a pas de poils sur la langue» sería un disparate.
TRADUCTOR: De acuerdo, pero tampoco vale cualquier equivalencia. Hay un límite: no se puede añadir lo que el original no dice.
FILÓLOGA: Ahí le doy la razón. La libertad del traductor termina donde empieza la invención.
MODERADOR: ¿Alguna regla?
TRADUCTOR: Solo una: que el lector de la traducción sienta lo que sintió el del original. Todo lo demás es negociable.`,
    zh:`主持人：存在完美的翻译吗？
语文学家：存在一种无可指摘、而在另一种意义上又是灾难性的翻译。任何选择都意味着放弃。
译者：我不同意「灾难性」这个词。有意识的放弃并不贫乏，而是在排定主次。错误不在于放弃，而在于不知道自己放弃了什么。
主持人：那忠实呢？
语文学家：字面忠实往往会背叛效果。把「no tiene pelos en la lengua」译成「il n'a pas de poils sur la langue」就是荒唐的。
译者：同意，但也不能随便找任何对等表达。有个界限：不能添加原文没有的东西。
语文学家：这一点我同意您。译者的自由止于创造开始之处。
主持人：有什么准则吗？
译者：只有一条：让译文的读者感受到原文读者的感受。其余一切都可以商量。`,
    keyVocab:[
      {es:'irreprochable', zh:'无可指摘的'},
      {es:'nefasto', zh:'灾难性的'},
      {es:'renuncia', zh:'放弃、舍弃'},
      {es:'jerarquizar', zh:'排定主次'},
      {es:'fidelidad literal', zh:'字面忠实'},
      {es:'disparate', zh:'荒唐事'},
      {es:'invención', zh:'虚构、创造'},
      {es:'negociable', zh:'可商量的'}
    ],
    questions:[
      {q:'¿Qué sostiene la filóloga sobre toda elección?', a:'Que implica una renuncia.'},
      {q:'¿En qué discrepa el traductor?', a:'En que una renuncia consciente empobrezca.'},
      {q:'¿Qué límite señala el traductor?', a:'Que no se puede añadir lo que el original no dice.'},
      {q:'¿Cuál es su única regla?', a:'Que el lector sienta lo que sintió el del original.'}
    ]
  },
  {level:'B2', title:'客户投诉处理', speaker:'Supervisora / Cliente', duration:'约 1 分 20 秒',
    es:`SUPERVISORA: Buenas tardes, lamento mucho lo ocurrido. Cuénteme qué ha pasado.
CLIENTE: Pedí el pedido hace tres semanas y sigue sin llegar. Ya he llamado dos veces.
SUPERVISORA: Tiene toda la razón en estar molesto. Déjeme comprobar el estado. Efectivamente, el envío se quedó bloqueado en el almacén.
CLIENTE: Y nadie me avisó.
SUPERVISORA: Es un fallo nuestro y lo asumimos. Le propongo dos opciones: reenviarlo hoy con envío urgente sin coste, o anular el pedido y devolverle el importe íntegro.
CLIENTE: Prefiero que lo reenvíen.
SUPERVISORA: Perfecto. Le compensaremos además con un descuento del diez por ciento en su próxima compra. Y esta vez le enviaré el número de seguimiento por correo.
CLIENTE: Se lo agradezco.`,
    zh:`主管：下午好，非常抱歉发生这样的事。请您说说是什么情况。
客户：我三周前下的单，到现在还没到。我已经打过两次电话了。
主管：您生气完全有道理。我查一下状态。确实，包裹卡在仓库了。
客户：而且没人通知我。
主管：这是我们的失误，我们承担责任。我给您两个方案：今天免费加急重发，或者取消订单全额退款。
客户：我希望能重发。
主管：好的。此外我们再补偿您下次购物九折。这次我会把物流单号发到您邮箱。
客户：谢谢。`,
    keyVocab:[
      {es:'lamento mucho', zh:'非常抱歉'},
      {es:'bloqueado en el almacén', zh:'卡在仓库'},
      {es:'asumir el fallo', zh:'承担失误'},
      {es:'anular el pedido', zh:'取消订单'},
      {es:'importe íntegro', zh:'全额'},
      {es:'número de seguimiento', zh:'物流单号'}
    ],
    questions:[
      {q:'¿Cuánto tiempo lleva esperando el cliente?', a:'Tres semanas.'},
      {q:'¿Dónde se bloqueó el envío?', a:'En el almacén.'},
      {q:'¿Qué dos opciones ofrece la supervisora?', a:'Reenviar con urgencia o anular y devolver el importe.'},
      {q:'¿Con qué compensa además?', a:'Con un diez por ciento de descuento.'}
    ]
  },
  {level:'B2', title:'环保专题：城市交通转型', speaker:'Concejala / Vecino', duration:'约 1 分 30 秒',
    es:`CONCEJALA: El plan prevé peatonalizar el centro y ampliar los carriles bici.
VECINO: Entiendo la intención, pero muchos trabajamos allí y no todos podemos ir en bici.
CONCEJALA: Es una objeción razonable. Por eso hemos previsto un aparcamiento disuasorio en la periferia con lanzadera cada diez minutos.
VECINO: ¿Y los comercios? Temen perder clientes.
CONCEJALA: Los estudios comparables indican lo contrario: en calles peatonalizadas el comercio suele repuntar, porque la gente camina más despacio y compra más.
VECINO: ¿Cuándo entraría en vigor?
CONCEJALA: En septiembre, con un periodo de prueba de seis meses y revisión de datos.
VECINO: Al menos hay margen para corregir.`,
    zh:`市政委员：该方案计划将市中心步行化并拓宽自行车道。
居民：我理解意图，但我们在那里上班，不是所有人都能骑车。
市政委员：这个反对意见很合理。因此我们规划了城郊的换乘停车场，摆渡车每十分钟一班。
居民：那商家呢？他们担心流失顾客。
市政委员：同类研究表明恰恰相反：步行街上的商铺营业额通常会上升，因为人们走得更慢、买得更多。
居民：什么时候生效？
市政委员：九月，设六个月试行期并根据数据复审。
居民：至少还有调整余地。`,
    keyVocab:[
      {es:'peatonalizar', zh:'步行化'},
      {es:'carril bici', zh:'自行车道'},
      {es:'aparcamiento disuasorio', zh:'换乘停车场'},
      {es:'lanzadera', zh:'摆渡车'},
      {es:'repuntar', zh:'回升'},
      {es:'periodo de prueba', zh:'试行期'}
    ],
    questions:[
      {q:'¿Qué prevé el plan?', a:'Peatonalizar el centro y ampliar los carriles bici.'},
      {q:'¿Qué objeción plantea el vecino?', a:'Que no todos pueden ir en bici.'},
      {q:'¿Qué solución se ofrece para el acceso?', a:'Un aparcamiento disuasorio con lanzadera.'},
      {q:'¿Qué dice el estudio sobre el comercio?', a:'Que suele repuntar en calles peatonalizadas.'}
    ]
  },
  {level:'B2', title:'心理访谈：拖延与自我管理', speaker:'Entrevistadora / Psicólogo', duration:'约 1 分 30 秒',
    es:`ENTREVISTADORA: ¿Por qué procrastinamos, incluso en cosas que nos importan?
PSICÓLOGO: Casi nunca es pereza. Suele ser una estrategia, torpe pero comprensible, para evitar una emoción incómoda: miedo a fallar, ansiedad ante la tarea o simple aversión.
ENTREVISTADORA: Entonces la disciplina no bastaría.
PSICÓLOGO: No basta, y de hecho la culpa que genera empeora el círculo. Si te castigas por no haber empezado, la tarea se vuelve aún más amenazante.
ENTREVISTADORA: ¿Qué funciona, entonces?
PSICÓLOGO: Reducir la fricción de arranque. Comprometerse a dos minutos, no a dos horas. Y separar la planificación de la ejecución: decidir cuándo y dónde lo harás, no solo qué harás.
ENTREVISTADORA: Suena sencillo dicho así.
PSICÓLOGO: Sencillo de enunciar, difícil de sostener. Como casi todo lo útil.`,
    zh:`采访者：即使是对我们在意的事情，我们为什么会拖延？
心理学家：这几乎从来不是懒惰。它通常是一种策略——拙劣但可以理解——用来回避某种不适的情绪：怕失败、对任务的焦虑，或者单纯的厌恶。
采访者：那么单靠自律不够。
心理学家：不够，而且由此产生的自责会让这个循环更糟。如果你因为没开始而惩罚自己，任务就变得更加可怕。
采访者：那什么有效？
心理学家：降低启动摩擦。承诺做两分钟，而不是两小时。并把计划和执行分开：决定「什么时候、在哪里做」，而不只是「做什么」。
采访者：听起来很简单。
心理学家：说起来简单，坚持起来难。几乎所有有用的东西都这样。`,
    keyVocab:[
      {es:'procrastinar', zh:'拖延'},
      {es:'pereza', zh:'懒惰'},
      {es:'aversión', zh:'厌恶'},
      {es:'fricción de arranque', zh:'启动摩擦'},
      {es:'comprometerse a', zh:'承诺做'},
      {es:'sostener', zh:'维持、坚持'}
    ],
    questions:[
      {q:'¿Qué es la procrastinación según el psicólogo?', a:'Una estrategia para evitar una emoción incómoda.'},
      {q:'¿Qué efecto tiene la culpa?', a:'Empeora el círculo, hace la tarea más amenazante.'},
      {q:'¿Cuál es su primera recomendación?', a:'Reducir la fricción de arranque: comprometerse a dos minutos.'},
      {q:'¿Qué hay que separar?', a:'La planificación de la ejecución.'}
    ]
  },
  {level:'C1', title:'专题访谈：文化遗产的商业化', speaker:'Periodista / Historiador', duration:'约 2 分钟',
    es:`PERIODISTA: Cada vez más ciudades convierten su casco histórico en un escaparate. ¿Es sostenible?
HISTORIADOR: Depende de qué entendamos por sostenible. Económicamente puede serlo a corto plazo; culturalmente, casi nunca.
PERIODISTA: ¿Por qué?
HISTORIADOR: Porque un centro histórico deja de ser un lugar donde se vive y pasa a ser un lugar que se visita. Y una ciudad sin vecinos es un decorado.
PERIODISTA: Se argumenta que el turismo financia la restauración.
HISTORIADOR: Y es cierto en parte. El problema es que la restauración se orienta al visitante: se recupera la fachada y se vacía el interior.
PERIODISTA: ¿Cabría regularlo?
HISTORIADOR: Cabría, y en algunas ciudades se hace, pero conviene no idealizar la norma. Reglamentar sin medios para inspeccionar es escribir buenos deseos.
PERIODISTA: ¿Qué le preocupa más a largo plazo?
HISTORIADOR: Que dentro de treinta años nadie recuerde cómo se vivía allí. Eso no se restaura.`,
    zh:`记者：越来越多城市把老城区变成橱窗。这可持续吗？
历史学家：取决于我们对「可持续」的定义。经济上短期内或许可以；文化上几乎从不可以。
记者：为什么？
历史学家：因为老城区不再是人们生活的地方，而变成人们参观的地方。而没有居民的城市只是一个布景。
记者：有人主张旅游业为修缮提供资金。
历史学家：这有一部分是对的。问题在于修缮是面向游客的：立面被修复，内部却被掏空。
记者：能通过法规来管吗？
历史学家：可以，有些城市也在做，但不宜把法规理想化。有规范却没有检查手段，等于写下美好的愿望。
记者：长期来看您最担心什么？
历史学家：担心三十年后再没人记得那里的人是怎么生活的。那是修复不回来的。`,
    keyVocab:[
      {es:'casco histórico', zh:'老城区'},
      {es:'escaparate', zh:'橱窗、展示面'},
      {es:'decorado', zh:'布景'},
      {es:'restauración', zh:'修缮'},
      {es:'orientarse a', zh:'面向'},
      {es:'idealizar', zh:'理想化'},
      {es:'reglamentar', zh:'制定规章'},
      {es:'buenos deseos', zh:'良好愿望'}
    ],
    questions:[
      {q:'¿Qué distinción hace el historiador sobre «sostenible»?', a:'Que puede serlo económicamente pero casi nunca culturalmente.'},
      {q:'¿Qué ocurre cuando un centro histórico deja de tener vecinos?', a:'Se convierte en un decorado.'},
      {q:'¿Cuál es el problema de la restauración?', a:'Que se orienta al visitante: se recupera la fachada y se vacía el interior.'},
      {q:'¿Qué critica de la regulación?', a:'Que sin medios para inspeccionar es solo buenos deseos.'}
    ]
  },
  {level:'C1', title:'企业访谈：创新为何失败', speaker:'Entrevistador / Directora de I+D', duration:'约 2 分钟',
    es:`ENTREVISTADOR: Se habla mucho del fracaso como aprendizaje. ¿No es una frase hecha?
DIRECTORA: Muy a menudo sí. El fracaso solo enseña si alguien se molesta en analizarlo, y casi nadie lo hace.
ENTREVISTADOR: ¿Cuál es el error más común?
DIRECTORA: Confundir una idea brillante con un producto viable. Hay ideas magníficas que nadie necesita comprar.
ENTREVISTADOR: ¿Y el segundo?
DIRECTORA: Escalar antes de validar. Se invierte en producción cuando aún no se sabe si alguien lo quiere.
ENTREVISTADOR: Muchas empresas dicen que fomentan la experimentación.
DIRECTORA: Lo dicen, pero luego penalizan el error en la evaluación anual. Ahí se acaba la cultura innovadora: entre el discurso y el incentivo, gana el incentivo.
ENTREVISTADOR: ¿Qué haría falta?
DIRECTORA: Presupuesto protegido, tolerancia explícita al fallo y alguien con autoridad para matar proyectos a tiempo. Lo tercero es lo más difícil de conseguir.`,
    zh:`采访者：人们常谈「失败即学习」。这不是句套话吗？
研发总监：往往就是套话。失败只有在有人愿意分析它时才有教益，而几乎没人这么做。
采访者：最常见的错误是什么？
研发总监：把绝妙点子和可行产品混为一谈。有些想法很棒，但没人需要买。
采访者：第二个呢？
研发总监：在验证之前就规模化。还不知道有没有人要，就先投产能。
采访者：很多公司说自己在鼓励试错。
研发总监：嘴上说，但在年度考核里又惩罚出错。创新文化就在那儿终结了：在口号和激励之间，赢的是激励。
采访者：那需要什么？
研发总监：受保护的预算、对失败明确的宽容，以及一个有权及时叫停项目的人。第三条最难做到。`,
    keyVocab:[
      {es:'frase hecha', zh:'套话'},
      {es:'viable', zh:'可行的'},
      {es:'escalar', zh:'规模化'},
      {es:'validar', zh:'验证'},
      {es:'penalizar el error', zh:'惩罚出错'},
      {es:'incentivo', zh:'激励机制'},
      {es:'tolerancia al fallo', zh:'对失败的宽容'}
    ],
    questions:[
      {q:'¿Cuándo enseña algo el fracaso?', a:'Solo si alguien se molesta en analizarlo.'},
      {q:'¿Cuál es el error más común?', a:'Confundir una idea brillante con un producto viable.'},
      {q:'¿Qué contradicción señala en las empresas?', a:'Que dicen fomentar la experimentación pero penalizan el error.'},
      {q:'¿Qué es lo más difícil de conseguir?', a:'Alguien con autoridad para matar proyectos a tiempo.'}
    ]
  },
  {level:'C1', title:'圆桌：社交媒体与青少年', speaker:'Moderadora / Pediatra / Docente', duration:'约 2 分钟',
    es:`MODERADORA: ¿Es exagerada la alarma sobre las redes y los adolescentes?
PEDIATRA: Exagerada no; mal formulada, sí. La pregunta no es cuántas horas, sino qué hacen en esas horas y qué dejan de hacer.
DOCENTE: Coincido. Un chico que participa en un foro sobre ajedrez está haciendo algo muy distinto a uno que mira vídeos cortos durante tres horas seguidas.
MODERADORA: ¿Dónde situaría entonces el umbral de riesgo?
PEDIATRA: Más que un umbral horario, hay tres señales: pérdida de sueño, abandono de actividades presenciales y comparación constante con los demás.
DOCENTE: Y una cuarta desde el aula: incapacidad de sostener la atención más de un par de minutos.
MODERADORA: ¿La solución es prohibir?
PEDIATRA: Prohibir sin acompañar suele trasladar el problema a otro sitio. Lo que funciona es pactar reglas y, sobre todo, modelar: si los padres miran el móvil en la mesa, el discurso no cuela.`,
    zh:`主持人：关于社交网络与青少年的警报是否夸大了？
儿科医生：不算夸大，但表述得不好。问题不是多少小时，而是那些小时里他们在做什么、又因此不做什么。
教师：我同意。一个参与国际象棋论坛的孩子，和一个连看三小时短视频的孩子，做的事完全不同。
主持人：那风险的门槛在哪？
儿科医生：与其说是一个时长门槛，不如说有三个信号：睡眠缺失、放弃线下活动、不断与他人比较。
教师：从课堂角度还有第四个：注意力无法维持超过一两分钟。
主持人：解决办法是禁止吗？
儿科医生：只禁不管往往只是把问题挪到别处。有效的是约定规则，尤其是以身作则：如果父母自己在饭桌上看手机，那套说辞就没说服力。`,
    keyVocab:[
      {es:'alarma', zh:'警报'},
      {es:'umbral', zh:'门槛、阈值'},
      {es:'abandono', zh:'放弃'},
      {es:'sostener la atención', zh:'维持注意力'},
      {es:'trasladar el problema', zh:'把问题挪走'},
      {es:'pactar reglas', zh:'约定规则'},
      {es:'modelar', zh:'以身作则'},
      {es:'no cuela', zh:'说不通、不管用'}
    ],
    questions:[
      {q:'¿Qué critica la pediatra de la formulación habitual?', a:'Que se centra en las horas y no en qué se hace.'},
      {q:'¿Qué tres señales menciona?', a:'Pérdida de sueño, abandono de actividades presenciales y comparación constante.'},
      {q:'¿Qué añade la docente?', a:'La incapacidad de sostener la atención.'},
      {q:'¿Qué es lo que de verdad funciona?', a:'Pactar reglas y modelar con el ejemplo.'}
    ]
  },
  {level:'C2', title:'文学对谈：记忆与虚构', speaker:'Crítico / Escritora', duration:'约 2 分 30 秒',
    es:`CRÍTICO: Su novela se presenta como memoria, pero abundan los pasajes que ningún recuerdo podría sostener.
ESCRITORA: Es exactamente lo que pretendía. La memoria no es un archivo, es una reconstrucción interesada. Si la hubiera transcrito literalmente, habría escrito un documento, no una novela.
CRÍTICO: ¿No teme que se le reproche haber falseado su propia vida?
ESCRITORA: Se me reprochará, sin duda. Pero ese reproche parte de una premisa que rechazo: que existe una versión verdadera de los hechos y que el escritor está obligado a servirla.
CRÍTICO: ¿Y qué hay de los personajes reales, de las personas que aparecen?
ESCRITORA: Ahí sí asumo un límite. No invento daños que nadie cometió ni virtudes que nadie tuvo. La libertad empieza donde termina el perjuicio ajeno.
CRÍTICO: Hay quien dirá que es una frontera cómoda.
ESCRITORA: Cómoda no: es la única que puedo defender sin sonrojarme. Las demás las he probado y no resisten el escrutinio.`,
    zh:`评论家：您的小说自称是回忆录，但其中大量段落是任何记忆都支撑不了的。
作家：这正是我的意图。记忆不是档案，而是一种带倾向的重构。如果我如实誊写，那写出来的就是文件，不是小说。
评论家：您不怕被指责篡改了自己的人生吗？
作家：肯定会有人指责。但这种指责建立在我拒绝的前提上：认为事实存在一个真实版本，而作家有义务为它服务。
评论家：那真实人物呢？那些出现在书里的人？
作家：在这一点上我承认有界限。我不会虚构没人做过的伤害，也不会虚构没人有过的美德。自由的起点是他人受损的终点。
评论家：有人会说这是条方便划定的边界。
作家：不是方便，而是唯一一条我能不愧疚地捍卫的边界。其他的我都试过，经不起推敲。`,
    keyVocab:[
      {es:'transcribir', zh:'誊写、如实记录'},
      {es:'reconstrucción interesada', zh:'带倾向的重构'},
      {es:'falsear', zh:'篡改、伪造'},
      {es:'premisa', zh:'前提'},
      {es:'perjuicio ajeno', zh:'他人受损'},
      {es:'sonrojarse', zh:'脸红、羞愧'},
      {es:'escrutinio', zh:'审视、推敲'},
      {es:'no resiste', zh:'经不起'}
    ],
    questions:[
      {q:'¿Cómo define la escritora la memoria?', a:'Como una reconstrucción interesada, no un archivo.'},
      {q:'¿De qué premisa parte el reproche que rechaza?', a:'De que existe una versión verdadera de los hechos que el escritor debe servir.'},
      {q:'¿Dónde sitúa su límite?', a:'En no inventar daños ni virtudes que nadie tuvo.'},
      {q:'¿Por qué defiende esa frontera?', a:'Porque es la única que puede defender sin sonrojarse.'}
    ]
  },
  {level:'C2', title:'学术对谈：历史叙述的建构', speaker:'Moderador / Historiadora / Filósofo', duration:'约 2 分 30 秒',
    es:`MODERADOR: ¿Es el historiador un narrador o un científico?
HISTORIADORA: Ambas cosas, y la tensión entre ellas es productiva. El historiador no inventa hechos, pero sí elige qué hechos encadenar y en qué orden.
FILÓSOFO: Permítame llevar la objeción más lejos: si la selección es inevitable, ¿en qué se distingue su relato de una novela histórica?
HISTORIADORA: En que mis afirmaciones son refutables. Si mañana aparece un documento que las contradice, estoy obligada a corregirme. El novelista no.
FILÓSOFO: Eso es una diferencia de método, no de resultado.
HISTORIADORA: Y me basta. La ciencia tampoco garantiza verdades definitivas; garantiza un procedimiento que castiga el error.
MODERADOR: ¿No hay entonces ninguna jerarquía entre los relatos?
HISTORIADORA: La hay, pero conviene enunciarla con prudencia: unos relatos admiten ser puestos a prueba y otros no. Eso, y no la certeza, es lo que los distingue.
FILÓSOFO: En eso no la discutiré.`,
    zh:`主持人：历史学家是叙述者还是科学家？
历史学家：两者都是，而它们之间的张力是有生产性的。历史学家不虚构事实，但他确实会选择串联哪些事实、以什么顺序。
哲学家：请允许我把这个反驳推得更远：如果选择不可避免，那您的叙述与一部历史小说有何区别？
历史学家：区别在于我的论断是可以被推翻的。如果明天出现一份与之矛盾的文献，我有义务修正自己。小说家没有这个义务。
哲学家：那是方法的区别，不是结果的区别。
历史学家：对我来说这就够了。科学也不保证终极真理；它保证的是一套惩罚错误的程序。
主持人：那么各种叙述之间就没有等级之分吗？
历史学家：有，但表述时应当谨慎：有些叙述允许被检验，另一些不允许。区别在于此，而不在于确定性。
哲学家：这一点我不与您争。`,
    keyVocab:[
      {es:'encadenar', zh:'串联'},
      {es:'refutable', zh:'可被推翻的'},
      {es:'contradecir', zh:'与……矛盾'},
      {es:'corregirse', zh:'自我修正'},
      {es:'procedimiento', zh:'程序、方法'},
      {es:'jerarquía', zh:'等级'},
      {es:'puesto a prueba', zh:'经受检验'},
      {es:'certeza', zh:'确定性'}
    ],
    questions:[
      {q:'¿Qué elige el historiador, según la historiadora?', a:'Qué hechos encadenar y en qué orden.'},
      {q:'¿En qué se distingue su relato de una novela histórica?', a:'En que sus afirmaciones son refutables.'},
      {q:'¿Qué garantiza la ciencia según ella?', a:'Un procedimiento que castiga el error, no verdades definitivas.'},
      {q:'¿Cuál es el criterio de distinción que propone?', a:'Que unos relatos admiten ser puestos a prueba y otros no.'}
    ]
  }
];

// 成就系统
const ACHIEVEMENTS = [
  {id:'first-word', title:'初心者', desc:'学习了第一个西语单词', icon:'🌱', points:10},
  {id:'ten-words', title:'勤学小将', desc:'掌握 10 个单词', icon:'📚', points:50},
  {id:'fifty-words', title:'词汇达人', desc:'掌握 50 个单词', icon:'🎯', points:120},
  {id:'hundred-words', title:'百词斩', desc:'掌握 100 个单词', icon:'💯', points:300},
  {id:'first-lesson', title:'踏出第一步', desc:'完成第一单元', icon:'⭐', points:20},
  {id:'level-a1', title:'入门毕业', desc:'完成 A1 全部单元', icon:'🏅', points:200},
  {id:'level-a2', title:'初级进阶', desc:'完成 A2 全部单元', icon:'🥈', points:400},
  {id:'level-b1', title:'中级能力', desc:'完成 B1 全部单元', icon:'🥉', points:800},
  {id:'level-b2', title:'进阶达人', desc:'完成 B2 全部单元', icon:'🎖️', points:1600},
  {id:'level-c1', title:'高级精通', desc:'完成 C1 全部单元', icon:'🏆', points:3000},
  {id:'streak-3', title:'坚持三天', desc:'连续学习 3 天', icon:'🔥', points:30},
  {id:'streak-7', title:'周冠军', desc:'连续学习 7 天', icon:'⚡', points:100},
  {id:'streak-30', title:'月度勇士', desc:'连续学习 30 天', icon:'💎', points:500},
  {id:'streak-100', title:'百日筑基', desc:'连续学习 100 天', icon:'👑', points:2000},
  {id:'grammar-master', title:'语法高手', desc:'完成 20 道语法练习', icon:'🧠', points:80},
  {id:'grammar-expert', title:'语法专家', desc:'完成 100 道语法练习', icon:'📐', points:300},
  {id:'listening-master', title:'听力达人', desc:'完成 5 段听力训练', icon:'🎧', points:100},
  {id:'speaking-master', title:'口语新星', desc:'完成 10 句口语跟读', icon:'🎤', points:100},
  {id:'community', title:'社交达人', desc:'发布第一条社区动态', icon:'💬', points:30},
  {id:'community-10', title:'活跃博主', desc:'发布 10 条社区动态', icon:'✍️', points:200},
  {id:'first-reading', title:'初读者', desc:'完成第一篇精读', icon:'📖', points:15},
  {id:'five-readings', title:'博览者', desc:'完成 5 篇精读', icon:'📚', points:60},
];

// 社区模拟内容（扩充版）
const COMMUNITY_POSTS = [
  {id:'p1', author:'María García', avatar:'M', level:'B2', time:'2 小时前',
   content:'¡Hola a todos! 今天学到一个特别形象的表达 "estar en las nubes"，字面意思是"在云朵上"，实际表示走神、心不在焉、发愣。西班牙语里这类比喻特别多，你们还知道哪些有趣的 idiomas？',
   likes:42, comments:8, tags:['日常表达', '地道俚语']},
  {id:'p2', author:'Carlos Rodríguez', avatar:'C', level:'C1', time:'5 小时前',
   content:'分享一个我自己坚持了两年的学习方法：每天睡前听 15-20 分钟西语播客，不用完全听懂，先让耳朵熟悉语音节奏和语调。配合 shadowing（影子跟读法），效果翻倍！推荐几个我常听的：\n\n🎙️ Radio Ambulante (讲故事)\n🎙️ Radio Nacional de España (新闻)\n🎙️ Notes in Spanish (教学类)\n\n坚持三个月以上，听力和口语语感会有质的飞跃 ✨',
   likes:128, comments:24, tags:['学习方法', '听力', '推荐']},
  {id:'p3', author:'Ana López', avatar:'A', level:'A2', time:'昨天',
   content:'终于完成 A1 全部课程了！🎉🎉🎉\n\n一开始真的觉得动词变位好难好难，ser / estar 到底怎么用？所有格形容词为什么要变？但跟着 Lingua 一个单元一个单元走，慢慢就找到感觉了。\n\n给还在 A1 挣扎的小伙伴们几点心得：\n1. 不要贪多，每天 10-15 个单词足够\n2. 句型比单词重要，先把骨架搭好\n3. 大声读出来，哪怕没人听\n4. 别怕犯错，母语者自己也常错\n\nA2 我来啦！',
   likes:215, comments:42, tags:['毕业', '学习心得', '鼓励帖']},
  {id:'p4', author:'Pedro Martínez', avatar:'P', level:'B1', time:'2 天前',
   content:'推荐一部西语剧给大家：《La Casa de las Flores》（花之屋）Netflix 出品。\n\n剧情：一个看似完美的墨西哥家庭，外表光鲜、花店生意火爆，实际每个人都藏着秘密，黑色幽默拉满。\n\n语言层面的好处：\n- 语速适中，比《纸钞屋》友好\n- 有标准卡斯蒂利亚语 + 墨西哥口音对比\n- 大量日常对话和社交场景\n\n重点是剧情本身真的好看！已经三刷了 😄',
   likes:98, comments:18, tags:['影视推荐', 'Netflix', '口语']},
  {id:'p5', author:'Lucía Martín', avatar:'L', level:'B2', time:'3 天前',
   content:'Ser vs Estar 终极记忆口诀：\n\n✅ Ser = 本质 / 永久 / 事实\nEres española（你是西班牙人，本质）\nEl libro es azul（书是蓝色的，本质）\nSomos amigos（我们是朋友，身份）\n\n✅ Estar = 状态 / 临时 / 位置\nEstoy cansada（我累了，状态）\nLa puerta está abierta（门开着，临时）\nEstamos en Madrid（我们在马德里，位置）\n\n📝 例外：estar de pie / estar de vacaciones / ser de aquí... 这些要单独记。\n\n整理了一张思维导图，有人需要吗？',
   likes:156, comments:36, tags:['语法', 'Ser vs Estar', '记忆技巧']},
  {id:'p6', author:'Diego Fernández', avatar:'D', level:'B2', time:'4 天前',
   content:'本周去了一家马德里的弗拉门戈 tablao 现场演出，震撼到起鸡皮疙瘩。\n\n几个小 tips 分享给想去西班牙体验的小伙伴：\n\n🎭 什么是 tablao？专门表演弗拉门戈的小剧场餐厅，不是游客秀那种\n💃 正宗的弗拉门戈是 cante（歌）+ toque（吉他）+ baile（舞）三者结合，Cante 才是灵魂\n💰 票价 30-60 欧都有，推荐去 Corral de la Morería（最有名）\n📸 拍照一般可以但录像不太礼貌，演出中请安静\n\n如果没机会去西班牙，推荐电影《Carmen》（2022），里面有非常震撼的弗拉门戈段落。',
   likes:76, comments:12, tags:['文化体验', '弗拉门戈', '旅行']},
  {id:'p7', author:'Sofía Chen', avatar:'S', level:'B1', time:'6 天前',
   content:'有没有人跟我一样背虚拟式背到崩溃？😭 现在终于有点感觉了，跟大家分享一个简单判断法：\n\n🔸 必须用虚拟式的词：\n- esperar / querer / desear que...（愿望）\n- dudar / negar que...（怀疑、否定）\n- alegrarse de que / lamento que...（情感）\n- es necesario / importante que...（价值判断）\n- cuando / aunque / sin que + 将来\n\n🔸 用陈述式的词：\n- saber / pensar / creer que\n- estar seguro de que\n- cuando + 现在/过去\n\n记住这个分类，80% 的场景直接套，剩下 20% 再慢慢积累。加油！💪',
   likes:189, comments:29, tags:['语法', '虚拟式', '学习技巧']},
  {id:'p8', author:'Javier Ruiz', avatar:'J', level:'C1', time:'1 周前',
   content:'推荐几本适合 B1-B2 水平的西语原版书（已标注蓝思值）：\n\n📖《La sombra del viento》— Carlos Ruiz Zafón（680L）\n适合 B2 的入门小说，哥特风格，叙事节奏好，词汇不太难。被翻译成 40 多种语言不是没有道理。\n\n📖《La casa de las chivas》— Leonor Espinosa（750L）\n短故事集，哥伦比亚作家，魔幻现实风格，故事都很短，适合碎片化阅读。\n\n📖《El cuerpo en que nací》— Jennifer Egan（720L）\n现代美国作家的西语译本，结构精巧，适合喜欢实验叙事的人。\n\n📜 还有一本适合 C1+：《Cien años de soledad》西班牙语原版，百年孤独，不用介绍了吧。',
   likes:112, comments:15, tags:['阅读', '书籍推荐', '西语原版']}
];

/* ============================================
   词库汇总（在全部顶层常量之后构建）
   ============================================ */
const ALL_VOCAB = [];
Object.values(COURSES).forEach(level => {
  level.units.forEach(unit => {
    unit.vocab.forEach(word => {
      ALL_VOCAB.push({ ...word, level: level.level, unit: unit.title });
    });
  });
});

// 精读语篇的生词也纳入总词库（去重，保留首次出现）
(() => {
  const seen = new Set(ALL_VOCAB.map(w => (w.es || '').trim().toLowerCase()));
  if (typeof READING_PASSAGES !== 'undefined') {
    READING_PASSAGES.forEach(p => {
      (p.glossary || []).forEach(g => {
        const k = (g.es || '').trim().toLowerCase();
        if (!k || seen.has(k)) return;
        seen.add(k);
        ALL_VOCAB.push({ es: g.es, zh: g.zh, example: '', level: p.level, unit: '精读：' + p.title, fromReading: true });
      });
    });
  }
})();
