/* ジェネレーター関数 */
(function(){
  "use strict";

  function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;
  }

  const it = makeRangeIterator(1, 10, 2);

  let result = it.next();
  while(!result.done) {
    console.log(result.value);
    result = it.next();
  }

  console.log("Iterated over sequence of size: ", result.value);
})();
