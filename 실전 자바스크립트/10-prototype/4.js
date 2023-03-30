const person = {
  name: 'mike',
};
const programmer = {
  language: 'javascript',
};

Object.setPrototypeOf(programmer, person);
programmer.name = 'jane';
console.log(programmer.name);
console.log(person.name);
