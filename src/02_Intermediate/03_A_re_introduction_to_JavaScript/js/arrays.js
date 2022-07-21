/* 配列 */
(function(){
  "use strict";

  var a = new Array();
  a[0] = 'dog';
  a[1] = 'cat';
  a[2] = 'hen';
  console.log(a.length); // 3
  var a = ['dog', 'cat', 'hen'];
  console.log(a.length); // 3
  a[100] = 'fox';
  console.log(a.length); // 101
  console.log(typeof a[90]); // undefined

  var a = ['dog', 'cat', 'hen'];
  for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
  for (const currentValue of a) {
    console.log(currentValue);
  }
  ['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
    console.log(currentValue);
    console.log(array[index]);
  });
})();
