/**
 * Lingua 核心回归测试（合并版）
 * 用法: CDP_PORT=9333 node regress-core.mjs [APP_URL]
 *
 * 覆盖：冷启动 / 登录 / 五条主路由 / 单词卡与 SRS / 四种学习模式 /
 *       精读 / 搭配 / 等级过滤 / 备份导出导入 / 键盘快捷键 /
 *       数据完整性 / 内容审计
 */
const CDP_PORT = Number(process.env.CDP_PORT || 9333);
const URL_ = process.argv[2] || 'http://localhost:4173/';

async function wsUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const j = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json();
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl;
    } catch {}
    await new Promise(r => setTimeout(r, 250));
  }
  throw new Error('CDP 不可达');
}
const ws = new WebSocket(await wsUrl());
await new Promise((res, rej) => {
  ws.addEventListener('open', res, { once: true });
  ws.addEventListener('error', rej, { once: true });
});
let id = 0; const pend = new Map(); let sid = null; const exc = [];
ws.addEventListener('message', e => {
  const m = JSON.parse(e.data);
  if (m.id && pend.has(m.id)) {
    const { resolve, reject } = pend.get(m.id); pend.delete(m.id);
    m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result); return;
  }
  if (m.method === 'Runtime.exceptionThrown') {
    const d = m.params.exceptionDetails || {};
    exc.push((d.exception?.description || d.text || '').split('\n')[0]);
  }
});
const send = (method, params = {}, s = true) => {
  const i = ++id; const msg = { id: i, method, params };
  if (s && sid) msg.sessionId = sid;
  ws.send(JSON.stringify(msg));
  return new Promise((resolve, reject) => pend.set(i, { resolve, reject }));
};
const ev = async x => {
  const r = await send('Runtime.evaluate', { expression: x, returnByValue: true, awaitPromise: true });
  if (r.exceptionDetails) return { __error: r.exceptionDetails.exception?.description };
  return r.result.value;
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
let pass = 0, fail = 0;
let checkNo = 0;
const check = (n, c, d = '') => {
  checkNo++;
  if (c) { pass++; console.log(`  ✅ ${n}${d ? ' — ' + d : ''}`); }
  else {
    fail++;
    // 失败时把序号、断言名、实参与当时的未捕获异常一起打出来。
    // 只打「❌ 名字 — 实参」时，像「偶发的第 N 项失败」这种问题很难定位：
    // 光看实参分不清是功能坏了还是断言过期，也看不到异常列表。
    console.log(`  ❌ [#${checkNo}] ${n}${d ? ' — ' + d : ''}`);
    if (exc.length) console.log(`       当前未捕获异常：${JSON.stringify(exc.slice(0, 3))}`);
  }
};
const key = async (k, code, kc) => {
  const b = { key: k, code, windowsVirtualKeyCode: kc, nativeVirtualKeyCode: kc };
  await send('Input.dispatchKeyEvent', { type: 'keyDown', ...b });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', ...b });
};

const { targetId } = await send('Target.createTarget', { url: 'about:blank' }, false);
sid = (await send('Target.attachToTarget', { targetId, flatten: true }, false)).sessionId;
await send('Runtime.enable'); await send('Page.enable');
await send('Page.addScriptToEvaluateOnNewDocument', { source: 'window.confirm=()=>true;' });
await send('Page.navigate', { url: URL_ }); await sleep(2600);
await ev(`localStorage.clear()`);
await send('Page.navigate', { url: URL_ }); await sleep(2600);
await ev(`window.confirm=()=>true;`);

console.log('\n=== 1. 冷启动 ===');
{
  const b = await ev(`(()=>{const a=document.getElementById('auth-page');return {auth:a?getComputedStyle(a).display:null,levels:Object.keys(COURSES).length,loader:!!document.getElementById('loader')};})()`);
  check('登录页渲染', b.auth === 'flex');
  check('6 个等级加载', b.levels === 6, `${b.levels}`);
  check('loader 已移除', b.loader === false);
}

console.log('\n=== 2. 登录 ===');
await ev(`(()=>{const f=document.getElementById('login-form');const i=f.querySelectorAll('input');const s=(e,v)=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}));};s(i[0],'tester');s(i[1],'pw123456');f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true}));return 1;})()`);
await sleep(1600);
{
  const s = await ev(`(()=>({user:AppState.currentUser,route:AppState.currentRoute,stored:localStorage.getItem('le_current_user')}))()`);
  check('登录成功', s.user === 'tester' && s.route === 'dashboard', JSON.stringify(s));
}

console.log('\n=== 3. 五条主路由 ===');
{
  const routes = await ev(`[...document.querySelectorAll('.nav-item')].map(e=>e.dataset.route)`);
  check('导航项存在', routes.length >= 5, routes.join(','));
  const lens = {};
  for (const r of routes) {
    const e0 = exc.length;
    await ev(`(()=>{const el=[...document.querySelectorAll('.nav-item')].find(e=>e.dataset.route===${JSON.stringify(r)});if(el)el.click();return 1;})()`);
    await sleep(700);
    const st = await ev(`(()=>({route:AppState.currentRoute,len:document.getElementById('app').innerText.length}))()`);
    lens[r] = st.len;
    check(`路由 ${r}`, st.route === r && st.len > 80 && exc.length === e0, `len=${st.len}`);
  }
  check('各路由内容不同', new Set(Object.values(lens)).size >= 4, JSON.stringify(lens));
}

console.log('\n=== 4. 单词卡与 SRS ===');
{
  await ev(`(()=>{const p=AppState.progress;p.knownWords=[];p.srs={};AppState.saveProgress();return 1;})()`);
  await ev(`location.hash='learn/vocab/a1-u1'`); await sleep(1400);
  const before = await ev(`document.getElementById('flashcard').className`);
  await key(' ', 'Space', 32); await sleep(350);
  check('空格翻卡', !/flipped/.test(before) && /flipped/.test(await ev(`document.getElementById('flashcard').className`)));
  await key('2', 'Digit2', 50); await sleep(700);
  const s1 = await ev(`(()=>({known:AppState.progress.knownWords.length,srs:Object.keys(AppState.progress.srs).length}))()`);
  check('按 2 记已掌握', s1.known === 1 && s1.srs === 1, JSON.stringify(s1));
  await key('1', 'Digit1', 49); await sleep(700);
  const s2 = await ev(`(()=>({srs:Object.keys(AppState.progress.srs).length,lapses:Object.values(AppState.progress.srs).filter(x=>x.lapses>0).length}))()`);
  check('按 1 记还不会并累计 lapses', s2.srs === 2 && s2.lapses === 1, JSON.stringify(s2));
  // 走完整单元：验证「能把一个单元从头点到底并结算」。
  //
  // 这里刻意**不再断言 srs === 单元词数**。原文断言是
  //   'SRS 记录数 = 单元词数（多余点击被防抖吸收）'
  // 也就是说它验证的是「防抖吸收多余点击」——而防抖行为已经由
  // regress-rapid-click.mjs 用同步突发点击专门验证过了（那是更严苛、更可靠的条件）。
  // 在这里重复验证它，只能靠「固定间隔 + 猜防抖窗口」：
  // 间隔 240ms 时余量只剩 40ms，350ms 时仍会在负载下偶发失败。
  // 用一个脆弱的时序假设去重复验证一个已经别处验证过的行为，没有收益。
  // 本段真正要保证的是：能走完整个单元并看到结算页。
  let n = 0;
  for (let i = 0; i < 80; i++) {
    const ok = await ev(`(()=>{const b=document.getElementById('btn-known');if(!b)return false;b.click();return true;})()`);
    if (!ok) break; n++; await sleep(400);
  }
  const done = await ev(`(()=>({head:document.getElementById('app').innerText.replace(/\s+/g,' ').slice(0,50),srs:Object.keys(AppState.progress.srs).length}))()`);
  const unitWords = await ev(`COURSES.A1.units.find(u=>u.id==='a1-u1').vocab.length`);
  check('可走完整单元并结算', /Excelente/.test(done.head), `点 ${n} 次 / 单元 ${unitWords} 词 / 结算页=${/Excelente/.test(done.head)}`);
  check('单元内所有词都已记录 SRS', done.srs >= unitWords, `srs=${done.srs} 单元词数=${unitWords}`);
  // 等 App 内部排队的定时器跑完再进入下一段。
  // 最后一个评分点击会排一个 200ms 的渲染定时器；若单元恰好在此结算，
  // 该定时器仍会触发。让它落在后续路由的渲染期间，就可能污染
  //「全程 0 未捕获异常」的计数，表现为偶发的第 47 项失败。
  // 等待状态稳定，而不是赌定时器已经跑完。
  await sleep(600);
}

console.log('\n=== 5. 四种学习模式 ===');
{
  // 注意：第 4 节刚走完 a1-u1，会显示完成页；先清空进度再测各模式
  for (const [mode, kw] of [['vocab', /单词卡片/], ['grammar', /语法练习/], ['speaking', /口语跟读/], ['listening', /听力训练/]]) {
    const e0 = exc.length;
    await ev(`(()=>{const p=AppState.progress;p.knownWords=[];p.srs={};AppState.saveProgress();return 1;})()`);
    // 先切走再进入，确保 hash 变化能触发渲染
    await ev(`location.hash='dashboard'`); await sleep(400);
    await ev(`location.hash='learn/${mode}/a1-u1'`); await sleep(1500);
    const t = await ev(`document.getElementById('app').innerText.replace(/\s+/g,' ')`);
    check(`${mode} 模式渲染`, kw.test(t) && exc.length === e0, `len=${t.length}`);
  }
  // 语法题连答。
  //
  // 时序：App 点选后先同步标记选项（correct/wrong）并展示解析，
  // 1 秒后才推进到下一题或渲染结算页。所以**点击间隔必须大于这 1 秒**，
  // 否则后续点击会被 answered 标志忽略（实测 100ms 间隔点 40 次只记 4 题）。
  //
  // 这里用 1400ms（比原来的实现多留 400ms），并在循环结束后
  // **轮询等待结算页出现**——原先的偶发失败正是「结算页还没渲染完就做断言」，
  // 题数统计是对的、只有文案匹配失败，很难看出是竞态。
  await ev(`location.hash='learn/grammar/a1-u1'`); await sleep(1300);
  let q = 0;
  for (let i = 0; i < 20; i++) {
    const ok = await ev(`(()=>{const o=document.querySelector('.quiz-option');if(!o)return false;o.click();return true;})()`);
    if (!ok) break;
    q++;
    await sleep(1400);
    if (await ev(`/Muy bien|Sigue practicando/.test(document.getElementById('app').innerText)`)) break;
  }
  // 结算页可能比最后一次循环稍晚，最多再等 5 秒
  for (let w = 0; w < 50; w++) {
    if (await ev(`/Muy bien|Sigue practicando|正确率/.test(document.getElementById('app').innerText)`)) break;
    await sleep(100);
  }
  const g = await ev(`(()=>({head:document.getElementById('app').innerText.replace(/\s+/g,' ').slice(0,60),full:document.getElementById('app').innerText.replace(/\s+/g,' ').slice(0,200),total:AppState.progress.quizTotal,hash:location.hash,opts:document.querySelectorAll('.quiz-option').length}))()`);
  // 不要断言「至少答了 N 题」：每个单元的语法题主题是随机选的，
  // 主题题量从 4 题到 30 题不等，遇到小主题时循环会因题目答完而提前结束，
  // 于是 q < 10 而误报失败（这不是功能坏了，是断言写错了）。
  // 真正要验证的是「答的题数 = 统计到的答题数」，即连答被正确计数。
  check('语法题可连答并结算',
    /Muy bien|Sigue practicando|正确率/.test(g.head) && q > 0 && g.total === q,
    `答了 ${q} 题 / 统计 ${g.total} 题 / 剩余选项=${g.opts} / hash=${g.hash} / 文案="${g.full}"`);
}

console.log('\n=== 6. 精读模式 ===');
{
  await ev(`AppState.progress.currentLevel='C2';AppState.saveProgress();`);
  await ev(`location.hash='reading'`); await sleep(1300);
  const l = await ev(`(()=>({route:AppState.currentRoute,total:READING_PASSAGES.length,cards:document.querySelectorAll('.progress-card').length}))()`);
  check('精读列表渲染', l.route === 'reading' && l.cards >= 3, JSON.stringify(l));
  check('精读语篇 30 篇', l.total >= 30, `${l.total} 篇`);
  await ev(`location.hash='read/0'`); await sleep(1300);
  const d = await ev(`(()=>({paras:document.querySelectorAll('#rd-body .progress-card').length,zh:document.querySelectorAll('.rd-zh').length,gloss:!!document.getElementById('rd-gloss'),struct:!!document.getElementById('rd-struct'),qBtns:[...document.querySelectorAll('.btn')].filter(b=>/查看参考答案/.test(b.innerText)).length}))()`);
  check('精读详情完整（段落/中文/生词/长难句/题）', d.paras > 0 && d.zh === d.paras && d.gloss && d.struct && d.qBtns > 0, JSON.stringify(d));
  await ev(`document.getElementById('rd-toggle-zh').click()`); await sleep(300);
  check('可切换中文', (await ev(`[...document.querySelectorAll('.rd-zh')].every(e=>e.style.display==='block')`)) === true);
  await ev(`document.getElementById('rd-done').click()`); await sleep(900);
  check('标记已读并记录', (await ev(`AppState.progress.readPassages.length`)) >= 1);
}

console.log('\n=== 7. 高级搭配 ===');
{
  await ev(`location.hash='unit/C2/c2-u1'`); await sleep(1300);
  const tabs = await ev(`[...document.querySelectorAll('.unit-tab')].map(t=>t.dataset.tab)`);
  check('单元页有「高级搭配」标签', tabs.includes('collocation'), tabs.join(','));
  await ev(`(()=>{const t=[...document.querySelectorAll('.unit-tab')].find(x=>x.dataset.tab==='collocation');if(t)t.click();return 1;})()`);
  await sleep(700);
  const c = await ev(`(()=>({items:document.querySelectorAll('#tab-content .grammar-item').length,total:COLLOCATIONS.length,title:(document.querySelector('#tab-content .progress-title')?.innerText||'').trim()}))()`);
  check('搭配数据 600 条', c.total >= 600, `${c.total} 条`);
  check('搭配标签页渲染', c.items > 0, `${c.items} 条 — ${c.title}`);
}

console.log('\n=== 8. 等级过滤 ===');
{
  const a1 = await ev(`(()=>{AppState.currentLevel='A1';renderListening(COURSES.A1.units[0]);return +((document.getElementById('app').innerText.match(/共 (\\d+) 段/)||[])[1]||0);})()`);
  const c2 = await ev(`(()=>{AppState.currentLevel='C2';renderListening(COURSES.C2.units[0]);return +((document.getElementById('app').innerText.match(/共 (\\d+) 段/)||[])[1]||0);})()`);
  check('A1 只看到基础听力材料', a1 < c2 && a1 > 0, `A1 可见 ${a1} 段`);
  // 不要写死总数：这里原本是 `c2 === 40`，等于当时的听力总数。
  // 内容一扩充（40 → 52）断言就必然失败，而报错信息只显示「C2 可见 52 段」，
  // 看不出是断言过期还是功能坏了——排查成本很高。改为从数据读总数。
  const totalListening = await ev(`LISTENING_PASSAGES.length`);
  check('C2 可见全部听力材料', c2 === totalListening, `C2 可见 ${c2} 段 / 总数 ${totalListening}`);
  const sp = await ev(`(()=>{AppState.currentLevel='C2';const h={};for(let i=0;i<60;i++){renderSpeaking(COURSES.C2.units[0]);const m=document.getElementById('app').innerText.match(/\\b(A1|A2|B1|B2|C1|C2)\\b\\s*·\\s*NIVEL/);if(m)h[m[1]]=(h[m[1]]||0)+1;}return h;})()`);
  check('C2 口语抽到高级句子', ((sp.C1 || 0) + (sp.C2 || 0)) > 0, JSON.stringify(sp));
}

console.log('\n=== 9. 备份导出 / 导入 ===');
{
  const b = await ev(`(()=>{const d=AppState.exportData();const v=AppState.validateBackup(d,JSON.stringify(d).length);const bad=AppState.validateBackup({app:'x'},100);return {ok:v.ok,users:v.users,badRejected:!bad.ok};})()`);
  check('导出结构可通过校验', b.ok === true, JSON.stringify(b.users));
  check('非法备份被拒绝', b.badRejected === true);
  const imp = await ev(`(()=>{
    // 先写入真实数据，避免备份为空导致测试空跑通过
    const p0=AppState.progress;
    p0.knownWords=['Hola','Adiós','Buenos días','Muchas gracias'];
    p0.learnedWords=4; p0.points=88; p0.totalStudyMinutes=25;
    p0.srs={'a1-u1:Hola':{stage:2,ef:2.5,lapses:0,due:new Date().toISOString()}};
    p0.achievements=['first-word'];
    AppState.saveProgress();
    const backup=AppState.exportData();
    localStorage.setItem('le_progress', JSON.stringify({tester:{knownWords:[],srs:{},learnedWords:0,points:0,totalStudyMinutes:0,achievements:[],quizCorrect:0,quizTotal:0,currentLevel:'A1',currentUnitIndex:0,streakDays:0,lastActiveDate:''}}));
    AppState._progress=null;AppState._progressUser=null;
    const before=AppState.progress.knownWords.length;
    const backupKnown=(backup.progress[AppState.currentUser]||{}).knownWords?.length||0;
    AppState.importData(backup); AppState._progress=null;AppState._progressUser=null;
    return {before,after:AppState.progress.knownWords.length,backupKnown};
  })()`);
  check('导入可恢复数据', imp.after === imp.backupKnown && imp.after >= imp.before, JSON.stringify(imp));
}

console.log('\n=== 10. 复习提醒 / streak 冻结 ===');
{
  const r = await ev(`(()=>{const p=AppState.progress;p.srs={'a1-u1:Hola':{stage:1,ef:2.5,lapses:0,due:new Date(Date.now()-3600000).toISOString()}};AppState.saveProgress();renderDashboard();return {due:AppState.srsStats().due,btn:!!document.getElementById('btn-review-now')};})()`);
  check('到期复习提醒出现', r.due === 1 && r.btn === true, JSON.stringify(r));
  const f = await ev(`(()=>{const p=AppState.progress;p.streakDays=10;p.freezeTokens=2;p.lastActiveDate=new Date(Date.now()-2*86400000).toDateString();AppState.saveProgress();AppState.updateStreak();return {streak:p.streakDays,tokens:p.freezeTokens};})()`);
  check('断更一天自动冻结保住记录', f.streak === 11 && f.tokens === 1, JSON.stringify(f));
}

console.log('\n=== 11. 数据完整性 ===');
{
  const d = await ev(`(()=>{
    let holes=0,noZh=0,noEx=0,dup=0,badQ=0,dupOpt=0,noExp=0;
    Object.values(COURSES).forEach(l=>l.units.forEach(u=>{
      if(!u||!u.id)holes++;
      const seen=new Set();
      (u.vocab||[]).forEach(w=>{
        const k=(w.es||'').trim().toLowerCase();
        if(seen.has(k))dup++; seen.add(k);
        if(!w.zh||!w.zh.trim())noZh++;
        if(!w.example||!w.example.trim())noEx++;
      });
    }));
    GRAMMAR_QUIZZES.forEach(s=>s.questions.forEach(q=>{
      if(!q.sentence||q.options.length!==4||q.correct<0||q.correct>3||!q.explain)badQ++;
      if(new Set(q.options).size!==4)dupOpt++;
      if(!q.explain||!q.explain.trim())noExp++;
    }));
    return {holes,noZh,noEx,dup,badQ,dupOpt,noExp,
      vocab:ALL_VOCAB.length,
      grammar:GRAMMAR_QUIZZES.reduce((a,x)=>a+x.questions.length,0),
      listen:LISTENING_PASSAGES.length, speak:SPEAKING_SENTENCES.length,
      read:READING_PASSAGES.length, colloc:COLLOCATIONS.length,
      units:Object.values(COURSES).reduce((a,l)=>a+l.units.length,0)};
  })()`);
  check('无数组空位', d.holes === 0, `空位=${d.holes}`);
  check('所有词条有中文释义', d.noZh === 0, `缺=${d.noZh}`);
  check('所有词条有例句', d.noEx === 0, `缺=${d.noEx}`);
  check('单元内无重复词', d.dup === 0, `重复=${d.dup}`);
  check('语法题结构合法', d.badQ === 0, `异常=${d.badQ}`);
  check('语法题答案唯一', d.dupOpt === 0, `选项重复=${d.dupOpt}`);
  check('语法题解析齐全', d.noExp === 0, `缺=${d.noExp}`);
  console.log(`     规模：词汇 ${d.vocab} / 单元 ${d.units} / 语法题 ${d.grammar} / 听力 ${d.listen} / 口语 ${d.speak} / 精读 ${d.read} / 搭配 ${d.colloc}`);
}

console.log('\n=== 12. 无未捕获异常 ===');
check('全程 0 未捕获异常', exc.length === 0, `exceptions=${exc.length}`);
exc.slice(0, 5).forEach(e => console.log('     ! ' + e));

console.log(`\n========== 回归结果: ${pass} 通过, ${fail} 失败 ==========`);
ws.close();
process.exit(fail ? 1 : 0);
