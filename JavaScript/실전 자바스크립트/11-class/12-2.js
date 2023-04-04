class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getYounger(p1, p2) {
    return p1.age <= p2.age ? p1 : p2;
  }
  printName = () => {
    console.log(this.name);
  };
}
class Programmer extends Person {
  sayHello() {
    console.log(`hello~ I'm Programmer`);
  }
}

const p1 = new Programmer('mike', 23);
