class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const person = new Person('mike');
person.name = 'jane';
console.log(person.name);
console.log(Object.keys(person));
