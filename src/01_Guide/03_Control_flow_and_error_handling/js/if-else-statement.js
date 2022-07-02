/* if...else 文 */

var x = 1;

if (x === 1) {
  console.log('x === 1');
} else if (x === 2) {
  console.log('x === 2');
} else {
  console.log('other');
}

// 見間違えを防ぐため、条件式で代入を行う必要がある場合はさらに丸括弧でくくる
var x, y = 1;
if ((x = y)) {}

[false, undefined, null, 0, NaN, "", new Boolean(false)].forEach(v => {
  if (v) {
    console.log(`${v} is Truthy.`);
  } else {
    console.log(`${v} is Falsy.`);
  }
});
