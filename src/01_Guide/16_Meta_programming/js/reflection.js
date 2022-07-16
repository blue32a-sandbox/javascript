/* リフレクション */
(function(){
  "use strict";

  console.log(Reflect.has(Object, 'assign')); // true

  var result = Function.prototype.apply.call(Math.floor, undefined, [1.75]);
  console.log(result); // 1

  var result = Reflect.apply(Math.floor, undefined, [1.75]);
  console.log(result); // 1
  var result = Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
  console.log(result); // 'hello'
  var result = Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;
  console.log(result); // 4
  var result = Reflect.apply(''.charAt, 'ponies', [3]);
  console.log(result); // 'i'

  var obj = {};
  var result = Reflect.defineProperty(obj, 'hoge', {value: 'hogehoge'});
  console.log(result);
  console.log(obj);
})();
