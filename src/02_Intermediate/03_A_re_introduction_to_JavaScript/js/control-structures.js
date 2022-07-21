/* 制御構造 */
(function(){
  "use strict";

  var name = 'kittens';
  if (name === 'puppies') {
    name += ' woof';
  } else if (name === 'kittens') {
    name += ' meow';
  } else {
    name += '!';
  }
  console.log(name === 'kittens meow'); // true

  while (true) {
    console.log('while');
    break;
  }

  var hoge;
  do {
    console.log('do while');
    hoge = false;
  } while (hoge);

  for (var i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }

  let array = [1, 2, 3];
  for (let value of array) {
    console.log(value); // 1, 2, 3
  }

  let object = {
    hoge: '1',
    fuga: '2'
  };
  for (let property in object) {
    console.log(property);// "hoge", "fuga"
  }

  var hoge = null;
  console.log(hoge && hoge.length); // null
  hoge = 'hogehoge';
  console.log(hoge && hoge.length); // 5

  var fuga = null;
  console.log(fuga || (fuga = 'fugafuga')); // "fugafuga"
  console.log(fuga); // "fugafuga"

  var age = 20;
  console.log((age > 18) ? 'yes' : 'no'); // "yes"

  var action = 'draw';
  switch (action) {
    case 'draw':
      console.log('action is draw.');
      break;
    case 'eat':
      console.log('action is eat.');
      break;
    default:
      console.log('do nothing.');
  }

  var a = 1;
  switch (a) {
    case 1: // 落下
      console.log('case 1');
    case 2:
      console.log('case 2');
      break;
    default:
      console.log('do nothing.');
  }

  switch (1 + 3) {
    case 2 + 2:
      console.log('== 4');
      break;
    default:
      console.log('neverhappens');
  }
})();
