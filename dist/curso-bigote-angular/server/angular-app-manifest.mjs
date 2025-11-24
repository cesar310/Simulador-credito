
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
    'index.csr.html': {size: 23674, hash: '705eef56cc5b7d43dcad54a7d9b43eb709a0e9512268cfaefcc85ba31c71515f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17195, hash: '452a8500c7b9cf629117eb5c15bf5c77b652d17fffc9a1c17dbd6b5c65fc9b2f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5B56KVEM.css': {size: 8143, hash: 'BcZI0+o0+Js', text: () => import('./assets-chunks/styles-5B56KVEM_css.mjs').then(m => m.default)}
  },
};
