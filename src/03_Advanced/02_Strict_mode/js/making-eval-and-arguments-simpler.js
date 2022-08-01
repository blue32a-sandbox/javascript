/* eval および arguments の単純化 */
(function(){
  'use strict';

  /* 以下のような試みはすべて構文エラー */
  // eval = 17; // SyntaxError
  // arguments++; // SyntaxError
  // ++eval; // SyntaxError
  // var obj = { set p(arguments) { } }; // SyntaxError
  // var eval; // SyntaxError
  // try { } catch (arguments) { } // SyntaxError
  // function x(eval) { } // SyntaxError
  // function arguments() { } // SyntaxError
  // var y = function eval() { }; // SyntaxError
  // var f = new Function('arguments', "'use strict'; return 17;"); // SyntaxError

  /* 内部で作成された arguments オブジェクトのプロパティがエイリアスにならない */
  function f(a) {
    'use strict';
    a = 42;
    return [a, arguments[0]];
  }
  var pair = f(17);
  console.log(pair);
  console.assert(pair[0] === 42);
  console.assert(pair[1] === 17); // 厳格モードではない場合は 42

  /* arguments.callee に対応しなくなる */
  var f = function() { return arguments.callee; }; // TypeError
  f();
})();
