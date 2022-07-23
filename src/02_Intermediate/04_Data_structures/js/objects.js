/* オブジェクト */
(function(){
  "use strict";

  let o = {};

  Object.defineProperty(o, 'p1', {
    value: 42,
    writable: false,
    enumerable: false,
    configurable: false
  });

  Object.defineProperty(o, 'p2', {
    value: 'hello',
    writable: true,
    enumerable: true,
    configurable: true
  });

  console.log(o);
  console.log(o.p1);
  console.log(o.p2);

  // o.p1 = 12; // TypeError
  o.p2 = 'hoge';

  console.log(o.p1);
  console.log(o.p2);

  for (const prop in o) {
    console.log(prop); // 'p2'
  }

  // delete o.p1; // TypeError
  delete o.p2;

  console.log(o);

  let o2 = {
    hoge: 'hogehoge'
  };
  o2[Symbol('fuga')] = 'fugafuga';
  console.log(o2);

  console.log(new Date());

  console.log([1, 2, 3]);

  let buffer = new ArrayBuffer(16);
  console.log(new Int32Array(buffer));

  let map = new Map();
  map.set('a', 'hoge');
  map.set('b', 'fuga');
  console.log(map);

  const jstr = '{"hoge": "hello", "fuga": 42}';
  console.log(JSON.parse(jstr));
})();
