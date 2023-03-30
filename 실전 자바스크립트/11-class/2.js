class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello~ ${this.name}!`);
  }
}

console.log(typeof Person);
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
const person = new Person('mike');
console.log(Object.keys(person));

console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.sayHello);
