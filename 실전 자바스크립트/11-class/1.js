class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello~ ${this.name}!`);
  }
}

const person = new Person('mike');
person.sayHello();
