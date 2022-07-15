/* 入れ子 */
(function(){
  "use strict";

  Promise.resolve()
    .then(() => {
      console.log('then 1');
      Promise.resolve()
        .then(() => {
          console.log('then 2');
          throw new Error();
        })
        .catch(() => {
          console.error('error 1');
        });
    })
    .then(() => console.log('then 3'))
    .catch(() => console.error('error 2'));
})();
