/* 関数における厳格モード */
(function(){
  function strict() {
    "use strict";
    function nested() { return 'わたしもそうです！'; }
    return "こんにちは！厳格モードの関数です！ " + nested();
  }
  function noStrict() { return "厳格モードではありません"; }

  console.log(strict());
  console.log(noStrict());
})();
