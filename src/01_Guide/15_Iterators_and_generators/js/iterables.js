/* 反復可能オブジェクト */
(function(){
  "use strict";

  // 例：一度だけ反復可能
  function* makeIterator() {
    yield 1;
    yield 2;
  }

  const it = makeIterator();

  for (const itItem of it) {
    console.log(itItem);
  }

  for (const itItem of it) {
    // 一度だけ反復可能なのでここは実行されない
    console.log('not execute');
  }

  console.log(it[Symbol.iterator]()); // makeIterator
  console.log(it); // makeIterator
  console.log(it[Symbol.iterator]() === it); // false

  // 例：何度でも反復可能
  it[Symbol.iterator] = function* () {
    yield 2;
    yield 1;
  };

  for (const itItem of it) {
    console.log(itItem);
  }

  for (const itItem of it) {
    console.log(itItem);
  }

  console.log(it[Symbol.iterator]()); // it.<computed>
  console.log(it); // makeIterator
  console.log(it[Symbol.iterator]() === it); // false
})();
