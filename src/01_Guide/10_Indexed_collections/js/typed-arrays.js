/* 型付き配列 */
(function(){
  "use strict";

  let buffer = new ArrayBuffer(16);

  if (buffer.byteLength === 16) {
    console.log("Yes, it's 16 bytes.");
  } else {
    console.log("Oh no, it's the wrong size!");
  }

  let int32View = new Int32Array(buffer);

  // 配列を値 0, 2, 4, 6 の 4 つのエントリで埋める
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
  }
  console.log(int32View);

  // 同一のデータに対する複数のビュー
  let int16View = new Int16Array(buffer);
  for (let i = 0; i < int16View.length; i++) {
    console.log('Entry ' + i + ': ' + int16View[i]);
  }

  // 2 つの配列は同じデータバッファを異なる形式で取り扱う単純なビューである
  int16View[0] = 32;
  console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);
})();
