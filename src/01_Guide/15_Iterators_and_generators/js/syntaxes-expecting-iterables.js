/* 反復可能オブジェクトが必要な構文 */
(function(){
  "use strict";

  for (let value of ['a', 'b', 'c']) {
    console.log(value);
  }

  console.log([...'abc']); // ['a', 'b', 'c']

  function* gen() {
    yield* ['a', 'b', 'c'];
  }
  console.log(gen().next()); // {value: 'a', done: false}

  var a, b, c;
  [a, b, c] = new Set(['a', 'b', 'c']);
  console.log(a); // 'a'
})();
