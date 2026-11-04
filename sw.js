/* PULSO 0.7 — código network-first; biblioteca offline tras preparación. */
const VERSION='pulso-v07-1';
const PHOTO_CACHE='pulso-photos-v02';
const ASSETS=['./','./index.html','./app.js','./data.js','./catalog-v02.js','./technique-v06.js','./styles.css','./manifest.webmanifest','./assets/icons/icon-192.png','./assets/icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION&&k!==PHOTO_CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET')return;
 const url=new URL(req.url);
 const isPhoto=url.hostname==='raw.githubusercontent.com'&&url.pathname.startsWith('/yuhonas/free-exercise-db/main/exercises/');
 if(isPhoto){e.respondWith(caches.open(PHOTO_CACHE).then(async c=>{const hit=await c.match(req,{ignoreVary:true});if(hit&&hit.ok)return hit;
  try{const response=await fetch(req);if(response.ok&&(response.headers.get('content-type')||'').startsWith('image/'))await c.put(req,response.clone());return response}catch(ex){if(hit)return hit;throw ex}}));return;}
 if(url.origin!==self.location.origin)return;
 const updateable=req.mode==='navigate'||/(?:\/(?:index\.html|app\.js|data\.js|catalog-v02\.js|technique-v06\.js|styles\.css|sw\.js))$/.test(url.pathname);
 e.respondWith((async()=>{if(updateable){try{const response=await fetch(req,{cache:'no-store'});if(response.ok)await (await caches.open(VERSION)).put(req,response.clone());return response}catch(ex){const cached=await caches.match(req,{ignoreSearch:true});if(cached)return cached;throw ex}}
 const cached=await caches.match(req,{ignoreSearch:true});if(cached)return cached;const response=await fetch(req);if(response.ok)(await caches.open(VERSION)).put(req,response.clone());return response;})());
});
