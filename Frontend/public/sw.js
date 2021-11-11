let cacheName = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        "/static/js/bundle.js",
        "/static/js/vendors~main.chunk.js",
        "/static/js/main.chunk.js",
        "https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap",
        "/static/media/Dev.18285ef8.jpg",
        "/static/media/poojan.0a59823a.jpg",
        "/static/media/about_us.24d3698c.jpg",
        "/static/media/pic-1.5632a661.png",
        "/static/media/Modules.1195ccdf.png",
        "/static/media/Browse_modules.53e48814.jpg",
        "/static/media/bg.8de6c9d9.png",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        return result;
      })
    );
  }
});
