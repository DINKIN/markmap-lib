!function(){"use strict";const e=["client/client.413544ef.js","client/index.b2afa415.js","client/about.f01200b8.js","client/usage.7f7900c4.js","client/repl.bd7fb699.js","client/codemirror.051091a1.js","client/markdown.36fe84b9.js","client/client.8d32ca18.js"].concat(["service-worker-index.html","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","markmap.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586263787317").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586263787317"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586263787317").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const a=await t.match(e.request);if(a)return a;throw n}}))))})}();