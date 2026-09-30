#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 69：C1 补 1 个单元（科研诚信与学术发表）

为什么补这个：C1 已有「学术研究与论文写作」「学术写作与研究方法」两个单元，
但都聚焦写作方法与研究方法本身，缺少「科研诚信、同行评审与学术发表」这一
制度与伦理层面 —— 而这是 C1 学术阅读（论文、社论、期刊说明）的常见语域。
补完后六个等级单元数统一为 18-19。

所有词头已用全库比对校验：与现有 5700+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'C1': [
        {
            'id': 'c1-u21', 'title': '科研诚信与学术发表', 'subtitle': 'Integridad Científica y Publicación Académica',
            'lessons': 12, 'duration': '约 50 分钟',
            'vocab': [
('La integridad científica', '科研诚信', 'La integridad científica sostiene la confianza pública.'),
                ('La conducta responsable en investigación', '负责任的研究行为', 'La conducta responsable en investigación se aprende.'),
                ('La mala conducta científica', '科研不端行为', 'La mala conducta científica se sanciona.'),
                ('La fabricación de datos', '数据捏造', 'La fabricación de datos es la falta más grave.'),
                ('La falsificación de datos', '数据篡改', 'La falsificación de datos invalida el estudio.'),
                ('La manipulación de resultados', '结果操纵', 'La manipulación de resultados engaña al lector.'),
                ('La selección selectiva de datos', '选择性报告数据', 'La selección selectiva de datos exagera el efecto.'),
                ('El resultado negativo', '阴性结果', 'El resultado negativo también aporta información.'),
                ('El resultado no significativo', '无统计学意义的结果', 'El resultado no significativo rara vez se publica.'),
                ('La crisis de replicación', '可重复性危机', 'La crisis de replicación afectó a la psicología.'),
                ('El preregistro', '预注册', 'El preregistro fija el análisis antes de recoger datos.'),
                ('La hipótesis preregistrada', '预注册假设', 'La hipótesis preregistrada evita el ajuste post hoc.'),
                ('El protocolo previo', '事前方案', 'El protocolo previo se publicó en abierto.'),
                ('El revisor', '评审人', 'El revisor señaló dos problemas metodológicos.'),
                ('El informe de revisión', '评审意见', 'El informe de revisión fue detallado.'),
                ('La revisión a ciegas', '盲审', 'La revisión a ciegas oculta la identidad.'),
                ('El conflicto de interés', '利益冲突', 'El conflicto de interés debe declararse.'),
                ('La declaración de conflicto', '利益冲突声明', 'La declaración de conflicto aparece al final.'),
                ('La financiación de la investigación', '研究资助', 'La financiación de la investigación condiciona temas.'),
                ('El patrocinador', '资助方', 'El patrocinador no interviene en el diseño.'),
                ('La independencia del investigador', '研究者独立性', 'La independencia del investigador es un requisito ético.'),
                ('El orden de autoría', '作者排序', 'El orden de autoría refleja la contribución.'),
                ('El autor corresponsal', '通讯作者', 'El autor corresponsal gestiona la revisión.'),
                ('La autoría honoraria', '挂名作者', 'La autoría honoraria está mal vista.'),
                ('La autoría fantasma', '代写作者', 'La autoría fantasma oculta a quien escribió.'),
                ('La declaración de contribuciones', '贡献声明', 'La declaración de contribuciones detalla cada tarea.'),
                ('La afiliación institucional', '机构署名', 'La afiliación institucional consta en la cabecera.'),
                ('La disponibilidad de datos', '数据可得性', 'La disponibilidad de datos permite verificar.'),
                ('Los datos abiertos', '开放数据', 'Los datos abiertos aceleran la ciencia.'),
                ('El repositorio', '数据仓储', 'El repositorio asigna un identificador persistente.'),
                ('El código abierto', '开源代码', 'El código abierto permite repetir el análisis.'),
                ('El cuaderno de laboratorio', '实验记录本', 'El cuaderno de laboratorio documenta cada ensayo.'),
                ('La trazabilidad del dato', '数据可追溯性', 'La trazabilidad del dato exige registros completos.'),
                ('La auditoría de datos', '数据审计', 'La auditoría de datos detectó inconsistencias.'),
                ('La corrección de un artículo', '论文更正', 'La corrección de un artículo mantiene el registro.'),
                ('La fe de erratas', '勘误表', 'La fe de erratas corrige errores menores.'),
                ('La nota editorial', '编辑部说明', 'La nota editorial explicó la decisión.'),
                ('La expresión de preocupación', '关注声明', 'La expresión de preocupación avisa a los lectores.'),
                ('La revista depredadora', '掠夺性期刊', 'La revista depredadora cobra sin revisar.'),
                ('La métrica alternativa', '替代计量', 'La métrica alternativa mide difusión en redes.'),
                ('El índice h', 'h 指数', 'El índice h combina productividad y citas.'),
                ('La citación', '引用', 'La citación sostiene la trazabilidad del argumento.'),
                ('La autocita', '自引', 'La autocita excesiva distorsiona las métricas.'),
                ('La cita coercitiva', '强制引用', 'La cita coercitiva la impone el editor.'),
                ('La carta al editor', '致编辑信', 'La carta al editor discute un artículo reciente.'),
                ('El protocolo de revisión', '综述方案', 'El protocolo de revisión se registra antes de empezar.'),
                ('El sesgo de selección de estudios', '研究选择偏倚', 'El sesgo de selección de estudios infla el efecto.'),
                ('La heterogeneidad', '异质性', 'La heterogeneidad entre estudios complica la síntesis.'),
                ('La transparencia metodológica', '方法透明性', 'La transparencia metodológica permite evaluar el rigor.'),
                ('La lista de verificación', '清单', 'La lista de verificación estandariza el reporte.'),
                ('El estándar de reporte', '报告规范', 'El estándar de reporte unifica la presentación.'),
                ('La réplica del estudio', '研究复现', 'La réplica del estudio confirmó el hallazgo.'),
                ('La validez interna', '内部效度', 'La validez interna depende del diseño.'),
                ('La amenaza a la validez', '对效度的威胁', 'La amenaza a la validez se detalla en las limitaciones.'),
                ('La muestra no representativa', '非代表性样本', 'La muestra no representativa limita la generalización.'),
                ('El cegamiento', '盲法', 'El cegamiento reduce el sesgo de expectativa.'),
            ],
            'grammar': [
                {'title': '学术规范文本的无人称与义务表达', 'desc': 'se debe declarar / queda prohibido / es exigible que + 虚拟式 / cabe señalar que。学术规范常用「应当」结构：Debe declararse cualquier conflicto de interés。'},
                {'title': '表达限定、条件与例外的学术句式', 'desc': 'siempre que se cumplan los criterios / a condición de que + 虚拟式 / salvo en los casos previstos。注意 salvo 后接名词不用 que：salvo error material。'},
                {'title': '评价性表达与分寸（学术语境）', 'desc': 'conviene matizar / no cabe inferir / los resultados sugieren que。学术文本避免绝对化：用 los resultados sugieren（结果提示）而非 los resultados demuestran（结果证明）。'},
            ],
        },
    ],
}
