(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.World = factory());
}(this, (function () { 'use strict';

  var world = {
    init: function init() {
      console.log('this lib/world module');
    }
  };

  return world;

})));
//# sourceMappingURL=world.js.map
