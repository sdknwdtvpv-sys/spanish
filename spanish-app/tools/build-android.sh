#!/usr/bin/env bash
# 构建 Android debug APK，并校验 APK 里的内容与源文件一致。
#
# 为什么需要这个脚本（两个踩过的坑）：
#
# 1) 工具链必须放在工作区内。JDK 曾装在 ~/development、Android SDK 装在
#    ~/Library/Android/sdk，两者都被环境的临时文件清理删掉了。工作区里的
#    .gradle-home 却存活了下来。所以现在 JDK 放在 .jdk-download/、
#    SDK 放在 .android-sdk/，都在仓库（或工作区）内。
#
# 2) Gradle 打包读的是 android/app/src/main/assets/public/，那一份要靠
#    `cap sync` 从 www/ 复制。跳过这一步会打出过期内容——构建成功、退出码 0、
#    APK 大小也变了，只有解包比对 MD5 才能发现。所以本脚本强制 cap sync，
#    并在最后解包校验 MD5。
#
# 用法: bash tools/build-android.sh

set -uo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WS="$(cd "$ROOT/.." && pwd)"

JDK="$WS/.jdk-download/jdk-17.0.20.1+1/Contents/Home"
SDK="$WS/.android-sdk"
GRADLE_HOME="$WS/.gradle-home"
APK_OUT="$WS/lingua-debug.apk"

fail() { echo "❌ $*" >&2; exit 1; }

[ -x "$JDK/bin/javac" ] || fail "找不到 JDK：$JDK
   下载：curl -L -o jdk.tar.gz 'https://api.adoptium.net/v3/binary/latest/17/ga/mac/aarch64/jdk/hotspot/normal/eclipse'
         mkdir -p '$WS/.jdk-download' && tar xzf jdk.tar.gz -C '$WS/.jdk-download'"
[ -d "$SDK/platforms/android-35" ] || fail "找不到 Android SDK：$SDK
   需要 platforms;android-35 与 build-tools;36.0.0，见 tools/README-android.md"
[ -x "$SDK/build-tools/36.0.0/aapt2" ] || fail "缺少 build-tools;36.0.0"

export PATH="/Users/elliot.li/.workbuddy/binaries/node/versions/22.22.2-3/bin:$PATH"
command -v node >/dev/null || fail "找不到 node"

echo "sdk.dir=$SDK" > "$ROOT/android/local.properties"

echo "── 1/4 同步 Web 资源到 www/ ──"
(cd "$ROOT" && node scripts/sync-www.mjs) || fail "sync-www 失败"

echo "── 2/4 同步 www/ 到 Android assets（关键步骤，不可跳过）──"
(cd "$ROOT" && npx cap sync android) || fail "cap sync 失败"

echo "── 3/4 Gradle 构建 ──"
(cd "$ROOT/android" && JAVA_HOME="$JDK" ANDROID_HOME="$SDK" GRADLE_USER_HOME="$GRADLE_HOME" \
  ./gradlew assembleDebug --no-daemon) || fail "Gradle 构建失败"

SRC_APK="$ROOT/android/app/build/outputs/apk/debug/app-debug.apk"
[ -f "$SRC_APK" ] || fail "APK 未生成：$SRC_APK"

echo "── 4/4 解包校验内容一致性 ──"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
unzip -q "$SRC_APK" "assets/public/data/courses.js" -d "$TMP" || fail "解包失败"
IN_APK="$(md5 -q "$TMP/assets/public/data/courses.js" 2>/dev/null || md5sum "$TMP/assets/public/data/courses.js" | cut -d' ' -f1)"
IN_SRC="$(md5 -q "$ROOT/data/courses.js" 2>/dev/null || md5sum "$ROOT/data/courses.js" | cut -d' ' -f1)"
if [ "$IN_APK" != "$IN_SRC" ]; then
  fail "APK 内的 courses.js 与源文件不一致！
   APK: $IN_APK
   源:  $IN_SRC
   说明漏了 cap sync，或构建用的是缓存的旧资源。"
fi

cp "$SRC_APK" "$APK_OUT"
echo
echo "✅ 构建成功，内容校验通过"
echo "   APK: $APK_OUT"
echo "   courses.js MD5: $IN_SRC"
ls -la "$APK_OUT"
