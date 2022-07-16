/* ユーザー定義の反復可能オブジェクト */
(function(){
  "use strict";

  var myIterable = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  }

  for (let value of myIterable) {
    console.log(value);
  }

  console.log([...myIterable]);
})();
