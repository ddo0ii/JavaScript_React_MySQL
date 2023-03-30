const person = {
  name: 'mike',
};
const prototype = Object.getPrototypeOf(person);
console.log(typeof prototype);
console.log(person.__proto__ === prototype);
