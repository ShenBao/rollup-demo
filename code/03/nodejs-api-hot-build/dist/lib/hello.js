(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Hello = factory());
}(this, (function () { 'use strict';

  var hello = {
    init: function init() {
      console.log('this lib/hello module!');
    }
  };

  return hello;

})));
//# sourceMappingURL=hello.js.map
