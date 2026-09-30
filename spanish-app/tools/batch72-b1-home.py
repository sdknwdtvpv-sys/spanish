#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 72b：B1 补「居家维修与园艺」单元

为什么补这个：B1 有「租房与居住」（b1-u6）与「城市生活与邻里」（b1-u8），
都偏租赁与社区关系，但没有「家里东西坏了怎么办」这一最实用的场景：
工具名、维修动词、命令式在居家语境的实际用法。
（命令式在 a2-u10 只出现过「指路」用法，居家场景是另一个高频语境。）

所有词头已用全库比对校验：与现有 5900+ 词条零重复。
"""

BATCH = {
    'B1': [
        {
            'id': 'b1-u20', 'title': '居家维修与园艺', 'subtitle': 'Reparaciones del Hogar y Jardinería',
            'lessons': 12, 'duration': '约 45 分钟',
            'vocab': [
                ('El contrato de alquiler', '租赁合同', 'El contrato de alquiler dura un año.'),
                ('La renta mensual', '月租', 'La renta mensual sube un tres por ciento.'),
                ('La comunidad de propietarios', '业主委员会（物业）', 'La comunidad de propietarios aprobó la obra.'),
                ('Los gastos comunes', '公共费用', 'Los gastos comunes se pagan cada trimestre.'),
                ('El recibo de la luz', '电费单', 'El recibo de la luz llegó altísimo.'),
                ('El contador', '电表、水表', 'El contador está en el sótano.'),
                ('La tarifa eléctrica', '电价方案', 'Cambié a una tarifa eléctrica más barata.'),
                ('El consumo mensual', '月用量', 'El consumo mensual bajó en verano.'),
                ('La factura del agua', '水费单', 'La factura del agua se paga por trimestre.'),
                ('El radiador', '暖气片', 'Pinté el radiador de blanco.'),
                ('El termostato', '恒温器', 'Baja el termostato por la noche.'),
                ('El ventilador', '电扇', 'El ventilador hace ruido.'),
                ('La persiana', '卷帘', 'Bajó la persiana para dormir la siesta.'),
                ('La mosquitera', '纱窗', 'Puso mosquiteras en todas las ventanas.'),
                ('El marco de la ventana', '窗框', 'El marco de la ventana está podrido.'),
                ('La cerradura', '锁', 'La cerradura se atascó.'),
                ('La llave maestra', '万能钥匙', 'El portero tiene la llave maestra.'),
                ('La mirilla', '猫眼', 'Miró por la mirilla antes de abrir.'),
                ('El felpudo', '门垫', 'Limpió los pies en el felpudo.'),
                ('El rellano', '楼梯平台', 'Dejó la bici en el rellano.'),
                ('La ducha', '淋浴', 'La ducha pierde agua.'),
                ('El grifo', '水龙头', 'El grifo no deja de gotear.'),
                ('El desagüe', '下水口', 'El desagüe está atascado.'),
                ('La cisterna', '水箱', 'La cisterna no para de correr.'),
                ('El fontanero', '水管工', 'Llamamos al fontanero por la gotera.'),
                ('El electricista', '电工', 'El electricista revisó el cuadro.'),
                ('El cerrajero', '锁匠', 'El cerrajero abrió la puerta en diez minutos.'),
                ('El albañil', '泥瓦匠', 'El albañil cerró la grieta.'),
                ('La caja de herramientas', '工具箱', 'Guardo todo en la caja de herramientas.'),
                ('El destornillador', '螺丝刀', 'Necesito un destornillador pequeño.'),
                ('La llave inglesa', '活动扳手', 'Apretó la tuerca con la llave inglesa.'),
                ('El martillo', '锤子', 'Clavó el clavo con el martillo.'),
                ('El taladro', '电钻', 'El taladro hace mucho ruido.'),
                ('El enchufe', '插座', 'Ese enchufe no funciona.'),
                ('La regleta', '插线板', 'Conectó todo a una regleta.'),
                ('La bombilla', '灯泡', 'Se fundió la bombilla del pasillo.'),
                ('El fusible', '保险丝', 'Saltó un fusible.'),
                ('El cuadro eléctrico', '配电箱', 'Bajó el interruptor del cuadro eléctrico.'),
                ('El arreglo', '修理', 'El arreglo costó ochenta euros.'),
                ('Arreglar algo', '修好某物', 'Voy a arreglar la persiana.'),
                ('Cambiar la bombilla', '换灯泡', 'Cambia la bombilla, está fundida.'),
                ('Pintar la pared', '刷墙', 'Pintamos la pared del salón.'),
                ('Colgar un cuadro', '挂画', 'Colgó un cuadro en el pasillo.'),
                ('Montar un mueble', '组装家具', 'Monté el mueble en dos horas.'),
                ('Sellar una grieta', '封堵裂缝', 'Hay que sellar esa grieta.'),
                ('La gotera', '漏水', 'La gotera viene del tejado.'),
                ('El moho', '霉斑', 'El moho apareció en la esquina.'),
                ('La mancha de humedad', '水渍', 'La mancha de humedad crece cada invierno.'),
                ('El suelo de madera', '木地板', 'El suelo de madera cruje.'),
                ('La baldosa', '瓷砖', 'Se rompió una baldosa del baño.'),
                ('El rodapié', '踢脚线', 'Pintó el rodapié de gris.'),
                ('La brocha', '刷子', 'Limpia la brocha con agua.'),
                ('El rodillo', '滚筒刷', 'El rodillo cubre más rápido.'),
                ('La cinta de carrocero', '美纹纸', 'Usa cinta de carrocero para no manchar.'),
                ('La jardinera', '花箱', 'Puso una jardinera en el balcón.'),
                ('La maceta', '花盆', 'Trasplanté la planta a una maceta mayor.'),
                ('Regar las plantas', '给植物浇水', 'Riego las plantas cada dos días.'),
                ('Podar', '修剪', 'Hay que podar el seto en marzo.'),
                ('El césped', '草坪', 'Cortamos el césped los sábados.'),
                ('La mala hierba', '杂草', 'La mala hierba salió entre las baldosas.'),
                ('La plaga', '虫害', 'La plaga acabó con los geranios.'),
                ('El pulgón', '蚜虫', 'El pulgón atacó las rosas.'),
                ('La mariquita', '瓢虫', 'La mariquita se come el pulgón.'),
                ('El geranio', '天竺葵', 'Los geranios del balcón están preciosos.'),
                ('La albahaca', '罗勒', 'Puse albahaca junto a la ventana.'),
                ('El romero', '迷迭香', 'El romero aguanta bien la sequía.'),
                ('La lavanda', '薰衣草', 'La lavanda atrae a las abejas.'),
                ('El huerto urbano', '城市菜园', 'El huerto urbano está en la azotea.'),
                ('El perejil', '欧芹', 'Picamos perejil fresco por encima.'),
            ],
            'grammar': [
                {'title': '表「坏了/修好了」的动词分工', 'desc': 'romperse（自己坏了）/ estropearse（出故障）/ averiarse（机器故障）/ arreglar（修好，人做）/ reparar（正式）。注意「水龙头漏水」用 gotear 或 perder agua，不用 romper。'},
                {'title': '描述问题与请求服务的句式', 'desc': 'Hay una gotera en el techo / No me funciona el enchufe / ¿Podría venir a revisarlo?。预约服务：Llamar al fontanero para que venga（叫水管工来）。注意 pedir que + 虚拟式表请求他人做某事。'},
                {'title': '命令式（tú）在居家场景的用法', 'desc': 'Cuelga el cuadro aquí / Baja el termostato / Riega las plantas cada dos días / No tires la caja。肯定命令的不规则形式要记：pon → ponlo、haz → hazlo、di → dilo、ve → vete。'},
            ],
        },
    ],
}
