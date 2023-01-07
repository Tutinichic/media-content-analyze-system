/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ad1606d613e602fd02f7e30b7ccfca07"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.82dbe501.css",
    "revision": "b956064276122139c5041c20a821752f"
  },
  {
    "url": "assets/img/relschem.5f1506d9.png",
    "revision": "5f1506d9145e9c9e25de0207eb8e0df6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.30ba7dd2.js",
    "revision": "1ab8921b9681065ec7efeb5aad5366f3"
  },
  {
    "url": "assets/js/11.fda23a57.js",
    "revision": "17b4b1432ea3f61de7240ff26aeb21de"
  },
  {
    "url": "assets/js/12.5d8a88a3.js",
    "revision": "78c1dbc1922d9e908f6f8b95d4955f2e"
  },
  {
    "url": "assets/js/13.6b4a3ce8.js",
    "revision": "ff602871a9dd9eac5035869fcaa21901"
  },
  {
    "url": "assets/js/14.2545c1ad.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.c01de270.js",
    "revision": "9a54d91e51084f77f1034582097cdb91"
  },
  {
    "url": "assets/js/16.ed6e0b8b.js",
    "revision": "b034ce7d1469827c9ca688b7a4d6d280"
  },
  {
    "url": "assets/js/17.792370d3.js",
    "revision": "619895115fc8ea86a2d804f9d65160b5"
  },
  {
    "url": "assets/js/18.f865f124.js",
    "revision": "21edd29a9c991ec96d3a2810e01340c2"
  },
  {
    "url": "assets/js/19.4f4b1fef.js",
    "revision": "8bb64abe9f57eeeb2244a2db0cfe6a6a"
  },
  {
    "url": "assets/js/2.1e636b9b.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.ab6209ef.js",
    "revision": "aed9ad87f8d0f393c2452469fcdb391d"
  },
  {
    "url": "assets/js/21.31aaa6c0.js",
    "revision": "10799833391ab464e3fbf40ee5f8887e"
  },
  {
    "url": "assets/js/22.d5000067.js",
    "revision": "d68ca07fbdf5a82dfa3aff5b715e1788"
  },
  {
    "url": "assets/js/23.45fd42fe.js",
    "revision": "78a73f1514a4988e935e09d423150f52"
  },
  {
    "url": "assets/js/24.0b9f5b28.js",
    "revision": "6892b136b7094dae6c55a984d0aeca6b"
  },
  {
    "url": "assets/js/26.a1ce5b76.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.773b1300.js",
    "revision": "e3d8ea9b477cd8c1ca68583b241caebf"
  },
  {
    "url": "assets/js/4.4c193c95.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.c9d8986c.js",
    "revision": "a83c521aed90313eec9d564dd1a80b8e"
  },
  {
    "url": "assets/js/6.3c158566.js",
    "revision": "785f89769cd018df094479be997988be"
  },
  {
    "url": "assets/js/7.d904df2a.js",
    "revision": "0f38a0676d9ee1b00a64bea1f6e0e759"
  },
  {
    "url": "assets/js/8.53a1b2bd.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.73326d59.js",
    "revision": "255f60e84533194dda0653b6ccba0ddb"
  },
  {
    "url": "assets/js/app.5e937a29.js",
    "revision": "ada339beaa206949687ad35dd6dd6e7b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "67e59e82055ed015e14d19fe506c6d4d"
  },
  {
    "url": "design/index.html",
    "revision": "b6ef3e24cd8b3ea2cfdf9a2df530bbb1"
  },
  {
    "url": "index.html",
    "revision": "44af10adadb3750d01eed0b345317545"
  },
  {
    "url": "intro/index.html",
    "revision": "d47a5f8eea1e902c4ecc79ce23aee5cf"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "3e334fe496a06e19851ceb3ea1f6c41b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "677f30281c009258aee4526a65715bfc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c5fbae6a18a7f7618e3275a9623dfede"
  },
  {
    "url": "software/index.html",
    "revision": "da11dcdb4762608fabd5abe19f37f76a"
  },
  {
    "url": "test/index.html",
    "revision": "8850c600f684cd5640d3b71cf5e5074e"
  },
  {
    "url": "use cases/index.html",
    "revision": "d743bab1a7d77a99b3055cee464fbb9d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
