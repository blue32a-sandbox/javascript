/* 文字列から数値への変換 */
console.log(parseInt('012')); // 12
console.log(parseFloat('3.14')); // 3.14

console.log(parseInt('101', 2)); // 5

console.log('1.1' + '1.1'); // "1.11.1"

// +(単項プラス)演算子を使って、文字列から数値を取り出す
console.log((+'1.1') + (+'1.1')); // 2.2
console.log(+'1.1' + +'1.1'); // 2.2
