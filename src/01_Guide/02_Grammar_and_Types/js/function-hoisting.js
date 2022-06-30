/* 関数の巻き上げ */

/* 関数宣言は巻き上げられる */
foo();

function foo() {
  console.log('bar');
}

/* 関数式は巻き上げられない
baz(); // TypeError

var baz = function() {
  console.log('bar2');
}
*/
