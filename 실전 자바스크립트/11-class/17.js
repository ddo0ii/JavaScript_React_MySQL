class Person {
  constructor(personId) {
    this.personId = personId;
  }
  static [Symbol.hasInstance](obj) {
    return !!obj.personId;
  }
}

const person1 = new Person(1);
const person2 = {
  personId: 2,
};
const person3 = {};

console.log(person1 instanceof Person);
console.log(person2 instanceof Person);
console.log(person3 instanceof Person);
