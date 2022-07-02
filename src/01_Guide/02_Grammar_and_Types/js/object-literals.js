/* オブジェクトリテラル */

var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = {
  myCar: 'Saturn',
  getCar: carTypes('Honda'),
  special: sales
};

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

// 数値リテラルや文字列リテラルをプロパティ名に使用したり、オブジェクトを別のオブジェクトの入れ子にすることができる
var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };
console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

// 有効でない識別子によるプロパティ名には、配列のような表記法 ("[]") でアクセスできる
var unusualPropertyNames = {
  '': '空文字列',
  '!': 'バン！'
};
// console.log(unusualPropertyNames.''); // SyntaxError
console.log(unusualPropertyNames['']); // 空文字列
// console.log(unusualPropertyNames.!); // SyntaxError
console.log(unusualPropertyNames['!']); // バン！

// 拡張オブジェクトリテラル
var theProtoObj = {};
var handler = 'handl';
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // 'handler: handler'の短縮表記
  handler,
  toString() {
    return 'd ' + super.toString();
  },
  // 動的なプロパティ名
  [ 'prop_' + (() => 42)() ]: 42
};
console.log(obj);
