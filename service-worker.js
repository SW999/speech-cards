if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return d[e]||(r=new Promise((async r=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},r=(r,d)=>{Promise.all(r.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(r)};self.define=(r,c,i)=>{d[r]||(d[r]=Promise.resolve().then((()=>{let d={};const a={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return d;case"module":return a;default:return e(r)}}))).then((e=>{const r=i(...e);return d.default||(d.default=r),d}))})))}}define("./service-worker.js",["./workbox-7c877640"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"6e9695441e0862613979c801cdc0f65e"},{url:"android-chrome-192x192.de2cc99b.png",revision:"b58fddf38c5d4de2f52d0a45ef31a6a6"},{url:"android-chrome-384x384.8ad9f867.png",revision:"8b22bf30f390dcb6ea9510abeabd13f6"},{url:"android-chrome-512x512.8e2046d8.png",revision:"88e8f0bfaa1d39c53c15b02b61afe767"},{url:"apple-touch-icon.33c221a1.png",revision:"4475e0ad87f4b1bd3c6d473da8dee7af"},{url:"Card.10746d27.js",revision:"1887b60f13566eebeab53d4e5fe91b17"},{url:"Card.b8e4abb0.css",revision:"3ae51f30d94ac78ae681ac967598ac7c"},{url:"CreateNew.4fedb765.js",revision:"f53d1922e61a0c0b0c2e9a3507478651"},{url:"darkTheme.ce53a3c9.jpg",revision:"fa4d0a7fa1948552765414b040da3b51"},{url:"defaultTheme.57a190d1.jpg",revision:"04cc9eec4774ab1e857616c9ef86207a"},{url:"esm.9f3a665e.js",revision:"88cddedde9dc34c2e3aa63ddb3f3ec27"},{url:"favicon-16x16.a2f00edf.png",revision:"4b320517fd60daf765146acc302c745d"},{url:"favicon-32x32.cf17843e.png",revision:"0910e062c980873f8d99ce3fb4d1fe9d"},{url:"Footer.9e2b4797.js",revision:"04ca897b3f1b27b0005d778d7de98cf9"},{url:"github.07d05aee.svg",revision:"9e179baec269910d58bdf2f4724434f9"},{url:"grid.ed66a3db.png",revision:"f3c22031b79a3cc0a32ddb31e91ff4bd"},{url:"Home.7c0ce432.js",revision:"5e2bb5216add617e98b44035354907e4"},{url:"how_to_write_efficient_emails.25607411.js",revision:"48f32029671c63f4820addf87b39e887"},{url:"index.html",revision:"ea4a7a15b6b10b87aee6bbb2bbd794c4"},{url:"logo.b6c31c6f.png",revision:"a27b2a982aafd351158a12ec1804acd3"},{url:"MainStep.6050b65d.js",revision:"716ec2b7d116654d3422b0ba14129f07"},{url:"manifest.webmanifest",revision:"8695d265153c38d3be6d01817ebb3f9c"},{url:"md.6b53a92a.svg",revision:"8c5b64a91cd474ce6324dcb931fb65d3"},{url:"ModalPopup.4123a6bc.js",revision:"71bdcff2ac62d9db99f65aca003e7951"},{url:"ModalPopup.e57418f0.css",revision:"d0b20eed8548d876a7dd9415417cc942"},{url:"MySpeeches.adc688be.js",revision:"40d164e33ceec95007e317d2918c18a9"},{url:"not-found-bg.c84c4044.png",revision:"621f1a6110758df4d51a48ad9d889ff8"},{url:"PageNotFound.d8a884b6.js",revision:"f34c03a75d2b3b8ab3b26f3b6eaba2e9"},{url:"ProgressBar.b329128c.css",revision:"efea6e9587f5ac094cabf691b54ac901"},{url:"ProgressBar.fda5bce5.js",revision:"c9783ef566ff7cd433b360de41e4961d"},{url:"qr.9bbd486c.png",revision:"dfd1ec238635b8f80f2be6761f52fe2b"},{url:"simpleTheme.87f6c797.jpg",revision:"e283642e9d644bfc542f806438eec30e"},{url:"src.6bea85fd.css",revision:"0d28a2493ef86338e708947fabdca893"},{url:"src.e649f72a.js",revision:"24f9821dc03712f920b6d0ba240af6cb"},{url:"swipe.e6e23506.svg",revision:"96a1b936ec86256e2090bcc734db4543"},{url:"Theme.82483b5b.css",revision:"eb9fb2af5c57bfd8c6c47f7bd7a40751"},{url:"Theme.ddd6c1a6.js",revision:"6d6e1f3654b032c1f517b78949c7c562"}],{})}));
//# sourceMappingURL=service-worker.js.map
