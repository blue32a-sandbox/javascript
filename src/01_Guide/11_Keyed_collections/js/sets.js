/* Set */
(function(){
  "use strict";

  let mySet = new Set();
  mySet.add(1);
  mySet.add('some text');
  mySet.add('foo');
  console.log(mySet.size); // 3
  mySet.add('foo');
  console.log(mySet.size); // 3

  console.log(mySet.has(1)); // true
  mySet.delete('foo');
  console.log(mySet.size); // 2

  for (let item of mySet) console.log(item);

  console.log(Array.from(mySet)); // [1, 'some text']

  console.log(new Set([1, 2, 3, 4, 4])); // {1, 2, 3, 4}

  // WeakSet
  function execRecursively(fn, subject, _refs = null){
    if(!_refs)
      _refs = new WeakSet();

    // Avoid infinite recursion
    if(_refs.has(subject))
      return;

    fn(subject);
    if("object" === typeof subject){
      _refs.add(subject);
      for(let key in subject)
        execRecursively(fn, subject[key], _refs);
    }
  }

  const foo = {
    foo: "Foo",
    bar: {
      bar: "Bar"
    }
  };

  foo.bar.baz = foo; // Circular reference!
  execRecursively(obj => console.log(obj), foo);
})();
