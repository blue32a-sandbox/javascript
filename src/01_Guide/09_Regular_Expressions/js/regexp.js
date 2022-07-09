/* 正規表現 */
(function(){
  "use strict";

  let re1 = /ab+c/;
  let re2 = new RegExp('ab+c');

  // execメソッド
  var myRe = /d(b+)d/g;
  console.log(myRe.exec('cdbbdbsbz'));
  console.log(/d(b+)d/g.exec('cdbbdbsbz'));
  var myRe = new RegExp('d(b+)d', 'g');
  console.log(myRe.exec('cdbbdbsbz'));

  // 正規表現のプロパティ
  var myRe = /d(b+)d/g;
  myRe.exec('cdbbdbsbz');
  console.log('The value of lastIndex is ' + myRe.lastIndex); // "The value of lastIndex is 5"
  /d(b+)d/g.exec('cdbbdbsbz');
  console.log('The value of lastIndex is ' + /d(b+)d/g.lastIndex) // "The value of lastIndex is 0"

  // 正規表現フラグ
  // /pattern/flags;
  // new RegExp('pattern', 'flags');
  var re = /\w+\s/g;
  var str = 'fee fi fo fum';
  console.log(str.match(re)); // ['fee ', 'fi ', 'fo ']

  // exec() におけるグローバル検索の使用
  var xArray;
  while(xArray = re.exec(str)) console.log(xArray);

  // 特殊文字を用いた入力の確認
  var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
  var phonenumber = '090-123-4567';
  var result = re.exec(phonenumber);
  if (!result) {
    console.error(phonenumber + ' は市外局番付き電話番号ではありません！');
  } else {
    console.log('ありがとう、あなたの電話番号は ' + result[0]);
  }
})();
