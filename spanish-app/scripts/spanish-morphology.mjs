/**
 * 西语屈折还原（轻量启发式）
 * 目的：判断例句中是否出现了某词条的「某种形式」，避免把正常变位当成错误。
 * 不做完整形态学分析，只用「词干匹配」+ 规则后缀剥离。
 */
const stripAccents = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** 取出一个词条里所有「实词」的词干候选 */
export function stemsOf(term) {
  const t = (term || '').trim();
  // 去掉注释性括号、斜杠并列
  const cleaned = t.replace(/\(.*?\)/g, ' ').replace(/[/|]/g, ' ');
  const words = cleaned.split(/\s+/).filter(w => w.length >= 3 && !/^(el|la|los|las|un|una|unos|unas|de|del|a|al|en|con|por|para|que|y|o|se|su|mi|tu|lo)$/i.test(w));
  const out = [];
  words.forEach(w => {
    const base = stripAccents(w.replace(/[¿?¡!.,;:]/g, ''));
    // 候选词干：原形 + 逐级剥离后缀。多候选可提高召回。
    const cands = new Set([base]);
    // 自复动词：levantarse → levantar
    if (/se$/.test(base) && base.length > 5) cands.add(base.slice(0, -2));
    // 名词/形容词复数与性
    if (/(es|os|as)$/.test(base) && base.length > 5) cands.add(base.slice(0, -2));
    if (/(s)$/.test(base) && base.length > 4) cands.add(base.slice(0, -1));
    // 动词：按最长后缀优先剥离
    const sfx = [
      'aríamos', 'eríamos', 'iríamos', 'aremos', 'eremos', 'iremos',
      'aciones', 'iciones', 'amiento', 'imiento', 'ísimo', 'ísima',
      'ando', 'iendo', 'ados', 'idos', 'ada', 'idas', 'ado', 'ido',
      'aría', 'ería', 'iría', 'aste', 'iste', 'aron', 'ieron',
      'aba', 'abamos', 'ían', 'amos', 'emos', 'imos',
      'ará', 'erá', 'irá', 'ar', 'er', 'ir',
      'as', 'es', 'os', 'an', 'en', 'a', 'o', 'e', 'ía',
    ];
    sfx.forEach(s => {
      if (base.endsWith(s) && base.length - s.length >= 4) {
        cands.add(base.slice(0, base.length - s.length));
      }
    });
    cands.forEach(c => { if (c.length >= 4) out.push(c); });
  });
  return [...new Set(out)];
}

/**
 * 不规则 / 强词根变位表：原形 → 必须额外认可的词干。
 * 规则变位由 stemsOf 的后缀剥离覆盖，这里只补不规则项，
 * 否则 "querer→quiere"、"pertenecer→pertenezco" 会被误判为「例句未含该词」。
 */
const IRREGULAR_STEMS = {
  // -ar
  dar: ['doy', 'das', 'da', 'damos', 'dan', 'di', 'dio', 'dieron', 'daba', 'dado'],
  estar: ['estoy', 'estas', 'esta', 'estamos', 'estan', 'estuve', 'estuvo', 'estado', 'este', 'esten'],
  andar: ['ando', 'andas', 'anda', 'anduve', 'anduvo', 'andado'],
  // -er
  tener: ['tengo', 'tienes', 'tiene', 'tenemos', 'tienen', 'tuve', 'tuv', 'tendra', 'tendre', 'tenido'],
  hacer: ['hago', 'haces', 'hace', 'hacemos', 'hacen', 'hice', 'hizo', 'hicieron', 'har', 'hecho'],
  poner: ['pongo', 'pones', 'pone', 'ponemos', 'ponen', 'puse', 'puso', 'pusieron', 'pondr', 'puesto'],
  querer: ['quiero', 'quieres', 'quiere', 'queremos', 'quieren', 'quise', 'quiso', 'querr', 'querido'],
  poder: ['puedo', 'puedes', 'puede', 'podemos', 'pueden', 'pude', 'pudo', 'podr', 'podido'],
  saber: ['se', 'sabes', 'sabe', 'sabemos', 'saben', 'supe', 'supo', 'sabr', 'sabido'],
  ver: ['veo', 'ves', 've', 'vemos', 'ven', 'vi', 'vio', 'vieron', 'veia', 'visto'],
  ser: ['soy', 'eres', 'es', 'somos', 'son', 'fui', 'fue', 'fueron', 'era', 'sido', 'sea', 'sean'],
  ir: ['voy', 'vas', 'va', 'vamos', 'van', 'fui', 'fue', 'fueron', 'iba', 'ido', 'vaya'],
  haber: ['he', 'has', 'ha', 'hemos', 'han', 'habia', 'hubo', 'habido', 'haya'],
  caber: ['cabe', 'cabo', 'cupe', 'cupo', 'cabr'],
  valer: ['vale', 'valgo', 'vali', 'valdr'],
  caer: ['caigo', 'cae', 'cai', 'cayo', 'caido'],
  oir: ['oigo', 'oye', 'oimos', 'oyen', 'oi', 'oyo', 'oido'],
  creer: ['creo', 'crees', 'cree', 'creemos', 'creen', 'crei', 'creyo', 'creido'],
  leer: ['leo', 'lees', 'lee', 'leemos', 'leen', 'lei', 'leyo', 'leido'],
  crecer: ['crezco', 'crece', 'creci', 'crecio', 'crecido'],
  nacer: ['nazco', 'nace', 'naci', 'nacio', 'nacido'],
  conocer: ['conozco', 'conoce', 'conoci', 'conocio', 'conocido'],
  parecer: ['parezco', 'parece', 'pareci', 'parecio', 'parecido'],
  parecerse: ['parezco', 'parece', 'parecen', 'parecido'],
  pertenecer: ['pertenezco', 'pertenece', 'perteneci', 'pertenecio'],
  agradecer: ['agradezco', 'agradece', 'agradeci', 'agradecio'],
  ofrecer: ['ofrezco', 'ofrece', 'ofreci', 'ofrecio', 'ofrecido'],
  conducir: ['conduzco', 'conduce', 'conduje', 'condujo', 'conducido'],
  traducir: ['traduzco', 'traduce', 'traduje', 'tradujo', 'traducido'],
  producir: ['produzco', 'produce', 'produje', 'produjo', 'producido'],
  decir: ['digo', 'dices', 'dice', 'decimos', 'dicen', 'dije', 'dijo', 'dir', 'dicho', 'diga'],
  // -ir
  venir: ['vengo', 'vienes', 'viene', 'venimos', 'vienen', 'vine', 'vino', 'vinieron', 'vendr', 'venido'],
  salir: ['salgo', 'sales', 'sale', 'salimos', 'salen', 'sali', 'salio', 'saldr', 'salido'],
  seguir: ['sigo', 'sigues', 'sigue', 'seguimos', 'siguen', 'segui', 'siguio', 'seguido'],
  conseguir: ['consigo', 'consigue', 'conseguimos', 'consiguen', 'consegui', 'consiguio'],
  perseguir: ['persigo', 'persigue', 'persiguen'],
  pedir: ['pido', 'pides', 'pide', 'pedimos', 'piden', 'pedi', 'pidio', 'pedido'],
  servir: ['sirvo', 'sirves', 'sirve', 'servimos', 'sirven', 'servi', 'sirvio'],
  vestir: ['visto', 'vistes', 'viste', 'vestimos', 'visten', 'vesti'],
  vestirse: ['me visto', 'te vistes', 'se viste', 'nos vestimos', 'se visten'],
  sentir: ['siento', 'sientes', 'siente', 'sentimos', 'sienten', 'senti', 'sintio'],
  sentirse: ['me siento', 'te sientes', 'se siente', 'nos sentimos', 'se sienten'],
  mentir: ['miento', 'mientes', 'miente', 'mienten'],
  preferir: ['prefiero', 'prefieres', 'prefiere', 'preferimos', 'prefieren', 'preferi'],
  referir: ['refiero', 'refiere', 'refieren'],
  inferir: ['infiero', 'infiere', 'infirio', 'infieren'],
  convertir: ['convierto', 'convierte', 'convertimos', 'convierten'],
  divertirse: ['me divierto', 'te diviertes', 'se divierte', 'se divierten'],
  morir: ['muero', 'mueres', 'muere', 'morimos', 'mueren', 'muri', 'murio', 'muerto'],
  dormir: ['duermo', 'duermes', 'duerme', 'dormimos', 'duermen', 'dormi', 'durmi'],
  dormirse: ['me duermo', 'te duermes', 'se duerme', 'se duermen'],
  repetir: ['repito', 'repites', 'repite', 'repiten', 'repeti', 'repitio'],
  elegir: ['elijo', 'eliges', 'elige', 'elegimos', 'eligen', 'elegi', 'eligio'],
  corregir: ['corrijo', 'corrige', 'corrigen'],
  recoger: ['recojo', 'recoge', 'recogemos', 'recogen'],
  coger: ['cojo', 'coge', 'cogemos', 'cogen', 'cogi', 'cogio'],
  proteger: ['protejo', 'protege', 'protegemos'],
  dirigir: ['dirijo', 'dirige', 'dirigimos', 'dirigen'],
  exigir: ['exijo', 'exige', 'exigen'],
  surgir: ['surjo', 'surge', 'surgen', 'surgio'],
  emerger: ['emerge', 'emergen', 'emergio'],
  rendir: ['rindo', 'rindes', 'rinde', 'rendimos', 'rinden'],
  rendirse: ['me rindo', 'se rinde', 'se rinden'],
  adquirir: ['adquiero', 'adquiere', 'adquirimos', 'adquieren'],
  inquirir: ['inquiere', 'inquieren'],
  huir: ['huyo', 'huye', 'huimos', 'huyen'],
  construir: ['construyo', 'construye', 'construimos', 'construyen', 'construido'],
  incluir: ['incluyo', 'incluye', 'incluimos', 'incluyen', 'incluido'],
  concluir: ['concluyo', 'concluye', 'concluyen', 'concluido'],
  sustituir: ['sustituyo', 'sustituye', 'sustituyen'],
  atribuir: ['atribuyo', 'atribuye', 'atribuyen'],
  destruir: ['destruyo', 'destruye', 'destruyen', 'destruido'],
  instruir: ['instruyo', 'instruye', 'instruyen'],
  influir: ['influyo', 'influye', 'influyen'],
  rehuir: ['rehuye', 'rehuyen'],
  reir: ['rio', 'ries', 'rie', 'reimos', 'rien', 'rei', 'reyo', 'reido'],
  reirse: ['me rio', 'te ries', 'se rie', 'se rien', 'te rias', 'se ria', 'reido', 'reia'],
  sonreir: ['sonrio', 'sonries', 'sonrie', 'sonreimos', 'sonrien', 'sonrei'],
  freir: ['frio', 'frie', 'frien'],
  // 拼写变化 -gar/-car/-zar/-ger/-gir
  llegar: ['llego', 'llegue', 'llega', 'llegamos', 'llegan', 'llegue', 'llegado'],
  pagar: ['pago', 'pague', 'paga', 'pagan', 'pagado'],
  jugar: ['juego', 'juegas', 'juega', 'jugamos', 'juegan', 'jugue', 'jugado'],
  empezar: ['empiezo', 'empiezas', 'empieza', 'empezamos', 'empiezan', 'empece', 'empezado'],
  comenzar: ['comienzo', 'comienza', 'comenzamos', 'comienzan', 'comence'],
  pensar: ['pienso', 'piensas', 'piensa', 'pensamos', 'piensan', 'pense', 'pensado'],
  cerrar: ['cierro', 'cierras', 'cierra', 'cerramos', 'cierran', 'cerre', 'cerrado'],
  acertar: ['acierto', 'acierta', 'aciertan'],
  despertar: ['despierto', 'despierta', 'despertamos', 'despiertan'],
  despertarse: ['me despierto', 'te despiertas', 'se despierta', 'se despiertan'],
  sentar: ['siento', 'sienta', 'sentamos', 'sientan'],
  sentarse: ['me siento', 'te sientas', 'se sienta', 'se sientan'],
  quebrar: ['quiebra', 'quiebran'],
  regar: ['riego', 'riega', 'riegan'],
  negar: ['niego', 'niega', 'niegan', 'negue', 'negado'],
  contar: ['cuento', 'cuentas', 'cuenta', 'contamos', 'cuentan', 'conte', 'contado'],
  recordar: ['recuerdo', 'recuerdas', 'recuerda', 'recordamos', 'recuerdan', 'recorde'],
  acordar: ['acuerdo', 'acuerda', 'acuerdan'],
  acordarse: ['me acuerdo', 'te acuerdas', 'se acuerda', 'se acuerdan'],
  mostrar: ['muestro', 'muestra', 'mostramos', 'muestran', 'mostre'],
  probar: ['pruebo', 'prueba', 'probamos', 'prueban', 'probe'],
  aprobar: ['apruebo', 'aprueba', 'aprobamos', 'aprueban', 'aprobe', 'aprobado'],
  comprobar: ['compruebo', 'comprueba', 'comprobamos', 'comprueban'],
  encontrar: ['encuentro', 'encuentra', 'encontramos', 'encuentran', 'encontre', 'encontrado'],
  sonar: ['sueno', 'suena', 'sonamos', 'suenan'],
  soñar: ['sueno', 'suena', 'sonamos', 'suenan', 'sonado'],
  volar: ['vuelo', 'vuela', 'volamos', 'vuelan', 'vole'],
  colgar: ['cuelgo', 'cuelga', 'colgamos', 'cuelgan', 'colgado'],
  rogar: ['ruego', 'ruega', 'ruegan'],
  mover: ['muevo', 'mueve', 'movemos', 'mueven', 'movi', 'movido'],
  llover: ['llueve', 'llueven', 'llovio', 'llovido'],
  soler: ['suelo', 'sueles', 'suele', 'solemos', 'suelen', 'solia', 'solian'],
  volver: ['vuelvo', 'vuelves', 'vuelve', 'volvemos', 'vuelven', 'volvi', 'vuelto'],
  devolver: ['devuelvo', 'devuelve', 'devuelven', 'devuelto'],
  resolver: ['resuelvo', 'resuelve', 'resuelven', 'resuelto'],
  envolver: ['envuelve', 'envuelven', 'envuelto'],
  revolver: ['revuelve', 'revuelven'],
  cocer: ['cuezo', 'cuece', 'cocemos', 'cuecen'],
  torcer: ['tuerzo', 'tuerce', 'tuercen'],
  perder: ['pierdo', 'pierdes', 'pierde', 'perdemos', 'pierden', 'perdi', 'perdido'],
  perderse: ['me perdi', 'se pierde', 'se pierden', 'perdido'],
  encender: ['enciendo', 'enciende', 'encienden', 'encendido'],
  entender: ['entiendo', 'entiendes', 'entiende', 'entendemos', 'entienden', 'entendi', 'entendido'],
  atender: ['atiendo', 'atiende', 'atienden', 'atendido'],
  defender: ['defiendo', 'defiende', 'defienden', 'defendido'],
  ofender: ['ofende', 'ofenden', 'ofendido'],
  // -uir / 其他高频
  actuar: ['actuo', 'actua', 'actuan', 'actuado'],
  continuar: ['continuo', 'continua', 'continuan'],
  evaluar: ['evaluo', 'evalua', 'evaluan'],
  situar: ['situo', 'situa', 'situan'],
  graduarse: ['me gradue', 'me gradúo', 'se graduo', 'graduado', 'gradue'],
  matricularse: ['me matricule', 'se matriculo', 'matriculado', 'matricule'],
  disculparse: ['me disculpo', 'se disculpo', 'disculpado', 'disculpe'],
  arrepentirse: ['me arrepiento', 'se arrepiente', 'se arrepienten', 'arrepentido'],
  alegrarse: ['me alegro', 'se alegra', 'se alegro', 'alegrado'],
  preocuparse: ['me preocupo', 'se preocupa', 'se preocupo', 'preocupado'],
  enfadarse: ['me enfado', 'se enfada', 'se enfado', 'enfadado'],
  quejarse: ['me quejo', 'se queja', 'se quejo', 'quejado'],
  ilusionarse: ['me ilusiono', 'se ilusiono', 'ilusionado'],
  decepcionarse: ['me decepcione', 'se decepciono', 'decepcionado', 'decepcione'],
  animarse: ['me animo', 'animate', 'se animo', 'animado'],
  tranquilizarse: ['me tranquilizo', 'tranquilizate', 'se tranquilizo', 'tranquilizado', 'tranquiliza'],
  sorprenderse: ['me sorprendi', 'se sorprendio', 'sorprendido', 'sorprende'],
  emocionarse: ['me emocione', 'se emociono', 'emocionado', 'emocione'],
  mudarse: ['me mude', 'nos mudamos', 'se mudo', 'mudado', 'mudamos'],
  levantarse: ['me levanto', 'te levantas', 'se levanta', 'se levantan', 'levantado'],
  acostarse: ['me acuesto', 'te acuestas', 'se acuesta', 'se acuestan', 'acostado'],
  ducharse: ['me ducho', 'te duchas', 'se ducha', 'se duchan', 'duchado'],
  bañarse: ['me bano', 'te banas', 'se bana', 'se banan', 'banado'],
  cansarse: ['me canso', 'se cansa', 'cansado'],
  casarse: ['me case', 'se caso', 'casado', 'casaron'],
  llamarse: ['me llamo', 'te llamas', 'se llama', 'se llaman', 'llamado'],
  irse: ['me voy', 'te vas', 'se va', 'nos vamos', 'se van', 'ido'],
  quedarse: ['me quedo', 'se queda', 'se quedaron', 'quedado'],
  ponerse: ['me pongo', 'se pone', 'se pusieron', 'puesto'],
  hacerse: ['me hago', 'se hace', 'se hicieron', 'hecho'],
  volverse: ['me vuelvo', 'se vuelve', 'se volvio', 'vuelto'],
  morirse: ['me muero', 'se muere', 'se murio', 'muerto'],
  // 强词根（不规则过去时 / 分词）：词干整体改变，靠词干匹配抓不到
  aducir: ['adujo', 'aduje', 'aducido', 'aducen'],
  exponer: ['expuso', 'expuse', 'expuesto', 'exponen'],
  imponer: ['impuso', 'impuse', 'impuesto', 'imponen'],
  componer: ['compuso', 'compuse', 'compuesto'],
  disponer: ['dispuso', 'dispuse', 'dispuesto', 'disponen'],
  suponer: ['supuso', 'supuse', 'supuesto', 'suponen'],
  proponer: ['propuso', 'propuse', 'propuesto', 'proponen'],
  reponer: ['repuso', 'repuesto'],
  contraponer: ['contrapuso', 'contrapuse', 'contrapuesto', 'contraponen'],
  sobreponerse: ['sobrepuso', 'sobrepuse', 'sobrepuesto', 'sobrepone'],
  anteponer: ['antepuso', 'antepuesto'],
  contener: ['contuvo', 'contuve', 'contenido', 'contiene', 'contienen'],
  obtener: ['obtuvo', 'obtuve', 'obtenido', 'obtiene'],
  mantener: ['mantuvo', 'mantuve', 'mantenido', 'mantiene'],
  detener: ['detuvo', 'detuve', 'detenido', 'detiene'],
  retener: ['retuvo', 'retuve', 'retenido', 'retiene'],
  entretener: ['entretuvo', 'entretenido', 'entretiene'],
  abstener: ['abstuvo', 'abstenido'],
  sostener: ['sostuvo', 'sostuve', 'sostenido', 'sostiene'],
  atraer: ['atrajo', 'atrae', 'atraido', 'atraen'],
  distraer: ['distrajo', 'distrae', 'distraido'],
  contraer: ['contrajo', 'contrae', 'contraido'],
  sustraer: ['sustrajo', 'sustrae'],
  desmentir: ['desmintio', 'desmiente', 'desmentido', 'desmintieron'],
  invertir: ['invirtio', 'invierte', 'invertido', 'invirtieron'],
  trascender: ['trasciende', 'trascendio', 'trascendido', 'trascienden'],
  transcurrir: ['transcurre', 'transcurrio', 'transcurrido'],
  circunscribir: ['circunscribe', 'circunscribio', 'circunscrito'],
  prescribir: ['prescribe', 'prescribio', 'prescrito'],
  inscribir: ['inscribe', 'inscribio', 'inscrito'],
  describir: ['describe', 'describio', 'descrito', 'describen'],
  suscribir: ['suscribe', 'suscribio', 'suscrito'],
  adscribir: ['adscribe', 'adscrito'],
  prescindir: ['prescinde', 'prescindio'],
  // 词干元音变化（o→ue / e→ie）在命令式与名词化里绕过词干匹配
  colgar: ['cuelgo', 'cuelga', 'cuelgues', 'cuelgan', 'colgado'],
  doler: ['duele', 'duelen', 'dolio', 'dolido'],
  curar: ['curo', 'cura', 'cure', 'curan', 'curado'],
  bañar: ['bano', 'bana', 'bane', 'banan', 'banado'],
  almorzar: ['almuerzo', 'almuerza', 'almuerce', 'almuerzan', 'almorzado'],
  merendar: ['meriendo', 'merienda', 'meriendan'],
  confiar: ['confio', 'confia', 'confian', 'confiado'],
  criar: ['crio', 'cria', 'crian'],
  fiar: ['fio', 'fia', 'fian'],
  guiar: ['guio', 'guia', 'guian'],
  enviar: ['envio', 'envia', 'envian', 'enviado'],
  esquiar: ['esquio', 'esquia'],
  variar: ['vario', 'varia', 'varian'],
  ampliar: ['amplio', 'amplia', 'amplian'],
  estudiar: ['estudio', 'estudia', 'estudian', 'estudiado'],
  orientar: ['oriento', 'orienta', 'orientan', 'orientado'],
  emigrar: ['emigro', 'emigra', 'emigran', 'emigraron', 'emigrado'],
  endeudar: ['endeudo', 'endeuda', 'endeudan', 'endeudaron', 'endeudado'],
  amortizar: ['amortizo', 'amortiza', 'amortizan', 'amortizado'],
  desahogar: ['desahogo', 'desahoga', 'desahogan', 'desahogado'],
  almorzar: ['almuerzo', 'almuerza', 'almuerzan', 'almorzado'],
  // 名词 ↔ 动词的异根形式（词干完全不同，必须显式登记）
  frio: ['fria', 'frios', 'frias'],
  dolor: ['duele', 'duelen', 'dolio', 'dolido', 'dolores'],
  orientacion: ['orientado', 'orienta', 'oriento', 'orientan'],
  amortizacion: ['amortizo', 'amortiza', 'amortizado', 'amortizan'],
};

/** 去掉修饰词，取词条的第一个实词（用于 Mudarse a / Pecar de 这类短语） */
const FUNCTION_WORDS = /^(el|la|los|las|un|una|unos|unas|de|del|a|al|en|con|por|para|que|y|o|se|su|mi|tu|lo|muy|más|mas)$/i;
function headWord(term) {
  const cleaned = (term || '').replace(/\(.*?\)/g, ' ').replace(/[/|,]/g, ' ');
  return cleaned.split(/\s+/).filter(w => w && !FUNCTION_WORDS.test(w))[0] || '';
}

/** 动词原形 → 真词干（剥离 -ar/-er/-ir 与自复 -se；不再附加零散后缀） */
function verbRoot(term) {
  let h = stripAccents(headWord(term));
  if (/se$/.test(h) && h.length > 5) h = h.slice(0, -2); // bañarse → bañar
  if (!/(ar|er|ir)$/.test(h) || h.length < 4) return null;
  return h.slice(0, -2);
}

/** 词条是否是一个（可识别的）动词原形 */
function infinitiveOf(term) {
  const t = stripAccents(headWord(term));
  return /(ar|er|ir)$/.test(t) && t.length >= 4 ? t : null;
}

/** 首字母大写的专有名词（Argentina / PIB / El PIB） */
function isProperNoun(term) {
  const h = headWord(term).replace(/[¿?¡!.,;:]/g, '');
  return h.length > 0 && /^[A-ZÁÉÍÓÚÑÜ]/.test(h);
}

/** 判断例句中是否包含该词条的某个形态 */
export function exampleCoversTerm(term, example) {
  const exRaw = (example || '').trim();
  const ex = stripAccents(exRaw);
  const stems = stemsOf(term);
  if (!stems.length) return true;

  // 1. 词干直接命中（长度 >=4 足够安全）
  if (stems.some(st => st.length >= 4 && ex.includes(st))) return true;

  // 1b. 短词干 + 屈折尾（含重音变化）：frío→fría
  const SHORT_TAIL = '(o|a|os|as|es|s|ito|ita|azo|aza|ico|ica|oso|osa|ar|er|ir)\\b';
  if (stems.some(st => st.length <= 4 && new RegExp('\\b' + st + SHORT_TAIL).test(ex))) return true;
  // 1c. 长词干取前缀匹配派生词：prescripción↔prescrito, amortización↔amortizó
  if (stems.some(st => st.length >= 7 && new RegExp('\\b' + st.slice(0, 5) + '[a-z]{0,8}\\b').test(ex))) return true;

  // 1d. 首字母缩写比对（取每个实词首字母，跳过冠词）：El producto interior bruto ↔ El PIB
  const termWords = (term || '').replace(/\(.*?\)/g, ' ').split(/\s+/).filter(Boolean);
  const contentWords = termWords.filter(w => !/^(el|la|los|las|un|una|de|del)$/i.test(w));
  if (contentWords.length >= 3) {
    const abbr = stripAccents(contentWords.map(w => w[0]).join('')).toUpperCase();
    const initials = stripAccents(exRaw.split(/[\s,;:.!?¿¡]+/).map(w => w[0] || '').join('')).toUpperCase();
    if (abbr.length >= 2 && initials.includes(abbr)) return true;
  }

  // 2. 动词真词干按词边界匹配：comer→comemos / aducir→adujo / subir→subí
  const root = verbRoot(term);
  if (root && root.length >= 3) {
    const re = new RegExp('\\b' + root.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[a-z]{0,7}\\b');
    if (re.test(ex)) return true;
  }

  // 3. 不规则变位表命中
  // 3a. 先查「整词」（含自复式与名词）：reírse→te rías / raíz→raíces
  const whole = stripAccents(headWord(term));
  if (IRREGULAR_STEMS[whole] && IRREGULAR_STEMS[whole].some(f => ex.includes(stripAccents(f)))) return true;
  // 3b. 再查原形（去掉自复 -se 后）
  const inf = infinitiveOf(term);
  if (inf && IRREGULAR_STEMS[inf]) {
    if (IRREGULAR_STEMS[inf].some(f => f.length >= 2 && ex.includes(stripAccents(f)))) return true;
  }
  if (IRREGULAR_STEMS[whole.replace(/se$/, '')] &&
      IRREGULAR_STEMS[whole.replace(/se$/, '')].some(f => ex.includes(stripAccents(f)))) return true;
  if (IRREGULAR_STEMS[stripAccents(term.trim())] &&
      IRREGULAR_STEMS[stripAccents(term.trim())].some(f => ex.includes(stripAccents(f)))) return true;

  // 4. 专有名词：前缀命中（Argentina↔argentino / PIB↔Producto Interior Bruto）
  if (isProperNoun(term)) {
    const h = stripAccents(headWord(term));
    if (h.length >= 5 && ex.includes(h.slice(0, Math.max(4, h.length - 3)))) return true;
    // 缩写：取例文中各词首字母拼串比对（PIB ← Producto Interior Bruto）
    const abbr = headWord(term).replace(/[^A-ZÁÉÍÓÚÑÜ]/g, '');
    if (abbr.length >= 2 && abbr.length <= 5 && !/\s/.test(headWord(term))) {
      const initials = exRaw.split(/[\s,;:.!?¿¡]+/).map(w => w[0] || '').join('');
      if (initials.toUpperCase().includes(abbr.toUpperCase())) return true;
    }
  }

  return false;
}

/** 判断词条是否包含例句里的某个实词（用于反向检查） */
export function termCoversExampleWord(term, example) {
  const st = stemsOf(term);
  const ex = stripAccents(example || '');
  const exWords = ex.replace(/[¿?¡!.,;:]/g, ' ').split(/\s+/).filter(w => w.length >= 4);
  return exWords.some(w => st.some(s => w.startsWith(s) || s.startsWith(w.slice(0, Math.max(4, w.length - 3)))));
}

export { stripAccents };
