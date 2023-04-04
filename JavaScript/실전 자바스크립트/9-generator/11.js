function* g1() {
  yield 1;
  yield* [2, 3];
  yield 4;
}

function* g2() {
  yield 1;
  for (const value of [2, 3]) {
    yield value;
  }
  yield 4;
}
