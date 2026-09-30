#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 80a：A2 补「比较与描述他人」单元（密度调整）

为什么补这个：A2 已有「描述外貌与性格」（a2-u2，26 词，只讲 más/menos/tan 的基础），
但没有把比较体系（比较级、最高级、相似/相同）+ 描述他人的固定搭配独立成体系。
比较结构是 A2→B1 的关键语法台阶。

所有词头已用全库比对校验：与现有 6500+ 词条零重复。
"""

BATCH = {
    'A2': [
        {
            'id': 'a2-u24', 'title': '比较与描述他人', 'subtitle': 'Comparaciones y Descripciones',
            'lessons': 12, 'duration': '约 40 分钟',
            'vocab': [
                ('El parecido', '相似之处', 'Hay un parecido evidente entre los dos.'),
                ('Parecerse a alguien', '像某人', 'Se parece mucho a su madre.'),
                ('Ser como', '像……一样', 'Es como un hermano para mí.'),
                ('Tan alto como', '和……一样高', 'Mi hermano es tan alto como yo.'),
                ('Menos alto que', '比……矮', 'Ella es menos alta que su prima.'),
                ('Igual de alto que', '同样高', 'Los dos son igual de altos.'),
                ('El doble de grande', '两倍大', 'Su piso es el doble de grande.'),
                ('La mitad de caro', '价格一半', 'Este modelo es la mitad de caro.'),
                ('Mucho más barato', '便宜得多', 'El mercado es mucho más barato.'),
                ('Un poco más caro', '稍贵一点', 'Ese es un poco más caro.'),
                ('Bastante mejor', '好得多', 'La segunda versión es bastante mejor.'),
                ('Un poco peor', '稍差一点', 'Hoy me siento un poco peor.'),
                ('El mejor de todos', '所有人中最好的', 'Es el mejor de todos los candidatos.'),
                ('El peor de la clase', '班上最差的', 'No es el peor de la clase.'),
                ('El más interesante', '最有趣的', 'Es el más interesante de los tres.'),
                ('El menos complicado', '最不复杂的', 'Elige el camino menos complicado.'),
                ('Tener más paciencia que', '比……更有耐心', 'Tiene más paciencia que un santo.'),
                ('Trabajar tanto como', '和……一样努力', 'Trabaja tanto como su socio.'),
                ('No ser tan rápido como', '不如……快', 'No soy tan rápido como tú.'),
                ('Preferir A a B', '更喜欢 A 而非 B', 'Prefiero el té al café.'),
                ('Me gusta más A que B', '比起 B 更喜欢 A', 'Me gusta más el mar que la montaña.'),
                ('Es mejor que', '比……更好', 'Es mejor que ayer.'),
                ('Es tan bueno como', '和……一样好', 'Es tan bueno como el otro.'),
                ('Es menos útil que', '不如……有用', 'Es menos útil que parece.'),
                ('El mismo que', '同一个', 'Es el mismo que vimos ayer.'),
                ('El mismo color que', '颜色相同', 'Quiero el mismo color que este.'),
                ('Otro distinto', '另一个不同的', 'Tráeme otro distinto.'),
                ('Uno parecido', '一个相似的', 'Busco uno parecido a este.'),
                ('Muy diferente de', '与……很不相同', 'Su carácter es muy diferente del mío.'),
                ('Completamente distinto', '完全不同', 'El resultado es completamente distinto.'),
                ('Nada parecido', '一点也不像', 'No se parece en nada al original.'),
                ('Ser distinto de', '与……不同', 'Esta versión es distinta de la anterior.'),
                ('Ser igual que', '与……相同', 'Su respuesta es igual que la mía.'),
                ('Asemejarse a', '类似于', 'El clima se asemeja al del sur.'),
                ('Recordar a alguien', '让人想起某人', 'Esa canción me recuerda a mi abuela.'),
                ('Sacar parecido a', '长得像（某人）', 'Ha sacado el parecido a su padre.'),
                ('Haber salido a alguien', '像（某人）', 'Ha salido a su madre en todo.'),
                ('Ser clavado a', '长得一模一样', 'Es clavado a su hermano.'),
                ('Correr más que', '跑得比……多', 'Corre más que nadie del equipo.'),
                ('Comer menos que', '吃得比……少', 'Come menos que antes.'),
                ('Dormir más horas que', '睡得比……多', 'Duerme más horas que yo.'),
                ('Tener tanto dinero como', '和……一样有钱', 'No tiene tanto dinero como dicen.'),
                ('Ganar el doble que', '赚的是……两倍', 'Gana el doble que su compañero.'),
                ('Costar la mitad que', '价格是……一半', 'Cuesta la mitad que el otro.'),
                ('Superar a alguien en', '在某方面胜过某人', 'Le supera en experiencia.'),
                ('Destacar en', '在……方面突出', 'Destaca en matemáticas.'),
                ('Lo más importante', '最重要的', 'Lo más importante es la salud.'),
                ('Lo menos interesante', '最不有趣的', 'Lo menos interesante fue el final.'),
                ('Lo mejor de todo', '最好的一点', 'Lo mejor de todo fue el trato.'),
                ('Lo peor del viaje', '旅程中最糟的', 'Lo peor del viaje fue la espera.'),
                ('Muchísimo mejor', '好太多了', 'Me siento muchísimo mejor.'),
                ('Ligeramente superior', '略高', 'El precio es ligeramente superior.'),
                ('Muy inferior a', '远低于', 'La calidad es muy inferior a la esperada.'),
                ('Sensiblemente mayor', '明显更大', 'El gasto es sensiblemente mayor.'),
                ('Notablemente distinto', '明显不同', 'El sabor es notablemente distinto.'),
                ('Apenas diferente', '几乎没有差别', 'Las dos versiones son apenas diferentes.'),
                ('Exactamente igual', '完全相同', 'Son exactamente iguales.'),
            ],
            'grammar': [
                {'title': '比较级与同级比较', 'desc': 'más… que（更）/ menos… que（不如）/ tan… como（一样）/ tanto… como（数量一样）。注意 tanto 与名词搭配时要与名词性数一致：tengo tantos libros como tú。'},
                {'title': '最高级与「全部中最」', 'desc': 'el más… de（在……中最）/ el mejor / el peor / lo más importante（最重要的一点）。注意 lo + 形容词阳性单数表抽象概念：lo mejor（最好的部分），与 el mejor（最好的那个）不同。'},
                {'title': '表示相似与相同', 'desc': 'parecerse a / ser igual que / ser clavado a / recordar a / sacar parecido a。注意 parecerse a 与 recordar a 的介词都是 a；ser igual que 用 que 不用 como。'},
            ],
        },
    ],
}
