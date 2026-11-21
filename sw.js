const VERSION = "v1";
const SCOPE = self.registration.scope;
const CACHE_PREFIX = `Vari0ant11-web:${SCOPE}:`;
const CACHE_NAME = CACHE_PREFIX + VERSION;

const FILES = [
  "./",
  "./index.html",
  "./catalog.html",
  "./form.html",
  "./style.css",
  "./ekaterininsky.html",
  "./item.html",
  "./item2.html",
  "./item3.html",
  "./item4.html",
  "./item5.html",
  "./kelch.html",
  "./page2.html",
  "./peterhof.html",
  "./pushkin.html", 
  "./catalog-page.js",
  "./conditions.js",
  "./form.js",
  "./form1.js",
  "./images/moun.png",
  "./images/moun2.png",
  "./images/moun3.png",
  "./images/moun4.png",
  "./images/mountain.png",
  "./images/mountain1.png",
  "./images/mountain2.png",
  "./images/mountains.png",
  "./images/non.png",
  "./images/non1.png",
  "./images/non2.png",
  "./images/non3.png",
  "./fonts/MyCustomFont.ttf",
  "./fonts/MySiteFont-Regular.ttf",
];

self.addEventListener("install", (event) => {
  const requests = FILES.map((path) =>
    new Request(new URL(path, SCOPE), { cache: "reload" })
  );
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(requests))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      const oldVersions = names.filter((name) =>
        name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME
      );
      return Promise.all(oldVersions.map((name) => caches.delete(name)));
    })
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || !request.url.startsWith(SCOPE)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const savedResponse = await cache.match(request);
      return savedResponse ?? fetch(request);
    })
  );
});
