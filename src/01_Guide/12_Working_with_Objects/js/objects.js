/* オブジェクト */
(function(){
  "use strict";

  // オブジェクトとプロパティ
  var myCar = new Object();
  myCar.make = 'Ford';
  myCar.model = 'Mustang';
  myCar.year = 1969;
  console.log(myCar); // {make: 'Ford', model: 'Mustang', year: 1969}

  var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };
  console.log(myCar); // {make: 'Ford', model: 'Mustang', year: 1969}

  console.log(myCar.color); // undefined

  console.log(myCar.make); // 'Ford'
  console.log(myCar['make']); // 'Ford'

  var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();
  myObj.type              = 'ドット表記';
  myObj['date created']   = '空白入りの文字列';
  myObj[str]              = '文字列の値';
  myObj[rand]             = '乱数';
  myObj[obj]              = 'オブジェクト';
  myObj['']               = '空文字列も可能';
  console.log(myObj);

  for (var i in myCar) {
    if (myCar.hasOwnProperty(i)) {
      console.log(`myCar.${i} = ${myCar[i]}`);
    }
  }

  // オブジェクトの全プロパティの列挙
  var obj = {
    hoge: 'hogehoge',
    1: 101,
    fuga: 'fugafuga'
  };
  for (var i in obj) {
    console.log(`obj.${i} = ${obj[i]}`);
  }
  Object.keys(obj).forEach((key) => {
    console.log(`obj.${key} = ${obj[key]}`);
  });
  Object.getOwnPropertyNames(obj).forEach((key) => {
    console.log(`obj.${key} = ${obj[key]}`);
  });

  // 新しいオブジェクトの作成
  var obj = {
    porperty_1: 'value_1',
    2: 'value_2',
    'property n': 'value_n'
  };
  console.log(obj);

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  };
  console.log(new Car('Eagle', 'Talon TSi', 1993));

  var Animal = {
    type: 'Invertebrates',
    displayType: function(){
      console.log(this.type);
    }
  };
  var animal1 = Object.create(Animal);
  animal1.displayType(); // 'Invertebrates'
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // 'Fishes'

  // オブジェクトプロパティのインデックス付け
  var obj = {};
  obj.hoge = 'hogehoge';
  console.log(obj.hoge); // 'hogehoge'
  var obj = {};
  obj[5] = '555';
  console.log(obj[5]); // '555'

  // オブジェクト型に対するプロパティの定義
  var car1 = new Car('Eagle', 'Talon TSi', 1993);
  Car.prototype.color = null;
  car1.color = 'balck';
  console.log(car1);

  // メソッドの定義
  var func = function () { console.log('func') };
  var obj = {
    myMethod: function() {
      console.log('myMethod');
    },
    myOtherMethod() {
      console.log('myOtherMethod');
    }
  };
  obj.myFunction = func;
  obj.myMethod();
  obj.myOtherMethod();
  obj.myFunction();

  function displayCar() {
    console.log('美しい ' + this.year + '年式 ' + this.make + ' ' + this.model);
  }

  function Car2(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.displayCar = displayCar;
  }
  var myCar = new Car2('Eagle', 'Talon TSi', 1993);
  myCar.displayCar();

  // オブジェクト参照のための this の使用
  const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };

  function sayHi() {
      console.log('Hello, my name is', this.name);
  }

  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;

  Manager.sayHi();
  Intern.sayHi();

  // ゲッターとセッターの定義
  var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  console.log(o.a); // 7
  console.log(o.b); // 8
  o.c = 50;
  console.log(o.a); // 25

  var o = { a: 0 };
  Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
  });
  o.c = 10;
  console.log(o.b); // 6

  // プロパティの削除
  var myobj = new Object;
  myobj.a = 5;
  myobj.b = 12;
  delete myobj.a;
  console.log('a' in myobj); // false

  // オブジェクトの比較
  var fruit = {name: 'apple'};
  var fruitbear = {name: 'apple'};
  console.log(fruit == fruitbear); // false
  console.log(fruit === fruitbear); // false

  var fruit = {name: 'apple'};
  var fruitbear = fruit;
  console.log(fruit == fruitbear); // true
  console.log(fruit === fruitbear); // true
  fruit.name = 'grape';
  console.log(fruitbear); // {name: 'grape'}
})();
