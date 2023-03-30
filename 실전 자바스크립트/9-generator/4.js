function* f1() {
  try {
    console.log('f1-1');
    yield 10;
    console.log('f1-2');
    yield 20;
  } catch (e) {
    console.log('f1-catch', e);
    yield 30;
    console.log('f1-3');
    yield 40;
    console.log('f1-4');
  }
}
const gen = f1();
console.log(gen.next());
console.log(gen.throw('some error'));
console.log(gen.next());
console.log(gen.next());
