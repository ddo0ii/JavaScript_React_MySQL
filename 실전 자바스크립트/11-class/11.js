class Person {
  static CURRENT_ID = 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = Person.CURRENT_ID++;
  }
  static getYounger(p1, p2) {
    return p1.age <= p2.age ? p1 : p2;
  }
}

const person1 = new Person('mike', 23);
const person2 = new Person('jane', 32);
const younger = Person.getYounger(person1, person2);
console.log(younger.name);
console.log(Person.CURRENT_ID);
