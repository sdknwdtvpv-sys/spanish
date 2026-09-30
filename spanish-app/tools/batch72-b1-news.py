#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 72a：B1 补「新闻与时事」单元

为什么补这个：B1 有「媒体与信息」（b1-u10，偏信息素养），但没有新闻实务语域 ——
报纸版面、消息来源、报道伦理这些词。这是 B1 阅读（简易新闻）的必备词汇。

所有词头已用全库比对校验：与现有 5900+ 词条零重复。
"""

BATCH = {
    'B1': [
        {
            'id': 'b1-u19', 'title': '新闻与时事', 'subtitle': 'Prensa y Actualidad',
            'lessons': 12, 'duration': '约 45 分钟',
            'vocab': [
                ('El subtítulo', '副标题', 'El subtítulo amplía la información del titular.'),
                ('La entradilla', '导语', 'La entradilla resume lo esencial en dos líneas.'),
                ('El cuerpo de la noticia', '正文', 'El cuerpo de la noticia desarrolla los hechos.'),
                ('El artículo de opinión', '评论文章', 'El artículo de opinión no es una noticia.'),
                ('La carta al director', '读者来信', 'Envió una carta al director muy crítica.'),
                ('La contraportada', '封底', 'La contraportada trae un reportaje largo.'),
                ('La edición digital', '数字版', 'La edición digital se actualiza cada hora.'),
                ('El quiosco', '报刊亭', 'Compro la revista en el quiosco de la esquina.'),
                ('La suscripción al periódico', '报纸订阅', 'Canceló la suscripción al periódico.'),
                ('El enviado especial', '特派记者', 'El enviado especial cubrió el conflicto.'),
                ('La agencia de noticias', '通讯社', 'La agencia de noticias difundió el comunicado.'),
                ('La fuente oficial', '官方消息源', 'La fuente oficial confirmó el acuerdo.'),
                ('El comunicado de prensa', '新闻稿', 'El ministerio publicó un comunicado de prensa.'),
                ('La comparecencia', '公开露面说明', 'La comparecencia duró veinte minutos.'),
                ('La declaración oficial', '官方声明', 'La declaración oficial llegó al mediodía.'),
                ('La noticia de última hora', '突发新闻', 'La noticia de última hora interrumpió el programa.'),
                ('El avance informativo', '新闻提要', 'El avance informativo resume lo que viene.'),
                ('El reportaje de investigación', '调查报道', 'El reportaje de investigación destapó el caso.'),
                ('El especial', '专题', 'El especial ocupa diez páginas.'),
                ('El seguimiento informativo', '后续报道', 'El seguimiento informativo duró semanas.'),
                ('La emisión en directo', '直播', 'La emisión en directo se cortó por un fallo.'),
                ('El informativo', '新闻节目', 'El informativo empieza a las nueve.'),
                ('El telediario', '电视新闻', 'El telediario abrió con esa noticia.'),
                ('El avance del tiempo', '天气预报', 'El avance del tiempo anuncia lluvias.'),
                ('La tertulia', '座谈节目', 'La tertulia debatió sobre la reforma.'),
                ('El debate televisado', '电视辩论', 'El debate televisado reunió a cinco candidatos.'),
                ('El contertulio', '座谈嘉宾', 'Un contertulio defendió la medida.'),
                ('El presentador', '主持人', 'El presentador condujo el programa con calma.'),
                ('La cuota de pantalla', '收视份额', 'La cuota de pantalla bajó este mes.'),
                ('La publicidad institucional', '机构广告', 'La publicidad institucional informa de la campaña.'),
                ('La campaña informativa', '宣传普及活动', 'La campaña informativa explicó la nueva norma.'),
                ('La sección de sucesos', '社会新闻版', 'La sección de sucesos cubre accidentes y delitos.'),
                ('La crónica local', '地方报道', 'La crónica local describe la fiesta del barrio.'),
                ('La noticia internacional', '国际新闻', 'La noticia internacional abrió el informativo.'),
                ('La cumbre', '峰会', 'La cumbre reunió a veinte países.'),
                ('La rueda de negociaciones', '谈判轮次', 'La rueda de negociaciones terminó sin acuerdo.'),
                ('El acuerdo alcanzado', '达成的协议', 'El acuerdo alcanzado se firmará en junio.'),
                ('La declaración conjunta', '联合声明', 'La declaración conjunta evitó hablar de sanciones.'),
                ('La fuente gubernamental', '政府消息源', 'Una fuente gubernamental adelantó la decisión.'),
                ('El portavoz oficial', '官方发言人', 'El portavoz oficial no quiso comentar.'),
                ('El off the record', '非正式发言', 'Lo dijo off the record.'),
                ('La confidencialidad de la fuente', '信源保密', 'La confidencialidad de la fuente es un principio.'),
                ('El derecho a la información', '知情权', 'El derecho a la información es un derecho constitucional.'),
                ('La censura previa', '事前审查', 'La censura previa está prohibida.'),
                ('La verificación de la noticia', '核实新闻', 'La verificación de la noticia exige dos fuentes.'),
                ('El desmentido', '辟谣、否认', 'El desmentido llegó dos días después.'),
                ('La línea editorial', '编辑方针', 'La línea editorial del medio es conocida.'),
                ('La independencia editorial', '编辑独立性', 'La independencia editorial garantiza el pluralismo.'),
                ('El conflicto de intereses', '利益冲突', 'Hubo un conflicto de intereses evidente.'),
                ('La publicidad encubierta', '隐性广告', 'La publicidad encubierta engaña al lector.'),
                ('El contenido patrocinado', '赞助内容', 'El contenido patrocinado debe marcarse.'),
                ('El código deontológico', '职业道德准则', 'El código deontológico regula la profesión.'),
                ('La ética periodística', '新闻伦理', 'La ética periodística protege a las fuentes.'),
                ('El derecho al honor', '名誉权', 'El derecho al honor limita lo publicable.'),
                ('La intimidad', '隐私（私生活）', 'La intimidad de los menores está protegida.'),
                ('La presunción de inocencia informativa', '报道中的无罪推定', 'La presunción de inocencia informativa evita juicios paralelos.'),
                ('El tratamiento informativo', '报道方式', 'El tratamiento informativo de la tragedia fue respetuoso.'),
                ('La revictimización', '二次伤害', 'La revictimización se evita no repitiendo imágenes.'),
                ('El morbo', '猎奇心', 'Apelar al morbo vende, pero degrada.'),
                ('La prensa amarilla', '小报新闻', 'La prensa amarilla exagera los detalles.'),
                ('El periodismo de calidad', '优质新闻', 'El periodismo de calidad cuesta dinero.'),
                ('El periodismo ciudadano', '公民新闻', 'El periodismo ciudadano grabó el suceso.'),
                ('La lectura crítica de la prensa', '批判性阅读报纸', 'La lectura crítica de la prensa distingue hechos de opiniones.'),
            ],
            'grammar': [
                {'title': '转述新闻内容的句式', 'desc': 'Según fuentes oficiales… / Al parecer… / Se informa de que + 陈述式 / Fuentes cercanas al caso aseguran que…。注意「据……说」用 según + 名词，不用 según de。'},
                {'title': '新闻中的被动与无人称', 'desc': 'Se ha informado de que… / Se espera que + 虚拟式 / Ha sido detenido / Fue aprobado por el Congreso。新闻语体大量使用自复被动与无人称 se 来隐去施事。'},
                {'title': '引用与归属的表达', 'desc': 'declarar que / afirmar que / asegurar que / negar que（+ 虚拟式）/ desmentir que。注意 negar 与 desmentir 后面用虚拟式：Negó que hubiera habido presiones。'},
            ],
        },
    ],
}
