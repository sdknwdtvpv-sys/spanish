# Android 构建环境说明

## 为什么要单独写这份文档

构建 APK 需要的 **JDK** 和 **Android SDK** 曾经装在用户家目录
（`~/development/`、`~/Library/Android/sdk`），在环境的一次临时文件清理中
被整体删除，导致构建突然失败且原因不明显（Gradle 只报 `SDK location not found`）。

存活下来的是工作区内的 `.gradle-home/`。因此现在的约定是：
**工具链一律放在工作区内，不依赖家目录。**

| 用途 | 位置 | 大小 |
|---|---|---|
| JDK 17 | `.jdk-download/jdk-17.0.20.1+1/Contents/Home` | 501 MB |
| Android SDK | `.android-sdk/` | 513 MB |
| Gradle 缓存 | `.gradle-home/` | 1.2 GB |

三者在 `.gitignore` 中，不入库。

## 一键构建

```bash
bash tools/build-android.sh
```

脚本做四件事：同步 Web 资源 → `cap sync` 到 Android assets → Gradle 构建
→ **解包比对 APK 内 `courses.js` 与源文件的 MD5**。

最后一步不是多余的：Gradle 打包读的是 `android/app/src/main/assets/public/`，
而那一份要靠 `cap sync` 从 `www/` 复制。跳过复制会打出**过期内容**，
而构建仍然成功、退出码为 0、APK 大小也会变——只有比对 MD5 才能发现。

## 如果工具链又没了

### JDK 17

```bash
mkdir -p .jdk-download && cd .jdk-download
curl -L -o jdk17.tar.gz \
  "https://api.adoptium.net/v3/binary/latest/17/ga/mac/aarch64/jdk/hotspot/normal/eclipse"
tar xzf jdk17.tar.gz && rm jdk17.tar.gz
```

### Android SDK

```bash
mkdir -p .android-sdk && cd .android-sdk
curl -L -o clt.zip "https://dl.google.com/android/repository/commandlinetools-mac-13114758_latest.zip"
unzip -q clt.zip -d tmp && mkdir -p cmdline-tools/latest
mv tmp/cmdline-tools/* cmdline-tools/latest/ && rm -rf tmp clt.zip
```

**注意**：不要用 `cmdline-tools/latest/bin/sdkmanager` 这个官方 bash 包装脚本。
本工作区路径含空格与撇号（`Elliot's SSD`），包装脚本解析 classpath 时会失败，
报 `ClassNotFoundException: SSD/HARNESS/Spanish/...`。直接调用 java：

```bash
JH="$PWD/../.jdk-download/jdk-17.0.20.1+1/Contents/Home"
SDK="$PWD"
CP="$SDK/cmdline-tools/latest/lib/sdkmanager-classpath.jar"
MAIN="com.android.sdklib.tool.sdkmanager.SdkManagerCli"

yes | "$JH/bin/java" -classpath "$CP" "$MAIN" --sdk_root="$SDK" --licenses
"$JH/bin/java" -classpath "$CP" "$MAIN" --sdk_root="$SDK" \
  "platform-tools" "platforms;android-35" "build-tools;36.0.0"
```

### 版本要求

由 `android/variables.gradle` 与 `android/app/build.gradle` 决定：

- `compileSdkVersion` / `targetSdkVersion` = 35
- `buildToolsVersion` = 36.0.0
- `minSdkVersion` = 23
- Java 版本 17（AGP 要求；Capacitor 模板原先写的是 21，已改）

## 环境变动：git 因 Xcode 许可而失败

某轮开工时发现**连 `git` 命令都失败**，报错：

```
You have not agreed to the Xcode license agreements.
Please run 'sudo xcodebuild -license' ...
```

原因：`xcode-select -p` 指向 `/Applications/Xcode.app/Contents/Developer`，
而该 Xcode 的许可未接受；`/usr/bin/git` 是通过它包装的，于是被一并拦住。

**绕过方式**（无需 sudo）：把 `DEVELOPER_DIR` 指向 CommandLineTools：

```bash
export DEVELOPER_DIR=/Library/Developer/CommandLineTools
git status          # 恢复正常
```

CommandLineTools 里自带可用的 git（实测 2.54.0）。
如果整段脚本里要用到 git，在脚本开头设置这个变量即可。

## 浏览器回归环境

另一个独立问题是 Chrome 在本机直接启动会因沙箱初始化失败而崩溃
（日志中的 `sandbox initialization failed: Operation not permitted`），
必须加 `--no-sandbox`。用 `tools/test-env.sh` 启动：

```bash
bash tools/test-env.sh                  # 启动无头 Chrome（默认 CDP 9333）
bash tools/test-env.sh stop             # 停止
CDP_PORT=9333 node scripts/regress-core.mjs
CDP_PORT=9333 node scripts/regress-rapid-click.mjs
```

静态服务器需另起：`PORT=4173 node scripts/serve.mjs`。
