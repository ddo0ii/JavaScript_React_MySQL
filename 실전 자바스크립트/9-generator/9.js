function* map(iter, mapper) {
  for (const v of iter) {
    yield mapper(v);
  }
}
function* filter(iter, test) {
  for (const v of iter) {
    if (test(v)) {
      yield v;
    }
  }
}
function* take(n, iter) {
  for (const v of iter) {
    if (n <= 0) return;
    yield v;
    n--;
  }
}

function* naturalNumbers() {
  let v = 1;
  while (true) {
    yield v++;
  }
}

const values = naturalNumbers();
const result = take(
  3,
  map(
    filter(values, n => n % 2 === 0),
    n => n * 10,
  ),
);
console.log([...result]);
