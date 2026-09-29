# Lingua 验证报告与修复记录

**仓库**：`sdknwdtvpv-sys/spanish`
**分支**：`trae/agent-66h5Yp`（HEAD `dfefa87`）
**验证日期**：2026-09-30
**验证方式**：Node 22 + Chrome for Testing（CDP 驱动，无头真实渲染）

---

## 1. 仓库现状

`main` 分支只有一个 1 字节文件 `spanish`。真正的项目在 `trae/agent-66h5Yp`：

```
.uploads/                    上传的参考图
.trae-html-share-packages/   Trae 打包产物（zip）
lingua-debug.apk             已构建的 Android debug 包（4.4 MB，477 条目）
spanish-app/                 应用源码
```

`spanish-app` 是 **Capacitor 原生壳 + PWA**，纯原生 JS（无框架、无构建工具）：

| 文件 | 大小 | 作用 |
|---|---|---|
| `js/app.js` | 96 KB | 全部路由 / 渲染 / SRS 逻辑（2279 行） |
| `data/courses.js` | 94 KB | 课程数据 |
| `css/styles.css` | 48 KB | 样式 |
| `scripts/sync-www.mjs` | — | 把根目录资源同步到 `www/`（Capacitor 的 `webDir`） |
| `scripts/serve.mjs` | — | 静态服务器，npm run serve |

**架构约定**：根目录是唯一事实来源，`www/` 是生成产物（已被 gitignore）。脚本只用 Node 内置模块，**不需要 `npm install`**。

### 内容规模（已校验）

- 6 个 CEFR 等级：A1 A2 B1 B2 C1 C2
- 26 个单元，**566 个单词**
- 6 组语法题、20 条口语跟读、6 段听力、20 个成就、8 条社区帖

---

## 2. 发现并修复的 BUG（严重）

### 症状

学习流程的核心动作——**在单词卡片上点「已掌握」/「还不会」——每次都抛异常且不保存进度**：

```
TypeError: Cannot read properties of undefined (reading 'stage')
    srsReview @ js/app.js:125:6
    nextCard  @ js/app.js:1043:13
    (click handler) @ js/app.js:1088:71
```

后果：SRS 数据完全不写入、不涨分、卡片无法推进，**间隔重复（SM-2）整个失效**。

### 根因

`AppState.progress` 是**只有 getter、每次访问都返回新对象**的派生属性：

```js
get progress() {
  if (!this.currentUser) return null;
  const allProgress = JSON.parse(localStorage.getItem('le_progress') || '{}');
  ...
  return allProgress[this.currentUser];   // ← 每次都是全新对象
}
```

于是同一次 `srsReview` 调用里，两次 `this.progress` 取到的是**不同对象**：

| 行 | 代码 | 落到的对象 |
|---|---|---|
| 116 | `ensureSrs()` | 对象 A |
| 117 | `srsInit(word)` → 把词写进 `A.srs[word]` | 对象 A |
| **118** | `const s = this.progress.srs[word]` | **对象 B → `undefined`** |
| 125 | `s.stage++` | **💥 TypeError** |

`saveProgress()`（96 行）同样读的是新对象，所以即使不崩，**已写入的 SRS 评分也会被覆盖丢失**。

**已用脱离浏览器的确定性复现证明**：连续两次 `AppState.progress` 取到的引用不同（`read1 === read2` → `false`），随后 `srsReview` 必然抛同一个 `TypeError`。

### 修复（`spanish-app/js/app.js`，11 增 5 删）

1. 缓存进度对象，保证跨访问返回**同一引用**（按 `currentUser` 区分）：
   ```js
   _progress: null,
   _progressUser: null,
   get progress() {
     if (!this.currentUser) return null;
     if (this._progress && this._progressUser === this.currentUser) return this._progress;
     ...
     this._progress = allProgress[this.currentUser];
     this._progressUser = this.currentUser;
     return this._progress;
   }
   ```
2. `saveProgress()` 写入 `this._progress || this.progress`，避免再取到另一个新对象。
3. `ensureSrs()` 不再写只读属性 `this.progress = {}`（该赋值被静默丢弃、等于没生效），改为只补 `srs` 字段。

---

## 3. 修复前后对比（同一套自动化用例）

| 断言 | 修复前 | 修复后 |
|---|---|---|
| 点评分不抛异常 | ❌ 10/10 崩溃 | ✅ 0 异常 |
| SRS 条目写入 | ❌ `srs=0` | ✅ `srs=10` |
| 「已掌握」记入 `knownWords` | ❌ `known=0` | ✅ `known=7` |
| 积分累计 | ❌ `pts=0` | ✅ `pts=75` |
| 刷新后进度保留 | ❌ | ✅ known 5→5, srs 7→7, pts 65→65, lapses 2→2 |
| 走完整个单元 | ❌ 无法推进 | ✅ 20 张卡完成 → ¡Excelente! · +100 分 · 解锁 3 个成就 |

**完整端到端套件：25 项断言全部通过，0 未捕获异常，0 console.error。**

---

## 3.5 第二轮：其余问题全部修复（8 项）

第一轮修复核心背单词 bug 后，又修掉了其余全部问题：

| # | 问题 | 严重度 | 修复方式 | 验证 |
|---|---|---|---|---|
| 1 | 背单词点评分必崩、进度不保存 | 🔴 P0 | 缓存 progress 对象同一引用 | ✅ |
| 2 | 多义词（reunión 等）SRS 互相覆盖 | 🔴 P0 | SRS 改唯一键 `单元ID:单词` + v1→v2 自动迁移 | ✅ 18 项 |
| 3 | 词汇掌握分布永远显示 0 | 🔴 P0 | 改用真实 `knownWords` 统计（原为按单元索引瞎猜） | ✅ A1 显示 24/179 |
| 4 | 学习时长永远 0 分钟 | 🟠 P1 | 新增学习会话计时 + 挂机保护（闲置>2 分钟不计） | ✅ 8 项 |
| 5 | 缓存优先导致发版不生效 | 🟠 P1 | 页面/JS/CSS 改网络优先，缓存版本 v1→v2 | ✅ |
| 6 | 多用户注册互相覆盖 | 🟡 P2 | `loginUser` 读一次改一次再写回 | ✅ |
| 7 | 答题后 1 秒内切页报错 | 🟡 P2 | 加 DOM 存在性守卫 | ✅ |
| 8 | 「今日目标」进度跌回 0% | 🟡 P2 | 改按每日计数器（跨天归零） | ✅ 5 项 |

**多义词问题的关键**：`reunión` 在 A2-u1 是「聚会」、在 A2-u7 是「会议」，`rojo` 是「红色」vs「红色头发」——这些是**真实的多义教学内容，不该删**。修法是让系统能区分它们，而不是删掉词条。

### 本轮全部测试结果

| 测试套件 | 结果 |
|---|---|
| 修复专项（多义词 / 迁移 / 多用户 / 切页） | **18 / 18 通过** |
| 端到端（登录 → 导航 → 学习 → 持久化） | **25 / 25 通过** |
| 学习时长 + SM-2 间隔表 | **8 / 8 通过** |
| 今日目标 | **5 / 5 通过** |
| 卡片翻转 + 整单元通关 | **8 / 8 通过** |
| **合计** | **64 项断言，0 失败，0 未捕获异常** |

---

## 3.6 验证方法说明

所有结论均经**真实浏览器运行验证**，不是静态阅读代码得出的：

- Node 22 驱动 **Chrome for Testing**，通过 CDP（Chrome DevTools Protocol）无头渲染
- 真实 DOM 交互：派发 `submit` 事件、`click()` 真实按钮、监听 `Runtime.exceptionThrown` 捕获未捕获异常
- 数据校验：直接读取 `AppState`、`localStorage` 断言内部状态
- 视觉确认：`Page.captureScreenshot` 截图人工复核
- 确定性复现：关键 bug 在浏览器外单独复刻代码验证（`read1 === read2` → `false`）

**关键教训**：验证过程中该 App 的 Service Worker 两次用旧缓存骗过了我，让我一度误判「修复无效」。已在 `sw.js` 中彻底修正（改网络优先），并在文件顶部加了发版提醒注释。

---

## 4. 验证覆盖范围

- 冷启动（登出态）：登录页渲染、登录/注册表单切换、loader 移除
- 登录：真实表单提交 → `#dashboard` 跳转 → 会话写入 localStorage
- 5 个主导航点击：路由、高亮、内容**各不相同**（长度 410/622/219/2599/688）
- 8 条路由全部无异常：login dashboard courses unit learn community achievements progress
- 单元详情：`#unit/A1/a1-u1`、`#unit/A1/a1-u3`、`#unit/B1/b1-u1`
- 4 种学习模式：vocab（卡片翻转 + 评分）、grammar（连答 6 题，计数 2/41→7/41）、speaking、listening
- SRS 算法：`stage` / `ef` / `lapses` 字段与 SM-2 行为正确
- 刷新持久化、进度页热力图、成就解锁（2/20）
- 移动端视口（390×844）：底部 5 项 Tab Bar 显示、无横向溢出

### 关于 Service Worker 的重要提醒

`sw.js` 是 **cache-first**。修复 `app.js` 后，浏览器仍会拿旧缓存——必须注销 SW 并清 cache 才能看到新代码。开发调试时务必注意，否则会误判「修复无效」。

---

## 5. 遗留问题

### 已在本轮修复

1. ~~`js/app.js:419` 无意义自赋值~~ → **已修**（并顺带修掉了它掩盖的多用户覆盖 bug）
2. ~~`renderQuestion` 定时器切页报错~~ → **已修**（加 DOM 守卫）
3. ~~7 个重复词条导致 SRS 互相覆盖~~ → **已修**（改唯一键 + 数据迁移，词条内容保留）
4. ~~学习时长永远为 0~~ → **已修**
5. ~~词汇掌握分布永远为 0~~ → **已修**
6. ~~今日目标进度跌回 0%~~ → **已修**

### 仍需你决策（未擅自改动）

1. **`lingua-debug.apk` 内嵌的是修复前的旧 `app.js`**。该 APK 仍带旧 bug，需要在 `spanish-app/android` 下重新构建（`./gradlew assembleDebug`）才能得到修复版。Android/iOS 原生工程只嵌了**已构建**的静态资源，源码层面无问题。
2. **登录是纯前端模拟**（任意用户名直接进，社交登录按钮直接 `loginUser('wechat_user')`），无后端校验。这属于**架构决策**而非 bug——要做真账号必须引入后端，改动量大，需你确认方向。
3. **内容缺口**：C1/C2 完全没有口语和听力练习；听力仅 6 段；语法题库仅 38 题（详见 `PRODUCT-AUDIT.md`）。

---

## 6. 本地运行

```bash
cd spanish-app
node scripts/sync-www.mjs      # 生成 www/（无需 npm install）
PORT=4173 node scripts/serve.mjs
# 打开 http://localhost:4173
```

`node` 位于 `/Users/elliot.li/.workbuddy/binaries/node/versions/22.22.2-3/bin`（未在 PATH 中）。

### 发版提醒

修改了 `index.html` / `css` / `js` / `data` 之后，**必须把 `sw.js` 顶部的 `CACHE = 'lingua-vN'` 版本号 +1**。现在已是 v2。（本轮已把缓存策略改为网络优先，正常情况下新代码会立即生效，但改版本号仍是稳妥做法。）
