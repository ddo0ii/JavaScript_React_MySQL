function f1() {
  const v1 = 123;
  console.log(v1);
}
const v2 = 456;
function f2() {
  f1();
  console.log(v2);
}
f2();
