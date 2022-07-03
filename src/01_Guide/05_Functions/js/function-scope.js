/* 関数のスコープ */
(function(){
  var num1 = 20,
    num2 = 3,
    name = 'Chamakh';

  function multiply() {
    // 自身が定義されたスコープ内で定義されているすべての変数や関数にアクセスできる
    return num1 * num2;
  }

  console.log(multiply()); // 60

  function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
      return name + ' scored ' + (num1 + num2);
    }

    return add();
  }

  console.log(getScore()); // "Chamakh scored 5"
})();
