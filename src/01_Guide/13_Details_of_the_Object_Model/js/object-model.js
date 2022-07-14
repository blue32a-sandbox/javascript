/* オブジェクトモデル */
(function(){
  "use strict";

  function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
  }
  Employee.prototype.specialty = 'none';

  function Manager() {
    Employee.call(this);
    this.reports = [];
  }
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;

  function WorkerBee(name, dept, projs) {
    Employee.call(this, name, dept);
    this.projects = projs || [];
  }
  WorkerBee.prototype = Object.create(Employee.prototype);
  WorkerBee.prototype.constructor = WorkerBee;

  function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
  }
  SalesPerson.prototype = Object.create(WorkerBee.prototype);
  SalesPerson.prototype.constructor = SalesPerson;

  function Engineer(name, projs, mach) {
    WorkerBee.call(this, name, 'engineering', projs);
    this.machine = mach || '';
  }
  Engineer.prototype = Object.create(WorkerBee.prototype);
  Engineer.prototype.constructor = Engineer;
  Engineer.prototype.specialty = 'code';

  console.log(new Employee);
  console.log(new Manager);
  console.log(new WorkerBee);
  console.log(new SalesPerson);
  console.log(new Engineer);

  var mark = new WorkerBee;
  console.log(mark);

  mark.name = 'Doe, Mark';
  mark.dept = 'admin';
  mark.projects = ['navigator'];
  mark.bouns = 3000;
  console.log(mark);
  console.log(mark.specialty);

  var jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
  console.log(jane);
  console.log(jane.specialty);
})();
