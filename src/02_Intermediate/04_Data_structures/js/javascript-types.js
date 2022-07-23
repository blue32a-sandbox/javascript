/* データと構造型 */
(function(){
  "use strict";

  let x;
  console.log(typeof x === 'undefined'); // true
  x = true;
  console.log(typeof x === 'boolean'); // true
  x = 'hello';
  console.log(typeof x === 'string'); // true
  x = 1n;
  console.log(typeof x === 'bigint'); // true
  x = Symbol('Sym');
  console.log(typeof x === 'symbol'); // true
  x = {};
  console.log(typeof x === 'object'); // true
  x = () => {};
  console.log(typeof x === 'function'); // true
  x = null;
  console.log(typeof x === 'object'); // true
})();
