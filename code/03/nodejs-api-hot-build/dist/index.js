(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Demo = factory());
}(this, (function () { 'use strict';

  var hello = {
    init: function init() {
      console.log('this lib/hello module!');
    }
  };

  var world = {
    init: function init() {
      console.log('this lib/world module');
    }
  };

  var index = {
    init: function init() {
      var arr1 = [1, 2, 3];
      var arr2 = [4, 5, 6, 8];
      console.log([].concat(arr1, arr2));
      hello.init();
      world.init();
    }
  };

  return index;

})));
//# sourceMappingURL=index.js.map
