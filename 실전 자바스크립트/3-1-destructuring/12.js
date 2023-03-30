function getDefaultAge() {
  console.log('hello');
  return 0;
}
const obj = { age: undefined, grade: 'A' };
const { age = getDefaultAge(), grade } = obj;
console.log(age);
