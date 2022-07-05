/* 式 */
(function(){
  // thisキーワード
  var obj = {
    a: 1,
    b: function() { return this.a }
  }
  console.log(obj.b());

  // グループ化演算子
  console.log(1 + 2 * 3); // 7
  console.log(1 + (2 * 3)); // 7
  console.log((1 + 2) * 3); // 9

  // 左辺式
  // new演算子
  var date = new Date();

  // superキーワード
  class Hoge extends Date {
    hoge() {
      return super.getFullYear();
    }
  }
  var hoge = new Hoge();
  console.log(hoge.hoge());
})();
