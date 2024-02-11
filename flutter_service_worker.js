'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ffbf43126e33be52cd2bf7e01d627f9",
".git/config": "84a410df592d2eda149c686c90a0b9cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "188453e92bf8ce539d873e42106415c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a2f707c77da548e20e74c3b3ded3d71",
".git/logs/refs/heads/main": "93fcef46690996548842b38f3623b514",
".git/logs/refs/remotes/origin/main": "68a34e33096d751f4f698be147414d63",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/0f2ddc2559ba4aa6909cabf7777f0d6dff369a": "ad6628d8c4f5e034105e163303a69442",
".git/objects/09/e5a97d38936683e46e421adbb374562a13a275": "85d08bdb499d2c8f5558d33c1667faef",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/922db0d79019a21053b78b5fdba71643c9d98d": "4b1ec9eb960b5e21dfd83477d4c3d7a0",
".git/objects/1d/1d3d80b1d88a486cd5b0eb9bc2091c333fe9f4": "2f6508cbe62a230b95ecd2995ddf6e0f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/97608ed3b7dc55ef670a65b03143c592496f83": "8f67da78865d7d10f2fc4222fc660526",
".git/objects/28/d83cc365ebbe3ffd92d4184dcb9257dbf8c92d": "3a40bb36a7761adc6b206089f536f595",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/32/b4030fc989693b8f71ff4b108b97350ab4e8a9": "b0ceaccf46c9db4e14a6377ced84beba",
".git/objects/37/1fab3f8f9dc126df21b1ed09a1ad65f8686a14": "980b0db663fbda55640ad0c9f3fc73fb",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/8388432967c2d1875d5e918b36e209de8ba338": "f41a44d0de9b32ff2441078d13d17e2c",
".git/objects/3e/ee5bd9c82d9103d6d1eae78bbcedea69fbf0b9": "9c561f8be69e988e9a36c986b01db95d",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/32154e37c3ba8c904d662721de576a7d874fd6": "2266cf0cf19be60165bc78550742d902",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/8c531e825a60136b74362aa679952ed49fd986": "b2ef40df5f41ba3254a73757b7797dc4",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/3b8c0345ff6204bcfe3250e1394fd7effe1008": "aba900ebac9e7586e6dd24b4fdcf2f18",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/33f35d5a0b30462fc17699566a4584b8bc06f7": "d9615cb27b830c5f6d38d8a0ccd98475",
".git/objects/56/37b502696de0c0fd0f69407dadf73098adb772": "e0b8425507deaa816b0a0346326ab2c6",
".git/objects/5e/3e0f07220717eb4705326231dfe54bab8c266c": "91e550e275e3e721aa5421acc90d373d",
".git/objects/60/bb60ff801bbc64e2917aba0795591b307b61e3": "4e2f75b472d3b899bcbced550c5873a2",
".git/objects/7a/a86c483e4105ac73ea4165c0d8c1eb1bbc86b5": "bc5154e0c348791c49cd6e7c436c21ae",
".git/objects/7f/960b7b3870afbad62d81d810a3132112334941": "09e7acb7aed8c5a29e0359d42e27d2bc",
".git/objects/87/e35b7fcf33a0bc7390b5d1898f277ef3ab57a9": "f31f4becdbac719cf1d4ca53480f8a3e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8c81e92449fc8bbb6b4d1cec88b4496e6c2548": "3fd8a7d6c4b816585c4979237713ea0c",
".git/objects/8a/10dc1f82048461aba2fd153fed8b00c07a0671": "3fc69d7d34b703186e8164fbb741af9d",
".git/objects/8a/4a7683bce370487a4781199ac0d8fef0756bdc": "5e605000b8f9eaefb94b6004326fb37f",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8d/f5de8aaa9f535ff3a24d5bcb650cc0efb30783": "edbcf1234c66e03d2312e484feae8983",
".git/objects/92/0b52041c1e030f4577860495e86c9c0215449b": "ecd3b71a1e2478ab349466a4931605fd",
".git/objects/92/2e21376615e128cce1dc307da65de6145306e6": "6e44c82eaa16735a0333ee4aaf79bdeb",
".git/objects/92/947ce218b4121414017c05438de5ca09a2b4cf": "ef0cc09890fc1b8d4eeaebb283a58531",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/3e10b89bc437c58090c3f6ff3f1bbfd4605ad0": "b92d57fe20db6dc2512a3bd02df80d75",
".git/objects/9a/ff79c2af4703b4bd4a4cf59bbfdeb63a1daf7c": "fb6ba218e4fc61d24c347dcd7ca2429f",
".git/objects/9b/528e71b8205ca0712d8e345482bd8198d3ab3c": "b40dd85098e873614d33db30ef4d32f9",
".git/objects/9b/9837a545c268fbed8f416b0b873bce19bc0869": "327053f237bab6c17d51fe28353cd21f",
".git/objects/9d/45c6c59ba0111c8eb7561138744b102c387980": "da012dbcd914ea2b191ed48f818f1c60",
".git/objects/a1/16f039cb03e26fff69f58fc20476630da6b55e": "bb97bac270707d792f46ff33c02ee854",
".git/objects/a8/957dccd23b0e408a6f25b0a0bcaa0707595fbd": "f2d9e1e62d2e3b543063ea53d3cbd2d5",
".git/objects/aa/20c98fa8ee586f2b154ef7d23ab3de4733ca96": "c4fbcd5006d65e068dcea61182ec7cd1",
".git/objects/b0/c09d1823832fcb8648491b544350e171be88e6": "1e9edae447abf5aac65057461e09514b",
".git/objects/b3/09b7504030849142b6ad638844b601edc0be78": "d50053d05fa93b663d23634770f57d6a",
".git/objects/b4/272a01325c6b611d45259e222abedaf0ca2534": "d700114040f1f7f3e9a72e6e7e0b051c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c4/ba9bcbcb9352132c463c561798e5971f225fc8": "f415608f418afb7bdec20887a307a17c",
".git/objects/cb/bb60248c75c108bdf97e506ee7e575e0522f3c": "f71fdafcb5fa3e55d6df7f80efb37518",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/4558255eb9985942cd711955a46e52f5414a81": "0f06bd5f2d87a2f45001c409157f15be",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/9447ae193ffbf5b259d8c43a70fa0283b4a418": "7735ab9fbef82fe974eb2e4231277405",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0a7c9f95f31656b70a971ad894817f5f46788e": "836eda0090b37869ccaa39c09f76b4d0",
".git/objects/f1/a40c048f5b6820755aead7a10e8ce366075104": "d65ac3edd05eb24f3eddb7ac8d2aff4c",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/refs/heads/main": "3dbbceb4caa27cfabc57ae31260c7519",
".git/refs/remotes/origin/main": "3dbbceb4caa27cfabc57ae31260c7519",
"assets/AssetManifest.bin": "d9bd7206f7811f6ad454d15c951626e9",
"assets/AssetManifest.bin.json": "9237063748a62db659ab5e92a4cfdb9c",
"assets/AssetManifest.json": "6a15b42004f0ceafaf3da2ad75b13879",
"assets/assets/image/background.jpg": "f2831499875b4ac7ab4b8181ae5120af",
"assets/assets/image/logo-bg.png": "8f8d56976e224fdfc66d9d7f13a4641b",
"assets/assets/image/logo.jpg": "39e365bae9e24c31536e3822e7f0fe70",
"assets/assets/image/logo_bg.jpg": "56a08c056f1c86fd943a87c0cd77124c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "4ed5532bc11551e9f42f1d0360d602f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4fc2ed507613f65782cd9cb760651253",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf4a56f9391d172205438137f89be97b",
"/": "cf4a56f9391d172205438137f89be97b",
"main.dart.js": "c6aa04791a7c2bb241a20aeb6ec260a9",
"manifest.json": "1cac9cd84a5e033512834d1a58d9f16f",
"version.json": "f45b23bafb663b197cba41cf2e87ed86"};
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
