/**
 * 陈旧资源检测（防"验证的不是当前代码"）
 *
 * 为什么需要它：本项目的验证链路是
 *   源码 spanish-app/  --sync:web-->  www/  --cap sync-->  android assets
 * 而回归测试跑在 www/ 上、APK 打包 android assets。只要漏了一步同步，
 * 测试和打包都会"成功"，但验的是旧内容。这个坑真实发生过两次：
 *   1) APK 里 courses.js 是旧的（源码 3158 处 es: vs APK 2862 处），构建 exit 0；
 *   2) regress-core 报"词汇 5013"，而数据校验报 4996 —— 差 17 正是刚删的词。
 * 两次都是"数字对不上"才发现，所以这里把"对不上就报错"固化下来。
 *
 * 用法:
 *   import { assertFresh } from './assert-fresh.mjs';
 *   assertFresh();                      // 不新鲜则 process.exit(1)
 *   assertFresh({ soft: true });        // 只警告不退出
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');

function md5(p) {
  return crypto.createHash('md5').update(fs.readFileSync(p)).digest('hex');
}

/**
 * @param {{soft?: boolean, quiet?: boolean}} [opts]
 * @returns {{ok: boolean, stale: Array<{label:string, src:string, dst:string, srcMd5:string, dstMd5:string, missing?:boolean}>}}
 */
export function assertFresh(opts = {}) {
  const { soft = false, quiet = false } = opts;

  // 需要保持一致的副本对（src 是真相，dst 是消费方）
  const pairs = [
    { label: 'www 资源', src: 'data/courses.js', dst: 'www/data/courses.js' },
    { label: 'www 应用代码', src: 'js/app.js', dst: 'www/js/app.js' },
    { label: 'Android 资源', src: 'data/courses.js', dst: 'android/app/src/main/assets/public/data/courses.js' },
    { label: 'Android 应用代码', src: 'js/app.js', dst: 'android/app/src/main/assets/public/js/app.js' },
  ];

  const stale = [];
  for (const p of pairs) {
    const s = path.join(ROOT, p.src);
    const d = path.join(ROOT, p.dst);
    if (!fs.existsSync(s)) continue;          // 源码不在就跳过（如单独分发脚本）
    if (!fs.existsSync(d)) {
      // android/ 目录可能整个不存在（未初始化原生工程），只对 www 报缺失
      if (p.dst.startsWith('www/')) stale.push({ ...p, dstMd5: '(缺失)', srcMd5: md5(s), missing: true });
      continue;
    }
    const sm = md5(s);
    const dm = md5(d);
    if (sm !== dm) stale.push({ ...p, srcMd5: sm, dstMd5: dm });
  }

  if (!quiet) {
    if (stale.length === 0) {
      console.log('  ✅ 资源新鲜度 — 所有副本与源码一致');
    } else {
      for (const s of stale) {
        console.log(`  ${soft ? '⚠️ ' : '❌'} ${s.label} ${s.dst} 是旧的（源码 ${s.srcMd5.slice(0, 8)} vs 副本 ${s.dstMd5.slice(0, 8)}）`);
      }
      console.log('     → 先跑 npm run sync:web（Android 还需 npx cap sync android）再验证，否则测的是旧内容');
    }
  }

  if (stale.length && !soft) {
    console.error(`\n检测到 ${stale.length} 处陈旧副本，验证结果不可信，已中止。`);
    process.exit(9);
  }
  return { ok: stale.length === 0, stale };
}

// 允许直接执行：node scripts/assert-fresh.mjs
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
  assertFresh();
}
