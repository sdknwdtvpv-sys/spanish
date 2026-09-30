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

### 你需要做的（一次即可）

任一方式：

1. **装 Google 文字转语音**（Google TTS）—— 自带西语，最省事
2. 或在「设置 → 更多设置 → 无障碍 → 文字转语音」里，给现有引擎**下载西语语音包**
3. 装好之后**不用改任何代码**：插件的 `isAvailable` 会返回 `true`，
   `initNativeTts()` 自动启用原生朗读，前端优先级链会自动走它

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
