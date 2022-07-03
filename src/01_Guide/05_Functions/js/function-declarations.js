/* 関数宣言 */
(function(){
  function square(number) {
    return number * number;
  }

  function hoge(str) {
    // プリミティブな引数は値渡しで関数に渡されるので、呼び出し元の値には影響を与えない
    str += 'hoge';
    return str;
  }
  let val = 'hoge';
  console.log(hoge(val)); // hogehoge
  console.log(val); // hoge
})();
