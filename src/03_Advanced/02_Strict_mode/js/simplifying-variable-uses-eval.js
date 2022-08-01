/* 変数の使用の単純化 evalは周囲のスコープに新しい変数を作成しない */
(function(){
  var x = 17;
  var evalX = eval("'use strict'; var x = 42; x;");
  console.log(x); // 17
  console.log(evalX); // 42

  function strict1(str) {
    'use strict';
    return eval(str); // str は厳格モードのコードとして扱われる
  }
  function strict2(f, str) {
    'use strict';
    // eval(...)ではない場合、str は厳格モードを呼び出した場合のみ厳格モードになる
    return f(str);
  }
  function nonstrict(str) {
    return eval(str); // str は厳格モードを呼び出した場合のみ厳格モードになる
  }
  console.log(strict1("'厳格モード！'"));
  console.log(strict1("'use strict'; '厳格モード！'"));
  console.log(strict2(eval, "'厳格モードではない'"));
  console.log(strict2(eval, "'use strict'; '厳格モード！'"));
  console.log(nonstrict("'厳格モードではない'"));
  console.log(nonstrict("'use strict'; '厳格モード！'"));
})();
