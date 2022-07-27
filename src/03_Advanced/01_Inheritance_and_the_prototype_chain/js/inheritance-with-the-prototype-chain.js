/* プロトタイプチェーンと継承 */
(function(){
  "use strict";

  var o = Object.create({ b: 3, c: 4 });
  o.a = 1;
  o.b = 2;

  console.log(o.a); // 1
  console.log(o.b); // 2
  console.log(o.c); // 4
  console.log(o.d); // undefined

  var o = {
    a: 2,
    m: function(b) {
      return this.a + 1;
    }
  };

  console.log(o.m()); // 3

  var p = Object.create(o);
  p.a = 4;
  console.log(p.m()); // 5
})();
