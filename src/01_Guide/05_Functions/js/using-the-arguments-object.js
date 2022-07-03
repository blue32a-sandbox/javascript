/* arguments オブジェクトの使用 */
(function(){
  function myConcat(separator) {
    var result = '';
    for (var i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
  }
  console.log(myConcat(', ', 'red', 'orange', 'blue'));
  console.log(myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah'));
  console.log(myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley'));
})();
