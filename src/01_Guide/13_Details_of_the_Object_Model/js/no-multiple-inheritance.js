/* 多重継承はなし */
(function(){
  function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
  }

  function WorkerBee(name, dept, projs) {
    Employee.call(this, name, dept);
    this.projects = projs || [];
  }
  WorkerBee.prototype = Object.create(Employee.prototype);

  function Hobbyist(hobby) {
    this.hobby = hobby || 'scuba';
  }
  Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd'];

  function Engineer(name, projs, mach, hobby) {
    this.base1 = WorkerBee;
    this.base1(name, 'engineering', projs);
    this.base2 = Hobbyist;
    this.base2(hobby);
    this.machine = mach || '';
  }
  Engineer.prototype = new WorkerBee;

  var dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
  console.log(dennis.name);
  console.log(dennis.dept);
  console.log(dennis.projects);
  console.log(dennis.machine);
  console.log(dennis.hobby);
  console.log(dennis.equipment); // undefined
})();
