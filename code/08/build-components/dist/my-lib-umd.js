(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}));
}(this, (function (exports) { 'use strict';

    function hello () {
      console.log('hello');
    }

    function test () {
      console.log('test');
    }

    var install$1 = install; //umd

    exports.Hello = hello;
    exports.Test = test;
    exports.default = install$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
