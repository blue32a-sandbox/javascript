/* Arrayオブジェクト */
(function(){
  "use strict";

  // 長さがゼロではないが項目のない配列を作成
  let arrayLength = 3;
  console.log(new Array(arrayLength));
  console.log(Array(arrayLength));
  let arr = [];
  arr.length = arrayLength
  console.log(arr);

  // console.log(Array(9.3)); // RangeError: Invalid array length

  // 新規または既存のオブジェクトのプロパティに配列を割り当てることができる
  var obj = {};
  console.log(obj);
  obj.foo = [];
  console.log(obj);
  var obj = {bar: []};
  console.log(obj);

  // 単一の要素を持つ配列を生成
  console.log(Array.of(9.3));

  // 配列要素の参照
  let myArray = ['Wind', 'Rain', 'Fire'];
  console.log(myArray[2]); // 'Fire'
  console.log(myArray['length']); // 3

  // 配列へのデータ追加
  let emp = [];
  emp[0] = 'Casey Jones';
  emp[1] = 'Phil Lesh';
  emp[2] = 'August West';
  console.log(emp);

  // 配列の長さの理解
  var cats = [];
  cats[30] = ['Dusty'];
  console.log(cats.length); // 30（最終要素のインデックス +1）

  var cats = ['Dusty', 'Misty', 'Twiggy'];
  console.log(cats.length); // 3
  cats.length = 2;
  console.log(cats); // ['Dusty', 'Misty']
  cats.length = 0;
  console.log(cats); // []
  cats.length = 3;
  console.log(cats); // [ , , ]

  // 配列の反復処理
  let colors  = ['red', 'green', 'blue'];
  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }
  colors.forEach(function(color) {
    console.log(color);
  });
  colors.forEach(color => console.log(color));

  // 省略された要素とundefinedを割り当てた時の違い
  let array = ['first', 'second', , 'fourth'];
  array.forEach(element => console.log(element));
  if (array[2] === undefined) {
    console.log('array[2] is undefined');
  }
  array = ['first', 'second', undefined, 'fourth'];
  array.forEach(element => console.log(element));

  // 多次元配列
  let a = new Array(4);
  for (let i = 0; i < 4; i++) {
    a[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      a[i][j] = `[${i},${j}]`;
    }
  }
  console.log(a);

  // 配列を使用して他のプロパティを格納する
  let arrprop = [1, 2, 3];
  arrprop.property = 'value';
  console.log(arrprop.property); // 'value'
})();
