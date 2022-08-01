/* 変数の使用の単純化 withを禁止 */
(function(){
  'use strict';

  with (Math) { // SyntaxError
    console.log(PI);
  }
})();
