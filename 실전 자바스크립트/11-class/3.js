class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log('name is too short');
      return;
    }
    this._name = value;
  }
}

const person = new Person('mike');
console.log(person.name);
person.name = 'ab';
console.log(person.name);
