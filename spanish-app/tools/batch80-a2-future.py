#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 80b：A2 补「未来计划与打算」单元（密度调整）

为什么补这个：A2 有「谈论过去」（a2-u3）与「过去时对比」（a2-u22），
但没有对应的「将来」体系 —— 而「说下一步做什么」是日常对话最高频的功能。
本单元补 ir a + 不定式、意图表达与初阶推测（quizá / puede que + 虚拟式）。

所有词头已用全库比对校验：与现有 6500+ 词条零重复。
"""

BATCH = {
    'A2': [
        {
            'id': 'a2-u25', 'title': '未来计划与打算', 'subtitle': 'Planes de Futuro e Intenciones',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
                ('El plan', '计划', 'Mi plan es estudiar dos horas al día.'),
                ('El propósito', '打算、决心', 'Mi propósito es hacer más deporte.'),
                ('La meta', '目标', 'La meta es aprobar en junio.'),
                ('El objetivo a corto plazo', '短期目标', 'El objetivo a corto plazo es terminar el curso.'),
                ('El objetivo a largo plazo', '长期目标', 'El objetivo a largo plazo es trabajar fuera.'),
                ('La decisión tomada', '已作的决定', 'La decisión tomada ya no cambia.'),
                ('La idea de futuro', '对未来的想法', 'Tiene una idea de futuro muy clara.'),
                ('El proyecto personal', '个人计划', 'Su proyecto personal es abrir un bar.'),
                ('El sueño por cumplir', '待实现的梦想', 'Viajar es su sueño por cumplir.'),
                ('Ilusionarse con', '对……充满期待', 'Se ilusionó con el viaje.'),
                ('Tener previsto', '计划好', 'Tengo previsto salir el viernes.'),
                ('Pensar hacer algo', '打算做某事', 'Pienso apuntarme al gimnasio.'),
                ('Tener la intención de', '有意做某事', 'Tengo la intención de llamarte.'),
                ('Proponerse hacer algo', '立志做某事', 'Me propongo madrugar más.'),
                ('Empeñarse en', '执意要', 'Se empeñó en pagar la cuenta.'),
                ('Decidirse a', '下决心做', 'Por fin se decidió a hablar.'),
                ('Estar a punto de', '正要', 'Estoy a punto de salir.'),
                ('Acabar de', '刚刚', 'Acabo de llegar a casa.'),
                ('En cuanto pueda', '一有机会', 'Te llamo en cuanto pueda.'),
                ('Tan pronto como pueda', '尽快', 'Lo haré tan pronto como pueda.'),
                ('Dentro de poco', '不久', 'Nos vemos dentro de poco.'),
                ('Muy pronto', '很快', 'Llegará muy pronto.'),
                ('El mes que viene', '下个月', 'El mes que viene empiezo el curso.'),
                ('La semana próxima', '下周', 'La semana próxima tengo examen.'),
                ('El año que entra', '明年', 'El año que entra cambio de trabajo.'),
                ('A principios de', '在……初', 'A principios de mayo viajo.'),
                ('A mediados de', '在……中', 'A mediados de junio termino.'),
                ('A finales de', '在……末', 'A finales de año me mudo.'),
                ('Para entonces', '到那时', 'Para entonces ya habré acabado.'),
                ('De aquí a', '从现在到', 'De aquí a un mes lo sabremos.'),
                ('En adelante', '从今往后', 'De hoy en adelante madrugo.'),
                ('De ahora en adelante', '从现在起', 'De ahora en adelante avísame.'),
                ('A partir de ahora', '自现在起', 'A partir de ahora estudio por la mañana.'),
                ('Tarde o temprano', '迟早', 'Tarde o temprano lo entenderá.'),
                ('Antes o después', '早晚', 'Antes o después tenemos que decidir.'),
                ('Si todo va bien', '如果一切顺利', 'Si todo va bien, llego el jueves.'),
                ('Salvo imprevistos', '除非有意外', 'Salvo imprevistos, estaré allí.'),
                ('A no ser que cambie algo', '除非有变动', 'Voy, a no ser que cambie algo.'),
                ('Depende del tiempo', '取决于天气', 'Depende del tiempo: si llueve, no vamos.'),
                ('Ya veremos', '到时再看', 'Ya veremos qué pasa.'),
                ('Me lo pensaré', '我会考虑', 'Me lo pensaré y te digo algo.'),
                ('Voy a intentarlo', '我会试试', 'Voy a intentarlo de nuevo.'),
                ('Haré lo posible', '我会尽力', 'Haré lo posible por llegar.'),
                ('Haré todo lo posible', '我会竭尽全力', 'Haré todo lo posible para ayudarte.'),
                ('Pondré todo de mi parte', '我会全力以赴', 'Pondré todo de mi parte.'),
                ('Me esforzaré por', '我会努力去', 'Me esforzaré por mejorar.'),
                ('Espero que salga bien', '希望能顺利', 'Espero que salga bien la entrevista.'),
                ('Ojalá salga bien', '但愿顺利', 'Ojalá salga bien todo.'),
                ('Ojalá pueda', '但愿我能', 'Ojalá pueda ir contigo.'),
                ('Que te salga bien', '祝你顺利', '¡Que te salga bien el examen!'),
                ('Suerte con el examen', '考试加油', '¡Suerte con el examen!'),
                ('Ánimo con el proyecto', '项目加油', '¡Ánimo con el proyecto!'),
                ('Confío en que', '我相信', 'Confío en que lo conseguirás.'),
                ('Estoy seguro de que', '我确信', 'Estoy seguro de que vendrá.'),
                ('Dudo que salga', '我怀疑能否成', 'Dudo que salga a tiempo.'),
                ('No creo que llegue', '我觉得赶不到', 'No creo que llegue antes de las ocho.'),
                ('Es poco probable que', '可能性不大', 'Es poco probable que llueva.'),
                ('Puede que llueva', '可能会下雨', 'Puede que llueva esta tarde.'),
                ('Quizá vaya', '也许我会去', 'Quizá vaya, no lo sé.'),
                ('Seguramente vendrá', '大概会来', 'Seguramente vendrá con su hermana.'),
                ('Probablemente iré', '很可能会去', 'Probablemente iré el sábado.'),
                ('Sin duda lo haré', '我一定会做', 'Sin duda lo haré.'),
                ('Desde luego que sí', '当然会', '¿Vienes? — Desde luego que sí.'),
            ],
            'grammar': [
                {'title': '表达将来：ir a + 不定式与现在时', 'desc': 'Voy a estudiar（我打算学）/ Mañana tengo examen（明天有考试，用现在时表已安排的将来）。注意西班牙语口语中「计划好的事」常用现在时，不一定用将来时。'},
                {'title': '表达意图与决心', 'desc': 'tener la intención de / pensar + 不定式 / proponerse + 不定式 / empeñarse en / decidirse a。注意 decidirse a 与 empeñarse en 的介词固定，不能互换。'},
                {'title': '表达可能与不确定（初阶）', 'desc': 'Quizá / Tal vez / Puede que + 虚拟式 / Seguramente + 陈述式。注意 puede que 后面必须用虚拟式：Puede que llueva（不能用 llueve）。'},
            ],
        },
    ],
}
