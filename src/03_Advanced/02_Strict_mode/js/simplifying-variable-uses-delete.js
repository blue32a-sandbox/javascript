/* 変数の使用の単純化 単純名の削除を禁止 */
(function(){
  'use strict';

  var x;
  delete x; // SyntaxError

  eval('var y; delete y;'); // SyntaxError
})();
