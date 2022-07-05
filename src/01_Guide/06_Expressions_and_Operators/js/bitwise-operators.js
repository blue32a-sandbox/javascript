/* ビット演算子 */
(function(){
  // ビット論理積
  console.log(5 & 3); // 1

  // ビット論理和
  console.log(5 | 3); // 7

  // ビット排他的論理和
  console.log(5 ^ 3); // 6

  // ビット否定
  console.log(~5); // -6

  // 左シフト
  console.log(5 << 2); // 20

  // 右シフト（符号維持右シフト）
  console.log(5 >> 2); // 1
  console.log(-5 >> 2); // -2

  // ゼロ埋め右シフト（符号なし右シフト）
  console.log(5 >>> 2); // 1
  console.log(-5 >>> 2); // 1073741822
})();
