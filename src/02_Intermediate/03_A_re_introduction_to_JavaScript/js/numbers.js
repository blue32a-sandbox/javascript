/* 数値 */
(function(){
  "use strict";

  console.log(3 / 2); // 1.5
  console.log(Math.floor(3 / 2)); // 1
  console.log(0.1 + 0.2); // 0.30000000000000004
  console.log(0.1 + 0.2 == 0.30000000000000004); // true

  console.log(Math.sin(3.5));

  console.log(parseInt('123', 10)); // 123
  console.log(parseInt('010', 10)); // 10
  console.log(parseInt('010')); // 10
  console.log(parseInt('0x10')); // 16
  console.log(parseInt('11', 2)); // 3
  console.log(+'42'); // 42
  console.log(+'010'); // 10
  console.log(+'0x10'); // 16

  console.log(parseInt('hello', 10)); // NaN
  console.log(NaN + 5); // NaN
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN(1)); // false
  console.log(Number.isNaN(null)); // false
  console.log(Number.isNaN(undefined)); // false

  console.log(isNaN(NaN)); // true
  console.log(isNaN('hello')); // true
  console.log(isNaN(null)); // false
  console.log(isNaN(undefined)); // true

  console.log(1 / 0); // Infinity
  console.log(-1 / 0); // -Infinity

  console.log(isFinite(1 / 0)); // false
  console.log(isFinite(-Infinity)); // false
  console.log(isFinite(NaN)); // false
  console.log(isFinite(null)); // true
  console.log(isFinite(true)); // true
  console.log(isFinite(false)); // true
  console.log(isFinite(undefined)); // false
  console.log(isFinite(1)); // true
  console.log(isFinite(0x10)); // true
})();
