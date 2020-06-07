(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  var name = "plugin-json";
  var version = "1.0.0";
  var description = "";
  var main = "index.js";
  var scripts = {
  	dev: "rollup -w -c ./config/rollup.config.dev.js",
  	build: "rollup -c ./config/rollup.config.prod.js"
  };
  var author = "";
  var license = "MIT";
  var devDependencies = {
  	"@babel/core": "^7.14.6",
  	"@babel/preset-env": "^7.14.7",
  	"@rollup/plugin-babel": "^5.3.0",
  	"@rollup/plugin-json": "^4.1.0",
  	rollup: "^2.53.1",
  	"rollup-plugin-serve": "^1.1.0",
  	"rollup-plugin-uglify": "^6.0.4"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	author: author,
  	license: license,
  	devDependencies: devDependencies
  };

  var dom = document.getElementById('J_Code');
  var pkgText = JSON.stringify(pkg);
  var showCode = "<code>".concat(pkgText, "</code>");
  dom.innerHTML = showCode;

})));
//# sourceMappingURL=index.js.map
