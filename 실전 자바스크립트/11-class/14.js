class PersonArray extends Array {
  filterYounger(age) {
    return this.filter(item => item.age <= age);
  }
}

const arr = new PersonArray(
  { name: 'mike', age: 20 },
  { name: 'jane', age: 30 },
  { name: 'jack', age: 40 },
);
const arr2 = arr.filterYounger(35);
console.log(arr2);

const arr3 = arr2.filterYounger(25);
console.log(arr3);
