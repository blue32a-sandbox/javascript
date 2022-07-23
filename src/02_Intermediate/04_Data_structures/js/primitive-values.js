/* プリミティブ値 */
(function(){
  "use strict";


  // 論理型
  console.log(true);
  console.log(false);

  // null型
  console.log(null);

  // undefined型
  let x;
  console.log(x);
  console.log(undefined);

  // 数値型
  console.log(42);
  console.log(-3);
  console.log(Math.PI);
  console.log(Infinity);
  console.log(NaN);

  // 長整数型
  console.log(1n);
  console.log(-1n);
  console.log(2n ** 53n);

  // 文字列型
  console.log('hello');

  // シンボル型
  console.log(Symbol('hoge'));
})();
