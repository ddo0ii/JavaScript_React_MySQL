function Person(name) {
  this.name = name;
}
const person = new Person('mike');

console.log(Object.getPrototypeOf(Person) !== Person.prototype);

console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Person) === Function.prototype);

console.log(Object.getPrototypeOf(Object) === Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);
