const CACHE_NAME = 'technorth-offline-v1';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png'
];
// These libraries power PDF export and spreadsheet import. Cache them while online
// so the app can still use them in the field without a connection.
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await Promise.allSettled(EXTERNAL_ASSETS.map(async url => {
      try {
        const response = await fetch(url, { mode: 'cors', cache: 'reload' });
        if (response && (response.ok || response.type === 'opaque')) await cache.put(url, response.clone());
      } catch (_) { /* Keep installation available even if a CDN is temporarily unreachable. */ }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('technorth-offline-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // App files: serve cached copy first, then refresh from network when available.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      const network = fetch(request).then(response => {
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      }).catch(() => null);
      return cached || await network || (request.mode === 'navigate' ? await cache.match('./index.html') : Response.error());
    })());
    return;
  }
  // CDN scripts: cache-first so they continue working when offline.
  if (EXTERNAL_ASSETS.includes(request.url)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request.url);
      if (cached) return cached;
      const response = await fetch(request);
      if (response && (response.ok || response.type === 'opaque')) await cache.put(request.url, response.clone());
      return response;
    })());
  }
});
