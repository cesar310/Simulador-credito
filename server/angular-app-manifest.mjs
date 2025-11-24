
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Simulador-credito/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-7MVGG4Y7.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 23692, hash: '4402c5cf164d0eae0ed80c6a2e1672c6f0261a45525f97dd02151edb835d1b0d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17213, hash: '76b73ba58ef7ce50f1ca44748aada441531236bbec2e537736e297f7033f8399', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5B56KVEM.css': {size: 8143, hash: 'BcZI0+o0+Js', text: () => import('./assets-chunks/styles-5B56KVEM_css.mjs').then(m => m.default)}
  },
};
