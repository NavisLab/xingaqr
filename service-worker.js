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
    "url": "2019/07/julia-skill.html",
    "revision": "0bf57ce376e8d70aaaa54e9d6d968375"
  },
  {
    "url": "2019/07/xklbs.html",
    "revision": "94ce15a7bc7eb2f0ed164af4ef3b6792"
  },
  {
    "url": "2019/09/spceping.html",
    "revision": "8718acbec2608acfb45178eea213d789"
  },
  {
    "url": "2019/11/github-jsdelivr.html",
    "revision": "c4aa9284719edb48f706cf3cfe338fa0"
  },
  {
    "url": "2019/11/scoop.html",
    "revision": "7310b222b619f672f79056c6876bb2d9"
  },
  {
    "url": "2019/11/uwp-proxy.html",
    "revision": "6a0b7f2e50ac8b74e4279e415be62472"
  },
  {
    "url": "2020/02/forwardemail.html",
    "revision": "5dc2a4df50f455fbe0d5b13a1b6ce863"
  },
  {
    "url": "2020/03/taskbar-cache.html",
    "revision": "e652f56dc911a6f1cc99e3a061b4f2cf"
  },
  {
    "url": "2020/04/ssh-keygen.html",
    "revision": "439d85e848bfdffc82e06926d4c07769"
  },
  {
    "url": "2020/08/wake-leancloud.html",
    "revision": "5919e70243dbb37c0627cc1713d99da4"
  },
  {
    "url": "404.html",
    "revision": "89df56e4f41867f2f6cc6b26928ae5c0"
  },
  {
    "url": "about.html",
    "revision": "e4431d3733b86e2741cbc9c46da8e6ff"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "cd013656504185b7d4265e2a9828ef41"
  },
  {
    "url": "assets/css/0.styles.b90fb8b2.css",
    "revision": "f211400fa911873ba663a14cc5f654ce"
  },
  {
    "url": "assets/img/21215838.dbe2ce07.png",
    "revision": "dbe2ce079cdbb6dc6f68d8ff79849edd"
  },
  {
    "url": "assets/img/21220333.42b7490e.png",
    "revision": "42b7490e9b833625424d621e1c5c76d9"
  },
  {
    "url": "assets/img/21220428.a2fb9eed.png",
    "revision": "a2fb9eede0c69382b6abdf8cc0f031c6"
  },
  {
    "url": "assets/img/21220615.70941707.png",
    "revision": "70941707725c68153e4e58cf6f8b6b24"
  },
  {
    "url": "assets/img/21220654.417cea51.png",
    "revision": "417cea51ea3756f7a4d2d5a48115995e"
  },
  {
    "url": "assets/img/21220713.f4919734.png",
    "revision": "f491973452510d66f4ca238a6cd33947"
  },
  {
    "url": "assets/img/21220741.adac4314.png",
    "revision": "adac4314b05668baacea11769a3270dd"
  },
  {
    "url": "assets/img/21221006.83194e75.png",
    "revision": "83194e756fe043b0d52ed27b50cb918d"
  },
  {
    "url": "assets/img/21221047.ec0543cd.png",
    "revision": "ec0543cddad4943a3090106c69ef9b0c"
  },
  {
    "url": "assets/img/21221446.32115104.png",
    "revision": "32115104fc6096e013cb276cf13d21b2"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.e8785003.js",
    "revision": "33db3f9a60e81124dd2497ec849e0e5f"
  },
  {
    "url": "assets/js/10.f990648a.js",
    "revision": "03f37a214d4832beb0448f0483b1a42e"
  },
  {
    "url": "assets/js/11.cb4e3fe8.js",
    "revision": "2f6e9b6768fcc61fee81bb3086769625"
  },
  {
    "url": "assets/js/12.c897f332.js",
    "revision": "fbded4e7bf5299748ea25b786c82acc7"
  },
  {
    "url": "assets/js/13.c5edd5c6.js",
    "revision": "8bd7cbaad114e20eac6b015398717925"
  },
  {
    "url": "assets/js/14.c14bc0f5.js",
    "revision": "8959c8dbc9130ba3bcc4134fc226c9c5"
  },
  {
    "url": "assets/js/15.7d054b68.js",
    "revision": "f62aaf835593590e46b12678a5191405"
  },
  {
    "url": "assets/js/16.aa114bdf.js",
    "revision": "2636b72a88211332ff113705e0140cd3"
  },
  {
    "url": "assets/js/17.28a1395a.js",
    "revision": "d1508bce1df9406bb4ab0cc264bdd991"
  },
  {
    "url": "assets/js/18.96261548.js",
    "revision": "957a3dee533ab498587590f02adde656"
  },
  {
    "url": "assets/js/19.80859065.js",
    "revision": "da30e904071833c30cd864c50bd5b461"
  },
  {
    "url": "assets/js/20.990797ae.js",
    "revision": "4ba83972ca95332a240b5219e983275a"
  },
  {
    "url": "assets/js/21.08153d01.js",
    "revision": "1c09de2133ba213f7e129da489adf387"
  },
  {
    "url": "assets/js/22.5259486a.js",
    "revision": "9a16bf0d73e21b58113d9fad8497fd5b"
  },
  {
    "url": "assets/js/23.ecf4535f.js",
    "revision": "11d8de498337782efc098f15e108dd8a"
  },
  {
    "url": "assets/js/24.e83986dc.js",
    "revision": "d6645d02ddac755d6b43ec68f4cfb262"
  },
  {
    "url": "assets/js/25.b81764e3.js",
    "revision": "572d4a74bae043c415f2f213fd49fcd0"
  },
  {
    "url": "assets/js/26.8cea6fa3.js",
    "revision": "d1f2174c363dc361dbff498c043746bb"
  },
  {
    "url": "assets/js/27.db8aa187.js",
    "revision": "a8406bb5208c562a80fade35ed02311d"
  },
  {
    "url": "assets/js/28.cbfad750.js",
    "revision": "9d2d95438154656859a7d1aceb58d391"
  },
  {
    "url": "assets/js/29.ae004eff.js",
    "revision": "d3852672c3b2ce96ce653d9552d2ce57"
  },
  {
    "url": "assets/js/3.8d88eac0.js",
    "revision": "859d550999c718e37c2205b399d8b1ef"
  },
  {
    "url": "assets/js/30.f2f267b6.js",
    "revision": "c2f120fd4306ed7146e909e14c689966"
  },
  {
    "url": "assets/js/31.1fafd233.js",
    "revision": "c14f2698df9b60f8015c51166ca5f83e"
  },
  {
    "url": "assets/js/32.ba4ff0a5.js",
    "revision": "69b785d02d9f92db5ca27e7b1a07c5eb"
  },
  {
    "url": "assets/js/33.018b511a.js",
    "revision": "744306db7e91a72ae4d0fb52067cd15a"
  },
  {
    "url": "assets/js/34.84c9daef.js",
    "revision": "7f4f576f353352032eb3bacb8983fc02"
  },
  {
    "url": "assets/js/35.92592e11.js",
    "revision": "66555fd187a020739c28c4c7641e7ac8"
  },
  {
    "url": "assets/js/36.0de422a5.js",
    "revision": "775b01584c779719ead391cf8e14b54b"
  },
  {
    "url": "assets/js/37.05777acc.js",
    "revision": "d0795f3e63eb6dcbcf4fc10632fdd05f"
  },
  {
    "url": "assets/js/38.0863adf6.js",
    "revision": "1a6403e738233238701f63852c770364"
  },
  {
    "url": "assets/js/39.9cd16fd8.js",
    "revision": "7b7bcb7d07a50b3318f878e1ad90edf9"
  },
  {
    "url": "assets/js/4.9b5efaff.js",
    "revision": "ba0632d57c2764a28e3fca80aa308dfb"
  },
  {
    "url": "assets/js/5.e1122ed1.js",
    "revision": "4e9f678cb9abbf66a1ba8c6b906f58c8"
  },
  {
    "url": "assets/js/6.c049ff38.js",
    "revision": "06ed06703628ef324d549e67aeb5fc84"
  },
  {
    "url": "assets/js/7.bb99966e.js",
    "revision": "2424f2cae8a76c5a91be2697abfb3dd9"
  },
  {
    "url": "assets/js/8.c45aca90.js",
    "revision": "dd0d1ac615a3335f19defb5f3f1fda47"
  },
  {
    "url": "assets/js/9.c0453f0f.js",
    "revision": "267d6b191f3a98c3793a933bce5d90d7"
  },
  {
    "url": "assets/js/app.7f96da37.js",
    "revision": "1f59500b89d4bad1859a2143e90b4dda"
  },
  {
    "url": "avatar.png",
    "revision": "1598b8c50c86b31dd0d29da4da5d1436"
  },
  {
    "url": "categories/index.html",
    "revision": "59195056c99bf7ed274431d0d7e0863f"
  },
  {
    "url": "categories/分享/index.html",
    "revision": "dd2c1da953924db8b8f74e8afa8314f2"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "4b3522c956eb5f42e316c82baa9c9303"
  },
  {
    "url": "categories/输入法/index.html",
    "revision": "4265a0968ecec18d0fbd964c6fe455c7"
  },
  {
    "url": "docs/rime/Configuration.html",
    "revision": "e2187ec9e36a316136d23458bfd2ba9d"
  },
  {
    "url": "docs/rime/CustomizationGuide.html",
    "revision": "575743f80a3813bd9038714690a6bc4e"
  },
  {
    "url": "docs/rime/dict.yaml.html",
    "revision": "a25acd76a33c4247aa95d8f978b14d1f"
  },
  {
    "url": "docs/rime/index.html",
    "revision": "bb93bbf5e1403b5aa7d17833385ae221"
  },
  {
    "url": "docs/rime/LuaRime.html",
    "revision": "fe4276e7d8e4ef609a50abbf1fa4d127"
  },
  {
    "url": "docs/rime/LuaTRime+.html",
    "revision": "8eb63f76c2d199659e7bd414e2c50da7"
  },
  {
    "url": "docs/rime/RimeWithSchemata.html",
    "revision": "ac71044b7da7776d294b377f46416ef5"
  },
  {
    "url": "docs/rime/schema.yaml.html",
    "revision": "f1003393e9e64e8d2c2ad965aba57290"
  },
  {
    "url": "docs/rime/SpellingAlgebra.html",
    "revision": "f59730fc8530b4267e14d475e85998f4"
  },
  {
    "url": "docs/rime/trime.yaml.html",
    "revision": "433788114382033b58a7a3c590eaaf7c"
  },
  {
    "url": "docs/rime/wb2keys.html",
    "revision": "9285b44b19bbe9cf738d79e56a2aa1e3"
  },
  {
    "url": "docs/rime/yamlComment.html",
    "revision": "f3b1e1458760a89c381707d9185a6f36"
  },
  {
    "url": "docs/rime/YamlComment.html",
    "revision": "1b5ebc2db38dd72715e150b8aeccc70b"
  },
  {
    "url": "docs/rime/yamlGrammar.html",
    "revision": "429fa9caefd48cd843e6441c0a783a90"
  },
  {
    "url": "docs/rime/YamlGrammar.html",
    "revision": "04ecf360e1f5f96b78259097d0cffa7c"
  },
  {
    "url": "docs/rime/YamlRime.html",
    "revision": "9d54bbe17b49f7569f835b1870add464"
  },
  {
    "url": "favicon.svg",
    "revision": "8abd5742d4ab78d4afacd2741181cdd5"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "f1b7ba56d13ab5fa264141b2f1f907af"
  },
  {
    "url": "logo.png",
    "revision": "d0dd1fbc4f4247d26aa90de1778b4160"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "50202e4a6d001f92c07490ef1ad3bdfe"
  },
  {
    "url": "tag/index.html",
    "revision": "6576dfd11a9987710852f9073f201b6d"
  },
  {
    "url": "tag/julia/index.html",
    "revision": "32e4c68b969c903f9b459738f2c89e2f"
  },
  {
    "url": "tag/leancloud/index.html",
    "revision": "36be9687be205a7246ac1540aa7f5ecf"
  },
  {
    "url": "tag/ssh/index.html",
    "revision": "49909094e3c54ba519a91dac5cfa96b3"
  },
  {
    "url": "tag/valine/index.html",
    "revision": "403836a6c1015d36810a4c85d0d9d56d"
  },
  {
    "url": "tag/windows/index.html",
    "revision": "7eaa3973427dd900122c64d86bf6bf79"
  },
  {
    "url": "tag/两笔/index.html",
    "revision": "d65fd87f0768b4c125b7e46713e69096"
  },
  {
    "url": "tag/双拼/index.html",
    "revision": "3820f3d085b361f4998554402f03c080"
  },
  {
    "url": "tag/图床/index.html",
    "revision": "abb0d197b020b40c2f98badb18c70d72"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "a25e9106d3446874b78213d4ad2a3ad1"
  },
  {
    "url": "tag/腾讯云/index.html",
    "revision": "1db882440425b6eae7af359b2de65168"
  },
  {
    "url": "tag/邮箱/index.html",
    "revision": "7929dd60d1dcda2ffc12ca9ece4dc3b0"
  },
  {
    "url": "tag/顶功/index.html",
    "revision": "3c9888f764819cbc071295e18acef3ae"
  },
  {
    "url": "timeline/index.html",
    "revision": "f16ae244b870c711927846731a2a79c8"
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
