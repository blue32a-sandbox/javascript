/* インスタンス関係の決定 */
(function(){
  "use strict";

  function Foo() {
  }
  var f = new Foo();
  console.log(f instanceof Foo);
  console.log(f.__proto__ == Foo.prototype);
  console.log(f.__proto__.__proto__ == Object.prototype);
  console.log(f.__proto__.__proto__.__proto__ == null);
})();
