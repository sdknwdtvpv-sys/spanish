#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 77：C2 补「数字文化与网络社会」单元（C2 → 18）

为什么补这个：C2 已有「信息生态」相关精读，但单元层面没有数字文化与网络社会
这一语域（平台资本主义、算法治理、数字公地、设计即规制）。
这是 C2 阅读（技术批评、文化评论）的核心词汇场。

所有词头已用全库比对校验：与现有 6200+ 词条零重复。
"""

BATCH = {
    'C2': [
        {
            'id': 'c2-u18', 'title': '数字文化与网络社会', 'subtitle': 'Cibercultura y Sociedad Digital',
            'lessons': 12, 'duration': '约 50 分钟',
            'vocab': [
                ('La cibercultura', '网络文化', 'La cibercultura transformó las relaciones sociales.'),
                ('El ciberespacio', '网络空间', 'El ciberespacio no tiene fronteras claras.'),
                ('La realidad virtual', '虚拟现实', 'La realidad virtual ya se usa en terapia.'),
                ('La realidad aumentada', '增强现实', 'La realidad aumentada añade capas al mundo real.'),
                ('La simulación inmersiva', '沉浸式模拟', 'La simulación inmersiva entrena sin riesgo.'),
                ('El metaverso', '元宇宙', 'El metaverso promete mundos persistentes.'),
                ('El avatar', '虚拟化身', 'Su avatar no se parece a él.'),
                ('La identidad en línea', '网络身份', 'La identidad en línea se construye a trozos.'),
                ('El anonimato en la red', '网络匿名', 'El anonimato en la red protege y encubre.'),
                ('La desinhibición en línea', '网络去抑制', 'La desinhibición en línea explica insultos que nadie diría en persona.'),
                ('La reputación en línea', '网络声誉', 'La reputación en línea cuesta años y se pierde en un día.'),
                ('La sobreexposición', '过度曝光', 'La sobreexposición de menores preocupa a los expertos.'),
                ('La vigilancia mutua', '相互监视', 'La vigilancia mutua es propia de las redes.'),
                ('El panóptico digital', '数字全景监狱', 'El panóptico digital invierte la mirada: todos miran a todos.'),
                ('La sociedad de la vigilancia', '监视社会', 'La sociedad de la vigilancia normaliza el rastreo.'),
                ('El capitalismo de plataformas', '平台资本主义', 'El capitalismo de plataformas extrae valor del uso.'),
                ('La economía colaborativa', '共享经济', 'La economía colaborativa difumina la relación laboral.'),
                ('El trabajo por encargo', '任务式工作', 'El trabajo por encargo paga por tarea, no por hora.'),
                ('El trabajador de plataforma', '平台工作者', 'El trabajador de plataforma carece de convenio.'),
                ('La precariedad algorítmica', '算法性不稳定', 'La precariedad algorítmica depende de una puntuación opaca.'),
                ('La gestión algorítmica', '算法管理', 'La gestión algorítmica asigna turnos sin jefe visible.'),
                ('La evaluación automática', '自动评估', 'La evaluación automática decide sin explicar.'),
                ('La meritocracia digital', '数字精英主义', 'La meritocracia digital premia la visibilidad, no el mérito.'),
                ('La exclusión digital', '数字排斥', 'La exclusión digital agrava desigualdades previas.'),
                ('La alfabetización crítica', '批判性素养', 'La alfabetización crítica enseña a leer los medios.'),
                ('La competencia mediática', '媒介素养', 'La competencia mediática no se limita a usar aparatos.'),
                ('La esfera pública digital', '数字公共领域', 'La esfera pública digital fragmenta el debate.'),
                ('La desintermediación', '去中介化', 'La desintermediación elimina al intermediario, no el poder.'),
                ('La sobreabundancia informativa', '信息过载', 'La sobreabundancia informativa paraliza la decisión.'),
                ('La gamificación', '游戏化', 'La gamificación aumenta el uso y también la dependencia.'),
                ('La recompensa variable', '可变奖励', 'La recompensa variable engancha como una tragaperras.'),
                ('El diseño persuasivo', '说服性设计', 'El diseño persuasivo busca el clic, no el bienestar.'),
                ('La interfaz adictiva', '成瘾性界面', 'La interfaz adictiva se diseñó a propósito.'),
                ('El scroll infinito', '无限滚动', 'El scroll infinito elimina cualquier final natural.'),
                ('La dopamina digital', '数字多巴胺', 'La dopamina digital explica el uso compulsivo.'),
                ('La desconexión voluntaria', '主动断连', 'La desconexión voluntaria se practica cada vez más.'),
                ('El minimalismo digital', '数字极简主义', 'El minimalismo digital reduce aplicaciones y notificaciones.'),
                ('La dieta informativa', '信息饮食', 'La dieta informativa importa tanto como la alimentaria.'),
                ('La curaduría de contenidos', '内容策展', 'La curaduría de contenidos aporta criterio.'),
                ('La polarización afectiva', '情感极化', 'La polarización afectiva hace imposible el acuerdo.'),
                ('La tribalización digital', '数字部落化', 'La tribalización digital agrupa por afinidad y rechazo.'),
                ('El meme como unidad cultural', '作为文化单位的模因', 'El meme como unidad cultural se replica y muta.'),
                ('La cultura del like', '点赞文化', 'La cultura del like convierte la opinión en métrica.'),
                ('La comparación social ascendente', '上行社会比较', 'La comparación social ascendente daña la autoestima.'),
                ('La accesibilidad digital', '数字无障碍', 'La accesibilidad digital beneficia a todos.'),
                ('El sesgo de la interfaz', '界面偏见', 'El sesgo de la interfaz orienta la decisión sin avisar.'),
                ('La explicabilidad', '可解释性', 'La explicabilidad es requisito para recurrir una decisión.'),
                ('La auditabilidad del sistema', '系统可审计性', 'La auditabilidad del sistema permite detectar sesgos.'),
                ('La responsabilidad difusa', '责任分散', 'La responsabilidad difusa diluye la culpa entre muchos actores.'),
                ('La gobernanza de datos', '数据治理', 'La gobernanza de datos fija quién decide y con qué límites.'),
                ('El procomún digital', '数字公地', 'El procomún digital se sostiene sin dueño único.'),
                ('La cultura del compartir', '分享文化', 'La cultura del compartir choca con los derechos de autor.'),
                ('La ética del cuidado digital', '数字关怀伦理', 'La ética del cuidado digital piensa en el vulnerable.'),
                ('La corregulación', '共同规制', 'La corregulación reparte la norma entre Estado y plataformas.'),
                ('La regulación por diseño', '设计即规制', 'La regulación por diseño actúa antes del daño.'),
                ('La protección por defecto', '默认保护', 'La protección por defecto no exige configurar nada.'),
                ('La privacidad desde el diseño', '隐私即设计', 'La privacidad desde el diseño evita recoger de más.'),
                ('La minimización de datos', '数据最小化', 'La minimización de datos limita lo que se guarda.'),
                ('La limitación de la finalidad', '目的限定', 'La limitación de la finalidad prohíbe reusar datos sin motivo.'),
                ('La desmonopolización', '去垄断化', 'La desmonopolización busca mercado, no castigo.'),
                ('La infraestructura pública digital', '数字公共基础设施', 'La infraestructura pública digital es un bien común.'),
                ('El servicio esencial digital', '关键数字服务', 'El servicio esencial digital exige continuidad y acceso.'),
            ],
            'grammar': [
                {'title': '抽象名词化与无人称论述（文化批评）', 'desc': '把动作写成名词以进行批判：vigilar → la vigilancia，exponerse → la sobreexposición，diseñar → el diseño。文化批评常用「La + 名词 + 形容词 + 动词」框架：La sobreexposición voluntaria debilita la intimidad。'},
                {'title': '让步、限定与批判性分寸', 'desc': 'si bien / en la medida en que / conviene no confundir… con… / sería reduccionista afirmar que。注意 sería reduccionista（那样说就太简化了）是学术批评的常见缓和表达。'},
                {'title': '表达因果与后果链', 'desc': 'de ahí que + 虚拟式 / lo que se traduce en / a fuerza de + 不定式 / en tanto que。a fuerza de（由于不断……）后接不定式：A fuerza de repetirlo, acabó creyéndolo。'},
            ],
        },
    ],
}
