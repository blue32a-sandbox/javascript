/* アロー関数 */
(function(){
  "use strict";

  var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  var a3 = a.map(s => s.length);
  console.log(a3); // [8, 6, 7, 9]

  // 独自の this を持たない
  function Person() {
    this.age = 0;

    // アクセス可能な別の値に割り当てる
    // var self = this;
    // setInterval(function growUp() {
    //   // this.age++; // 参照できない
    //   self.age++;
    //   console.log(self.age);
    // }, 1000);

    setInterval(() => {
      // アロー関数は自身のthisを持たず、personのthisを参照する
      this.age++;
      console.log(this.age);
    }, 1000);
  }

  new Person();
})();
