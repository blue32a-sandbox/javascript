/* オブジェクト */
(function(){
  "use strict";

  console.log(new Object());
  console.log({});

  var obj = {
    name: 'Carrot',
    for: 'Max',
    details: {
      color: 'orange',
      size: 12
    }
  };
  console.log(obj);
  console.log(obj.details.color); // "orange"
  console.log(obj['details']['size']); // 12

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  var you = new Person('You', 24);
  console.log(you);

  // var user = prompt('what is your key?');
  // console.log(user);
})();
