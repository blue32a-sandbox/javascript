/* 文字列リテラル */

// 0文字以上の文字を二重引用符 (") または単一引用符 (') で括ったもの
console.log('foo');
console.log("bar");
console.log('1234');
console.log('one line \n another line');
console.log("John's cat");

// Stringオブジェクトのあらゆるメソッドを呼び出すことができる
// 自動的に一時的な String オブジェクトに変換される
console.log("John's cat".length); // 10

// 逆引用符 (`) 囲まれたテンプレートリテラル
console.log(`In JavaScript '\n' is a line-feed.`);
console.log(`In JavaScript, template strings can run
over multiple lines, but double and single
quoted strings cannot.`);
var name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}?`);

// 特殊文字の使用
console.log('one line \n another line');

// 特殊文字のエスケープ
console.log("He read \"The Cremation of Sam McGee\" by R.W. Service.");
console.log('c:\\temp');

// 改行をエスケープ
console.log('this string \
is broken \
across multiple \
lines.');
