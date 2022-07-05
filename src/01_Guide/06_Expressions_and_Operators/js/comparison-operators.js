/* 比較演算子 */
(function(){
  // 等価
  console.log(1 == 1); // true
  console.log(1 == true); // true
  console.log(1 == 0); // false

  // 不等価
  console.log(1 != 2); // true
  console.log(0 != false); // false
  console.log(1 != 1); // false

  // 厳密等価
  console.log(1 === 1); // true
  console.log(1 === true); // false
  console.log(1 === 0); // false

  // 厳密不等価
  console.log(1 !== 2); // true
  console.log(0 !== false); // true
  console.log(1 !== 1); // false

  // 大なり
  console.log(3 > 1); // true
  console.log(1 > 3); // false
  console.log(1 > 1); // false

  // 以上
  console.log(3 >= 1); // true
  console.log(1 >= 3); // false
  console.log(1 >= 1); // true

  // 小なり
  console.log(1 < 3); // true
  console.log(3 < 1); // false
  console.log(3 < 3); // false

  // 以下
  console.log(1 <= 3); // true
  console.log(3 <= 1); // false
  console.log(3 <= 3); // true
})();
