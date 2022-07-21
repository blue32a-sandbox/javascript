/* 変数 */
(function(){
  "use strict";

  // console.log(myLetVariable); // ReferenceError
  for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
    console.log(myLetVariable); // 0, 1, 2, 3, 4
  }
  // console.log(myLetVariable); // ReferenceError

  const Pi = 3.14;
  // Pi = 1; // TypeError

  console.log(myVarVariable); // undefined
  for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
    console.log(myVarVariable); // 0, 1, 2, 3, 4
  }
  console.log(myVarVariable); // 5
})();
