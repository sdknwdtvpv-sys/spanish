#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 79b：A1 补「季节户外与健康」单元（密度调整）

为什么补这个：a1-u14（天气与季节）与 a1-u18（身体与健康）各只有 50 词左右，
而户外活动与就医流程的具体词（装备、露营地、症状、就医环节）大多是空缺。
本单元不重复 a1-u14/a1-u18 的已收词，只补两者都缺的实操词。

所有词头已用全库比对校验：与现有 6500+ 词条零重复。
"""

BATCH = {
    'A1': [
        {
            'id': 'a1-u24', 'title': '季节户外与健康', 'subtitle': 'Tiempo Libre al Aire Libre y Salud',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
('La escapada', '短途出游', 'Hicimos una escapada de fin de semana.'),
                ('La acampada', '露营', 'La acampada fue en un pinar.'),
                ('La tienda de campaña', '帐篷', 'Montamos la tienda de campaña al atardecer.'),
                ('El saco de dormir', '睡袋', 'El saco de dormir no abrigaba bastante.'),
                ('La hoguera', '篝火', 'Encendimos una hoguera en la playa.'),
                ('El refugio de montaña', '山间小屋', 'Dormimos en un refugio de montaña.'),
                ('La ruta de senderismo', '徒步路线', 'La ruta de senderismo dura cuatro horas.'),
                ('La cima', '山顶', 'Llegamos a la cima al mediodía.'),
                ('La cumbre de la montaña', '山峰', 'La cumbre de la montaña estaba nevada.'),
                ('El valle', '山谷', 'El valle se cubrió de niebla.'),
                ('El pinar', '松林', 'El pinar huele a resina.'),
                ('La pradera', '草地', 'La pradera estaba llena de flores.'),
                ('El sendero', '小径', 'El sendero sube entre rocas.'),
                ('La nieve polvo', '粉雪', 'La nieve polvo es ideal para esquiar.'),
                ('Esquiar', '滑雪', 'Aprendió a esquiar a los seis años.'),
                ('El esquí', '滑雪（运动）', 'El esquí alpino es caro.'),
                ('La tabla de snowboard', '单板滑雪板', 'Alquiló una tabla de snowboard.'),
                ('El trineo', '雪橇', 'Los niños bajaron en trineo.'),
                ('La bufanda de lana', '羊毛围巾', 'Me puse una bufanda de lana.'),
                ('El gorro de invierno', '冬帽', 'El gorro de invierno tapa las orejas.'),
                ('La chaqueta de abrigo', '保暖外套', 'La chaqueta de abrigo pesa poco y abriga.'),
                ('El impermeable', '雨衣', 'Lleva el impermeable por si llueve.'),
                ('Las botas de agua', '雨靴', 'Con botas de agua los charcos no importan.'),
                ('La sombrilla', '遮阳伞', 'La sombrilla no cabía en la arena.'),
                ('La tumbona', '躺椅', 'Alquilamos dos tumbonas.'),
                ('El flotador', '游泳圈', 'El niño no suelta el flotador.'),
                ('El bañador', '泳衣', 'Me compré un bañador nuevo.'),
                ('La toalla de playa', '沙滩巾', 'La toalla de playa ocupa mucho.'),
                ('La crema solar', '防晒霜', 'Ponte crema solar antes de salir.'),
                ('La insolación', '中暑', 'Tuvo una insolación en la playa.'),
                ('El mosquito', '蚊子', 'Un mosquito me picó toda la noche.'),
                ('La picadura', '叮咬', 'La picadura me hinchó el brazo.'),
                ('El botiquín', '急救箱', 'El botiquín está en el maletero.'),
                ('La tirita', '创可贴', 'Le puse una tirita en el dedo.'),
                ('El termómetro', '体温计', 'El termómetro marcaba 38 grados.'),
                ('El médico de cabecera', '家庭医生', 'El médico de cabecera me derivó al especialista.'),
                ('La receta médica', '处方', 'Sin receta médica no dan ese medicamento.'),
                ('El jarabe', '糖浆药', 'El jarabe calma la tos.'),
                ('La pomada', '药膏', 'La pomada alivia el picor.'),
                ('El apósito', '敷料', 'Cambió el apósito cada día.'),
                ('El análisis de sangre', '验血', 'El análisis de sangre salió normal.'),
                ('El yeso', '石膏', 'Llevó el yeso seis semanas.'),
                ('La muleta', '拐杖', 'Caminó con muletas un mes.'),
                ('La venda', '绷带', 'La venda cubre la herida.'),
                ('El resfriado común', '普通感冒', 'El resfriado común dura una semana.'),
                ('La fiebre alta', '高烧', 'La fiebre alta bajó por la noche.'),
                ('La tos seca', '干咳', 'La tos seca no deja dormir.'),
                ('El estornudo', '喷嚏', 'El estornudo se contagia.'),
                ('El mareo', '头晕', 'El mareo pasó al sentarse.'),
                ('La caída', '跌倒', 'La caída le dejó un moratón.'),
                ('El golpe', '撞击', 'Se dio un golpe en la rodilla.'),
                ('El rasguño', '划伤', 'Fue solo un rasguño.'),
                ('La cicatriz', '伤疤', 'Le quedó una cicatriz pequeña.'),
                ('La insolación leve', '轻度中暑', 'La insolación leve se trata con sombra y agua.'),
                ('El dolor muscular', '肌肉酸痛', 'El dolor muscular aparece al día siguiente.'),
                ('La torcedura', '扭伤', 'Se hizo una torcedura jugando.'),
                ('El masaje', '按摩', 'Un masaje relaja la espalda.'),
                ('La consulta del médico', '诊室', 'La consulta del médico abre a las nueve.'),
                ('El historial médico', '病史', 'El historial médico recoge las alergias.'),
                ('La cita con el especialista', '专家门诊预约', 'La cita con el especialista es en mayo.'),
            ],
            'grammar': [
                {'title': '身体不适与就医的基础表达', 'desc': 'Me duele la cabeza / Tengo fiebre / Me he torcido el tobillo / Estoy resfriado。注意 doler 的主语是身体部位：Me duelen los pies（复数用 duelen）。'},
                {'title': '提出建议与给出指示', 'desc': 'Deberías descansar / Tienes que beber agua / Ponte crema solar / No te mojes la herida。注意 ponerse（穿戴/涂抹）的自复形式：Me pongo crema。'},
                {'title': '天气与户外活动的搭配', 'desc': 'hacer una escapada / ir de acampada / subir a la cima / ponerse crema / coger un resfriado。注意 ir de + 活动（ir de acampada / ir de excursión）是固定结构。'},
            ],
        },
    ],
}
