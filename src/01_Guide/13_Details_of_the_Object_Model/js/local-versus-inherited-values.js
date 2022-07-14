/* ローカル値と継承値 */
(function(){
  "use strict";

  function Employee() {
    // this.name = '';
    this.dept = 'general';
  }
  Employee.prototype.name = '';

  function WorkerBee() {
    this.projects = [];
  }
  WorkerBee.prototype = new Employee;

  var amy = new WorkerBee;

  Employee.prototype.name = 'Unknown';

  console.log(amy.name);
  console.log(amy.dept);
  console.log(amy.projects);
})();
