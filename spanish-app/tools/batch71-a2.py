#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 71：A2 补 1 个单元（情绪、态度与观点表达）

为什么补这个：A2 已有「表达喜好」（a2-u4，仅 19 词，只讲 gustar），但没有把
「表达同意/反对/看法」这一组最常用的交际功能独立成体系。
情绪名词在别处零散出现，但「对某人的态度」这类固定搭配（caer bien、llevarse bien con）
以及 dar pena / dar vergüenza 的与格结构没有系统覆盖。
补完后 A2 达到 20 单元 / 约 840 词。

所有词头已用全库比对校验：与现有 5800+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'A2': [
        {
            'id': 'a2-u23', 'title': '情绪、态度与观点表达', 'subtitle': 'Emociones, Actitudes y Opinión',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
('El enfado pasajero', '一时生气', 'Fue un enfado pasajero, ya se le pasó.'),
                ('El cabreo', '恼火（口语）', 'Se llevó un cabreo enorme.'),
                ('La ira', '愤怒（强烈）', 'La ira no ayuda a decidir.'),
                ('Entristecerse', '难过起来', 'Se entristeció al leer la noticia.'),
                ('La pena', '难过、遗憾', 'Me da pena no poder ir.'),
                ('La añoranza', '怀念', 'Sentía añoranza de su pueblo.'),
                ('Tener miedo de', '害怕（某事）', 'Tengo miedo de hablar en público.'),
                ('El susto', '惊吓', 'Me llevé un susto con el ruido.'),
                ('Asustarse', '受惊', 'Se asustó al ver la sombra.'),
                ('La inquietud', '不安', 'Su inquietud se notaba en la voz.'),
                ('Estar estresado', '压力大', 'Estoy estresado por los exámenes.'),
                ('Estar de buen humor', '心情好', 'Hoy está de buen humor.'),
                ('Estar de mal humor', '心情差', 'No le hables, está de mal humor.'),
                ('El asombro', '惊讶', 'Su respuesta causó asombro.'),
                ('La admiración', '钦佩', 'Siento admiración por su trabajo.'),
                ('Admirar a', '钦佩（某人）', 'Admiro a mi abuela.'),
                ('Estar orgulloso de', '为……感到自豪', 'Estoy orgulloso de mi equipo.'),
                ('Dar vergüenza', '让人难为情', 'Me da vergüenza cantar delante de todos.'),
                ('Tener envidia de', '羡慕、嫉妒', 'Tiene envidia de su hermana.'),
                ('Estar celoso', '吃醋', 'Está celoso sin motivo.'),
                ('Cariñoso', '亲昵的、体贴的', 'Es un abuelo muy cariñoso.'),
                ('El aprecio', '赏识、看重', 'Le tengo mucho aprecio.'),
                ('Apreciar a', '看重（某人）', 'Aprecio mucho tu ayuda.'),
                ('Confiar en', '信任', 'Confío en ti.'),
                ('Desconfiar de', '不信任', 'Desconfía de las ofertas demasiado buenas.'),
                ('Respetar a', '尊重（某人）', 'Hay que respetar a los demás.'),
                ('Ponerse en el lugar de', '换位思考', 'Intenta ponerte en su lugar.'),
                ('Apoyar a', '支持（某人）', 'Voy a apoyarte en todo.'),
                ('Comprender a', '理解（某人）', 'Comprendo que estés cansado.'),
                ('Consolar a', '安慰（某人）', 'La consoló con paciencia.'),
                ('Tener paciencia', '有耐心', 'Hay que tener paciencia con los niños.'),
                ('La impaciencia', '不耐烦', 'Su impaciencia era evidente.'),
                ('Generoso', '慷慨的', 'Fue muy generoso con nosotros.'),
                ('Egoísta', '自私的', 'Ese comentario fue egoísta.'),
                ('Sincero', '真诚的、直率的', 'Te lo digo porque soy sincero.'),
                ('Mentir a', '对……撒谎', 'No me mientas.'),
                ('Perdonar a', '原谅（某人）', 'Al final lo perdonó.'),
                ('Disculparse con', '向……道歉', 'Se disculpó con su amiga.'),
                ('Reconciliarse con', '与……和好', 'Se reconcilió con su hermano.'),
                ('Estar enfadado con', '生……的气', 'Está enfadada conmigo.'),
                ('Estar contento con', '对……满意', 'Estoy contento con el resultado.'),
                ('Estar harto de', '受够了', 'Estoy harto de esperar.'),
                ('Estar satisfecho con', '对……满意（正式）', 'Quedó satisfecho con el trabajo.'),
                ('Estar decepcionado con', '对……失望', 'Está decepcionado con sus notas.'),
                ('Parecer bien', '觉得好、认可', 'Me parece bien tu idea.'),
                ('Parecer mal', '觉得不好', 'Le pareció mal la decisión.'),
                ('Importar mucho', '很在意', 'Me importa mucho tu opinión.'),
                ('Caer bien', '讨人喜欢', 'Tu primo me cae muy bien.'),
                ('Caer mal', '让人反感', 'Ese vecino me cae mal.'),
                ('Llevarse bien con', '与……相处好', 'Me llevo bien con mis compañeros.'),
                ('Llevarse mal con', '与……相处不好', 'Se lleva mal con su jefe.'),
                ('Apetece hacer algo', '想做某事', 'Me apetece salir esta noche.'),
                ('No apetecer nada', '什么都不想做', 'No me apetece nada hoy.'),
                ('Estar a favor de', '支持（某个主张）', 'Estoy a favor de la propuesta.'),
                ('Estar en contra de', '反对', 'Está en contra de la medida.'),
                ('Dar la razón a', '认为……有道理', 'Te doy la razón en eso.'),
            ],
            'grammar': [
                {'title': '表达同意、反对与看法', 'desc': '同意：Estoy de acuerdo / Tienes razón / Me parece bien。反对：No estoy de acuerdo / Estoy en contra de / Me parece mal。注意 estar a favor de / estar en contra de 后面接名词或不定式，不接从句。'},
                {'title': '情感动词与人称代词', 'desc': 'gustar / apetecer / dar pena / dar vergüenza 这类动词的主语是「事物」，人用与格代词：Me apetece salir / Me da vergüenza hablar。动词随事物变位：Me apetecen dos cosas。'},
                {'title': '「与某人相处/对某人」的固定搭配', 'desc': 'llevarse bien/mal con alguien（相处好坏）、caer bien/mal（讨喜与否）、estar enfadado con（生某人气）、disculparse con（向某人道歉）、reconciliarse con（与某人和好）。这些搭配的介词固定为 con。'},
            ],
        },
    ],
}
