/* 単項演算子 */
(function(){
  // delete演算子
  var obj = { a: 1, b: 2 };
  console.log(obj); // { a: 1, b: 2 }
  delete obj.a;
  console.log(obj); // { b: 2 }

  var arr = [1, 2, 3];
  console.log(arr); // [1, 2, 3]
  delete arr[1];
  console.log(arr); // [1, undefined, 3]

  // typeof演算子
  console.log(typeof 'str');
  console.log(typeof 1);
  console.log(typeof [1, 2]);
  console.log(typeof {a: 1});
  console.log(typeof function () {});

  // void演算子
  console.log(void 1);
})();
