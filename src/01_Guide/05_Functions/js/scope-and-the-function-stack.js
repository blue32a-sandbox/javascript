/* スコープと関数スタック */
(function(){
  // 再帰
  function loop(x) {
    if (x >= 5) {
      return;
    }

    console.log(x);

    loop(x + 1); // 再帰呼び出し
  }
  loop(0);

  // 関数スタック
  function foo(i) {
    if (i < 0) {
      return;
    }
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
  foo(3);

  // 入れ子の関数とクロージャ
  function addSquares(a, b) {
    function square(x) { // クロージャを形成する
      // 外側の関数の引数と変数を利用できる
      console.log('a = ' + a);
      console.log('b = ' + b);

      return x * x;
    }
    // console.log(x); // 内側の関数の引数と変数を利用できない
    return square(a) + square(b);
  }
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41

  // 外側の関数からクロージャを呼び出す
  function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  fn_inside = outside(3); // 3 を加算する関数を取得する
  console.log(fn_inside(5)); // 8
  console.log(outside(3)(5)); // 8

  // 多重入れ子関数
  function A(x) {
    function B(y) {
      function C(z) {
        console.log('x + y + z = ' + (x + y + z));
      }
      C(3);
    }
    B(2);
  }
  A(1);

  // 名前の衝突
  function outside_x() {
    var x = 5;
    function inside_x(x) {
      // outside_x の x より inside_x の x が優先される
      return x * 2;
    }
    return inside_x;
  }

  console.log(outside_x()(10)); // 20
})();
