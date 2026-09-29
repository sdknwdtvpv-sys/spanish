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
        vocab:[
          {es:'Hola', zh:'你好', example:'Hola, ¿cómo estás?'},
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
          {es:'De nada', zh:'不客气', example:'De nada, ha sido un placer.'}
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
          {es:'Lunes', zh:'星期一', example:'El lunes trabajo.'}
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
          {es:'Ropa', zh:'衣服', example:'Me gusta tu ropa.'}
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
          {es:'Inglés', zh:'英语', example:'También hablo inglés.'}
        ],
        grammar:[
          {title:'Ser vs Estar（初阶）', desc:'Ser 用于永久/本质（soy estudiante），Estar 用于临时/状态（estoy cansado）。是西语最重要的区分之一。'},
          {title:'Tener + años / hambre / frío', desc:'西语用 tener 表达很多状态。Tengo 20 años. Tengo hambre. Tengo frío.'},
          {title:'国家 / 语言名词', desc:'España → español。很多语言形容词可直接当名词：hablar español = hablar el idioma español。'}
        ]
      },

      { id:'a1-u5', title:'日常活动', subtitle:'Actividades Diarias', lessons:10, duration:'约 30 分钟',
        vocab:[
          {es:'Levantarse', zh:'起床', example:'Me levanto a las siete.'},
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
          {es:'Estudiar', zh:'学习', example:'Estudio español dos horas al día.'}
        ],
        grammar:[
          {title:'规则动词现在时（-ar / -er / -ir）', desc:'hablar: hablo, hablas, habla, hablamos, habláis, hablan。comer / vivir 同理。'},
          {title:'反身代词 me / te / se / nos / os / se', desc:'Me levanto, te levantas, se levanta... 表示自己做给自己的动作。'},
          {title:'频率副词 siempre / a veces / nunca', desc:'siempre 在动词前：siempre estudio. nunca 要与否定搭配：no estudio nunca / nunca estudio.'}
        ]
      },

      { id:'a1-u6', title:'购物', subtitle:'Compras', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Tienda', zh:'商店', example:'Voy a la tienda.'},
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
          {es:'Amarillo', zh:'黄色', example:'El amarillo es alegre.'}
        ],
        grammar:[
          {title:'Qué / Cuál / Cuánto 的用法', desc:'Qué 用于无范围提问；Cuál 从几个中选；Cuánto 问数量。¿Qué quieres? ¿Cuál prefieres? ¿Cuánto cuesta?'},
          {title:'Adjetivos 形容词配合', desc:'颜色、大小、形状形容词必须与名词在性和数上一致。una camisa roja, unos zapatos negros.'},
          {title:'Poder + 动词原形', desc:'¿Puedo probarme? = 我能试穿吗？ Poder 是万能动词。'}
        ]
      },

      { id:'a1-u7', title:'餐厅点餐', subtitle:'En el Restaurante', lessons:8, duration:'约 25 分钟',
        vocab:[
          {es:'Restaurante', zh:'餐厅', example:'El restaurante es muy bonito.'},
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
          {es:'La cuenta', zh:'结账', example:'La cuenta, por favor.'}
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
          {es:'Perdido', zh:'迷路', example:'Estoy perdido, necesito ayuda.'}
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
        vocab:[
          {es:'Tío', zh:'叔叔 / 舅舅', example:'Mi tío vive en Barcelona.'},
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
          {es:'Celebrar', zh:'庆祝', example:'Vamos a celebrar el éxito.'}
        ],
        grammar:[
          {title:'所有格形容词完整表', desc:'mi(s), tu(s), su(s), nuestro(s)/nuestra(s), vuestro(s)/vuestra(s), su(s)。nuestro 要配合名词性数。'},
          {title:'estar con / ir con / salir con', desc:'表示和某人一起做某事。Salgo con mis amigos los sábados.'},
          {title:'hace + 时间 + que', desc:'表示"已经……多久了"。Hace dos años que estudio español.'}
        ]
      },

      { id:'a2-u2', title:'描述外貌与性格', subtitle:'Describir Apariencia y Personalidad', lessons:10, duration:'约 30 分钟',
        vocab:[
          {es:'Alto', zh:'高', example:'Es muy alto.'},
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
          {es:'Gracioso', zh:'幽默', example:'Es el más gracioso de la clase.'}
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
          {es:'Tener frío', zh:'冷', example:'Anoche tuve mucho frío.'}
        ],
        grammar:[
          {title:'Preterito Indefinido（简单过去时）规则动词', desc:'-ar: -é, -aste, -ó, -amos, -asteis, -aron。-er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron。'},
          {title:'Preterito 高频不规则动词', desc:'Ser/Ir: fui, fuiste, fue... （同形）。Tener: tuve, tuviste, tuvo... Hacer: hice, hiciste, hizo...'},
          {title:'Ayer / La semana pasada 等时间标志', desc:'这些词直接触发简单过去时，不用搭配别的时态。'}
        ]
      },

      { id:'a2-u4', title:'表达喜好', subtitle:'Gustos y Preferencias', lessons:8, duration:'约 28 分钟',
        vocab:[
          {es:'Me gusta', zh:'我喜欢', example:'Me gusta el café.'},
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
          {es:'Gustar + 名词 / 动词原形', desc:'Gusta + 单数，Gustan + 复数。Me gusta el libro. Me gustan los libros.'}
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
          {es:'Fin de semana', zh:'周末', example:'Fin de semana voy a la playa.'}
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
          {es:'Me siento mejor', zh:'我好点了', example:'Con el medicamento me siento mejor.'}
        ],
        grammar:[
          {title:'Me duele + 身体部位', desc:'无人称用法。Me duele la cabeza. Me duelen los pies.'},
          {title:'Tener + 病痛名词', desc:'Tengo fiebre. Tengo gripe. Tengo dolor de... 与 me duele 可以互换。'},
          {title:'命令式（usted 正式形式）', desc:'Déme una receta. Siéntese aquí. Tráigame agua. 比 tú 形式更礼貌。'}
        ]
      },

      { id:'a2-u7', title:'工作与学习', subtitle:'Trabajo y Estudio', lessons:12, duration:'约 40 分钟',
        vocab:[
          {es:'Trabajo', zh:'工作 / 职位', example:'Busco trabajo.'},
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
          {es:'Graduarse', zh:'毕业', example:'Me gradúo este año.'}
        ],
        grammar:[
          {title:'Ser 表示职业 / estar 表示暂时状态', desc:'Soy ingeniero（职业）. Estoy de prácticas（暂时）.'},
          {title:'现在进行时完整', desc:'Estoy trabajando. Está estudiando. Estamos teniendo una reunión. 正在进行的动作。'},
          {title:'ir a + 动词（将来）', desc:'Voy a tener una entrevista mañana. 最常用的将来时形式之一。'}
        ]
      },

      { id:'a2-u8', title:'旅行预订', subtitle:'Reservas y Viajes', lessons:10, duration:'约 35 分钟',
        vocab:[
          {es:'Reservar', zh:'预订', example:'Reservo una habitación.'},
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
          {es:'Seguro de viaje', zh:'旅行保险', example:'Comprar un seguro de viaje.'}
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
          {es:'Equipo', zh:'团队', example:'Tenemos un equipo muy dinámico.'}
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
          {es:'Bosque', zh:'森林', example:'Los bosques nos dan oxígeno.'}
        ],
        grammar:[
          {title:'与可持续性相关的正式表达', desc:'Debemos reducir las emisiones. Es necesario proteger el planeta.'},
          {title:'被动语态正式用法', desc:'La ley fue aprobada por el congreso. 被动语态在新闻和说明文里非常高频。'},
          {title:'es necesario / es importante / es fundamental', desc:'表达观点的关键句式。Es fundamental proteger el medio ambiente.'}
        ]
      },

      { id:'b1-u3', title:'科技与社交媒体', subtitle:'Tecnología y Redes Sociales', lessons:10, duration:'约 35 分钟',
        vocab:[
          {es:'Ordenador', zh:'电脑', example:'Necesito un ordenador nuevo.'},
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
          {es:'Subir (archivo)', zh:'上传', example:'Subí la foto a la nube.'}
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
          {es:'Personaje', zh:'人物 / 角色', example:'El personaje principal es muy interesante.'}
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
          {es:'Relax', zh:'放松', example:'Necesito tiempo para relax.'}
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
          {es:'Léxico', zh:'词汇', example:'El léxico mexicano tiene muchas diferencias.'}
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
          {es:'Redistribución', zh:'再分配', example:'Una redistribución más justa de la riqueza.'}
        ],
        grammar:[
          {title:'虚拟式现在时 + 主句现在时/将来时', desc:'是 B2 的核心语法。Es necesario que... Queremos que... Cuando llegues (subj), te esperaré.'},
          {title:'过去时 + 虚拟式过去时', desc:'Dudaba que hubiera venido. Esperaba que fueras. 一致性法则（consecución de tiempos）。'},
          {title:'书面议论文结构', desc:'Por un lado... por otro lado... / Además... / Sin embargo... / Por tanto... 组织论点的关键。'}
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
          {es:'Filial', zh:'子公司', example:'La filial en México crece mucho.'}
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
          {es:'Aporte', zh:'贡献', example:'Nuestro aporte es relevante.'}
        ],
        grammar:[
          {title:'学术书面语结构', desc:'Se ha demostrado que... / Cabe destacar que... / No obstante... / Por consiguiente...'},
          {title:'被动语态 + 无人称 se', desc:'Se analizaron los datos. Se observó una correlación. 学术写作的标配。'},
          {title:'长定语从句与分词短语', desc:'El estudio realizado por investigadores españoles, que duró tres años, demostró que...'}
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
          {es:'Eloquencia', zh:'雄辩', example:'Admiro su elocuencia natural.'},
          {es:'Retórica', zh:'修辞学', example:'El estudio de la retórica antigua.'},
          {es:'Metáfora', zh:'隐喻', example:'Una metáfora inolvidable.'},
          {es:'Metonimia', zh:'借代', example:'La pluma es más fuerte que la espada (metonimia).'},
          {es:'Ironía', zh:'讽刺', example:'Usa la ironía con maestría.'},
          {es:'Sarcasmo', zh:'挖苦', example:'Su sarcasmo hirió a todos.'},
          {es:'Hipérbole', zh:'夸张', example:'Esa historia es una hipérbole.'},
          {es:'Eufemismo', zh:'委婉语', example:'"Falleció" es un eufemismo.'},
          {es:'Litanía', zh:'排比 / 长串', example:'Una letanía de quejas.'},
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
          {es:'Siglo de Oro', zh:'黄金时代', example:'El Quijote es cumbre del Siglo de Oro.'}
        ],
        grammar:[
          {title:'虚拟式全时态精通', desc:'现在时、过去未完成时、过去完成时、将来时（虽已少用但文学中仍见）。'},
          {title:'条件式（简单 + 复合）', desc:'Debería haberlo sabido. Habría venido si hubieras llamado.'},
          {title:'文学语域：倒装、省略、新词', desc:'Muere el sol. ¡Viva la República!（省略倒装）' }
        ]
      }
    ]
  }
};

/* ============================================
   扁平化词汇表（用于随机复习）
   ============================================ */
const ALL_VOCAB = [];
Object.values(COURSES).forEach(level => {
  level.units.forEach(unit => {
    unit.vocab.forEach(word => {
      ALL_VOCAB.push({ ...word, level: level.level, unit: unit.title });
    });
  });
});

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
    {sentence:'Vamos a ___ (comer).', options:['comer','comamos','comemos','comamos'], correct:0, explain:'nosotros 命令式（劝诱）= 虚拟式现在时第一人称复数：comamos。'},
    {sentence:'___ (traer) tu identificación.', options:['Trae','Trae','Traiga','Traerás'], correct:0, explain:'traer tú 命令式不规则：trae（tú）/ traiga（usted）。usted 形式也正确但不是 tú 命令式。'}
  ]},
  
  // 直接宾语代词
  {topic:'Pronombres de Objeto Directo', questions:[
    {sentence:'El libro? Sí, ___ he leído.', options:['lo','le','se','la'], correct:0, explain:'libro 阳性单数直接宾语 → lo。'},
    {sentence:'Las frutas? No, ___ no me gustan.', options:['las','les','se','los'], correct:0, explain:'frutas 阴性复数直接宾语 → las。'},
    {sentence:'¿Me llamas? Sí, ___ llamo ahora mismo.', options:['te','me','lo','le'], correct:0, explain:'tú 第二人称直接宾语 → te。'},
    {sentence:'A la profesora? Sí, ___ voy a preguntar.', options:['la','le','se','los'], correct:1, explain:'间接宾语 a la profesora → le。Preguntar algo a alguien。'},
    {sentence:'A Juan? No, ___ no conozco.', options:['lo','le','se','la'], correct:0, explain:'conocer 直接宾语，a Juan → lo（阳性）。'}
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
  }
  ,
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
  {id:'community-10', title:'活跃博主', desc:'发布 10 条社区动态', icon:'✍️', points:200}
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
