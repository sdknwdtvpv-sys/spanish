#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批次 68：B1 补 1 个单元（音乐、电影与娱乐）

为什么补这个：B1 已有「艺术与文学入门」（b1-u4）与「旅行与文化体验」（b1-u15），
但没有音乐与影视娱乐这一板块 —— 而这是 B1 学习者最常见的真实话题
（聊喜欢的歌手、电影、剧集），也是听力语料的高频场景。

所有词头已用全库比对校验：与现有 5600+ 词条零重复（含仅冠词/大小写不同的情况）。
"""

BATCH = {
    'B1': [
        {
            'id': 'b1-u18', 'title': '音乐、电影与娱乐', 'subtitle': 'Música, Cine y Entretenimiento',
            'lessons': 12, 'duration': '约 45 分钟',
            'vocab': [
                ('La letra', '歌词', 'La letra de esta canción es muy bonita.'),
                ('La melodía', '旋律', 'La melodía se repite en el estribillo.'),
                ('El estribillo', '副歌', 'El estribillo se pega fácilmente.'),
                ('La estrofa', '段落（歌词）', 'La segunda estrofa cambia de tono.'),
                ('El acorde', '和弦', 'El acorde final suena limpio.'),
                ('La armonía', '和声', 'La armonía sostiene la melodía.'),
                ('La afinación', '音准', 'La afinación del violín era perfecta.'),
                ('El compás', '节拍', 'El compás es de cuatro por cuatro.'),
                ('La partitura', '乐谱', 'El director leyó la partitura sin mirar.'),
                ('El pentagrama', '五线谱', 'Las notas se escriben en el pentagrama.'),
                ('La nota musical', '音符', 'Se le olvidó una nota musical.'),
                ('El cantante', '歌手', 'El cantante saludó al público.'),
                ('El cantautor', '创作型歌手', 'El cantautor escribe sus propias letras.'),
                ('El solista', '独奏/独唱者', 'El solista tocó durante diez minutos.'),
                ('El coro', '合唱团', 'El coro abrió el acto.'),
                ('El director de orquesta', '乐团指挥', 'El director de orquesta levantó la batuta.'),
                ('La actuación en directo', '现场演出', 'La actuación en directo duró dos horas.'),
                ('El camerino', '后台化妆间', 'Los músicos salieron del camerino.'),
                ('La gira', '巡演', 'La gira pasa por seis ciudades.'),
                ('El aforo', '容纳人数', 'El aforo del teatro es de mil butacas.'),
                ('El cartel del concierto', '演唱会海报', 'El cartel del concierto se agotó en un día.'),
                ('El telonero', '暖场歌手', 'El telonero calentó al público.'),
                ('El bis', '返场', 'El público pidió un bis.'),
                ('La acústica', '音响效果', 'La acústica de la sala es excelente.'),
                ('La mezcla', '混音', 'La mezcla final tardó una semana.'),
                ('El estudio de grabación', '录音棚', 'Grabaron el disco en un estudio de grabación.'),
                ('La discográfica', '唱片公司', 'La discográfica firmó con el grupo.'),
                ('El álbum', '专辑', 'El álbum saldrá en marzo.'),
                ('El sencillo', '单曲', 'El sencillo superó un millón de escuchas.'),
                ('La lista de éxitos', '排行榜', 'La canción llegó a la lista de éxitos.'),
                ('El videoclip', '音乐录影带', 'El videoclip se grabó en Lisboa.'),
                ('La reproducción en streaming', '流媒体播放', 'La reproducción en streaming cambió la industria.'),
                ('La suscripción musical', '音乐订阅', 'Pagamos una suscripción musical familiar.'),
                ('El reproductor', '播放器', 'El reproductor se quedó sin batería.'),
                ('El largometraje', '长片', 'El largometraje dura dos horas y media.'),
                ('El cortometraje', '短片', 'El cortometraje ganó el festival.'),
                ('El documental', '纪录片', 'El documental retrata tres familias.'),
                ('El episodio', '剧集', 'El último episodio dejó un final abierto.'),
                ('El guionista', '编剧', 'El guionista reescribió el final.'),
                ('El director de cine', '电影导演', 'El director de cine rodó en blanco y negro.'),
                ('El productor', '制片人', 'El productor buscó financiación privada.'),
                ('El protagonista', '主角', 'El protagonista apenas habla.'),
                ('El secundario', '配角', 'El actor secundario roba cada escena.'),
                ('La banda sonora', '电影配乐', 'La banda sonora ganó un premio.'),
                ('El doblaje', '配音', 'El doblaje al español es muy cuidado.'),
                ('La versión original', '原声版', 'Prefiero verla en versión original.'),
                ('La taquilla', '票房', 'La película arrasó en taquilla.'),
                ('El estreno', '首映', 'El estreno será el viernes.'),
                ('La alfombra roja', '红毯', 'Los actores desfilaron por la alfombra roja.'),
                ('El festival de cine', '电影节', 'El festival de cine premió a una ópera prima.'),
                ('La nominación', '提名', 'Su nominación sorprendió a todos.'),
                ('El suspense', '悬疑', 'La película de suspense mantiene la tensión.'),
                ('La ciencia ficción', '科幻', 'La ciencia ficción plantea dilemas éticos.'),
                ('La animación', '动画', 'La animación se hizo por ordenador.'),
                ('La adaptación literaria', '文学改编', 'La adaptación literaria respeta la novela.'),
                ('La secuela', '续集', 'La secuela superó a la original.'),
                ('El remake', '翻拍', 'El remake cambió el final.'),
                ('Los efectos especiales', '特效', 'Los efectos especiales envejecieron mal.'),
                ('La postproducción', '后期制作', 'La postproducción duró seis meses.'),
                ('Las palomitas', '爆米花', 'Compramos palomitas antes de entrar.'),
            ],
            'grammar': [
                {'title': '音乐与电影的固定搭配', 'desc': '动词搭配：tocar el piano / la guitarra（演奏），cantar una canción，dirigir una orquesta，rodar una película（拍摄），protagonizar（主演），estrenar（首映）。注意 tocar 既表「触摸」也表「演奏乐器」。'},
                {'title': '评价文艺作品的句式', 'desc': 'Se trata de… / Lo que más destaca es… / Me llamó la atención que + 虚拟式。评价电影常用：La película trata de…（电影讲述……），其中 tratar de 表「关于」而非「试图」。'},
                {'title': '表达喜好与推荐', 'desc': 'Te la recomiendo / Vale la pena verla / No es para tanto / Se me hizo larga。注意「觉得好看」用 me gustó（过去时表一次具体体验），不用 me gusta。'},
            ],
        },
    ],
}
