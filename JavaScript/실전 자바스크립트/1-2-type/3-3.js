console.log(global[Symbol.toStringTag]);
// console.log(window[Symbol.toStringTag]);
console.log(Object.prototype.toString.call(global));
const person = {
  [Symbol.toStringTag]: 'Person',
};
console.log(Object.prototype.toString.call(person));
