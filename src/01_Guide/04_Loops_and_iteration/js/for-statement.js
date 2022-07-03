/* for文 */

(function() {
  "use strict";

  for (i = 0; i < 5; i++) {
    console.log(i);
  }

  // 条件式がすべて省略されている場合、条件式は真であると仮定される。
  for (i = 0; ; i++) {
    if (i >= 5) {
      break;
    }
    console.log(i);
  }
})();
