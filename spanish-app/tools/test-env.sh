#!/usr/bin/env bash
# 启动浏览器回归所需的无头 Chrome（静态服务器请另起）。
#
# 为什么要固化这件事：Chrome 在这台机器上直接跑会因沙箱初始化失败而崩溃
# （日志里的 "sandbox initialization failed: Operation not permitted"），
# 必须加 --no-sandbox。这个细节以前只存在于 /tmp 的临时命令里，
# 一旦 /tmp 被清掉就得重新摸索，所以写进仓库。
#
# 用法:
#   bash tools/test-env.sh          # 启动 Chrome（默认 CDP 端口 9333）
#   bash tools/test-env.sh stop     # 停止
#
# 然后:
#   node scripts/regress-core.mjs
#   node scripts/regress-rapid-click.mjs

CDP_PORT="${CDP_PORT:-9333}"
CHROME_BIN="${CHROME_BIN:-$HOME/.cache/puppeteer/chrome-headless-shell/mac_arm-152.0.7977.54/chrome-headless-shell-mac-arm64/chrome-headless-shell}"
PROFILE_DIR="/tmp/lingua-cdp-$CDP_PORT"

if [ "${1:-}" = "stop" ]; then
  pkill -f "chrome-headless-shell.*remote-debugging-port" >/dev/null 2>&1
  echo "已停止 Chrome"
  exit 0
fi

if [ ! -x "$CHROME_BIN" ]; then
  echo "找不到 Chrome for Testing: $CHROME_BIN" >&2
  echo "可用 CHROME_BIN=/path/to/chrome 覆盖" >&2
  exit 1
fi

if curl -s "http://127.0.0.1:$CDP_PORT/json/version" 2>/dev/null | grep -q webSocketDebuggerUrl; then
  echo "CDP 端口 $CDP_PORT 已在监听"
  exit 0
fi

rm -rf "$PROFILE_DIR"
"$CHROME_BIN" \
  --remote-debugging-port="$CDP_PORT" \
  --user-data-dir="$PROFILE_DIR" \
  --no-sandbox --disable-gpu --disable-dev-shm-usage --no-first-run \
  about:blank >/tmp/lingua-chrome.log 2>&1 &

for _ in 1 2 3 4 5 6 7 8 9 10; do
  sleep 1
  if curl -s "http://127.0.0.1:$CDP_PORT/json/version" 2>/dev/null | grep -q webSocketDebuggerUrl; then
    echo "CDP 就绪 → CDP_PORT=$CDP_PORT"
    exit 0
  fi
done

echo "Chrome 未能启动，日志: /tmp/lingua-chrome.log" >&2
exit 1
