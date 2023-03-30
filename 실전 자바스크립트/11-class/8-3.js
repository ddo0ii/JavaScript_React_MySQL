class Person {
  sayHello() {
    console.log(`I'm Person`);
  }
}
class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log(`I'm Programmer`);
  }
}

console.log(Programmer.prototype.__proto__ === Person.prototype);
Object.setPrototypeOf(Programmer.prototype, {});

const person1 = new Programmer();
person1.sayHello();

const f1 = person1.sayHello;
f1();
