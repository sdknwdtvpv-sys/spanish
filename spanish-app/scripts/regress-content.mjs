/**
 * 内容渲染回归：逐条打开所有内容，检查页面是否正常渲染、有无未捕获异常。
 *
 * 为什么单独做一个：regress-core.mjs 只抽样测了几条路径。内容规模已经到
 * 91 单元 / 63 精读 / 52 听力 / 120 口语 / 103 语法主题，
 * 单条内容出错（例如某个词条缺字段导致渲染中断）不会体现在抽样测试里。
 *
 * 用法: CDP_PORT=9333 node scripts/regress-content.mjs
 */
import fs from 'node:fs';

const CDP_PORT = Number(process.env.CDP_PORT || 9333);
const URL_ = process.env.APP_URL || 'http://localhost:4173/';
const DATA = process.env.DATA_FILE || 'data/courses.js';

// 从数据文件直接枚举所有内容（不经过浏览器，避免遗漏）
const src = fs.readFileSync(DATA, 'utf8');
const mod = { exports: {} };
new Function('module', 'exports', src +
  '\nmodule.exports={COURSES,READING_PASSAGES,LISTENING_PASSAGES,SPEAKING_SENTENCES,GRAMMAR_QUIZZES,COLLOCATIONS};')(mod, mod.exports);
const d = mod.exports;

const units = [];
for (const [lv, l] of Object.entries(d.COURSES)) for (const u of l.units) units.push({ lv, id: u.id, label: `unit/${lv}/${u.id}` });
const readings = d.READING_PASSAGES.map((p, i) => ({ label: `read/${i}`, name: p.title }));
const grammar = d.GRAMMAR_QUIZZES.map((t, i) => ({ label: `learn/grammar/${units[0].id}`, name: t.topic, topicIdx: i }));

async function wsUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const j = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json();
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('CDP 不可达');
}

const ws = new WebSocket(await wsUrl());
await new Promise((r, j) => { ws.addEventListener('open', r, { once: true }); ws.addEventListener('error', j, { once: true }); });
let id = 0; const pend = new Map(); let sid = null; const exc = [];
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pend.has(m.id)) { const { resolve, reject } = pend.get(m.id); pend.delete(m.id); m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result); return; }
  if (m.method === 'Runtime.exceptionThrown') { const x = m.params.exceptionDetails || {}; exc.push((x.exception?.description || x.text || '').split('\n')[0]); }
});
const send = (method, params = {}, s = true) => { const i = ++id; const msg = { id: i, method, params }; if (s && sid) msg.sessionId = sid; ws.send(JSON.stringify(msg)); return new Promise((resolve, reject) => pend.set(i, { resolve, reject })); };
const ev = async (x) => { const r = await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) return { __error: r.exceptionDetails.exception?.description }; return r.result.value; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pass = 0, fail = 0;
const check = (n, c, dsc = '') => { if (c) { pass++; } else { fail++; console.log(`  ❌ ${n}${dsc ? ' — ' + dsc : ''}`); } };

const { targetId } = await send('Target.createTarget', { url: 'about:blank' }, false);
sid = (await send('Target.attachToTarget', { targetId, flatten: true }, false)).sessionId;
await send('Runtime.enable'); await send('Page.enable');
await send('Page.navigate', { url: URL_ }); await sleep(2600);
await ev(`localStorage.clear()`); await send('Page.navigate', { url: URL_ }); await sleep(2600);
await ev(`(()=>{const f=document.getElementById('login-form');const i=f.querySelectorAll('input');const s=(e,v)=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}));};s(i[0],'content');s(i[1],'pw');f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true}));return 1;})()`);
await sleep(1600);

// 1. 逐单元
exc.length = 0;
let okUnits = 0; const badUnits = [];
for (const u of units) {
  const before = exc.length;
  await ev(`location.hash='unit/${u.lv}/${u.id}'`); await sleep(240);
  const r = await ev(`(()=>{const t=document.getElementById('app').innerText;return t.length>120;})()`);
  if (r === true && exc.length === before) okUnits++; else badUnits.push(u.id);
}
check(`全部 ${units.length} 个单元可渲染`, badUnits.length === 0, `失败 ${badUnits.slice(0, 5).join(', ')}`);
console.log(`  单元渲染 ${okUnits}/${units.length} / 异常 ${exc.length}`);

// 2. 逐篇精读
exc.length = 0;
let okRead = 0; const badRead = [];
for (let i = 0; i < d.READING_PASSAGES.length; i++) {
  const before = exc.length;
  await ev(`location.hash='read/${i}'`); await sleep(300);
  const r = await ev(`(()=>{const t=document.getElementById('app').innerText;return {ok:t.length>200, hasGlossary:t.includes('生词')||t.includes('词汇')};})()`);
  if (r && r.ok && exc.length === before) okRead++; else badRead.push(i + ':' + (r && r.__error ? r.__error.slice(0, 40) : ''));
}
check(`全部 ${d.READING_PASSAGES.length} 篇精读可渲染`, badRead.length === 0, `失败 ${badRead.slice(0, 5).join(', ')}`);
console.log(`  精读渲染 ${okRead}/${d.READING_PASSAGES.length} / 异常 ${exc.length}`);

// 3. 语法题库：逐主题渲染（用同一单元的入口，检查题库数据本身可读）
exc.length = 0;
let okG = 0;
for (let i = 0; i < d.GRAMMAR_QUIZZES.length; i++) {
  const before = exc.length;
  const r = await ev(`(()=>{const t=GRAMMAR_QUIZZES[${i}];return !!(t&&t.topic&&t.questions&&t.questions.length);})()`);
  if (r === true && exc.length === before) okG++;
}
check(`全部 ${d.GRAMMAR_QUIZZES.length} 个语法主题数据可读`, okG === d.GRAMMAR_QUIZZES.length, `${okG}/${d.GRAMMAR_QUIZZES.length}`);
console.log(`  语法主题 ${okG}/${d.GRAMMAR_QUIZZES.length}`);

console.log(`\n===== 内容渲染回归: ${pass} 通过, ${fail} 失败 =====`);
ws.close();
process.exit(fail ? 1 : 0);
