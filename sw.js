const CACHE_NAME = "glut-pwa-9893d7177f38";
const PRECACHE_URLS = ["./","./assets/door_col-BMXJuMn6.jpg","./assets/door_nrm-BBK43XmV.jpg","./assets/ENEMY_col-wyekVV4w.jpg","./assets/ENEMY_nrm-BhL9fYIy.jpg","./assets/index-BOBmV84H.css","./assets/index-BZ55d0_Z.js","./assets/react-ByNFwixe.js","./assets/STEP_col-8veh7JXx.jpg","./assets/STEP_col-awIo6z2w.png","./assets/STEP_col-C8ivFjrM.jpg","./assets/STEP_nrm-abqD0ZUo.jpg","./assets/STEP_nrm-Bud3geX1.png","./assets/STEP_nrm-DmEnqyIc.jpg","./assets/three-DAaJELuJ.js","./assets/WALL_col-BppQpvH2.jpg","./assets/WALL_nrm-DdrIHY6n.jpg","./assets/waternormals-Dfm-ILpY.jpg","./fonts/Cause-Bold.woff2","./fonts/Cause-Regular.woff2","./fonts/FreckleFace-Regular.woff2","./fonts/Yarin-Regular.woff2","./glut.png","./icons/apple-touch-icon.png","./icons/favicon-96x96.png","./icons/favicon.ico","./icons/flag-gb.svg","./icons/flag-pl.svg","./icons/icon-192.png","./icons/icon-512.png","./index.html","./jelly.png","./manifest.webmanifest","./sounds/README.md"];
const APP_SHELL = [
  "./",
  "./manifest.webmanifest",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/favicon-96x96.png",
  "./icons/favicon.ico",
  "./icons/flag-pl.svg",
  "./icons/flag-gb.svg",
  "./fonts/FreckleFace-Regular.woff2",
  "./fonts/Yarin-Regular.woff2",
  "./fonts/Cause-Regular.woff2",
  "./fonts/Cause-Bold.woff2",
  "./glut.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS || APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key.startsWith("glut-pwa-") && key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cached) => {
        if (cached) return cached;
        if (event.request.mode === "navigate") {
          return cache.match(new URL("./", self.registration.scope)).then((appShell) => appShell || fetch(event.request));
        }
        return fetch(event.request);
      })
    )
  );
});
