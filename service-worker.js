// Store cache to variable
let staticCacheName = 'wei-website-v1';

// Array of elements to cache 
let urlToCache = [
    './',
    './css/styles.css',
    './css/img/close.png',
    './css/img/loading.gif',
    './css/img/next.png',
    './css/img/prev.png',
    './img/arcade_game.png',
    './img/art_gallery_0.svg',
    './js/main.js',
    './js/lightbox.js',
    './js/app.js',
    './index.html'
];

// Install service worker
self.addEventListener('install ', function(e) {
    e.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll(urlToCache);
        })
    );
});

// Remove previous caches
self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('restaurant-') &&
                   cacheName != staticCacheName;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  
// Fetch cache and add new elements to cache
self.addEventListener('fetch', function(e) {
	e.respondWith(
    caches.open(staticCacheName).then(function(cache) {
        return cache.match(e.request).then(function (response) {
        return response || fetch(e.request).then(function(response) {
            cache.put(e.request, response.clone());
            return response;
        });
        });
    })
    );
});