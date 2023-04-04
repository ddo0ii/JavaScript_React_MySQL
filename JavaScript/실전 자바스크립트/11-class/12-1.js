class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getYounger(p1, p2) {
    return p1.age <= p2.age ? p1 : p2;
  }
}
class Programmer extends Person {}

console.log(Programmer.getYounger);
console.log(Object.getPrototypeOf(Programmer) === Person);
