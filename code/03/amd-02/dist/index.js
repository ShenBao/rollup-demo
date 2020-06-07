define(['lib/hello', 'lib/world'], function (hello, world) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var hello__default = /*#__PURE__*/_interopDefaultLegacy(hello);
  var world__default = /*#__PURE__*/_interopDefaultLegacy(world);

  var index = {
    init: function init() {
      var arr1 = [1, 2, 3];
      var arr2 = [4, 5, 6];
      console.log([].concat(arr1, arr2));
      hello__default['default'].init();
      world__default['default'].init();
    }
  };

  return index;

});
//# sourceMappingURL=index.js.map
