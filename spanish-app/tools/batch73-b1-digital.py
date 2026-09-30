#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 73：B1 补「数字生活与网络安全」单元（B1 达 20 单元）

为什么补这个：B1 有「科技与社交媒体」（b1-u3）与「技术与数字生活」（b1-u11），
但两者偏「用科技」而非「防风险」——网络安全、隐私设置、在线支付与大诈骗识别
这一最实用的语域没有覆盖。这类内容是 B1 阅读（使用说明、警示通知）的常见文本。

所有词头已用全库比对校验：与现有 6000+ 词条零重复。
"""

BATCH = {
    'B1': [
        {
            'id': 'b1-u21', 'title': '数字生活与网络安全', 'subtitle': 'Vida Digital y Seguridad en la Red',
            'lessons': 12, 'duration': '约 45 分钟',
            'vocab': [
('La identidad digital', '数字身份', 'Cuida tu identidad digital como la real.'),
                ('El perfil falso', '虚假账号', 'El perfil falso suplantaba a una empresa.'),
                ('La suplantación de identidad', '身份盗用', 'La suplantación de identidad es un delito.'),
                ('El robo de datos', '数据窃取', 'El robo de datos afectó a miles de clientes.'),
                ('La fuga de datos', '数据泄露', 'La fuga de datos se comunicó a los afectados.'),
                ('La brecha de seguridad', '安全漏洞', 'La brecha de seguridad duró dos semanas.'),
                ('El ciberataque', '网络攻击', 'El ciberataque paralizó el servicio.'),
                ('El ciberdelito', '网络犯罪', 'El ciberdelito crece cada año.'),
                ('El fraude en línea', '网络诈骗', 'El fraude en línea usa correos falsos.'),
                ('La estafa en línea', '网络骗局', 'Cayó en una estafa en línea.'),
                ('El phishing', '网络钓鱼', 'El phishing imita a tu banco.'),
                ('El correo fraudulento', '诈骗邮件', 'No abras un correo fraudulento.'),
                ('El enlace sospechoso', '可疑链接', 'No pinches un enlace sospechoso.'),
                ('El archivo adjunto malicioso', '恶意附件', 'El archivo adjunto malicioso roba contraseñas.'),
                ('El programa malicioso', '恶意软件', 'El programa malicioso se instaló solo.'),
                ('El virus informático', '计算机病毒', 'El virus informático borró archivos.'),
                ('El programa espía', '间谍软件', 'El programa espía lee tus mensajes.'),
                ('El secuestro de datos', '数据勒索', 'El secuestro de datos bloquea los archivos.'),
                ('La contraseña segura', '强密码', 'Una contraseña segura mezcla letras y números.'),
                ('La verificación en dos pasos', '两步验证', 'Activa la verificación en dos pasos.'),
                ('El código de verificación', '验证码', 'El código de verificación caduca en un minuto.'),
                ('El acceso no autorizado', '未授权访问', 'El sistema detectó un acceso no autorizado.'),
                ('Cerrar sesión', '退出登录', 'Cierra sesión al usar un equipo público.'),
                ('El almacenamiento en la nube', '云存储', 'El almacenamiento en la nube tiene límite gratis.'),
                ('El disco duro externo', '外置硬盘', 'Guardo las fotos en un disco duro externo.'),
                ('La restauración de datos', '数据恢复', 'La restauración de datos tardó un día.'),
                ('La actualización de seguridad', '安全更新', 'Instala la actualización de seguridad.'),
                ('El parche', '补丁', 'El parche corrige el fallo.'),
                ('El cortafuegos', '防火墙', 'El cortafuegos bloqueó la conexión.'),
                ('El antivirus', '杀毒软件', 'El antivirus encontró dos amenazas.'),
                ('La configuración de privacidad', '隐私设置', 'Revisa la configuración de privacidad.'),
                ('El permiso de la aplicación', '应用权限', 'La app pide permiso para el micrófono.'),
                ('La ubicación compartida', '共享位置', 'Desactivé la ubicación compartida.'),
                ('El rastreo', '追踪', 'El rastreo publicitario molesta a muchos.'),
                ('La cookie', 'Cookie', 'Acepté las cookies sin leer.'),
                ('El historial de navegación', '浏览记录', 'Borró el historial de navegación.'),
                ('La navegación privada', '隐私浏览', 'La navegación privada no te hace invisible.'),
                ('La ventana emergente', '弹出窗口', 'Cierra la ventana emergente.'),
                ('El bloqueador de anuncios', '广告拦截器', 'El bloqueador de anuncios rompe algunos sitios.'),
                ('El pago en línea', '在线支付', 'El pago en línea es cada vez más común.'),
                ('La pasarela de pago', '支付网关', 'La pasarela de pago pide confirmación.'),
                ('El monedero electrónico', '电子钱包', 'Pago con el monedero electrónico del móvil.'),
                ('El justificante de pago', '付款凭证', 'Guarda el justificante de pago.'),
                ('La factura electrónica', '电子发票', 'La factura electrónica llega al correo.'),
                ('La firma digital', '数字签名', 'La firma digital tiene validez legal.'),
                ('El certificado digital', '数字证书', 'El certificado digital caduca cada dos años.'),
                ('La administración electrónica', '电子政务', 'La administración electrónica ahorra tiempo.'),
                ('La sede electrónica', '电子政务门户', 'El trámite se hace en la sede electrónica.'),
                ('El trámite en línea', '在线办事', 'El trámite en línea dura diez minutos.'),
                ('El chat de soporte', '客服聊天', 'El chat de soporte responde en minutos.'),
            ],
            'grammar': [
                {'title': '表达建议、义务与禁令（网络安全语境）', 'desc': 'conviene + 不定式 / es recomendable que + 虚拟式 / no debes + 不定式 / está prohibido + 不定式。注意 conviene（宜）比 debes（你应该）更委婉，适合写建议。'},
                {'title': '被动与无人称在技术说明中', 'desc': 'se recomienda / se debe activar / han sido robados / fue detectado。技术文档常用自复被动与无人称 se 说明操作：Se recomienda activar la verificación en dos pasos。'},
                {'title': '条件与后果的表达', 'desc': 'Si no actualizas, el sistema queda expuesto / A menos que cambies la contraseña, seguirás en riesgo。注意 si + 现在时，主句用现在时或将来时；a menos que 后面用虚拟式。'},
            ],
        },
    ],
}
