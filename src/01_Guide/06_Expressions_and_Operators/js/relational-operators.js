/* 関係演算子 */
(function(){
  // in演算子
  var arr = [1, 2, 3];
  console.log(2 in arr); // true
  console.log(3 in arr); // false

  var obj = {a: 2};
  console.log('a' in obj); // true
  console.log('b' in obj); // false

  // instanceof演算子
  var date = new Date();
  console.log(date instanceof Date); // true
})();
