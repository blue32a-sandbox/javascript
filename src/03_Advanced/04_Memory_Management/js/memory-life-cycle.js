/* メモリ管理 */
(function(){
  'use strict';

  var n = 123; // メモリ割り当て
  var s = "azerty"; // メモリ割り当て
  var o = { a: 1, b: null }; // メモリ割り当て
  var a = [1, null, "abra"]; // メモリ割り当て
  function f(a) {
    return a + 2;
  } // メモリ割り当て

  // 関数式でもメモリー割り当て
  document.getElementById('btn').addEventListener('click', function(e){
    e.target.style.backgroundColor = 'blue';
  }, false);

  /* 一部の関数呼び出しでは、オブジェクトの割り当てが発生 */
  var d = new Date(); // Date オブジェクトの割り当て
  var e = document.createElement('div'); // DOM要素の割り当て

  /* いくつかのメソッドは、新しい値またはオブジェクトを割り当てる */
  var s = "azerty";
  var s2 = s.substr(0, 3); // [0, 3]の範囲の文字列が割り当てられる

  var a = ["ouais ouais", "nan nan"];
  var a2 = ["generation", "nan nan"];
  var a3 = a.concat(a2); // a, a2 の内容を繋ぎ合わせた 4要素の配列
})();
