const SW_VERSION = 4;
console.log("New Service Worker find, let's going to install");
self.addEventListener('install', (event) => {
  console.log(`Service Worker ${SW_VERSION} installing.`);
  // Perform install steps
  event.waitUntil(
    caches
      .open(`assets_${SW_VERSION}`)
      .then((cache) => cache.add('/images/offilen.jpeg')),
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (
    url.origin === location.origin &&
    url.pathname === '/images/dashboard-dark.png'
  ) {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match('/images/offilen.jpeg').then((res) => {
        if (res == null) {
          const promises = [
            caches
              .open('assets')
              .then((cache) => cache.add('/images/offilen.jpeg')),
          ];
          let response;
          promises.push(
            fetch('/images/offilen.jpeg').then((res) => {
              response = res;
              return res;
            }),
          );
          return Promise.all(promises).then(() => response);
        }
        return res;
      }),
    );
    return;
  }
  event.respondWith(fetch(event.request));
});

self.addEventListener('message', (event) => {
  if (event.data.action === 'offline') {
    caches.match('/images/offilen.jpeg').then((res) => {
      event.source.postMessage({
        type: 'image',
        data: res,
      });
    });
  }
});

self.addEventListener('push', (event) => {
  const data = event.data.json(); // Assuming the payload is JSON
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: '/icons/icon-192x192.png',
    tag: 'your-tag',
  });
});
