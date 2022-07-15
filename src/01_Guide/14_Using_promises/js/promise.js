/* プロミスの使用 */
(function(){
  "use strict";

  const doSomething = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 3000);
  });

  doSomething
    .then(result => {
      return result + ' bar';
    })
    .then(result => {
      return result + ' hoge';
    })
    .then(result => {
      console.log('Got the final result: ' + result);
    });

  new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
  })
  .then(() => {
    throw new Error('Something failed');
    console.log('Do this');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this, no matter what happened before');
  });
})();
