/* 厳格モードでの変更点 */
'use strict';

mistypeVariable = 17; // ReferenceError

var undefined = 5; // TypeError
var Infinity = 5; // TypeError

var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // TypeError

var obj2 = { get x () { return 17; } };
obj2.x = 5; // TypeError

var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // TypeError

delete Object.prototype; // TypeError

function sum(a, a, c) { // SyntaxError
  return a + a + c;
}

var oct = 015; // SyntaxError

false.hoge = ''; // TypeError
(14).sailing = 'home'; // TypeError
'with'.you = 'far away'; // TypeError
