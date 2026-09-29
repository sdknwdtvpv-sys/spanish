// 西班牙语课程分级体系 (CEFR标准 A1-C2)
const COURSES = {
  A1: {
    level: 'A1',
    title: '入门起步',
    subtitle: 'Principiante',
    description: '从零开始，掌握最基础的日常用语和简单句式',
    color: '#E63946',
    units: [
      {
        id: 'a1-u1',
        title: '问候与介绍',
        subtitle: 'Saludos y Presentaciones',
        lessons: 8,
        duration: '约 2 小时',
        vocab: [
          { es: 'Hola', zh: '你好', pron: '哦拉', example: 'Hola, ¿cómo estás?' },
          { es: 'Adiós', zh: '再见', pron: '啊迪奥斯', example: 'Adiós, hasta mañana.' },
          { es: 'Buenos días', zh: '早上好', pron: '布埃诺斯 迪亚斯', example: 'Buenos días, señor.' },
          { es: 'Buenas noches', zh: '晚上好', pron: '布埃纳斯 诺切斯', example: 'Buenas noches, amigos.' },
          { es: 'Me llamo', zh: '我叫...', pron: '梅 亚莫', example: 'Me llamo María.' },
          { es: 'Mucho gusto', zh: '很高兴认识你', pron: '穆乔 古斯托', example: 'Mucho gusto en conocerte.' },
          { es: '¿Cómo estás?', zh: '你好吗？', pron: '科莫 埃斯塔斯', example: '¿Cómo estás hoy?' },
          { es: 'Estoy bien', zh: '我很好', pron: '埃斯托伊 比恩', example: 'Estoy bien, gracias.' }
        ],
        grammar: [
          { title: '动词 ser 的用法', desc: '学习"是"的表达方式' },
          { title: '疑问词 ¿Cómo?', desc: '如何询问状态' }
        ]
      },
      {
        id: 'a1-u2',
        title: '数字与时间',
        subtitle: 'Números y Hora',
        lessons: 6,
        duration: '约 1.5 小时',
        vocab: [
          { es: 'Uno, dos, tres', zh: '一、二、三', pron: '乌诺、多斯、特雷斯', example: 'Tengo tres libros.' },
          { es: 'Diez', zh: '十', pron: '迪耶斯', example: 'Son las diez.' },
          { es: 'Cien', zh: '一百', pron: '西恩', example: 'Cuesta cien euros.' },
          { es: '¿Qué hora es?', zh: '几点了？', pron: '凯 奥拉 埃斯', example: '¿Qué hora es ahora?' },
          { es: 'Son las ...', zh: '现在是...点', pron: '松 拉斯', example: 'Son las tres.' },
          { es: 'Minuto', zh: '分钟', pron: '米努托', example: 'Espera un minuto.' }
        ],
        grammar: [
          { title: '从0到100的数字', desc: '完整数字系统' },
          { title: '表达时间的句型', desc: '询问和表达时间' }
        ]
      },
      {
        id: 'a1-u3',
        title: '日常物品',
        subtitle: 'Objetos Cotidianos',
        lessons: 7,
        duration: '约 1.8 小时',
        vocab: [
          { es: 'Casa', zh: '房子', pron: '卡萨', example: 'Mi casa es grande.' },
          { es: 'Puerta', zh: '门', pron: '普尔塔', example: 'Abre la puerta.' },
          { es: 'Ventana', zh: '窗户', pron: '本塔纳', example: 'La ventana está abierta.' },
          { es: 'Libro', zh: '书', pron: '利布罗', example: 'Leo un libro.' },
          { es: 'Teléfono', zh: '电话', pron: '特莱福诺', example: 'Contesta el teléfono.' },
          { es: 'Comida', zh: '食物', pron: '科米达', example: 'La comida está rica.' },
          { es: 'Agua', zh: '水', pron: '阿瓜', example: 'Quiero agua fría.' }
        ],
        grammar: [
          { title: '阳性与阴性名词', desc: '西语名词的性别' },
          { title: '定冠词 el/la', desc: '指定特定事物' }
        ]
      }
    ]
  },
  A2: {
    level: 'A2',
    title: '初级进阶',
    subtitle: 'Elemental',
    description: '能在常见场景中进行简单交流，描述日常活动',
    color: '#F4A261',
    units: [
      {
        id: 'a2-u1',
        title: '家庭与朋友',
        subtitle: 'Familia y Amigos',
        lessons: 10,
        duration: '约 2.5 小时',
        vocab: [
          { es: 'Padre / Madre', zh: '父亲/母亲', pron: '帕德雷/马德雷', example: 'Mi madre es maestra.' },
          { es: 'Hermano / Hermana', zh: '兄弟/姐妹', pron: '埃尔马诺/埃尔马纳', example: 'Tengo una hermana mayor.' },
          { es: 'Hijo / Hija', zh: '儿子/女儿', pron: '伊霍/伊哈', example: 'Su hija es muy lista.' },
          { es: 'Abuelo / Abuela', zh: '祖父/祖母', pron: '阿布埃洛/阿布埃拉', example: 'Mis abuelos viven en el campo.' },
          { es: 'Amigo / Amiga', zh: '朋友', pron: '阿米戈/阿米加', example: 'Es mi mejor amigo.' },
          { es: 'Novio / Novia', zh: '男朋友/女朋友', pron: '诺维奥/诺维亚', example: 'Su novio es español.' }
        ],
        grammar: [
          { title: '所有格形容词', desc: 'mi, tu, su, nuestro...' },
          { title: '家庭关系词汇', desc: '完整家庭树表达' }
        ]
      },
      {
        id: 'a2-u2',
        title: '购物与餐厅',
        subtitle: 'Compras y Restaurante',
        lessons: 9,
        duration: '约 2 小时',
        vocab: [
          { es: 'Tienda', zh: '商店', pron: '蒂恩达', example: 'Voy a la tienda.' },
          { es: 'Mercado', zh: '市场', pron: '梅尔卡多', example: 'El mercado está cerca.' },
          { es: 'Café', zh: '咖啡', pron: '卡费', example: 'Tomamos un café.' },
          { es: 'Restaurant', zh: '餐厅', pron: '雷斯塔乌兰特', example: 'Comemos en un restaurant.' },
          { es: 'Menú', zh: '菜单', pron: '梅努', example: 'Pásame el menú.' },
          { es: 'Precio', zh: '价格', pron: '普雷西奥', example: '¿Cuál es el precio?' },
          { es: 'Barato / Caro', zh: '便宜/贵', pron: '巴拉托/卡罗', example: 'Esto es muy caro.' }
        ],
        grammar: [
          { title: '动词 querer 点餐', desc: '表达想要' },
          { title: '价格与讨价还价', desc: '实用购物句型' }
        ]
      }
    ]
  },
  B1: {
    level: 'B1',
    title: '中级能力',
    subtitle: 'Intermedio',
    description: '能应对大部分日常交流，表达观点和感受',
    color: '#8BD4B8',
    units: [
      {
        id: 'b1-u1',
        title: '旅行',
        subtitle: 'Viajes',
        lessons: 12,
        duration: '约 3 小时',
        vocab: [
          { es: 'Aeropuerto', zh: '机场', pron: '埃罗普埃尔托', example: 'Llegamos al aeropuerto.' },
          { es: 'Equipaje', zh: '行李', pron: '埃基帕赫', example: 'Mi equipaje es pesado.' },
          { es: 'Hotel', zh: '酒店', pron: '奥特埃尔', example: 'El hotel es muy cómodo.' },
          { es: 'Pasaporte', zh: '护照', pron: '帕萨波特', example: 'Necesito mi pasaporte.' },
          { es: 'Turista', zh: '游客', pron: '图里斯塔', example: 'Hay muchos turistas aquí.' },
          { es: 'Playa', zh: '海滩', pron: '普拉亚', example: 'Vamos a la playa.' }
        ],
        grammar: [
          { title: '过去时概述', desc: 'preterito 基础' },
          { title: '旅行场景对话', desc: '机场、酒店用语' }
        ]
      },
      {
        id: 'b1-u2',
        title: '工作与学习',
        subtitle: 'Trabajo y Estudio',
        lessons: 11,
        duration: '约 2.5 小时',
        vocab: [
          { es: 'Trabajo', zh: '工作', pron: '特拉瓦霍', example: 'Busco trabajo.' },
          { es: 'Oficina', zh: '办公室', pron: '奥菲西纳', example: 'Estoy en la oficina.' },
          { es: 'Universidad', zh: '大学', pron: '乌尼贝西达德', example: 'Estudio en la universidad.' },
          { es: 'Profesor', zh: '老师', pron: '普罗费索尔', example: 'Mi profesor es muy bueno.' },
          { es: 'Examen', zh: '考试', pron: '埃克萨门', example: 'Tengo un examen mañana.' },
          { es: 'Vacaciones', zh: '假期', pron: '巴卡西奥内斯', example: 'Estoy de vacaciones.' }
        ],
        grammar: [
          { title: '命令式初步', desc: 'tú/usted 形式' },
          { title: '职业与专业词汇', desc: '职场表达' }
        ]
      }
    ]
  },
  B2: {
    level: 'B2',
    title: '中级进阶',
    subtitle: 'Intermedio Alto',
    description: '能流畅交流，理解复杂文本和观点表达',
    color: '#6B8FBB',
    units: [
      {
        id: 'b2-u1',
        title: '文化与艺术',
        subtitle: 'Cultura y Arte',
        lessons: 14,
        duration: '约 3.5 小时',
        vocab: [
          { es: 'Museo', zh: '博物馆', pron: '穆塞奥', example: 'El museo es fascinante.' },
          { es: 'Pintura', zh: '绘画', pron: '平图拉', example: 'Me gusta la pintura española.' },
          { es: 'Literatura', zh: '文学', pron: '利特拉图拉', example: 'Leo mucha literatura.' },
          { es: 'Cine', zh: '电影', pron: '西内', example: 'Vamos al cine.' },
          { es: 'Música', zh: '音乐', pron: '穆西卡', example: 'Escucho música latina.' },
          { es: 'Historia', zh: '历史', pron: '伊斯托里亚', example: 'Estudio historia.' }
        ],
        grammar: [
          { title: '虚拟式现在时', desc: 'subjuntivo presente' },
          { title: '文化主题深度对话', desc: '艺术与文学讨论' }
        ]
      }
    ]
  },
  C1: {
    level: 'C1',
    title: '高级精通',
    subtitle: 'Avanzado',
    description: '能在专业领域和复杂话题上精准表达',
    color: '#9B7DB8',
    units: [
      {
        id: 'c1-u1',
        title: '商务与学术',
        subtitle: 'Negocios y Académico',
        lessons: 16,
        duration: '约 4 小时',
        vocab: [
          { es: 'Empresa', zh: '公司', pron: '恩普雷萨', example: 'Trabajo en una empresa.' },
          { es: 'Contrato', zh: '合同', pron: '孔特拉托', example: 'Firmamos un contrato.' },
          { es: 'Investigación', zh: '研究', pron: '因贝斯蒂加西翁', example: 'Hago investigación.' },
          { es: 'Universitario', zh: '大学的', pron: '乌尼贝西塔里奥', example: 'Nivel universitario.' },
          { es: 'Debate', zh: '辩论', pron: '德巴德', example: 'Participo en un debate.' },
          { es: 'Propuesta', zh: '建议/提案', pron: '普罗普埃斯塔', example: 'Presento una propuesta.' }
        ],
        grammar: [
          { title: '虚拟式过去时', desc: 'subjuntivo imperfecto' },
          { title: '书面语与正式表达', desc: '商务文书' }
        ]
      }
    ]
  },
  C2: {
    level: 'C2',
    title: '母语水平',
    subtitle: 'Maestro',
    description: '达到母语者水平，精准优雅地使用西班牙语',
    color: '#2D2D2D',
    units: [
      {
        id: 'c2-u1',
        title: '语言艺术',
        subtitle: 'Arte del Lenguaje',
        lessons: 18,
        duration: '约 5 小时',
        vocab: [
          { es: 'Matiz', zh: '细微差别', pron: '马蒂斯', example: 'Cada matiz cuenta.' },
          { es: 'Eloquencia', zh: '雄辩', pron: '埃洛肯西亚', example: 'Admiro su elocuencia.' },
          { es: 'Ironía', zh: '讽刺', pron: '伊罗尼亚', example: 'Usa mucho la ironía.' },
          { es: 'Metáfora', zh: '隐喻', pron: '梅塔福拉', example: 'Una metáfora hermosa.' },
          { es: 'Arcaísmo', zh: '古语', pron: '阿尔卡伊斯莫', example: 'Lee textos con arcaísmos.' },
          { es: 'Dialecto', zh: '方言', pron: '迪亚莱克托', example: 'Hay muchos dialectos.' }
        ],
        grammar: [
          { title: '全部虚拟式时态', desc: '完整掌握' },
          { title: '文学与修辞学', desc: '高级修辞表达' }
        ]
      }
    ]
  }
};

// 所有课程的扁平化词汇表（用于随机复习）
const ALL_VOCAB = [];
Object.values(COURSES).forEach(level => {
  level.units.forEach(unit => {
    unit.vocab.forEach(word => {
      ALL_VOCAB.push({ ...word, level: level.level, unit: unit.title });
    });
  });
});

// 成就系统定义
const ACHIEVEMENTS = [
  { id: 'first-word', title: '初学者', desc: '学习第一个单词', icon: '🌱', points: 10 },
  { id: 'ten-words', title: '勤学小将', desc: '掌握 10 个单词', icon: '📚', points: 50 },
  { id: 'fifty-words', title: '词汇达人', desc: '掌握 50 个单词', icon: '🎯', points: 100 },
  { id: 'first-lesson', title: '踏出第一步', desc: '完成第一课', icon: '⭐', points: 20 },
  { id: 'level-a1', title: '入门口碑', desc: '完成 A1 级别', icon: '🏅', points: 200 },
  { id: 'streak-3', title: '坚持三天', desc: '连续学习 3 天', icon: '🔥', points: 30 },
  { id: 'streak-7', title: '周冠军', desc: '连续学习 7 天', icon: '⚡', points: 100 },
  { id: 'streak-30', title: '月度勇士', desc: '连续学习 30 天', icon: '💎', points: 500 },
  { id: 'grammar-master', title: '语法高手', desc: '完成 20 道语法练习', icon: '🧠', points: 80 },
  { id: 'community', title: '社交达人', desc: '发布第一条社区动态', icon: '💬', points: 30 }
];

// 社区模拟数据
const COMMUNITY_POSTS = [
  {
    id: 'p1',
    author: 'María García',
    avatar: 'M',
    level: 'B2',
    time: '2 小时前',
    content: '¡Hola a todos! 今天学了一个超实用的表达 "estar en las nubes" —— 意思是心不在焉、发呆。西班牙语里有很多有趣的比喻，大家还知道哪些？',
    likes: 24,
    comments: 5,
    tags: ['日常表达', '学习心得']
  },
  {
    id: 'p2',
    author: 'Carlos Rodríguez',
    avatar: 'C',
    level: 'C1',
    time: '5 小时前',
    content: '分享一个学习技巧：每天睡前听 15 分钟西语播客，不用全听懂，让耳朵先适应语音语调。坚持了两个月，听力进步特别明显！🎧',
    likes: 56,
    comments: 12,
    tags: ['学习方法', '听力']
  },
  {
    id: 'p3',
    author: 'Ana López',
    avatar: 'A',
    level: 'A2',
    time: '昨天',
    content: '终于完成了 A1 课程！🎉 感谢群里大家的帮助，一开始真的觉得动词变位好难，但现在已经能简单对话了。下一站 A2，一起加油！',
    likes: 89,
    comments: 18,
    tags: ['毕业', '成就']
  },
  {
    id: 'p4',
    author: 'Pedro Martínez',
    avatar: 'P',
    level: 'B1',
    time: '2 天前',
    content: '推荐一部西语剧：《La Casa de Papel》虽然剧情紧张，但语速适中，里面的日常对话特别适合学习！已经刷了三遍了 😄',
    likes: 42,
    comments: 8,
    tags: ['影视', '推荐']
  }
];
