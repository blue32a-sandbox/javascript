/* 真偽値リテラル */
let y = true;
let n = false;
console.log(y, n);

// プリミティブ型の真偽値と、Booleanオブジェクトの値は異なる

var x = new Boolean(false);
if (x) {
  console.log('var x is true'); // このコードが実行される
} else {
  console.log('var x is false');
}

var x = false;
if (x) {
  console.log('var x is true');
} else {
  console.log('var x is false'); // このコードが実行される
}
