#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 65：A1 补 1 个单元（日常礼貌用语与社交表达）

为什么补这个：A1 有 18 个单元、词量 705（六级最低），且缺少一个极实用的单元 ——
问候、致谢、致歉、祝贺、请求许可这些「社交礼貌用语」。
这类表达散落在 a1-u1（问候与介绍）与 a1-u16（补充基础词）里，
但没有独立成体系；而这些恰恰是初学者最先要用到的内容。
（对照：听力/口语语料里大量使用这些表达，但词库没有系统收录。）

所有词头已用全库比对校验：与现有 5500+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'A1': [
        {
            'id': 'a1-u21', 'title': '日常礼貌用语与社交表达', 'subtitle': 'Fórmulas de Cortesía y Expresiones Sociales',
            'lessons': 10, 'duration': '约 35 分钟',
            'vocab': [
('¿Cómo te va?', '你怎么样？（较随意）', '¡Hola! ¿Cómo te va?'),
                ('¿Cómo andas?', '你近来怎么样？', '¿Cómo andas? Hace tiempo que no te veo.'),
                ('Muy bien, gracias', '很好，谢谢', 'Muy bien, gracias, ¿y tú?'),
                ('Más o menos', '马马虎虎', 'Más o menos, con mucho trabajo.'),
                ('Fatal', '糟透了', 'Fatal, perdí el móvil.'),
                ('Encantado de conocerte', '很高兴认识你', 'Encantado de conocerte, soy Luis.'),
                ('El gusto es mío', '幸会的是我', 'El gusto es mío, gracias por venir.'),
                ('¿Y tú?', '你呢？', 'Yo estoy bien, ¿y tú?'),
                ('Cuídate', '照顾好自己', 'Hasta pronto, cuídate.'),
                ('Que te vaya bien', '祝你好运、一切顺利', 'Nos vemos el lunes, que te vaya bien.'),
                ('Hasta pronto', '回头见', 'Hasta pronto, un abrazo.'),
                ('Que tengas un buen día', '祝你今天愉快', 'Adiós, que tengas un buen día.'),
                ('Bienvenido', '欢迎（男）', 'Bienvenido a casa.'),
                ('Gracias por todo', '感谢一切', 'Gracias por todo lo que hiciste.'),
                ('Muchísimas gracias', '万分感谢', 'Muchísimas gracias por tu ayuda.'),
                ('No hay de qué', '不客气（回应感谢）', 'No hay de qué, para eso estamos.'),
                ('Con mucho gusto', '很乐意', 'Con mucho gusto, cuando quieras.'),
                ('Un placer', '很荣幸', 'Un placer ayudarte.'),
                ('Perdone', '请原谅（对您）', 'Perdone, no le había visto.'),
                ('Disculpe', '劳驾、抱歉（对您）', 'Disculpe, ¿tiene un momento?'),
                ('Lo siento', '很抱歉', 'Lo siento, llegué tarde.'),
                ('Lo siento mucho', '非常抱歉', 'Lo siento mucho por lo ocurrido.'),
                ('No pasa nada', '没关系', 'No pasa nada, tranquilo.'),
                ('No te preocupes', '别担心', 'No te preocupes por la hora.'),
                ('Fue sin querer', '不是故意的', 'Perdón, fue sin querer.'),
                ('Te pido disculpas', '我向你道歉', 'Te pido disculpas por lo de ayer.'),
                ('Acepto tus disculpas', '我接受你的道歉', 'Acepto tus disculpas, no ha pasado nada.'),
                ('¿Me puedes ayudar?', '你能帮我吗？', '¿Me puedes ayudar con la maleta?'),
                ('¿Podría ayudarme?', '您能帮我一下吗？（礼貌）', '¿Podría ayudarme, por favor?'),
                ('Por supuesto', '当然', 'Por supuesto que te acompaño.'),
                ('Cómo no', '当然可以', '¿Me prestas el libro? — Cómo no.'),
                ('De acuerdo', '同意、好的', 'De acuerdo, quedamos a las cinco.'),
                ('Está bien', '行、可以', 'Está bien, lo hago yo.'),
                ('Fenómeno', '好极了（西班牙口语）', 'Fenómeno, así lo hacemos.'),
                ('¡Qué bien!', '太好了！', '¡Qué bien que hayas venido!'),
                ('¡Qué pena!', '真可惜！', '¡Qué pena que no puedas venir!'),
                ('¡Qué lástima!', '真遗憾！', '¡Qué lástima, se acabó el pan!'),
                ('¡Enhorabuena!', '恭喜！（成就）', '¡Enhorabuena por el trabajo!'),
                ('¡Felicidades!', '祝贺！（生日、节日）', '¡Felicidades, ya eres licenciada!'),
                ('¡Mucha suerte!', '祝你好运！', '¡Mucha suerte en el examen!'),
                ('¡Ánimo!', '加油！', '¡Ánimo, ya casi está!'),
                ('¡Salud!', '干杯／祝你健康', '¡Salud! Por los novios.'),
                ('Provecho', '请慢用（饭前）', '¡Que aproveche! — Gracias, igualmente.'),
                ('¡Feliz cumpleaños!', '生日快乐！', '¡Feliz cumpleaños! Aquí tienes tu regalo.'),
                ('¡Feliz año nuevo!', '新年快乐！', '¡Feliz año nuevo a todos!'),
                ('Mis mejores deseos', '致以最美好的祝愿', 'Mis mejores deseos para tu nueva etapa.'),
                ('Que cumplas muchos más', '祝你年年有今日', '¡Feliz cumpleaños! Que cumplas muchos más.'),
                ('Brindemos', '我们来干杯', 'Brindemos por el equipo.'),
                ('Te invito', '我请客', 'Te invito a un café.'),
                ('Invito yo', '我买单', 'Hoy invito yo.'),
                ('¿Te importa si...?', '你介意……吗？', '¿Te importa si abro la ventana?'),
                ('Con permiso', '借过、失陪', 'Con permiso, voy a pasar.'),
            ],
            'grammar': [
                {'title': '礼貌请求与许可：¿Me puedes…? / ¿Podría…?', 'desc': '轻松场合：¿Me puedes ayudar? / ¿Te importa si…?。正式场合用条件式：¿Podría ayudarme? / ¿Le importaría si…?。注意 ¿Te importa si…? 后面用陈述式（¿Te importa si abro la ventana?），不用虚拟式。'},
                {'title': '表达感谢与道歉的固定说法', 'desc': '感谢：Gracias / Muchísimas gracias / Gracias por todo。回应：De nada / No hay de qué / Un placer。道歉：Perdón / Lo siento / Disculpe（对 usted）。回应道歉：No pasa nada / No te preocupes。'},
                {'title': '祝贺、祝愿与敬酒', 'desc': '祝贺成就用 ¡Enhorabuena!，生日与节日用 ¡Felicidades!。祝愿：¡Mucha suerte! / ¡Ánimo! / Que te vaya bien / Que tengas un buen día。敬酒：¡Salud! / Brindemos por…。注意 Que + 虚拟式是西班牙语祝愿的核心句式。'},
            ],
        },
    ],
}
