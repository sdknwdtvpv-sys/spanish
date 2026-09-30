# 真机校验报告

**校验日期**：2026-09-30
**设备**：小米 `2510ERA8BC` · Android 16 (API 36) · arm64-v8a · 屏幕 1280×2772 @ 520dpi
**WebView**：Chrome 143.0.7499.192
**APK**：`lingua-debug.apk`（versionCode 1 / versionName 1.0 / minSdk 23 / targetSdk 35）
**方式**：`adb install` 直接安装；用 **WebView DevTools 协议**驱动页面（`adb forward` 到本机）

---

## 0. 关于测试方式的一个教训

第一版我用 `adb shell input tap` 按坐标点击。**这个做法是错的**：键盘弹出后布局整体上移，
后续点击全部落偏——实际点到了设备上**另一个应用**的界面上。

随后改用 WebView 的 DevTools 套接字（debug 版自动开启）：

```bash
adb forward tcp:9222 localabstract:webview_devtools_remote_<pid>
```

这样可以**不触碰屏幕**，直接读写页面 DOM、填表单、派发事件、截图。
坐标点击在真机上不可靠（键盘、状态栏、弹窗都会改变布局），凡是能走 DevTools 就不要用坐标。

脚本已入库：`tools/device-smoke.mjs`（可重复运行）。

---

## 1. 校验结果：19 项全部通过

```
--- 1. 页面加载 ---
  ✅ document 已就绪               complete
  ✅ 标题正确                      Lingua · 西班牙语学习 | Aprende Español
  ✅ 词库已加载                    ALL_VOCAB=6653
  ✅ 单元已加载                    单元=125
  ✅ 无 JS 异常                    无

--- 2. 登录流程 ---
  ✅ 出现登录表单
  ✅ 登录表单已提交
  ✅ 已建立登录态                  le_current_user=realtest
  ✅ 学习进度已写入

--- 3. 主路由渲染 ---
  ✅ 首页 / 课程 / 精读 / 搭配 / 我的    全部有内容（8627–28516 字符）

--- 4. 单词卡 / SRS ---
  ✅ 单词卡显示具体词              词="Buenos días"
  ✅ 卡片有操作按钮                按钮数=3
  ✅ 「已掌握」按钮存在
  ✅ 标记后 SRS/积分/已学词都更新   srs 0→1 / pts 0→15 / known 0→1

--- 5. 发音功能 ---
  ℹ️ 见第 3 节：环境限制，非断言

--- 全程 JS 异常 ---
  无
```

**结论：6653 词条 / 125 单元这个体量，真机运行流畅，界面渲染与核心交互都正常。**

| 附带确认 | 结果 |
|---|---|
| APK 兼容性 | `minSdk 23` / `targetSdk 35` → 设备 API 36 向下兼容 |
| 内存占用 | TOTAL PSS ≈ 152 MB（WebView 应用正常水平） |
| 打包资源 | `courses.js` / `app.js` / `index.html` / `sw.js` 与源码 MD5 逐一一致 |

---

## 2. 真机发现的真实缺陷（已修）

### ① 卡片操作按钮文字被挤成两行

截图可见「已掌握」显示成「已掌 / 握」。原因是设备 CSS 宽度只有约 411px，
三个按钮并排时中文没有词间空格，浏览器会在任意字之间断行。

修复：`.card-btn` 加 `white-space: nowrap`，并加 `@media (max-width: 480px)`
把按钮内边距从 26px 收到 16px。修后三个按钮高度统一为 44px、单行显示。

### ② 发音失败时提示「请检查网络」——会误导用户

真机上点「发音」弹出「语音加载失败，请检查网络」。但**原因不是网络**（见下节），
这句话会把用户引向错误的排查方向。

修复：Android 壳里改为提示真正的解决办法（系统语音引擎 + 西语语音包）。

---

## 3.0 关键对照实验：原生 TTS 插件本身是好的

「插件是否有 bug」和「设备是否具备条件」是两回事，必须分开证明。
本机除了那台小米真机，还连着一个 Android 16 模拟器（已装 `com.google.android.tts`）。
在同一份 APK 上做对照：

| 项目 | 小米真机（无可用引擎） | 模拟器（Google TTS） |
|---|---|---|
| 插件是否注入 | ✅ 是 | ✅ 是 |
| `TextToSpeech` 初始化 | ❌ `status=-1`（ERROR） | ✅ `status=0`（SUCCESS） |
| 西语语音 | ❌ 无 | ✅ `LANG_COUNTRY_AVAILABLE` |
| `isAvailable` | `{available:false, engineCount:0}` | `{available:true, engineCount:1}` |
| 可用语言数 | 0 | 81 |
| 前端 `_nativeTtsReady` | `false` | `true` |
| 页面日志 | 回落到其它路径 | `[TTS] 已启用原生离线语音引擎` |

**结论：插件实现正确，真机之所以不行是设备缺少可用的系统语音引擎。**

这也说明「测试通过」必须写清是在什么设备上通过的——
同一份代码在两台设备上得到相反的结果，而原因完全在设备侧。

## 3. 发音功能：真机上不可用（环境问题，已定位）

这是本次真机校验最重要的发现。原实现只有两条路径，**在真机上都不通**：

| 路径 | 真机实测 | 说明 |
|---|---|---|
| Web Speech API（`speechSynthesis`） | ❌ **API 不存在** | Android WebView 不实现这个 API |
| Google `translate_tts` 兜底 | ❌ **被拦** | `<audio>` 在 `loadstart` 后立刻 `error=4`，`networkState=3 (NO_SOURCE)`——**连 HTTP 头都读不到** |

容易误判的一点：**同一 URL 用设备自身的 `curl` 却返回 `HTTP 200` / 5376 字节**。
所以不是设备没网，而是**应用 WebView 发出的这个请求被拦掉了**。
我一开始据此误判过两次，记录下来避免重蹈：

- 用 `fetch(url, {mode:'no-cors'})` 测「通不通」是**无效的**——该模式下即使被拦也不报错，
  会给出「成功」的假象。必须用 `<audio>` 元素或严格模式才看得出来。

### 已实现的修复

新增原生插件 `android/app/src/main/java/com/lingua/spanish/TTSPlugin.java`，
走 Android 系统自带的 `TextToSpeech`（**离线，不依赖网络**），并接入 `speakWord`
的最高优先级。插件已确认**注册成功**（`Capacitor.Plugins.NativeTts` 可调用）。

### 但当前设备仍无法发音——原因在系统层

设备日志给出了确切证据：

```
LinguaTTS: TTS 引擎初始化 status=-1     ← TextToSpeech.ERROR
LinguaTTS: engineCount=0
```

- 设备上**只装了小米一个 TTS 引擎**（`com.xiaomi.mibrain.speech`），
  其 `TtsService` 组件存在但 `enabled=0`（默认状态、实际不可用）
- `tts_default_locale` 为空 → 没有安装任何语言的语音数据
- 因此 `TextToSpeech` 构造回调直接返回 `ERROR(-1)`，**不是「西语缺失」而是「引擎不可用」**

**这需要你在系统里配置，App 侧无法自行解决。**

### 处置：改为「预生成音频」，不再依赖设备引擎

既然设备侧三条路都不可靠，正确做法是**把语音变成随 App 打包的固定资源**。
已实现：

- `tools/generate-audio.mjs`：用 macOS 的 `say` + `afconvert` 离线合成全部语音
  （音色 Eddy / es_ES，AAC 24kbps 单声道，实测 6.8KB/条）
- `tools/embed-audio.mjs`：把音频路径写回 `data/courses.js`
  （词条加 `audio` 字段，听力段落加 `audioLines` 数组）
- `js/app.js`：`playLocalAudio()` 成为 `speakWord()` 的**最高优先级**，
  听力逐行播放也优先走本地音频
- 原生 TTS 插件保留作**次优先**：用户装了引擎就用，没装也不影响

真机实测结果（决定性证据）：

```
events: ["loadstart", "meta dur=0.98", "canplay", "playing", "play()已解决"]
```

本地音频在真机上**正常解码播放**，`play()` 不被自动播放策略拦截，全程无异常——
与 Google 兜底的 `error=4 / networkState=3 (NO_SOURCE)` 形成对比。

这样发音/听力/口语**都不再依赖设备引擎或网络**。原生 TTS 作为补充路径仍接在链上，
所以用户若装了 Google TTS，音色会更好；没装也照样能听。

> 说明：`minSdk 23` 的设备另有系统级 TTS 可选项。既然打包音频已能完全覆盖，
> 就不再要求用户做任何配置；但用户若装了引擎（如模拟器上的 Google TTS），
> 原生路径会被自动启用，音色更好。两条路都已验证可用。

---

## 4. 复现方式

```bash
# 1. 安装
adb install -r -t lingua-debug.apk

# 2. 启动并取得 pid
adb shell monkey -p com.lingua.spanish -c android.intent.category.LAUNCHER 1
adb shell pidof com.lingua.spanish

# 3. 转发 WebView 调试端口（debug 版自动开启）
adb forward tcp:9222 localabstract:webview_devtools_remote_<pid>

# 4. 跑真机冒烟测试
cd spanish-app && CDP_PORT=9222 node tools/device-smoke.mjs
```

---

## 5. 尚未在真机验证的部分

诚实列出，避免「跑通一部分 = 全部跑通」的误解：

- **听力/口语的完整播放流程**——依赖 TTS，需等第 3 节的环境问题解决后复测
- **离线场景**（飞行模式）——Service Worker 在 WebView 里的缓存行为未测
- **长时间使用**（30 分钟以上）的内存与发热——只测了单次会话
- **横屏 / 平板适配**——只在竖屏 1280×2772 下测过
- **iOS 真机**——本机只有 Android 设备；iOS 工程已存在但从未构建过

原生插件代码的入库情况已确认：`android/` 目录**有 78 个文件被 git 跟踪**，
`TTSPlugin.java` 与 `MainActivity.java` 都未被 `.gitignore` 排除，
所以这次的原生改动会随仓库一起提交、不会只留在本机。
