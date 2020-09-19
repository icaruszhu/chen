const version = '20200919122135';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/2020/06/10/templeOS/","/2020/05/31/distro-hopping/","/2020/05/30/using-easy-jekyll/","/publication/2020/03/22/sumptuary-law/","/teaching/2020/01/16/IP-teaching/","/bitcoin/2019/06/28/non-digital-bitcoin/","/general/2016/01/01/bankymus/","/conference/2015/07/13/music-roundtable/","/_posts/2015-07-01-music-roundtable/","/_posts/2016-01-01-bankymus/","/_posts/2019-06-28-non-digital-bitcoin/","/_posts/2020-01-16-IP-teaching/","/_posts/2020-03-22-sumptuary-law/","/_posts/2020-05-30-using-easy-jekyll/","/_posts/2020-05-31-distro-hopping/","/_posts/2020-05-31-templeOS/","/about/","/categories/","/blog/","/","/ip/","/music-law/","/org-mode/","/publication/","/search/","/seminar/","/assets/styles.css","/manifest.json","/assets/search.json","/redirects.json","/sitemap.xml","/robots.txt","/blog/page2/","/feed.xml","", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
