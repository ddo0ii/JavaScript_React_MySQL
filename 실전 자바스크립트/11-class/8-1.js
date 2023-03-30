class Person {
  age = 23;
  constructor(name) {
    this.name = name;
  }
  printName = () => {
    console.log(this.name);
  };
}

console.log(Person.prototype.age, Person.prototype.printName);

const person1 = new Person('mike');
const person2 = new Person('jane');
person1.age = 100;
console.log(person1.age, person2.age);

setTimeout(person1.printName, 100);
