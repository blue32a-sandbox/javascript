/* 合成 */
(function(){
  "use strict";

  const worker = (ms, value) => new Promise(resolve => setTimeout(() => {resolve(value)}, ms));
  worker(5 * 1000, 'hoge').then(result => console.log('woker result: ' + result));
  Promise.all([worker(2000, '2sec'), worker(3000, '3sec'), worker(1000, '1sec')])
  .then(([result1, result2, result3]) => {
    console.log(result1, result2, result3);
  });
})();
