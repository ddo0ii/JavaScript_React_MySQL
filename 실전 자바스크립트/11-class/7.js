class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello~ ${this.name}!`);
  }
  getRandom() {
    return Math.floor(Math.random() * 10);
  }
}

class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  sayHello() {
    super.sayHello();
    console.log(`I like ${this.language}.`);
    console.log(`Your lucky number is ${this.getRandom()}`);
  }
  getRandom() {
    return 20 + Math.floor(Math.random() * 10);
  }
}

const p1 = new Programmer('mike', 'javascript');
p1.sayHello();
