const CACHE_NAME = 'painted-prose-v1';
const ASSETS = [
  'index.html','journal.html','portfolio.html','about.html','contact.html','sketchbook.html','404.html',
  'styles.css','styles-addendum.css','journal-enhancements.css','textures.css','share.css',
  'script.js','journal-enhancements.js','toggle-parchment.js','share.js',
  'assets/motion/animations.css','assets/motion/animations.js',
  'assets/lightbox/lightbox.css','assets/lightbox/lightbox.js',
  'assets/ornaments/divider.svg','manifest.webmanifest'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  e.respondWith(
    caches.match(req).then(res=> res || fetch(req).then(net=>{
      const copy = net.clone();
      caches.open(CACHE_NAME).then(c=>c.put(req, copy));
      return net;
    }).catch(()=> caches.match('404.html')))
  );
});
