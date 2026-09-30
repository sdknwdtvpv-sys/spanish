const CDP_PORT=Number(process.env.CDP_PORT||9333), URL_=process.env.APP_URL||'http://localhost:4173/';
async function wsUrl(){for(let i=0;i<40;i++){try{const j=await(await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`)).json();if(j.webSocketDebuggerUrl)return j.webSocketDebuggerUrl;}catch{}await new Promise(r=>setTimeout(r,250));}throw new Error('no cdp');}
const ws=new WebSocket(await wsUrl());
await new Promise((r,j)=>{ws.addEventListener('open',r,{once:true});ws.addEventListener('error',j,{once:true});});
let id=0;const pend=new Map();let sid=null;const exc=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);
 if(m.id&&pend.has(m.id)){const{resolve,reject}=pend.get(m.id);pend.delete(m.id);m.error?reject(new Error(JSON.stringify(m.error))):resolve(m.result);return;}
 if(m.method==='Runtime.exceptionThrown'){const d=m.params.exceptionDetails||{};exc.push((d.exception?.description||d.text||'').split('\n')[0]);}});
const send=(method,params={},s=true)=>{const i=++id;const msg={id:i,method,params};if(s&&sid)msg.sessionId=sid;ws.send(JSON.stringify(msg));return new Promise((resolve,reject)=>pend.set(i,{resolve,reject}));};
const ev=async x=>{const r=await send('Runtime.evaluate',{expression:x,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)return{__error:r.exceptionDetails.exception?.description};return r.result.value;};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let pass=0,fail=0;const check=(n,c,d='')=>{c?(pass++,console.log(`  ✅ ${n}${d?' — '+d:''}`)):(fail++,console.log(`  ❌ ${n}${d?' — '+d:''}`));};
const{targetId}=await send('Target.createTarget',{url:'about:blank'},false);
sid=(await send('Target.attachToTarget',{targetId,flatten:true},false)).sessionId;
await send('Runtime.enable');await send('Page.enable');
await send('Page.navigate',{url:URL_});await sleep(2600);
await ev(`localStorage.clear()`);await send('Page.navigate',{url:URL_});await sleep(2600);
await ev(`(()=>{const f=document.getElementById('login-form');const i=f.querySelectorAll('input');const s=(e,v)=>{Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),'value').set.call(e,v);e.dispatchEvent(new Event('input',{bubbles:true}));};s(i[0],'dbg6');s(i[1],'pw');f.dispatchEvent(new Event('submit',{cancelable:true,bubbles:true}));return 1;})()`);
await sleep(1600);

console.log('=== 防止重复计分验证 ===');
await ev(`(()=>{const p=AppState.progress;p.knownWords=[];p.srs={};p.points=0;p.learnedWords=0;AppState.saveProgress();return 1;})()`);
await ev(`location.hash='learn/vocab/a1-u1'`);await sleep(1400);

// 对同一张卡连点 5 次。
// 必须放在**同一次 evaluate 内同步派发**：逐次 await ev('...click()') 会让每次点击
// 变成一次 CDP 往返（约 30-60ms），5 次往返的耗时正好压在 200ms 防抖窗口边界上。
// 抖动一超过，第 5 次点击就落在窗口之外、给第二张卡评了分，测试便间歇性失败
// （表现为 known=2/pts=20/srs=2/learned=2 四个断言同时错）。
// 那是在测量测试自己的往返延迟，不是 App 的防抖；同步突发反而是更严苛的条件。
exc.length=0;
const burst=await ev(`(()=>{const b=document.getElementById('btn-known');const t0=performance.now();for(let i=0;i<5;i++)b.click();return performance.now()-t0;})()`);
console.log(`  5 次点击同步派发耗时 ${Number(burst).toFixed(2)}ms（远小于 200ms 防抖窗口）`);
await sleep(800);
const s1=await ev(`(()=>({known:AppState.progress.knownWords.length,pts:AppState.progress.points,srs:Object.keys(AppState.progress.srs).length,learned:AppState.progress.learnedWords}))()`);
console.log('  同一张卡连点 5 次 →',JSON.stringify(s1));
check('同一张卡只计分一次（已学单词=1）',s1.known===1,`known=${s1.known}`);
// 首次学习会同时解锁 first-word 成就（+10），故为 5+10=15
check('积分只按一次词计（5 分）+ 成就奖励 10 分',s1.pts===15,`pts=${s1.pts}`);
check('SRS 只记录一次',s1.srs===1,`srs=${s1.srs}`);
check('learnedWords 只加一次',s1.learned===1,`learned=${s1.learned}`);
check('无崩溃',exc.length===0,`异常=${exc.length}`);

// 正常速度走完剩余卡片，检查积分总数
await sleep(400);
for(let i=0;i<40;i++){
  const ok=await ev(`!!document.getElementById('btn-known')`);
  if(!ok) break;
  await ev(`document.getElementById('btn-known').click()`);
  await sleep(320);
}
await sleep(1000);
const s2=await ev(`(()=>({known:AppState.progress.knownWords.length,pts:AppState.progress.points,srs:Object.keys(AppState.progress.srs).length}))()`);
const unitWords=await ev(`COURSES.A1.units.find(u=>u.id==='a1-u1').vocab.length`);
console.log('  走完整个单元 →',JSON.stringify(s2),'单元词数=',unitWords);
check('已学单词数 = 单元词数',s2.known===unitWords,`${s2.known} vs ${unitWords}`);
// 积分 = 词数×5 + 成就奖励（first-word 10 + ten-words 50）
const achPts=await ev(`(()=>{const ids=AppState.progress.achievements;return ACHIEVEMENTS.filter(a=>ids.includes(a.id)).reduce((s,a)=>s+a.points,0);})()`);
check('积分 = 词数×5 + 成就奖励',s2.pts===unitWords*5+achPts,`pts=${s2.pts} 词分=${unitWords*5} 成就=${achPts}`);
check('SRS 条目 = 单元词数',s2.srs===unitWords,`srs=${s2.srs}`);
check('全程无崩溃',exc.length===0,`异常=${exc.length}`);
console.log(`\n===== ${pass} 通过, ${fail} 失败 =====`);
ws.close();process.exit(fail?1:0);
