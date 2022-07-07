/* 数値 */
(function(){
  "use strict";

  // 10進数
  console.log(1234567890); // 1234567890
  console.log(42); // 42
  // console.log(0888); // 888 (StrictモードではSyntaxError)
  // console.log(0777); // 511 (Strictモードでない場合は8進数として解析される)

  // 2進数
  console.log(0b10000000000000000000000000000000); // 2147483648
  console.log(0b01111111100000000000000000000000); // 2139095040
  console.log(0B00000000011111111111111111111111); // 8388607
  // console.log(0b20000000000000000000000000000000); // SyntaxError

  // 8進数
  // console.log(0755); // 493 (StrictモードではSyntaxError)
  console.log(0o10); // 8

  // 16進数
  console.log(0xFFFFFFFFFFFFFFFFF); // 295147905179352830000
  console.log(0x123456789ABCDEF); // 81985529216486900
  console.log(0XA); // 10

  // 指数表現
  console.log(1E3); // 1000
  console.log(2e6); // 2000000
  console.log(0.1e2); // 10
})();
