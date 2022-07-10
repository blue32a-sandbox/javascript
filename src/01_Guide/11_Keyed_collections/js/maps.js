/* Map */
(function(){
  "use strict";

  let sayings = new Map();
  sayings.set('dog', 'woof');
  sayings.set('cat', 'meow');
  sayings.set('elephant', 'toot');
  console.log(sayings.size); // 3
  console.log(sayings.get('dog')); // 'woof'
  console.log(sayings.get('fox')); // undefined
  console.log(sayings.has('bird')); // false
  console.log(sayings.has('dog')); // true
  sayings.delete('dog');
  console.log(sayings.has('dog')); // false

  for (const [key, value] of sayings) {
    console.log(`${key} goes ${value}`);
  }

  sayings.clear();
  console.log(sayings.size);

  // WeakMap
  const wm1 = new WeakMap(),
        wm2 = new WeakMap(),
        wm3 = new WeakMap();
  const o1 = {},
        o2 = function() {},
        o3 = window;
  wm1.set(o1, 37);
  wm1.set(o2, 'azerty');
  wm2.set(o1, o2);
  wm2.set(o3, undefined);
  wm2.set(wm1, wm2);

  console.log(wm1.get(o2)); // 'azerty'
  console.log(wm2.get(o2)); // undefined
  console.log(wm2.get(o3)); // undefined

  console.log(wm1.has(o2)); // true
  console.log(wm2.has(o2)); // false
  console.log(wm2.has(o3)); // true

  wm3.set(o1, 37);
  console.log(wm3.get(o1)); // 37

  console.log(wm1.has(o1)); // true
  wm1.delete(o1);
  console.log(wm1.has(o1)); // false
})();
