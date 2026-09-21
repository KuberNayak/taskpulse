self.addEventListener('fetch', (event) => {
  // Let network requests pass through to keep Firebase realtime sync live
  event.respondWith(fetch(event.request));
});
