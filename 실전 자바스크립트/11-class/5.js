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

const p1 = new Programmer('mike', 'javascript');
p1.sayHello();
