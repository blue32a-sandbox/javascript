/* 数値リテラル */

// 10進数は先頭が 0 (ゼロ) ではない一連の数字で構成される
console.log(0); // 0
console.log(117); // 117
console.log(-345); // -345
console.log(123456789123456789n); // 123456789123456789n

// 8進数は先頭が 0 (ゼロ) 、または先頭が 0o (または 0O) で示される
console.log(015); // 13
console.log(0001); // 1
console.log(-0o77); // -63
console.log(0o777777777777n); // 68719476735n

// 16進数は、先頭が 0x (または 0X) で示される
console.log(0x1123); // 4387
console.log(0x00111); // 273
console.log(-0xF1A7); // -61863
console.log(0x123456789ABCDEFn); // 81985529216486895n

// 2進数は、先頭が0b (または 0B) で示される
console.log(0b11); // 3
console.log(0b0011); // 3
console.log(-0b11); // -3
console.log(0b11101001010101010101n); // 955733n
