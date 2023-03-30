const person = {
  name: 'mike',
  sayHello() {
    console.log('hello!');
  },
};
const programmer = {
  language: 'javascript',
};

Object.setPrototypeOf(programmer, person);
programmer.sayHello();
