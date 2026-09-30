#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 75：C1 补「移民与边境治理」单元（→ C1 达 20 单元）

为什么补这个：C1 有「社会变迁与代际」（c1-u17）与「战争、和平与国际法」（c1-u20），
但缺移民与边境治理这一语域 —— 而这正是 C1 阅读（国际社论、人权报告）的高频主题。
（对照：C1 精读已有「城市中的陌生人：疏离何以是礼貌」，与本单元主题呼应。）

所有词头已用全库比对校验：与现有 6100+ 词条零重复。
"""

BATCH = {
    'C1': [
        {
            'id': 'c1-u22', 'title': '移民与边境治理', 'subtitle': 'Migración y Gobernanza de Fronteras',
            'lessons': 12, 'duration': '约 50 分钟',
            'vocab': [
                ('La migración internacional', '国际移民', 'La migración internacional crece por causas económicas.'),
                ('El flujo migratorio', '移民流动', 'El flujo migratorio se concentra en las rutas del sur.'),
                ('El saldo migratorio', '净移民数', 'El saldo migratorio fue positivo este año.'),
                ('La inmigración irregular', '非正规移民', 'La inmigración irregular se aborda con acuerdos.'),
                ('La regularización', '身份合法化', 'La regularización benefició a miles de personas.'),
                ('El permiso de residencia', '居留许可', 'Tramitó el permiso de residencia en dos meses.'),
                ('El permiso de trabajo', '工作许可', 'Sin permiso de trabajo no puede firmar contrato.'),
                ('La nacionalidad', '国籍', 'Solicitó la nacionalidad tras diez años.'),
                ('La doble nacionalidad', '双重国籍', 'La doble nacionalidad está permitida en algunos casos.'),
                ('La naturalización', '归化', 'La naturalización exige pruebas de integración.'),
                ('El reagrupamiento familiar', '家庭团聚', 'El reagrupamiento familiar es un derecho reconocido.'),
                ('La solicitud de asilo', '庇护申请', 'La solicitud de asilo se resolvió en seis meses.'),
                ('El estatuto de refugiado', '难民身份', 'Obtuvo el estatuto de refugiado por persecución política.'),
                ('La protección subsidiaria', '辅助保护', 'La protección subsidiaria cubre conflictos armados.'),
                ('El principio de no devolución', '不驱回原则', 'El principio de no devolución prohíbe entregar a quien corre peligro.'),
                ('La frontera exterior', '外部边界', 'La frontera exterior concentra la presión migratoria.'),
                ('El control fronterizo', '边境管控', 'El control fronterizo se reforzó en verano.'),
                ('La valla fronteriza', '边境围栏', 'La valla fronteriza tiene seis metros de altura.'),
                ('El paso fronterizo', '过境点', 'El paso fronterizo cerró por la noche.'),
                ('La travesía', '渡海、长途跋涉', 'La travesía duró tres días en malas condiciones.'),
                ('La embarcación precaria', '简陋船只', 'La embarcación precaria llevaba veinte personas.'),
                ('El naufragio', '海难', 'El naufragio dejó decenas de desaparecidos.'),
                ('El rescate marítimo', '海上救援', 'El rescate marítimo salvó a doce personas.'),
                ('El centro de acogida', '收容中心', 'El centro de acogida atiende las primeras necesidades.'),
                ('El centro de internamiento', '拘留中心', 'El centro de internamiento alberga a personas sin papeles.'),
                ('La detención administrativa', '行政拘留', 'La detención administrativa no es una pena.'),
                ('La devolución en caliente', '即时遣返', 'La devolución en caliente fue criticada por los tribunales.'),
                ('El retorno voluntario', '自愿返回', 'El retorno voluntario recibe apoyo económico.'),
                ('La repatriación', '遣返', 'La repatriación se hizo por vía aérea.'),
                ('La readmisión', '重新接收', 'La readmisión obliga al país de origen a aceptarlo.'),
                ('El acuerdo de readmisión', '重新接收协议', 'El acuerdo de readmisión se firmó en Bruselas.'),
                ('La externalización de fronteras', '边境外部化', 'La externalización de fronteras traslada el control fuera.'),
                ('Las causas de la migración', '移民的成因', 'Las causas de la migración combinan pobreza y conflicto.'),
                ('El factor de expulsión', '推力因素', 'El factor de expulsión principal es la falta de empleo.'),
                ('El factor de atracción', '拉力因素', 'El factor de atracción es la demanda de mano de obra.'),
                ('La ruta migratoria', '移民路线', 'La ruta migratoria cambia según los controles.'),
                ('La trata de seres humanos', '人口贩运', 'La trata de seres humanos es una forma de esclavitud.'),
                ('El traficante de personas', '人口走私者', 'El traficante de personas cobra por el cruce.'),
                ('La víctima de trata', '贩运受害者', 'La víctima de trata recibe protección especial.'),
                ('La explotación laboral', '劳动剥削', 'La explotación laboral afecta a trabajadores indocumentados.'),
                ('El trabajo no declarado', '未申报工作', 'El trabajo no declarado deja sin derechos.'),
                ('La remesa', '侨汇', 'La remesa sostiene a muchas familias.'),
                ('La comunidad migrante', '移民社群', 'La comunidad migrante organiza sus propias fiestas.'),
                ('La integración social', '社会融入', 'La integración social requiere tiempo y empleo.'),
                ('La asimilación', '同化', 'La asimilación exige renunciar a la lengua propia.'),
                ('El multiculturalismo', '多元文化主义', 'El multiculturalismo reconoce la diferencia.'),
                ('La interculturalidad', '跨文化互动', 'La interculturalidad busca el encuentro, no la separación.'),
                ('La convivencia intercultural', '跨文化共处', 'La convivencia intercultural mejora con el contacto.'),
                ('La discriminación', '歧视', 'La discriminación laboral se denuncia poco.'),
                ('La xenofobia', '排外', 'La xenofobia crece en tiempos de crisis.'),
                ('El racismo estructural', '结构性种族主义', 'El racismo estructural se refleja en las estadísticas.'),
                ('La minoría étnica', '少数族裔', 'La minoría étnica accede menos a la vivienda.'),
                ('El mediador intercultural', '跨文化调解员', 'El mediador intercultural traduce y acompaña.'),
                ('El empadronamiento', '户籍登记', 'El empadronamiento da acceso a servicios básicos.'),
                ('El arraigo social', '社会融入居留', 'El arraigo social exige tres años de permanencia.'),
                ('La segunda generación', '第二代移民', 'La segunda generación habla la lengua local.'),
                ('La fuga de cerebros', '人才外流', 'La fuga de cerebros debilita al país de origen.'),
                ('La migración cualificada', '技术移民', 'La migración cualificada responde a la demanda sectorial.'),
                ('El visado de estudios', '学生签证', 'El visado de estudios permite trabajar a tiempo parcial.'),
                ('La ciudadanía global', '全球公民身份', 'La ciudadanía global va más allá del pasaporte.'),
                ('La política migratoria común', '共同移民政策', 'La política migratoria común divide a los Estados.'),
                ('El pacto migratorio', '移民公约', 'El pacto migratorio reparte responsabilidades.'),
                ('La cuota de refugiados', '难民配额', 'La cuota de refugiados generó rechazo en varios países.'),
                ('La solidaridad entre Estados', '国家间团结', 'La solidaridad entre Estados es voluntaria en la práctica.'),
                ('El país de tránsito', '过境国', 'El país de tránsito recibe la primera presión.'),
                ('La estadística migratoria', '移民统计', 'La estadística migratoria se actualiza cada año.'),
                ('El menor no acompañado', '无人陪伴的未成年移民', 'El menor no acompañado queda bajo tutela pública.'),
            ],
            'grammar': [
                {'title': '国际法文本的无人称与义务结构', 'desc': 'se reconoce el derecho a / queda prohibida la devolución / los Estados se comprometen a。注意 comprometerse a + 不定式（承诺做某事），与 comprometerse en（投入某项事业）不同。'},
                {'title': '表达条件、例外与限度的书面句式', 'desc': 'sin perjuicio de / en los supuestos previstos / salvo que concurra una causa / en la medida en que。法律文本的例外句式常用 salvo que + 虚拟式：Salvo que concurra una causa humanitaria。'},
                {'title': '因果、让步与对比的高阶连接', 'desc': 'a raíz de / en tanto que / si bien / no obstante lo cual。注意 en tanto que 表「作为……而言」时用陈述式，表「只要」时也常用陈述式表事实。'},
            ],
        },
    ],
}
