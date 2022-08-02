/* JavaScript 型付き配列 */
(function(){
  'use strict';

  let buffer = new ArrayBuffer(16);
  console.log(buffer.byteLength); // 16

  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
  }
  console.log(int32View);

  let int16View = new Int16Array(buffer);
  for (let i = 0; i < int16View.length; i++) {
    console.log('Entry ' + i + ': ' + int16View[i]);
  }

  int16View[0] = 32;
  console.log('Entry 0 in the 32-bit array is now ' + int32View[0]);
  console.log(int16View);
  console.log(int32View);
  console.log(new Int8Array(buffer));

  let buffer24 = new ArrayBuffer(24);
  let idView = new Uint32Array(buffer24, 0, 1);
  let usernameView = new Uint8Array(buffer24, 4, 16);
  let amountDueView = new Float32Array(buffer24, 20, 1);
  console.log('id', idView[0]);
  console.log('username', usernameView[0]);
  console.log('amountDue', amountDueView[0]);

  let typedArray = new Uint8Array([1, 2, 3, 4]),
    normalArray = Array.prototype.slice.call(typedArray);
  normalArray.length === 4;
  normalArray.constructor === Array;
  console.log(Array.isArray(typedArray)); // false
  console.log(Array.isArray(normalArray)); // true

  let normalArray2 = Array.from(typedArray);
  console.log(Array.isArray(normalArray2)); // true

  let unit8 = new Uint8Array(new ArrayBuffer(16));
  unit8[0] = 255;
  unit8[1] = 256;
  unit8[2] = 257;
  console.log(unit8); // [255, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  let unit16 = new Uint16Array(new ArrayBuffer(16));
  unit16[0] = 65535;
  unit16[1] = 65536;
  unit16[2] = 65537;
  console.log(unit16); // [65535, 0, 1, 0, 0, 0, 0, 0]
  let unit32 = new Uint32Array(new ArrayBuffer(16));
  unit32[0] = 4294967295;
  unit32[1] = 4294967296;
  unit32[2] = 4294967297;
  console.log(unit32); // [4294967295, 0, 1, 0]
})();
