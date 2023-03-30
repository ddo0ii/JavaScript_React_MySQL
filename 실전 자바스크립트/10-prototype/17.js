function Person() {
  this.sayHello = function () {
    console.log('hello');
  };
}
function Animal() {
  this.sayHello = function () {
    console.log('hm...');
  };
}
function makeInstanceOf(obj) {
  return new obj.constructor();
}
const person = new Person();
const animal = new Animal();
const newInst = makeInstanceOf(person);
newInst.sayHello();
