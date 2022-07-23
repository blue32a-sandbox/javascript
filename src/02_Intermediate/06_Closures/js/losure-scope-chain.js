/* クロージャのスコープチェーン */
(function(){
  // グローバルスコープ
  var e = 10;
  function sum(a) {
    return function(b) {
      return function(c) {
        // ローカルスコープ
        return function(d) {
          // ローカルスコープ
          return a + b + c + d + e;
        }
      }
    }
  }
  console.log(sum(1)(2)(3)(4)); // 20
})();
