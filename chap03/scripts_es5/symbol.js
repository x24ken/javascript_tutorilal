'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var sym1 = Symbol('sym');
var sym2 = Symbol('sym');

console.log(typeof sym1 === 'undefined' ? 'undefined' : _typeof(sym1));
console.log(sym1.toString());
console.log(sym1 === sym2);
