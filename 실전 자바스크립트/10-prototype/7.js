function Person(name) {
  // this = {};
  this.name = name;
  // return this;
}

const person = new Person('mike');
console.log(person.name);
