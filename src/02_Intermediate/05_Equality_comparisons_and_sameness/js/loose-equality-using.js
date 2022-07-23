/* == による緩い等価性 */
(function(){
  "use strict";

  var num = 0;
  var obj = new String('0');
  var str = '0';

  console.log(num == num); // true
  console.log(obj == obj); // true
  console.log(str == str); // true

  console.log(num == obj); // true
  console.log(num == str); // true
  console.log(obj == str); // true
  console.log(null == undefined); // true

  console.log(obj == null); // false
  console.log(obj == undefined); // false

  var x;
  console.log(x == null); // true
  console.log(x == undefined); // true
})();
