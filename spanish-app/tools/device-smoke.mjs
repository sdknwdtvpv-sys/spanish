/**
 * 真机 WebView 冒烟测试
 *
 * 为什么用这条路而不是 adb input tap：
 *   一开始我用 `adb shell input tap` 按坐标点，结果键盘弹出后布局上移，
 *   后续点击落到了**设备上另一个应用**上。坐标点击在真机上不可靠：
 *   键盘、状态栏、弹窗都会改变布局。
 *   而 debug 版 WebView 暴露了 DevTools 套接字（adb forward 到 9222），
 *   可以直接从电脑驱动页面：读 DOM、填表单、派发事件、截图。
 *   这与我在浏览器回归里用的是同一套 CDP 方法，只是换到了真机 WebView。
 *
 * 用法: CDP_PORT=9222 node tools/device-smoke.mjs
 */
const CDP_PORT = Number(process.env.CDP_PORT || 9222);
const BASE = `http://127.0.0.1:${CDP_PORT}`;

async function pageWs() {
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch(`${BASE}/json/list`)).json();
      const page = list.find((p) => p.type === 'page' && p.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('未找到可调试页面');
}

const ws = new WebSocket(await pageWs());
await new Promise((res, rej) => {
  ws.addEventListener('open', res, { once: true });
  ws.addEventListener('error', rej, { once: true });
});

let id = 0;
const pend = new Map();
const exceptions = [];
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pend.has(m.id)) {
    const { resolve, reject } = pend.get(m.id);
    pend.delete(m.id);
    m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    return;
  }
  if (m.method === 'Runtime.exceptionThrown') {
    const d = m.params.exceptionDetails || {};
    exceptions.push((d.exception?.description || d.text || '').split('\n')[0]);
  }
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') {
    exceptions.push('[console.error] ' + (m.params.args || []).map((a) => a.value ?? a.description).join(' ').slice(0, 200));
  }
});
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const i = ++id;
    pend.set(i, { resolve, reject });
    ws.send(JSON.stringify({ id: i, method, params }));
  });
const ev = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) return { __error: (r.exceptionDetails.exception?.description || r.exceptionDetails.text || '').split('\n')[0] };
  return r.result.value;
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await send('Runtime.enable');
await send('Page.enable');
await send('Log.enable').catch(() => {});

let pass = 0, fail = 0;
const check = (name, cond, detail = '') => {
  cond ? pass++ : fail++;
  console.log(`  ${cond ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
};

console.log('\n========== 真机 WebView 冒烟测试 ==========');
console.log('设备页面:', await ev('location.href'));

// ---------- 1. 页面基本可用 ----------
console.log('\n--- 1. 页面加载 ---');
check('document 已就绪', (await ev('document.readyState')) === 'complete', await ev('document.readyState'));
const title = await ev('document.title');
check('标题正确', /Lingua/.test(title || ''), title);
const vocabCount = await ev('typeof ALL_VOCAB !== "undefined" ? ALL_VOCAB.length : -1');
check('词库已加载', vocabCount > 6000, `ALL_VOCAB=${vocabCount}`);
const courseUnits = await ev('(()=>{let n=0;for(const l of Object.values(COURSES))n+=l.units.length;return n;})()');
check('单元已加载', courseUnits === 125, `单元=${courseUnits}`);
check('无 JS 异常', exceptions.length === 0, exceptions.slice(0, 3).join(' | ') || '无');

// ---------- 2. 登录（清空后走真实表单）----------
console.log('\n--- 2. 登录流程 ---');
await ev('localStorage.clear(); location.hash=""; 1');
await sleep(1500);
await ev('location.reload()');
await sleep(3000);
check('出现登录表单', await ev('!!document.getElementById("login-form")'));
const loginRes = await ev(`(()=>{
  const f = document.getElementById('login-form');
  if (!f) return 'no-form';
  const ins = f.querySelectorAll('input');
  const set = (el, v) => {
    const d = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), 'value');
    d.set.call(el, v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };
  set(ins[0], 'realtest');
  set(ins[1], 'pw123456');
  f.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  return 'submitted:' + ins.length;
})()`);
check('登录表单已提交', String(loginRes).startsWith('submitted'), String(loginRes));
await sleep(2500);
// 注意：登录页元素可能仍留在 DOM 中（只是被隐藏），所以不能只看元素是否存在，
// 要看是否真的建立了登录态。第一版就是这样误报失败的。
const userKey = await ev('localStorage.getItem("le_current_user")');
check('已建立登录态', !!userKey, `le_current_user=${userKey}`);
check('学习进度已写入', (await ev('!!localStorage.getItem("le_progress")')) === true);

// ---------- 3. 主路由 ----------
console.log('\n--- 3. 主路由渲染 ---');
const routes = [
  ['首页', '#home', '#home'],
  ['课程', '#courses', '#courses'],
  ['精读', '#reading', '#reading'],
  ['搭配', '#collocations', '#collocations'],
  ['我的', '#profile', '#profile'],
];
for (const [label, hash] of routes) {
  await ev(`location.hash='${hash}'`);
  await sleep(1400);
  const html = await ev('(document.getElementById("app")||{innerHTML:""}).innerHTML.length');
  check(`路由 ${label} 有内容`, html > 500, `${html} 字符`);
}

// ---------- 4. 单词卡与 SRS ----------
console.log('\n--- 4. 单词卡 / SRS ---');
await ev('location.hash="learn/vocab/a1-u1"');
await sleep(2000);
const cardWord = await ev('(document.querySelector(".flashcard-word")||{}).textContent || ""');
check('单词卡显示具体词', (cardWord || '').trim().length > 0, `词="${(cardWord || '').trim()}"`);
const hasBtns = await ev('document.querySelectorAll(".card-btn, .card-btn.play").length');
check('卡片有操作按钮', hasBtns > 0, `按钮数=${hasBtns}`);

// 标记「已掌握」-> 检查 SRS 与积分（第一版误点了「发音」按钮，所以没有变化）
const snap = () => ev('JSON.stringify({srs:Object.keys(AppState.progress.srs||{}).length, pts:AppState.progress.points||0, known:(AppState.progress.knownWords||[]).length})');
const before = await snap();
const clicked = await ev(`(()=>{const b=[...document.querySelectorAll('.card-btn')].find(x=>x.classList.contains('known'));if(b){b.click();return true;}return false;})()`);
await sleep(2000);
const after = await snap();
check('「已掌握」按钮存在', clicked === true);
check('标记后 SRS/积分/已学词都更新', before !== after, `${before} -> ${after}`);

// ---------- 5. 发音（真机 TTS）----------
console.log('\n--- 5. 发音功能 ---');
// 真机实测记录（不是断言失败，而是环境事实）：
//   - Android WebView 里没有 speechSynthesis 这个 API
//   - Google translate_tts 兜底在 WebView 里被拦（<audio> 连 HTTP 头都读不到）
//   - 原生 TTS 插件已注册成功，但系统引擎初始化返回 ERROR
//     （小米的 TtsService 组件存在但 enabled=0）
const ttsEnv = await ev(`(async()=>{
  const native = await (async()=>{ try { return await window.Capacitor.Plugins.NativeTts.isAvailable(); } catch(e){ return null; } })();
  return JSON.stringify({
    webSpeechApi: typeof speechSynthesis !== 'undefined',
    nativePlugin: !!(window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.NativeTts),
    nativeAvailable: native ? native.available : null,
    langResult: native ? native.langResultText : null,
    engineCount: native ? native.engineCount : null
  });
})()`);
console.log('  ℹ️ 发音环境（实测，非断言）:', ttsEnv);
const spoke = await ev(`(()=>{ try { if(typeof speakWord==='function'){ speakWord('hola'); return 'called'; } return 'no-fn'; } catch(e){ return 'throw:'+e.message; } })()`);
check('发音调用无异常', spoke === 'called', String(spoke));

// ---------- 6. 实际截图 ----------
console.log('\n--- 6. 截图留证 ---');
for (const [name, hash] of [['unit', 'learn/vocab/a1-u1'], ['reading', 'reading'], ['profile', 'profile']]) {
  await ev(`location.hash='${hash}'`);
  await sleep(1600);
  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const fs = await import('node:fs');
  fs.writeFileSync(`/tmp/device-${name}.png`, Buffer.from(shot.data, 'base64'));
  console.log(`  已存 /tmp/device-${name}.png`);
}

console.log('\n--- 全程 JS 异常 ---');
console.log(exceptions.length ? exceptions.slice(0, 8).map((e) => '  ' + e).join('\n') : '  无');
console.log(`\n========== 真机结果: ${pass} 通过, ${fail} 失败 ==========`);
ws.close();
process.exit(fail ? 1 : 0);
