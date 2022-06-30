/* 定数 */

// 読み取り専用の名前付き変数
const PI = 3.14;
// const PI; // 再宣言できない
// PI = 3; // 代入によって値を変えることはできない

/* 同一スコープ内で関数や変数と同じ名前の定数は宣言できない
function f() {};
const f = 5; // SyntaxError

function f() {
  const g = 5;
  var g; // SyntaxError
}
*/

// オブジェクトのプロパティは保護されない
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'other value';
console.log(MY_OBJECT.key);

// 配列の中身は保護されない
const MY_ARRAY = ['HTML', 'CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY);
MY_ARRAY.shift();
console.log(MY_ARRAY);
