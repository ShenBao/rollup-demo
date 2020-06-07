'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
