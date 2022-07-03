/* for...of文 */
(function(){
  const arr = [3, 5, 7];
  arr.foo = 'hello';

  // for...inはプロパティ名に対して
  for (const i in arr) {
    console.log(i);
  }

  // for...ofは値に対して
  for (const i of arr) {
    console.log(i);
  }
})();
