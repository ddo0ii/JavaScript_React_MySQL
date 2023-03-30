class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello~ ${this.name}!`);
  }
}

class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
}

console.log(Object.getPrototypeOf(Programmer.prototype) === Person.prototype);
console.log(Object.getPrototypeOf(Programmer) === Person);
