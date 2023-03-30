function Person(name) {
  this.name = name;
}
const person1 = new Person('mike');

const newPrototype = {
  values: [],
  push(value) {
    this.values.push(value);
  },
  getValues() {
    return this.values;
  },
};
Person.prototype = newPrototype;
const person2 = new Person('jane');
console.log(Object.getPrototypeOf(person1) !== newPrototype);
console.log(Object.getPrototypeOf(person2) === newPrototype);

person2.push(1);
person2.push(2);
console.log(person2.getValues());
