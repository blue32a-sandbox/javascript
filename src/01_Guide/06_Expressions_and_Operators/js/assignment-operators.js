/* 代入演算子 */
(function(){
  var x = 1; // 代入
  console.log(x); // 1
  x += 2; // 加算代入
  console.log(x); // 3
  x -= 1; // 減算代入
  console.log(x); // 2
  x *= 2; // 乗算代入
  console.log(x); // 4
  x /= 2; // 除算代入
  console.log(x); // 2
  x %= 2; // 剰余代入
  console.log(x); // 0
  x = 2;
  x **= 3; // べき乗代入
  console.log(x); // 8
  x = 5;
  x <<= 2; // 左シフト代入
  console.log(x); // 20
  x >>= 2; // 右シフト代入
  console.log(x); // 5
  x = 5;
  x >>>= 2; // 符号なし右シフト代入
  console.log(x); // 1

  // 右シフトと符号なし右シフトの違い
  x = -5;
  x >>= 2;
  console.log(x); // -2
  x = -5;
  x >>>= 2;
  console.log(x); // 1073741822

  x = 5;
  x &= 3; // ビット論理積代入
  console.log(x); // 1

  x = 5;
  x ^= 3; // ビット排他的論理和代入
  console.log(x); // 6

  x = 5;
  x |= 3; // ビット論理和代入
  console.log(x); // 7

  // 論理積代入
  x = 1;
  var y = 0;
  x &&= 2;
  y &&= 2;
  console.log(x); // 2
  console.log(y); // 0

  // 論理和代入
  x = 1;
  y = 0;
  x ||= 2;
  y ||= 2;
  console.log(x); // 1
  console.log(y); // 2

  // Null合体代入
  x = null;
  y = 1;
  x ??= 2;
  y ??= 2;
  console.log(x); // 2
  console.log(y); // 1

  // プロパティへの代入
  let obj = {};
  obj.x = 3;
  console.log(obj.x); // 3
  console.log(obj); // { x: 3 }

  // 分割代入
  var foo = ['one', 'two', 'three'];
  var [one, two, three] = foo;
  console.log(one, two, three); // "one", "two", "three"
})();
