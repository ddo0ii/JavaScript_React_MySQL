class Person {
  constructor() {
    console.log(`Person's constructor`);
  }
  static id = 'abc';
}
class Programmer extends Person {}

console.log(Object.getPrototypeOf(Programmer) === Person);

const person = new Person();
// Person.constructor();
// console.log(Person.constructor === Function);
// console.log(new person.constructor());

console.log(Object.getPrototypeOf(Person) === Function.prototype);
console.log(Person.prototype);

console.log(Programmer.prototype);
console.log(Programmer.__proto__);
console.log(Person.prototype);
console.log(Object.getPrototypeOf(Programmer) === Person);
