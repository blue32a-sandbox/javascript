/* === による厳格な等価性 */
(function(){
  "use strict";

  var num = 0;
  var obj = new String('0');
  var str = '0';

  console.log(num === num); // true
  console.log(obj === obj); // true
  console.log(str === str); // true

  console.log(num === obj); // false
  console.log(num === str); // false
  console.log(obj === str); // false
  console.log(null === undefined); // false
  console.log(obj === null); // false
  console.log(obj === undefined); // false

  console.log(+0 === -0); // true

  let x = 1;
  console.log(x !== x); // false
  console.log(x === x); // true
  x = NaN;
  console.log(x !== x); // true
  console.log(x === x); // false
})();
