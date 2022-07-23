/* レキシカルスコープ */
(function(){
  "use strict";

  function init() {
    var name = 'Mozilla';

    function displayName() {
      // alert(name);
      console.log(name);
    }
    displayName();
  }
  init(); // 'Mozilla'
})();
