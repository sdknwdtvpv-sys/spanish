/**
 * 将根目录下的 Web 资源同步到 www/（Capacitor 的 webDir）。
 * 保持根目录为唯一事实来源，避免重复维护。
 */
import { cpSync, rmSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'www');

const ENTRIES = [
  'index.html',
  'css',
  'data',
  'js',
  'audio',
  'icons',
  'manifest.webmanifest',
  'sw.js'
];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const entry of ENTRIES) {
  cpSync(resolve(root, entry), resolve(out, entry), { recursive: true });
}

console.log(`✓ 已同步 Web 资源到 ${out}`);