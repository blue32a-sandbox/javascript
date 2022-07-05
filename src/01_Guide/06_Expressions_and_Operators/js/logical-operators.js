/* 論理演算子 */
(function(){
  // 論理積
  console.log(3 > 0 && 2 > 0); // true
  console.log(3 > 0 && -1 > 0); // false

  // 論理和
  console.log(3 > 0 || -1 > 0); // true
  console.log(0 > 0 || -1 > 0); // false

  // 論理否定
  console.log(!(3 > 0 || -2 > 0)); // false
  console.log(!false); // true
  console.log(!true); // false

  // 短絡評価
  var x = 1;
  console.log(false && x++); // false
  console.log(x); // 1
  console.log(true || x++); // true
  console.log(x); // 1
})();
