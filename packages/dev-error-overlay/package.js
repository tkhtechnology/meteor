Package.describe({
  version: '0.1.0',
  summary: 'Show build errors in client when using HMR',
  devOnly: true
});

Package.onUse(function (api) {
  api.use([
    'modules'
  ]);
  api.export('DevErrorOverlay', 'client');
  api.addFiles('client.js', 'modern');
});
