
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-7HD2AP64.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 23689, hash: '3449e6bd99e2ede084d4efed06793874f309d0af59253a095bd36ba340fc99f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17210, hash: '9b686f2032ca71b8ca97398a0bf3646853c54f32bee726bf98f9e7c66cc1fc8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5B56KVEM.css': {size: 8143, hash: 'BcZI0+o0+Js', text: () => import('./assets-chunks/styles-5B56KVEM_css.mjs').then(m => m.default)}
  },
};
