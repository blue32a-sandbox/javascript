/* 関数式 */
(function(){
  // 無名 (anonymous) にすることができる
  const square = function(number) { return number * number }
  console.log(square(4));

  // 名前を指定することもできる
  const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
  console.log(factorial(3));

  // ある関数を別の関数の引数として渡す
  function map(f, a) {
    let result = [];
    for (let i = 0; i != a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);

  // 条件に基づいて関数を定義する
  var num = 0;
  var myFunc;
  if (num === 0) {
    myFunc = function(theObj) {
      theObj.make = 'Toyota';
    }
  }
  console.log(myFunc);
})();
