/* クロージャ */
(function(){
  "use strict";

  function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  var add5 = makeAdder(5);
  var add20 = makeAdder(20);
  console.log(add5(6)); // 11
  console.log(add20(7)); // 27
})();
