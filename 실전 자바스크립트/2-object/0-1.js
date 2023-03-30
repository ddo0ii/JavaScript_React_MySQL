const obj = {
  age: 21,
  name: 'mike',
};
const obj2 = new Object({
  age: 21,
  name: 'mike',
});
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
