/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('react').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/static/js/bundle.js',
        // Add other assets and routes to cache
      ]);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return new Response('Hello Offline Page');
      }),
  );
});
