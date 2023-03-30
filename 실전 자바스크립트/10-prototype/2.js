const person = {
  name: 'mike',
};
const programmer = {
  language: 'javascript',
};

Object.setPrototypeOf(programmer, person);
// programmer.__proto__ = person;
console.log(Object.getPrototypeOf(programmer) === person);
console.log(programmer.name);
