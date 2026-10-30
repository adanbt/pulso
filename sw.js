/* PULSO 0.2.1 — actualización compatible y navegación online-first */
const VERSION='pulso-v02-2';
const PHOTO_CACHE='pulso-photos-v02';
const ASSETS=["./", "./index.html", "./catalog-v02.js", "./styles.css", "./data.js", "./app.js", "./manifest.webmanifest", "./assets/icons/icon-192.png", "./assets/icons/icon-512.png", "./assets/exercises/back_squat-1.svg", "./assets/exercises/back_squat-2.svg", "./assets/exercises/bench_press-1.svg", "./assets/exercises/bench_press-2.svg", "./assets/exercises/biceps_curl-1.svg", "./assets/exercises/biceps_curl-2.svg", "./assets/exercises/cable_row-1.svg", "./assets/exercises/cable_row-2.svg", "./assets/exercises/calf_raise-1.svg", "./assets/exercises/calf_raise-2.svg", "./assets/exercises/chest_fly-1.svg", "./assets/exercises/chest_fly-2.svg", "./assets/exercises/db_row-1.svg", "./assets/exercises/db_row-2.svg", "./assets/exercises/dead_bug-1.svg", "./assets/exercises/dead_bug-2.svg", "./assets/exercises/face_pull-1.svg", "./assets/exercises/face_pull-2.svg", "./assets/exercises/goblet_squat-1.svg", "./assets/exercises/goblet_squat-2.svg", "./assets/exercises/hammer_curl-1.svg", "./assets/exercises/hammer_curl-2.svg", "./assets/exercises/hip_abduction-1.svg", "./assets/exercises/hip_abduction-2.svg", "./assets/exercises/hip_thrust-1.svg", "./assets/exercises/hip_thrust-2.svg", "./assets/exercises/incline_press-1.svg", "./assets/exercises/incline_press-2.svg", "./assets/exercises/lat_pulldown-1.svg", "./assets/exercises/lat_pulldown-2.svg", "./assets/exercises/lateral_raise-1.svg", "./assets/exercises/lateral_raise-2.svg", "./assets/exercises/leg_curl-1.svg", "./assets/exercises/leg_curl-2.svg", "./assets/exercises/leg_extension-1.svg", "./assets/exercises/leg_extension-2.svg", "./assets/exercises/leg_press-1.svg", "./assets/exercises/leg_press-2.svg", "./assets/exercises/pec_deck-1.svg", "./assets/exercises/pec_deck-2.svg", "./assets/exercises/plank-1.svg", "./assets/exercises/plank-2.svg", "./assets/exercises/rdl-1.svg", "./assets/exercises/rdl-2.svg", "./assets/exercises/seated_row-1.svg", "./assets/exercises/seated_row-2.svg", "./assets/exercises/shoulder_press-1.svg", "./assets/exercises/shoulder_press-2.svg", "./assets/exercises/split_squat-1.svg", "./assets/exercises/split_squat-2.svg", "./assets/exercises/triceps_push-1.svg", "./assets/exercises/triceps_push-2.svg"];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==VERSION&&key!==PHOTO_CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.hostname==='raw.githubusercontent.com'&&url.pathname.startsWith('/yuhonas/free-exercise-db/main/exercises/')){
  event.respondWith(caches.open(PHOTO_CACHE).then(async cache=>{
   const existing=await cache.match(req,{ignoreVary:true});
   if(existing)return existing;
   const res=await fetch(req);
   if(res.ok||res.type==='opaque')await cache.put(req,res.clone());
   return res;
  }));
  return;
 }
 if(url.origin!==self.location.origin)return;
 // HTML y código siempre verifican si hay versión nueva; offline conserva la última copia.
 const updateable=req.mode==='navigate'||/(?:\/|^)(?:index\.html|app\.js|data\.js|catalog-v02\.js|styles\.css)$/.test(url.pathname);
 if(updateable){
  event.respondWith((async()=>{
   try{
    const response=await fetch(req,{cache:'no-store'});
    if(response.ok){const cache=await caches.open(VERSION);await cache.put(req,response.clone());}
    return response;
   }catch(error){
    const cached=await caches.match(req,{ignoreSearch:true});
    if(cached)return cached;
    throw error;
   }
  })());
  return;
 }
 event.respondWith(caches.match(req,{ignoreSearch:true}).then(cached=>cached||fetch(req).then(response=>{
  if(response.ok){const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(req,copy));}
  return response;
 })));
});
