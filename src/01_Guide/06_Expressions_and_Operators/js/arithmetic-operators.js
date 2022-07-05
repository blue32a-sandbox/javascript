/* 算術演算子 */
(function(){
  // 剰余
  console.log(3 % 3); // 0
  console.log(3 % 2); // 1

  // インクリメント
  var x = 1;
  console.log(++x); // 2
  console.log(x); // 2
  console.log(x++); // 2
  console.log(x); // 3

  // デクリメント
  console.log(--x); // 2
  console.log(x); // 2
  console.log(x--); // 2
  console.log(x); // 1

  // 単項符号反転
  var y = 5;
  console.log(-y); // -5
  var z = -3;
  console.log(-z); // 3

  // 単項プラス
  console.log(+"5"); // 5
  console.log(+""); // 0
  console.log(+'hello'); // NaN

  // べき乗演算子
  console.log(2 ** 3); // 8
})();
