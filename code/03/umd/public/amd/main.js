requirejs.config({
  baseUrl: '/',
  paths: {
    'lib/demo': '/index.umd',
  }
});

requirejs(['amd/index']);