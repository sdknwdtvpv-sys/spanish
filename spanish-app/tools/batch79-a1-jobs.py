#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 79a：A1 补「职业与工作场所」单元（密度调整：A1 每单元 40.5 词 → 目标 45）

为什么补这个：A1 词量 809 是六级最低，且缺少「职业与工作」这一最实用的语域 ——
现有 A1 只在 a1-u4（自我介绍）里出现少数职业词，没有系统覆盖职业名称、
工作条件（全职/兼职/合同）与求职表达。
（对照：A2 有「工作与学习」「工作与职业」，但 A1 层面对应的基础词缺失。）

所有词头已用全库比对校验：与现有 6400+ 词条零重复。
"""

BATCH = {
    'A1': [
        {
            'id': 'a1-u23', 'title': '职业与工作场所', 'subtitle': 'Profesiones y Mundo Laboral',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
('La profesión liberal', '自由职业', 'Ejerce una profesión liberal como notario.'),
                ('El juez', '法官', 'El juez escuchó a las dos partes.'),
                ('El notario', '公证员', 'El notario firmó la escritura.'),
                ('El arquitecto', '建筑师', 'El arquitecto dibujó los planos.'),
                ('El informático', 'IT 从业者', 'El informático arregló el servidor.'),
                ('El programador', '程序员', 'El programador escribió el código.'),
                ('El diseñador gráfico', '平面设计师', 'El diseñador gráfico hizo el cartel.'),
                ('El periodista', '记者', 'El periodista entrevistó al alcalde.'),
                ('El traductor', '笔译员', 'El traductor trabajó toda la noche.'),
                ('El intérprete', '口译员', 'El intérprete tradujo en directo.'),
                ('El bibliotecario', '图书管理员', 'El bibliotecario ordenó los libros.'),
                ('El farmacéutico', '药剂师', 'El farmacéutico explicó la dosis.'),
                ('El veterinario', '兽医', 'El veterinario vacunó al perro.'),
                ('El psicólogo', '心理咨询师', 'El psicólogo escuchó sin juzgar.'),
                ('El pastelero', '糕点师', 'El pastelero decoró la tarta.'),
                ('El carnicero', '肉铺老板', 'El carnicero cortó la carne fina.'),
                ('El pescadero', '鱼贩', 'El pescadero recomendó la merluza.'),
                ('El frutero', '水果商', 'El frutero puso las fresas arriba.'),
                ('La cocinera', '厨师（女）', 'La cocinera probó la salsa.'),
                ('El recepcionista', '前台接待', 'El recepcionista guardó la maleta.'),
                ('El conserje', '门卫、管家', 'El conserje tiene las llaves.'),
                ('El socorrista', '救生员', 'El socorrista vigilaba la piscina.'),
                ('El bombero', '消防员', 'El bombero apagó el incendio.'),
                ('El policía local', '地方警察', 'El policía local dirigía el tráfico.'),
                ('El guardia de seguridad', '保安', 'El guardia de seguridad revisó las bolsas.'),
                ('El cartero', '邮递员', 'El cartero trae el correo a las diez.'),
                ('El repartidor', '送货员', 'El repartidor llegó antes de tiempo.'),
                ('El taxista', '出租车司机', 'El taxista conocía un atajo.'),
                ('El maquinista', '火车司机', 'El maquinista frenó con suavidad.'),
                ('El piloto de avión', '飞行员', 'El piloto avisó de turbulencias.'),
                ('El marinero', '水手', 'El marinero izó la vela.'),
                ('El agricultor', '农民', 'El agricultor riega por la mañana.'),
                ('El ganadero', '牧民', 'El ganadero lleva las vacas al prado.'),
                ('El pescador', '渔民', 'El pescador salió antes del amanecer.'),
                ('El jardinero', '园丁', 'El jardinero poda los setos.'),
                ('El mecánico', '机械师', 'El mecánico cambió el aceite.'),
                ('El dependiente de tienda', '店员', 'El dependiente de tienda me atendió bien.'),
                ('El vendedor ambulante', '流动摊贩', 'El vendedor ambulante monta su puesto.'),
                ('El comercial', '销售员', 'El comercial visitó tres clientes.'),
                ('El administrativo', '行政人员', 'El administrativo archivó los expedientes.'),
                ('El contable', '会计', 'El contable cuadró las cuentas.'),
                ('El asesor fiscal', '税务顾问', 'El asesor fiscal presentó la declaración.'),
                ('El investigador', '研究员', 'El investigador publicó los datos.'),
                ('El científico', '科学家', 'El científico repitió el experimento.'),
                ('El profesor de instituto', '中学教师', 'El profesor de instituto corrige exámenes.'),
                ('El maestro de primaria', '小学教师', 'El maestro de primaria enseña a leer.'),
                ('El catedrático', '大学教授', 'El catedrático dio la conferencia.'),
                ('El aprendiz', '学徒', 'El aprendiz observaba al oficial.'),
                ('El jefe de equipo', '团队主管', 'El jefe de equipo repartió las tareas.'),
                ('El director general', '总经理', 'El director general firmó el acuerdo.'),
                ('El empresario autónomo', '个体经营者', 'El empresario autónomo paga su cuota.'),
                ('El socio fundador', '创始合伙人', 'El socio fundador dejó la empresa.'),
                ('El trabajador autónomo', '自由职业者', 'El trabajador autónomo factura cada mes.'),
                ('El jubilado', '退休者', 'El jubilado va al huerto cada día.'),
                ('El voluntario', '志愿者', 'El voluntario reparte comida.'),
            ],
            'grammar': [
                {'title': '询问与说明职业', 'desc': '¿A qué te dedicas? / ¿En qué trabajas? / Soy profesor / Trabajo de camarero / Trabajo en un banco。注意「当老师」用 ser profesor（身份），「做服务员工作」可用 trabajar de camarero。'},
                {'title': '工作地点的介词搭配', 'desc': 'trabajo en + 地点（trabajo en un hospital）/ trabajo de + 职业（trabajo de enfermera）/ trabajo para + 公司（trabajo para una empresa）/ trabajo como + 职位（trabajo como técnico）。'},
                {'title': '描述工作内容与条件', 'desc': 'Me encargo de + 名词 / Me dedico a + 名词或不定式 / Trabajo a jornada completa / Tengo contrato temporal。注意 encargarse de（负责）与 dedicarse a（从事）的介词固定。'},
            ],
        },
    ],
}
