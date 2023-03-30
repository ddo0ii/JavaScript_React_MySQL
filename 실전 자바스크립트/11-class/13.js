// public, protected, private
class Person {
  #name = '';
  _age = 23;
  constructor(name) {
    this.#name = name;
  }
  // #sayHello() {
  //   console.log(`hello~ ${this.#name}!`);
  // }
}
class Programmer extends Person {
  sayHello() {
    console.log(this.name);
    console.log(this['#name']);
  }
}

const person1 = new Programmer('mike');
person1.sayHello();
console.log(person1.name);
console.log(person1['#name']);
