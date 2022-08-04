/* スタック */
(function(){
  'use strict';

  function foo(b) {
    var a = 10;
    return a + b + 11;
  }
  function bar(x) {
    var y = 3;

    // 2. fooの引数とローカル変数を含んだ２番目のフレームが生成され、
    // 最初のフレームの上にプッシュされる
    return foo(x * y);
    // 3. fooから返ると、先頭のフレーム要素はスタックからポップされる
  }

  // 1. barの引数とローカル変数を含んだ最初のフレームが生成される
  console.log(bar(7)); // 42
  // 4. barから返るときスタックは空になる
})();
