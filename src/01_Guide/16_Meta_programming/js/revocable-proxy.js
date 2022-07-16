/* 取り消し可能 Proxy */
(function(){
  "use strict";

  let revocable = Proxy.revocable({}, {
    get: function(target, name) {
      return '[[' + name + ']]';
    }
  })
  let proxy = revocable.proxy;
  console.log(proxy.foo); // '[[foo]]'

  revocable.revoke();

  // console.log(proxy.foo); // TypeError
  // proxy.foo = 1; // TypeError
  // delete proxy.foo; // TypeError
  console.log(typeof proxy);
})();
