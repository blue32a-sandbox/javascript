/* パフォーマンスへの配慮 */
(function(){
  "use strict";

  // クロージャを使っている
  function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function() {
      return this.name;
    };
    this.getMessage = function() {
      return this.message;
    };
  }
  // オブジェクトが作成されるたびにメソッドが再代入されてしまうが、そうする意味がない
  var obj = new MyObject('hoge', 'hoge hoge');
  console.log(obj.getName());
  console.log(obj.getMessage());

  function MyObject2(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }
  // オブジェクトが作成されるたびにメソッドが定義されない
  MyObject2.prototype.getName = function() {
    return this.name;
  }
  MyObject2.prototype.getMessage = function() {
    return this.message;
  }

  var obj2 = new MyObject2('fuga', 'fuga fuga');
  console.log(obj2);
  console.log(obj2.getName());
  console.log(obj2.getMessage());
})();
