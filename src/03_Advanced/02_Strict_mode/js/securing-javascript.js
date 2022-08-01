/* JavaScript の「安全化」 */

/* this として関数に渡された値をオブジェクトへボクシングしない */
(function(){
  'use strict';
  function fun() { return this; }
  console.log(fun());
  console.assert(fun() === undefined);
  console.assert(fun.call(2) === 2);
  console.assert(fun.apply(null) === null);
  console.assert(fun.call(undefined) === undefined);
  console.assert(fun.bind(true)() === true);
})();

/* ECMAScript の一般的な実装である拡張を通して JavaScript のスタックを「渡り歩く」ことができない */
(function(){
  function restricted() {
    'use strict';
    restricted.caller;    // TypeError
    restricted.arguments; // TypeError
  }
  function privilegedInvoker() {
    return restricted();
  }
  privilegedInvoker();
})();

/* 厳格モードの関数での arguments は対応する関数の呼び出し時の変数にアクセスできない */
(function(){
  'use strict';
  function fun(a, b) {
    'use strict';
    var v = 12;
    return arguments.caller; // TypeError が投げられます
  }
  console.log(fun(1, 2)); // v を公開しません（または a または b）
})();
