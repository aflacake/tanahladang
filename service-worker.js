self.addEventListener('install', (event) => {
    event.awaitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                'index.html',
                'style.css',
                'script.js',
                'gaya.js',
                'alat.js',
                'https://raw.githubusercontent.com/aflacake/tanahladang/second/img/logotanahladang.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.responWidth(
        caches.match(event.request).then((cachedResponse)=> {
            return cachedResponse || fetch(event.request);
        })
	
    );
});
