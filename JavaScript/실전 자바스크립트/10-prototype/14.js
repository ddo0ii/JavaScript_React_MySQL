function Person(name) {
  this.name = name;
  this._salary = 0;
}
Person.prototype = {
  setSalary(salary) {
    this._salary = Math.max(0, Math.min(1000, salary));
  },
  getSalary() {
    return this._salary;
  },
};
const person1 = new Person('mike');

person1.setSalary(2000);
console.log(person1.getSalary());

const person2 = new Person('jane');
console.log(person1.getSalary === person2.getSalary);
