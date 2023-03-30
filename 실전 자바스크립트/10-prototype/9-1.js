function Person(name) {
  this.name = name;
}
const person = new Person('mike');

console.log(Person.prototype);
console.log(Object.getPrototypeOf(person) === Person.prototype);
