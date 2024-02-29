self.addEventListener('install', (event) => {
    // Perform install steps
});

self.addEventListener('fetch', (event) => {
    // Handle requests
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
})
