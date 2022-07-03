/* 関数の引数 */
(function(){
  // ECMAScript 2015 からの、２つの新しい形の引数

  // デフォルト引数
  function multiply(a, b = 1) {
    return a * b;
  }

  console.log(multiply(5)); // 5

  // 残余引数
  function multiply_2(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }

  console.log(multiply_2(2, 1, 2, 3)); // [2, 4, 6]
})();
