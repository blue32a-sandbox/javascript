/* カスタムオブジェクト */
(function(){
  "use strict";

  function Person(first, last) {
    this.first = first;
    this.last = last;
  }
  Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
  };
  Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };
  var simon = new Person('Simon', 'Willison');
  console.log(simon);
  console.log(simon.fullName()); // "Simon Willison"
  console.log(simon.fullNameReversed()); // "Willison, Simon"

  var s = 'Simon';
  String.prototype.reversed = function() {
    var r = '';
    for (var i = this.length - 1; i >= 0; i--) {
      r += this[i];
    }
    return r;
  };
  console.log(s.reversed()); // "nomiS"
  console.log('This can now be reversed'.reversed()); // "desrever eb won nac sihT"

  function trivialNew(constructor, ...args) {
    var o = {}; // オブジェクトを作成
    constructor.apply(o, args);
    return o;
  }

  console.log(trivialNew(Person, 'William', 'Orange'));

  function lastNameCaps() {
    return this.last.toUpperCase();
  }
  lastNameCaps.call(simon);
  simon.lastNameCaps = lastNameCaps;
  console.log(simon.lastNameCaps()); // "WILLISON"

  // 内部関数
  function parentFunc() {
    var a = 1;

    function nestedFunc() {
      var b = 4;
      return a + b;
    }
    return nestedFunc();
  }
  console.log(parentFunc()); // 5
})();
