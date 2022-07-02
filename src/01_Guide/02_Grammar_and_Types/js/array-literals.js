/* 配列リテラル */

// 配列リテラルはオブジェクト初期化子の一種
let coffees = ['French Roast', 'Colombian', 'Kona'];
console.log(coffees);

// 未指定の要素はundefinedで埋められる
let fish = [
  'Lion',
  , // undefined
  'Angel'
];
console.log(fish);

// 要素リストの最後のカンマは無視される
console.log(['home', , 'school', ]); // lengthは3
console.log([ ,'home', , 'school']); // lengthは4
console.log(['home', , 'school', , ]); // lengthは4
