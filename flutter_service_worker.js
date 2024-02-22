'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ca6feb32be46aa2a74f5725a9972c5f0",
".git/config": "ae4b0ef7c6c20c67760e09429a6d8787",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "421ad4dbef976eea103067fad5cfeddf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6843a89be4b0b64f39f7279eacf60501",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5bceb7e97ebf2ffba1ad52b0431f8f5",
".git/logs/refs/heads/master": "b5bceb7e97ebf2ffba1ad52b0431f8f5",
".git/logs/refs/remotes/origin/HEAD": "d9c086321cc1c39444b70f3a732a8f7a",
".git/logs/refs/remotes/origin/master": "9de4ede4ab4832bed736c48f345fb6e1",
".git/objects/03/05fc6db540ecc174a3ba651b96979b77e2ec24": "6f212f1a76e495caf30a7ab029a95b7d",
".git/objects/05/be8731b4d7b035e202e2abb0e8ad519909209f": "a998069b1f4a7c30c83770f7f6308249",
".git/objects/19/8bd267b3f5e11d94e73a3106ea26541793c52c": "9cc775084d4cf68b972ad7a698d32a67",
".git/objects/1a/c700763295bf120523a5c4c892e93b1ac42c31": "b318c348b658c67a31ac6fcb9654170d",
".git/objects/1f/dd72e9bbbb6ff871941d42fc4b45c204c733e9": "baeb3a2843ee0d2c4a243c9926e09d28",
".git/objects/3d/054f659104c8c872b08fc77cbe838e0bca659e": "60053ebfa11dc03f7f9b90bef0cf4b07",
".git/objects/57/5359cb0e43fcbaf2f3db07bc4e2e66185e4fdc": "2cf5352a78d70c5b47c1dbb5720156c1",
".git/objects/6c/d5716837c2cbff8afe7fa743136ebb182cbf5e": "68cca3f6939bc65b7e5474e58863670b",
".git/objects/73/0ce9d1c410fac78c495b9303548f83d26a914c": "ca65bd68304f43dc9ee2d2fafff87729",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a7/6b1ba12f819e2d02c44a1ae7f32ef6a5cbbc03": "631df19ef1df6f8c9e286aa05856cf6a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/e1fe9bd590daa31a0505098354238c3f5d5a18": "031302715b2d97b336e9d76ae4a1c5f6",
".git/objects/c8/34c283d3702b5271ed353132beb50e9990dc10": "0455c5e3e93004fd6d02149db3e6e036",
".git/objects/c9/a8eb4340729f0ff2d297fdd84dfa093485e22a": "ddf3039c574d881a5553df5807619997",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c23ca4a7bf8e6879df0f7ac4dbf59b703d5bc2": "a54e162c9a1252871f0726422b39040a",
".git/objects/d9/1a5164ce57340b2fe042135a617040e09adec5": "8e3cdb2e48eae8ef2d1742c2aef8e63e",
".git/objects/e9/c60f452067ed5e67e854df7ad3f533f4707dc2": "a03c0189e99a4fc87a576a2f0b931804",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/f10345202e7659e42544c24182b6bd5a7767d0": "86bc878f7649f225e8e200b5b8697d30",
".git/objects/f2/0740afab45f147b558342c847a75ee33921f89": "55326a0873f91702799354c7120f7a56",
".git/objects/fb/830097c1939322c3a19f74eba8290dbbe07362": "60014df266778ad3a214b0e52b21869f",
".git/objects/pack/pack-2bf16dc604b23596c67875cf05f5b8cfc316b02d.idx": "6446ac3c1bc467b899a30224c5547e91",
".git/objects/pack/pack-2bf16dc604b23596c67875cf05f5b8cfc316b02d.pack": "b29048b25fe78d612af4aec984539d68",
".git/ORIG_HEAD": "02e29120a8ed162f4c53b6dca858bbb3",
".git/packed-refs": "03b7e661a707a256bb46174aec1068ec",
".git/refs/heads/master": "02e29120a8ed162f4c53b6dca858bbb3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "02e29120a8ed162f4c53b6dca858bbb3",
"assets/AssetManifest.bin": "23e56dce7da1d5c695f89b5ecc00fe6f",
"assets/AssetManifest.bin.json": "6c7a65e2f8ec29276511357e4b52fcd1",
"assets/AssetManifest.json": "c3916fb88dc3c37ace26d362a7411bc6",
"assets/assets/lottie/thinking.json": "c1f6776a8832cb144253c8a8ecbe33a8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "fd8725868a3df2c2ad876228620bbea7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1077b268f71ccb82f5c13315a7bbdf9a",
"/": "1077b268f71ccb82f5c13315a7bbdf9a",
"main.dart.js": "8086c15d5a8af9ace4d2f4b363adf1a4",
"manifest.json": "5c76a2c730ad48d208655859795d9794",
"version.json": "046be61b2f880223ec2afb677aa759f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
