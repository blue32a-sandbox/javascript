/* エラーの伝播 */
(function(){
  "use strict";

  const doReject = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('foo');
    }, 3000);
  });
  doReject
    .then(result => {
      return result + ' bar';
    })
    .then(result => {
      return result + ' hoge';
    })
    .then(result => {
      console.log('Got the final result: ' + result);
    })
    .catch(err => {
      console.log('Got the error: ' + err);
    });
})();
