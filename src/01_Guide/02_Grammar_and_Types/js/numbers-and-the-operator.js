/* 数値と '+' 演算子 */
x = '答えは ' + 42;
console.log(x);
y = 42 + ' が答え';
console.log(y);

// +演算子以外がある式では、数値を文字列に変換しない
console.log('37' - 7); // 30
console.log('37' * 7); // 259
console.log('37' / 7); // 5.285714285714286
console.log('37' % 7); // 2
console.log('37' + 7); // "377"
console.log(10 + 1 + '2' + 3); // "1123"
console.log(10 - 1 - '2' - 3); // 4
