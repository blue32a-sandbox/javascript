(function(){
  "use strict";

  // JavaScript は大文字と小文字を区別し、また Unicode 文字セットを使用する
  let Früh = "foobar";
  let früh = "foobar";

  // コメント
  // 一行のコメント

  /* もっと長い、
     複数行からなるコメント
   */

  // 宣言
  var avar = '変数宣言';
  let alet = 'ブロックスコープのローカル変数を宣言';
  const aconst = 'ブロックスコープで読み取り専用の名前付き定数を宣言';

  // 変数
  // 必ず文字、アンダースコア、ドル記号から始まらなくてはならない
  var _a;
  var $a;
  var a;
  var A; // 大文字・小文字を区別する
  // var 1;
  var a1; // 続く文字には数字も使用できる

  // 変数の宣言
  var xvar = 42;
  let xlet = 42;
  const xconst = 42;

  let foo = { bar: 'bar' };
  let { bar } = foo; // 分割代入構文
  console.log(bar); // bar

  // xx = 42; // 未宣言のグローバル変数。strictモードでは警告が発生する。

  // 変数の評価
  var a;
  console.log('変数 a の値は ' + a); // 変数 a の値は undefined

  console.log('変数 b の値は ' + b); // 変数 b の値は undefined
  var b;
  // これは後述の「変数の巻き上げ」を読むまでは謎かもしれません

  // console.log('変数 c の値は ' + c); // キャッチされない ReferenceError: c が定義されていない

  let x;
  console.log('変数 x の値は ' + x); // 変数 x の値は undefined

  // console.log('変数 y の値は ' + y); // キャッチされない ReferenceError: y が定義されていない
  let y;

  var input;
  if (input === undefined) {
    console.log('input === undefined');
  } else {
    console.log('input !== undefined');
  }

  var myArray = [];
  if (!myArray[0]) console.log('undefined は真偽値のコンテキストで使用されると false としてふるまう');

  // undefined は数値のコンテキストで使用されると NaN に変換される
  var aa;
  console.log(aa + 2);

  // 数値のコンテキストでnullは0としてふるまう
  var n = null;
  console.log(n * 32); // 0

  // 変数のスコープ
  if (true) {
    var xx = 5;
  }
  console.log(xx); // 5

  if (true) {
    let yy = 5;
  }
  // console.log(yy); // Uncaught ReferenceError: yy is not defined
})();
