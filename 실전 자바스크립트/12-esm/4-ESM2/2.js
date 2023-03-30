let v1 = 123;
const v2 = 'abc';
function v3() {}

export { v1, v2, v3 as v4 };
export default function sayHello() {
  console.log('hello~!');
}
