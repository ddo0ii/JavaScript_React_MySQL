const idSymbol = Symbol('id');
const obj = { id: 123 };
obj[idSymbol] = 456;
console.log(obj);

const arr = [];
console.log(arr[Symbol.iterator]);
