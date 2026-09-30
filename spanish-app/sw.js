/* Lingua · Service Worker —— 离线缓存，使应用可安装为 PWA */
// 注意：每次发布修改了 index.html / css / js / data 后，
// 必须把下面的版本号 +1，否则用户会一直拿到旧缓存代码。
const CACHE = 'lingua-v37';
const PRECACHE = [
  './',
  './index.html',
  './css/styles.css',
  './data/courses.js',
  './js/app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // 跨域资源（Google Fonts、TTS 语音接口等）直接走网络，不纳入缓存
  if (url.origin !== self.location.origin) return;

  // 导航请求与样式/脚本/数据一律「网络优先」：
  // 保证发版后立刻生效，不再出现「改了代码用户还是旧版」的问题；
  // 离线时再回退到缓存。
  const isNavigation = request.mode === 'navigate';
  const isCode = /\.(?:js|mjs|css|json|webmanifest)$/i.test(url.pathname);

  if (isNavigation || isCode) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(request).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  // 图片等静态资源「缓存优先」，减少流量
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((res) => {
          // 只缓存成功的同源响应，避免把 404 / 错误页缓存下来
          if (res && res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match('./index.html'));
    })
  );
});