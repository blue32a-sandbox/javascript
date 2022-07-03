/* break文 */
(function() {
  "use strict";

  let x = 0;
  let z = 0;
  labelCancelLoops: while (true) {
    console.log('外側のループ: ' + x);
    x += 1;
    z = 1;
    while (true) {
      console.log('内側のループ: ' + z);
      z += 1;
      if (z === 3 && x === 3) {
        break labelCancelLoops;
      } else if (z === 3) {
        break;
      }
    }
  }
})();
