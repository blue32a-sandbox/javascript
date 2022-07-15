/* 古いコールバック API をラップする Promise の作成 */
(function(){
  "use strict";

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  wait(5 * 1000).then(() => console.log('wait 5 seconds.'));
})();
