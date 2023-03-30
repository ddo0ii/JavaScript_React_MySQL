function* g1() {
  yield 2;
  yield 3;
}
function* g2() {
  yield 1;
  yield* [2, 3];
  yield 4;
}
console.log(...g2());
