/* コンストラクターにおけるグローバル情報 */
(function(){
  "use strict";

  var idCounter = 1;

  function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
    this.id = idCounter++;
  }

  var victoria = new Employee('Pigbert, Victoria', 'pubs');
  var harry = new Employee('Tschopik, Harry', 'sales');
  console.log(victoria.id); // 1
  console.log(harry.id); // 2

  function WorkerBee(name, dept, projs) {
    Employee.call(this, name, dept);
    this.projects = projs || [];
  }
  WorkerBee.prototype = new Employee; // idCounterがインクリメントされる
  // WorkerBee.prototype = Object.create(Employee.prototype); // インクリメントされない

  var mac = new WorkerBee('Wood, Mac');
  console.log(mac.id); // 4
})();
