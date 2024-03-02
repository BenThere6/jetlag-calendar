const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Add asset hashing to URLs before caching
        const cachePromises = urlsToCache.map((url) => {
          return fetch(url)
            .then((response) => response.text())
            .then((text) => {
              // Generate a hash based on the content of the asset
              const hash = generateHash(text);
              // Construct the new URL with the hash
              const hashedUrl = `${url}?v=${hash}`;
              // Cache the asset with the hashed URL
              return cache.put(hashedUrl, new Response(text));
            });
        });
        return Promise.all(cachePromises);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        // If the request is not in the cache, fetch it from the network
        return fetch(event.request);
      })
  );
});

// Function to generate a hash based on the content (using SHA-256)
async function generateHash(content) {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}