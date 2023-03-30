class Person {}
function Person2() {}

const person1 = new Person();
const person2 = new Person2();
const arr = [];

console.log(person1 instanceof Person);
console.log(person2 instanceof Person2);
console.log(arr instanceof Array);
