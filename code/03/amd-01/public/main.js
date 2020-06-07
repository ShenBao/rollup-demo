requirejs.config({
  baseUrl: '/',
  paths: {}
});


define(function (require) {
  var demo = require('index');
  demo.init()
});
