class Person {
  name = 'mike';
  constructor() {
    console.log(this.name);
  }
}

class Programmer extends Person {
  name = 'jane';
}

const person1 = new Programmer();
console.log(person1.name);
