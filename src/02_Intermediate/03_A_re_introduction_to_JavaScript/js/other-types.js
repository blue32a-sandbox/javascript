/* その他の型 */
(function(){
  "use strict";

  console.log(null === undefined); // false

  // Falsy
  console.log(Boolean(false)); // false
  console.log(Boolean(0)); // false
  console.log(Boolean("")); // false
  console.log(Boolean(NaN)); // false
  console.log(Boolean(null)); // false
  console.log(Boolean(undefined)); // false
})();
