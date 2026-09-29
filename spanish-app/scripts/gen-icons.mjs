/**
 * 生成 PWA 图标与 Capacitor 原生资源图标 / 启动图。
 * 品牌：墨色 #221A12 + 纸白 #F6F1E7 + 赤陶 #C0563A，图形为几何「L.」字标。
 * 用法：npm run icons
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const INK = '#221A12';
const PAPER = '#F6F1E7';
const ACCENT = '#C0563A';

/** 几何字标「L.」，坐标基于 1024×1024 画布 */
function markPath(ink = PAPER, accent = ACCENT) {
  return `
    <rect x="275" y="280" width="130" height="440" fill="${ink}"/>
    <rect x="275" y="590" width="340" height="130" fill="${ink}"/>
    <circle cx="675" cy="658" r="72" fill="${accent}"/>`;
}

const svg = (inner, size = 1024) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${inner}</svg>`;

/** 完整图标：圆角底 + 字标（inset 用于收缩到安全区） */
function iconSvg({ rounded = true, inset = 0 } = {}) {
  const bg = rounded
    ? `<rect width="1024" height="1024" rx="220" fill="${INK}"/>`
    : `<rect width="1024" height="1024" fill="${INK}"/>`;
  const s = 1 - inset;
  const t = 512 - 512 * s;
  return svg(`${bg}<g transform="translate(${t} ${t}) scale(${s})">${markPath()}</g>`);
}

/** 透明前景层（Android 自适应图标）：仅字标 */
function foregroundSvg() {
  return svg(`<g transform="translate(153.6 153.6) scale(0.7)">${markPath()}</g>`);
}

/** 纯色背景层（Android 自适应图标） */
function backgroundSvg() {
  return svg(`<rect width="1024" height="1024" fill="${INK}"/>`);
}

/** 启动图：纸白背景 + 墨色字标居中 */
function splashSvg() {
  const size = 2732;
  const s = 0.3;
  const t = (1024 - 1024 * s) / 2 + (size - 1024) / 2;
  return svg(
    `<rect width="${size}" height="${size}" fill="${PAPER}"/>
     <g transform="translate(${t} ${t}) scale(${s})">${markPath(INK, ACCENT)}</g>`,
    size
  );
}

const TARGETS = [
  // PWA 图标
  { out: 'icons/icon-192.png', size: 192, data: iconSvg({ inset: 0.10 }) },
  { out: 'icons/icon-512.png', size: 512, data: iconSvg({ inset: 0.10 }) },
  { out: 'icons/maskable-512.png', size: 512, data: iconSvg({ rounded: false, inset: 0.30 }) },
  { out: 'icons/apple-touch-icon.png', size: 180, data: iconSvg({ rounded: false, inset: 0.14 }) },
  { out: 'icons/favicon-32.png', size: 32, data: iconSvg({ inset: 0.14 }) },
  { out: 'icons/favicon-64.png', size: 64, data: iconSvg({ inset: 0.14 }) },
  // Capacitor Assets 源文件
  { out: 'assets/icon.png', size: 1024, data: iconSvg({ inset: 0.10 }) },
  { out: 'assets/icon-foreground.png', size: 1024, data: foregroundSvg() },
  { out: 'assets/icon-background.png', size: 1024, data: backgroundSvg() },
  { out: 'assets/splash.png', size: 2732, data: splashSvg() }
];

for (const { out, size, data } of TARGETS) {
  const dest = resolve(root, out);
  mkdirSync(dirname(dest), { recursive: true });
  await sharp(Buffer.from(data)).resize(size, size).png().toFile(dest);
  console.log(`✓ ${out}  ${size}×${size}`);
}

console.log('图标生成完成。');