(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	var arr1 = [1, 2, 3];
	var arr2 = [4, 5, 6];
	console.log([].concat(arr1, arr2));

})));
//# sourceMappingURL=index.js.map
