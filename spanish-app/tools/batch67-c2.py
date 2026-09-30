#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 67：C2 补 1 个单元（犯罪、刑罚与司法实践）

为什么补这个：C2 是单元数最少的等级之一（16 个），且缺少司法实践语域。
C2 已有「法学与公正」（法理层面）与「专业语域与正式文书」（文书格式），
但没有处理刑事诉讼、刑罚执行与犯罪学这一实证层面，
而这正是 C2 阅读（法律评论、社会调查）的常见语域。

所有词头已用全库比对校验：与现有 5600+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'C2': [
        {
            'id': 'c2-u17', 'title': '犯罪、刑罚与司法实践', 'subtitle': 'Delito, Pena y Justicia Penal',
            'lessons': 12, 'duration': '约 50 分钟',
            'vocab': [
('El delito grave', '重罪', 'El delito grave se castiga con penas largas.'),
                ('El delito leve', '轻罪', 'El delito leve se resuelve con multa.'),
                ('El crimen organizado', '有组织犯罪', 'El crimen organizado opera en redes.'),
                ('La criminalidad', '犯罪率、犯罪现象', 'La criminalidad bajó en las ciudades grandes.'),
                ('La tasa de criminalidad', '犯罪率', 'La tasa de criminalidad se mide por mil habitantes.'),
                ('El infractor', '违法者', 'El infractor reconoció los hechos.'),
                ('El delincuente', '犯罪者', 'El delincuente actuó en solitario.'),
                ('El reincidente', '累犯', 'El reincidente volvió a delinquir.'),
                ('El cómplice', '共犯', 'El cómplice facilitó la entrada.'),
                ('El encubrimiento', '包庇、隐匿', 'El encubrimiento también es delito.'),
                ('La connivencia', '串通、共谋', 'Hubo connivencia con la administración.'),
                ('El autor material', '实行犯', 'El autor material fue detenido en la frontera.'),
                ('El autor intelectual', '主谋', 'El autor intelectual nunca dio la cara.'),
                ('La tentativa', '犯罪未遂', 'La tentativa se castiga con pena menor.'),
                ('El delito frustrado', '犯罪未得逞', 'El delito frustrado quedó en grado de tentativa.'),
                ('La consumación', '既遂', 'La consumación exige el resultado previsto.'),
                ('La imprudencia', '过失', 'La imprudencia causó el accidente.'),
                ('El delito doloso', '故意犯罪', 'El delito doloso requiere intención.'),
                ('El delito imprudente', '过失犯罪', 'El delito imprudente se castiga más levemente.'),
                ('La atenuante', '减轻情节', 'La atenuante redujo la pena.'),
                ('La agravante', '加重情节', 'La agravante de reincidencia se apreció.'),
                ('El eximente', '免责事由', 'El eximente de legítima defensa se admitió.'),
                ('La responsabilidad penal', '刑事责任', 'La responsabilidad penal es personal.'),
                ('La inimputabilidad', '无刑事责任能力', 'La inimputabilidad exige informe psiquiátrico.'),
                ('La prescripción del delito', '追诉时效', 'La prescripción del delito opera por el paso del tiempo.'),
                ('El arresto', '逮捕、拘留', 'El arresto se practicó sin resistencia.'),
                ('La prisión provisional', '审前羁押', 'La prisión provisional es una medida cautelar.'),
                ('La libertad bajo fianza', '保释', 'Se le concedió la libertad bajo fianza.'),
                ('La medida cautelar', '强制措施', 'La medida cautelar busca evitar la fuga.'),
                ('El auto de prisión', '羁押裁定', 'El auto de prisión lo firmó el juez.'),
                ('El procesamiento', '起诉、立案', 'El procesamiento se notificó ayer.'),
                ('La instrucción del sumario', '预审', 'La instrucción del sumario duró un año.'),
                ('El sumario', '案卷', 'El sumario reúne todas las diligencias.'),
                ('La prueba pericial', '鉴定证据', 'La prueba pericial fue decisiva.'),
                ('El testigo protegido', '受保护证人', 'El testigo protegido declaró sin presencia pública.'),
                ('El interrogatorio', '讯问', 'El interrogatorio duró tres horas.'),
                ('La confesión', '供认', 'La confesión se prestó ante el juez.'),
                ('El careo', '对质', 'El careo confrontó las dos versiones.'),
                ('La rueda de reconocimiento', '辨认队列', 'La rueda de reconocimiento no fue concluyente.'),
                ('La huella dactilar', '指纹', 'La huella dactilar coincidió con el registro.'),
                ('El ADN', 'DNA', 'El ADN confirmó la identidad.'),
                ('La cadena de custodia', '证据保管链', 'La cadena de custodia garantiza la prueba.'),
                ('La prueba indiciaria', '间接证据', 'La prueba indiciaria basta si es sólida.'),
                ('La duda razonable', '合理怀疑', 'Sin superar la duda razonable no hay condena.'),
                ('La vista oral', '庭审', 'La vista oral se celebró a puerta cerrada.'),
                ('El magistrado', '法官（合议庭成员）', 'El magistrado resumió el caso.'),
                ('El fiscal', '检察官', 'El fiscal pidió ocho años.'),
                ('El abogado defensor', '辩护律师', 'El abogado defensor alegó atenuantes.'),
                ('La acusación particular', '自诉方', 'La acusación particular pidió prisión.'),
                ('El ministerio fiscal', '检察院', 'El ministerio fiscal sostuvo la acusación.'),
                ('La pena privativa de libertad', '剥夺自由刑', 'La pena privativa de libertad se cumplió en régimen abierto.'),
                ('Los trabajos en beneficio de la comunidad', '社区服务刑', 'Los trabajos en beneficio de la comunidad sustituyen la cárcel.'),
                ('La libertad condicional', '假释', 'La libertad condicional se concedió al tercer grado.'),
                ('El cumplimiento de la pena', '服刑', 'El cumplimiento de la pena duró cinco años.'),
                ('La suspensión de la pena', '缓刑', 'La suspensión de la pena evitó el ingreso.'),
                ('La amnistía penal', '大赦', 'La amnistía penal borró los antecedentes.'),
            ],
            'grammar': [
                {'title': '法律评论文本的无人称与被动', 'desc': 'se imputa / se le acusa de / se le condena por / se aprecia la agravante de。注意西班牙语用「与格代词 + 被动」：Se le acusa de fraude（他被指控欺诈），le 不可省略。'},
                {'title': '表达条件、后果与程度的法律句式', 'desc': 'a menos que + 虚拟式 / en el supuesto de que + 虚拟式 / siempre que concurran los requisitos。后果句式：de concurrir la agravante, la pena se eleva（一旦出现加重情节，刑罚提高）。'},
                {'title': '批评性表述的分寸', 'desc': 'conviene distinguir entre / no cabe confundir / sería un error reducir… a。学术与法律评论中常用「不宜混淆 A 与 B」的框架：No cabe confundir la presunción de inocencia con la impunidad。'},
            ],
        },
    ],
}
