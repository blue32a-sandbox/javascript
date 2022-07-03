/* 関数の呼び出し */
(function(){
  // 関数の宣言を巻き上げることができる
  console.log(square(5));
  // /* ... */
  function square(n) { return n * n };

  // 関数の巻き上げは関数宣言でしか機能しない
  // console.log(plus); // ReferenceError
  // console.log(plus(2));
  const plus = function (n) { return n + 1 };

  // その関数自身を呼び出す
  function factorial(n) {
    if ((n === 0) || (n === 1)) {
      return 1;
    } else {
      return (n * factorial(n - 1));
    }
  }
  console.log(factorial(1));
  console.log(factorial(2));
  console.log(factorial(3));
})();
