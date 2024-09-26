'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8b6ac7351b0adf92e2a8d0dc22aae8f2",
"assets/AssetManifest.bin.json": "88538baef1367cca7bfbe78b7e5359a5",
"assets/AssetManifest.json": "ab70d6417638075b066575c5b3630bb1",
"assets/assets/icons/arrowRight.png": "e08872fa51c822db92da2634ac20e9a4",
"assets/assets/icons/arrowUp.png": "b08603700c475224f679a0b96c8d9363",
"assets/assets/icons/calendar.png": "8055b04d09fc9a3e67b0f6dcf76ddb84",
"assets/assets/icons/call.png": "6fff966099dc45557a66ff3ebe978f7b",
"assets/assets/icons/cart.png": "6312971c9ed8d50564be6c08ebd1fa0e",
"assets/assets/icons/facebook.png": "f1542cdcf0c2f41bd2c9026f36c9e8b4",
"assets/assets/icons/instagram.png": "27df90c50b2eb94dbe0cfba0c3cb58ec",
"assets/assets/icons/location.png": "67fc98860c5b74267dbd01763f01313e",
"assets/assets/icons/phone.png": "2facce19184c37700fdf81eab020c591",
"assets/assets/icons/search.png": "bf49693d3952b4e7fd5ea2fcc2a9fe23",
"assets/assets/icons/whatsapp.png": "16e414b04832570cbea5901dd06d0d24",
"assets/assets/icons/youtube.png": "b5398115a19bc440ffa468cbd6d87681",
"assets/assets/images/beardcare.png": "07c3b24e9595f58fed9aff15390dfedb",
"assets/assets/images/berkowits_icon.png": "6cdf3caf448e7f5d0f0ca4855fc7973e",
"assets/assets/images/bookApointment.png": "c919c573e2f57885fe6e70fcdb44a55d",
"assets/assets/images/book_vector.png": "cd84418b8052aec430f3960ac350c44b",
"assets/assets/images/call_vector.png": "28844154764ff3a1eb5f2da9512db737",
"assets/assets/images/clinic/centre0.png": "e416027d74767b1225f91b5c35233cea",
"assets/assets/images/clinic/centre1.png": "497a68a438b74ff0f3b727baed0abc8f",
"assets/assets/images/clinic/centre2.png": "daaf112c247b32ec8480a2d70bf58088",
"assets/assets/images/clinic/centre3.png": "e2cd130287e9fb003da836e1cb3bf124",
"assets/assets/images/clinic/centre4.png": "254a68d115ce9f0958ec3546cb37f040",
"assets/assets/images/clinic/centre5.png": "c0e536d7ab1cfc77cb57a2fd15ae0b72",
"assets/assets/images/concern/problem/bg/0.png": "fd743ca6208c20456e75e05b788d7fe6",
"assets/assets/images/concern/problem/products/1.png": "601d638af171bf70f9e7034f049328fa",
"assets/assets/images/concern/problem/products/2.png": "efafe41aa2d426c7818519277ad04b6f",
"assets/assets/images/concern/problem/treatment/0.png": "2b704ae5880dc221bf93d12f1c1a26c4",
"assets/assets/images/concern/problem/treatment/1.png": "8de7e7c5bf55ae8c76bbc79e4d828fec",
"assets/assets/images/concern/problem/type_concern/0.png": "b7830ed71a7feaf780108b364ff55d39",
"assets/assets/images/concern/problem/type_concern/1.png": "53aec09ecf177836c9b7724e10b4ecb6",
"assets/assets/images/concern/problem/type_concern/2.png": "153d73b86be63bafadd8de9620230f6c",
"assets/assets/images/contactus.png": "14aeea52cc340650122b21dbba523068",
"assets/assets/images/customer1.png": "b06b22ecd2e23f3d4711b7320941acc2",
"assets/assets/images/dealandcombo.png": "a9b7e6ff7ed1dd8971edc18b92a9508c",
"assets/assets/images/doctor0.png": "c5eb2d4c9378eb83a38c7801c5514a43",
"assets/assets/images/doctor1.png": "109afa773adeda100d852cf2ba4001b8",
"assets/assets/images/doctor2.png": "dfe3b4a446331e5999286b2574709614",
"assets/assets/images/facial.png": "329fd64be146edd4e861d9fe0de16459",
"assets/assets/images/haircare.png": "e1eaaf8b1a1a78cc94f9c99c2aca25a1",
"assets/assets/images/hairloss.png": "1b8f291e071a6f7f57669042a77477a0",
"assets/assets/images/hairreplacemet.png": "c2ca9ce1bdfa409f33b65bd4c5303cd9",
"assets/assets/images/hairTest.png": "31217024bc3b43fdea8fa098a291a430",
"assets/assets/images/hairTransplant.png": "cda17cbdaded7ea9a21c298b448e56f5",
"assets/assets/images/imagebeforafter.png": "1df32fd25335b6d10557230cc5857ae0",
"assets/assets/images/leftarow.png": "c4e8ddc19ad389018a253539f0c60546",
"assets/assets/images/new/Beard_Care.png": "bbb131e4d518f003d70c167945e7c3a1",
"assets/assets/images/new/Hair_Care.png": "ecf2ab9ed6d4908f3f27a992f9423ef1",
"assets/assets/images/new/Hair_replcmnt.png": "1e047b78e7b174733ec4308436593785",
"assets/assets/images/new/Skin_Care.png": "d1c04fa1c37509b5323eb3747ba0e889",
"assets/assets/images/product0.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/product1.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/product10.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/product11.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/product2.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/product3.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/product4.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/product5.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/product6.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/product7.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/product8.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/product9.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/profile_image.png": "64a1262ad6bac337f96e316b45274d9b",
"assets/assets/images/rating5.png": "48b93ace605f87b376effa314e577505",
"assets/assets/images/requestcallBack.png": "3928ff9cb861ee077352f1ee4071b43b",
"assets/assets/images/rightarow.png": "1efd55ee6a06f372bb02cac0e391e61d",
"assets/assets/images/skincare.png": "6e4ef7c1e52a2e6d27e83ccd5d95c258",
"assets/assets/images/skin_products/skin0.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/skin_products/skin1.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/skin_products/skin10.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/skin_products/skin11.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/skin_products/skin2.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/skin_products/skin3.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/skin_products/skin4.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/skin_products/skin5.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/skin_products/skin6.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/skin_products/skin7.png": "a2e4491b92aede0b479e6438bbc69120",
"assets/assets/images/skin_products/skin8.png": "b1193862734b97760e81ed7ba70679a5",
"assets/assets/images/skin_products/skin9.png": "fc048c9990e17ca7a7288a71b2377f49",
"assets/assets/images/sliderimage.png": "45b4718f53d0c3403f953cc7d474d453",
"assets/assets/images/talkDoctor.png": "8cf98800c73ac5b60eb50b64b1f5c4fa",
"assets/assets/images/Transaplant.png": "67150ae18bde6a271427faa872b5cb9e",
"assets/assets/images/treatment/bg/0.png": "39db8483d07f8c8c51d4f0f80d8f9099",
"assets/assets/images/treatment/reason/0.png": "becf94c8cd6a06be68f01ee047ae6ed4",
"assets/assets/images/treatment/reason/1.png": "b4d3e2124506233097cbf743f80a0311",
"assets/assets/images/treatment/reason/2.png": "fe5d125a796f8604e4179afe810f98d7",
"assets/assets/images/treatment/working/0.png": "cbe4fbd16ba2d8e4ad0751d72044bbbb",
"assets/assets/images/treatment/working/1.png": "e083d24a7225fbf19f2e9ed5a6bedcc2",
"assets/assets/images/treatment/working/2.png": "c591305fb043355156a3c7aad27d0776",
"assets/assets/images/wall_img.png": "90645700e78d587cd0160500d5b5ab2f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5aadbb274188d17b6a42cbf9b6827c0d",
"assets/NOTICES": "1e116fc6d09ad2336829b602a476cac7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "61b93fd396004af34e98c40d4fb443fe",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f99df2971ecff58f73ce5fd488419d04",
"/": "f99df2971ecff58f73ce5fd488419d04",
"main.dart.js": "1478ee4d45c426bd2409015d90b2401c",
"manifest.json": "9b23aedc55de36520e7695bac6bd34e7",
"version.json": "a3b1f380fd8187ad79611264b9c14a16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
