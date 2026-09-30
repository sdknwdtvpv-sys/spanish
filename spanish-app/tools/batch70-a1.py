#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 70：A1 补 1 个单元（金钱、购物与饮食）—— 目标：每级 20 单元 / 1000 词

为什么补这个：A1 是六级里词量最少的（757），且「钱」与「吃」这两个最日常的
语域在 A1 层面覆盖不足 —— 食物类只收录了部分基础词（面包、蔬菜、水果类词大多缺失），
而点餐与结账的表达散落在 a1-u7。补完后 A1 达到 20 单元 / 约 820 词。

所有词头已用全库比对校验：与现有 5700+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'A1': [
        {
            'id': 'a1-u22', 'title': '金钱、购物与饮食', 'subtitle': 'Dinero, Compras y Comida',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
('El dinero en efectivo', '现金', 'Pagué en efectivo, sin tarjeta.'),
                ('Las monedas', '硬币', 'Guardo las monedas en un bote.'),
                ('El céntimo', '分（辅币单位）', 'Cuesta noventa y nueve céntimos.'),
                ('La cartera', '钱包', 'Se me olvidó la cartera en casa.'),
                ('El monedero', '零钱包', 'Llevo el monedero en el bolso.'),
                ('La tarjeta bancaria', '银行卡', 'La tarjeta bancaria no funcionaba.'),
                ('El código PIN', '密码（银行卡）', 'Olvidé el código PIN de la tarjeta.'),
                ('La cuenta bancaria', '银行账户', 'Abrí una cuenta bancaria en el banco nuevo.'),
                ('La sucursal bancaria', '银行网点', 'La sucursal bancaria abre a las ocho y media.'),
                ('El horario de apertura', '营业时间', 'El horario de apertura está en la puerta.'),
                ('El DNI', '身份证（西班牙）', 'Enséñeme el DNI, por favor.'),
                ('El precio rebajado', '打折后的价格', 'El precio rebajado aparece en rojo.'),
                ('La ganga', '便宜货、超值', 'Este abrigo es una ganga.'),
                ('La marca', '品牌', 'Prefiero esa marca de zapatillas.'),
                ('El ticket de compra', '购物小票', 'Guarde el ticket de compra.'),
                ('La cajera', '收银员（女）', 'La cajera me saludó con una sonrisa.'),
                ('La bolsa de plástico', '塑料袋', 'Ya no dan bolsas de plástico gratis.'),
                ('El carrito de la compra', '购物车', 'El carrito de la compra estaba lleno.'),
                ('La cesta', '购物篮', 'Cogí una cesta en la entrada.'),
                ('La lista de la compra', '购物清单', 'Apunté la leche en la lista de la compra.'),
                ('Los productos frescos', '生鲜食品', 'Los productos frescos están al fondo.'),
                ('La frutería', '水果店', 'Compro la fruta en la frutería del barrio.'),
                ('La panadería', '面包店', 'La panadería huele a pan recién hecho.'),
                ('La carnicería', '肉店', 'En la carnicería preparan la carne al momento.'),
                ('La pescadería', '鱼店', 'La pescadería abre solo por la mañana.'),
                ('La sección de congelados', '冷冻食品区', 'El helado está en la sección de congelados.'),
                ('Los ingredientes', '食材', 'La receta lleva cinco ingredientes.'),
                ('El plato hondo', '汤盘、深盘', 'Sirve la sopa en un plato hondo.'),
                ('La taza', '杯子（带把）', 'Me apetece una taza de té.'),
                ('La carta de vinos', '酒单', 'Pidió la carta de vinos.'),
                ('La reserva de mesa', '订位', 'Hicimos una reserva de mesa para cuatro.'),
                ('El comedor', '餐厅（家里）', 'Comemos en el comedor.'),
                ('La merienda', '下午茶', 'A las seis tomamos la merienda.'),
                ('El almuerzo', '午餐（拉美常用）', 'El almuerzo es a las dos.'),
                ('El bocadillo', '夹心面包', 'Me comí un bocadillo de jamón.'),
                ('La ensalada mixta', '混合沙拉', 'Pedimos una ensalada mixta para compartir.'),
                ('El pescado', '鱼（食物）', 'El pescado del día está muy fresco.'),
                ('La carne', '肉', 'No como carne los viernes.'),
                ('Los huevos', '鸡蛋', 'Necesito seis huevos para la tarta.'),
                ('La sal', '盐', 'Falta un poco de sal.'),
                ('La pimienta', '胡椒', 'Añade sal y pimienta.'),
                ('El aceite', '油', 'El aceite de oliva es básico aquí.'),
                ('El vinagre', '醋', 'La ensalada lleva aceite y vinagre.'),
                ('La harina', '面粉', 'Compré harina para hacer pan.'),
                ('Los garbanzos', '鹰嘴豆', 'El cocido lleva garbanzos.'),
                ('Las lentejas', '扁豆', 'Las lentejas se comen en invierno.'),
                ('Los guisantes', '豌豆', 'Añade guisantes al guiso.'),
                ('La zanahoria', '胡萝卜', 'Corta la zanahoria en rodajas.'),
                ('La cebolla', '洋葱', 'La cebolla me hace llorar.'),
                ('El ajo', '大蒜', 'Sofríe el ajo primero.'),
                ('El tomate', '西红柿', 'El tomate está de oferta.'),
                ('La patata', '土豆', 'La tortilla se hace con patata.'),
            ],
            'grammar': [
                {'title': '买东西时的问法与说法', 'desc': '¿Cuánto cuesta? / ¿Cuánto es? / ¿Me lo puede envolver? / ¿Tienen otra talla?。付钱：Voy a pagar en efectivo / con tarjeta。找零用 el cambio 或 la vuelta：Quédese con el cambio（零钱不用找了）。'},
                {'title': '食物的量与容器表达', 'desc': 'un vaso de agua / una taza de té / una botella de vino / un kilo de patatas / medio kilo de tomate / una docena de huevos。注意 un poco de（一点）后接不可数名词。'},
                {'title': '在餐厅点餐的基本句式', 'desc': 'De primero, sopa. De segundo, pescado. De postre, fruta。要账单：La cuenta, por favor。表示够了：Estoy lleno / No puedo más。注意 de primero / de segundo 是固定说法，不用 en primero。'},
            ],
        },
    ],
}
