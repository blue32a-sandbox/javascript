/* 変数の巻き上げ */

// var x;
console.log(x === undefined); // true
var x = 3;

var myvar = 'my value';

(function() {
  // var myvar;
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

/* ECMAScript 2015では、let および const は巻き上げが行われるが、初期化されない
console.log(y);
let y = 3; // ReferenceError
*/
