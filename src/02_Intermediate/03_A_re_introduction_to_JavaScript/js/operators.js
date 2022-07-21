/* 演算子 */
(function(){
  "use strict";

  let x = 0;
  console.log(x += 5); // 5
  console.log(++x); // 6
  console.log(--x); // 5

  console.log('hello' + ' world'); // "hello world"

  console.log('3' + 4 + 5); // "345"
  console.log(3 + 4 + '5'); // "75"
  console.log("" + 0x10); // "16"

  console.log(123 == '123'); // true
  console.log(1 == true); // true
  console.log(0 == false); // true

  console.log(123 === '123'); // false
  console.log(1 === true); // false
  console.log(0 === false); // false
})();
