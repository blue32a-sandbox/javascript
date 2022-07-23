/* 注意: Object.is と NaN */
(function(){
  "use strict";

  var f2b = x => new Uint8Array(new Float64Array([x]).buffer);
  var b2f = x => new Float64Array(x.buffer)[0];

  var n = f2b(NaN);
  console.log(n); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127)
  n[0] = 1;
  console.log(n); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127)

  var nan2 = b2f(n);
  console.log(nan2); // NaN

  console.log(Object.is(nan2, NaN)); // true

  console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127)

  console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127)
})();
