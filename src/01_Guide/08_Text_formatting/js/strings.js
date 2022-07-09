/* 文字列 */
(function(){
  "use strict";

  console.log('foo');
  console.log("bar");

  // 16 進数エスケープシーケンス
  console.log('\xA9');

  // Unicode エスケープシーケンス
  console.log('\u00A9');

  // Unicode コードポイントエスケープ
  console.log('\u{2F804}');
  console.log('\uD87E\uDC04');

  // String オブジェクト
  const foo = new String('foo');
  console.log(foo);
  console.log(typeof foo);

  // String オブジェクトの直感的でない振る舞い
  const firstString = '2 + 2';
  const secondString = new String('2 + 2');
  console.log(eval(firstString));
  console.log(eval(secondString));

  // 配列の角括弧書式を使用して、各コード単位にアクセスできる
  const hello = 'Hello, World!';
  console.log(hello.length); // 13（文字列内の UTF-16 コード単位の数を示す）
  // hello[0] = 'L'; // 不変なので変更されない（strictモードではエラー）
  // console.log(hello[0]); // H

  // マルチラインテンプレート文字列

  // マルチライン
  console.log('string text line 1\n\
string text line 2');
  console.log(`string text line 1
string text line 2`);

  // 組み込み式
  const five = 5;
  const ten = 10;
  console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');
  console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
})();
