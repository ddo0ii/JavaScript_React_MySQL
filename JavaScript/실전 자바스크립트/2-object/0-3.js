const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
console.log(typeof arr === 'object');
console.log(Object.values(arr));

console.log(arr.map(item => item + 1));
console.log(arr.filter(item => item >= 2));
console.log(arr.reduce((acc, item) => acc + item, 0));
