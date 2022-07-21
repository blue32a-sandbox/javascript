/* 関数 */
(function(){
  "use strict";

  function add(x, y) {
    var total = x + y;
    return total;
  }

  console.log(add()); // NaN
  console.log(add(2, 3, 4)); // 5

  function add2() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  console.log(add2(2, 3, 4, 5)); // 14

  function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
  }

  console.log(avg(2, 3, 4, 5)); // 3.5

  function avg2(...args) {
    var sum = 0;
    for (let value of args) {
      sum += value;
    }
    return sum / args.length;
  }

  console.log(avg2(2, 3, 4, 5)); // 3.5

  function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }

  console.log(avgArray([2, 3, 4, 5])); // 3.5

  function avgArray2(arr) {
    return avg.apply(null, arr);
  }

  console.log(avgArray2([2, 3, 4, 5])); // 3.5

  // 無名関数
  var avg3 = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
  }

  console.log(avg3(2, 3, 4, 5)); // 3.5

  // 再帰関数
  function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
      return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
      count += countChars(child);
    }
    return count;
  }
  console.log(countChars(document.getElementById('count')));

  var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
      return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
      count += counter(child);
    }
    return count;
  })(document.body);
  console.log(charsInBody);
})();
