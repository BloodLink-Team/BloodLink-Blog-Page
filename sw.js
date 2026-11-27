/* BloodLink Blog offline fallback + freshness policy.
   Network-first for pages and assets so published design updates are used as soon as reachable. */
const CACHE_NAME = 'bloodlink-blog-shell-v20261128-1';
const SHELL = [
  './',
  './index.html',
  './blog.html',
  './articles.html',
  './about.html',
  './privacy.html',
  './404.html',
  './css/style.css',
  './js/config.js',
  './js/analytics.js',
  './js/site.js',
  './js/articles-loader.js',
  './content/articles.json',
  './js/app.js',
  './assets/bloodlink-logo.png',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('bloodlink-blog-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, fresh.clone()).catch(() => {});
        }
        return fresh;
      } catch (_) {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(request, { ignoreSearch: true })) ||
               (await cache.match('./404.html')) ||
               new Response('You are offline. Reconnect to open this page.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  // Network-first for same-origin CSS/JS/images: users do not stay stuck with old styling.
  if (['style', 'script', 'image'].includes(request.destination)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh && fresh.ok) cache.put(request, fresh.clone()).catch(() => {});
        return fresh;
      } catch (_) {
        return (await cache.match(request, { ignoreSearch: true })) || Response.error();
      }
    })());
  }
});
