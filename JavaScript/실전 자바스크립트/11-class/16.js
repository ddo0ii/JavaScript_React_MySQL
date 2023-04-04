class Person {}
class Programmer extends Person {}

const person1 = new Programmer();

console.log(person1 instanceof Programmer);
console.log(person1 instanceof Person);
console.log(person1 instanceof Object);

console.log(person1.__proto__ === Programmer.prototype);
console.log(person1.__proto__.__proto__ === Person.prototype);
console.log(person1.__proto__.__proto__.__proto__ === Object.prototype);
