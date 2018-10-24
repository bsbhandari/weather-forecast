var dataCacheName = 'data-weather-forecast-cache';
var cacheName = 'weather-forecast-cache';
var filesToCache = [
  '/',
  '/index.html',
  '/vendor.js',
  '/polyfills.js',
  '/main.js',
  '/styles.js',
  '/runtime.js',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'custom';
  if (e.request.url.indexOf(dataUrl) > -1) {
    // custom or master data caching
    e.respondWith(
      caches.open(dataCacheName).then(function (cache) {
        return fetch(e.request).then(function (response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    // e.respondWith(
    //   caches.match(e.request).then(function (response) {
    //     return response || fetch(e.request);
    //   })
    // );
  }
});
