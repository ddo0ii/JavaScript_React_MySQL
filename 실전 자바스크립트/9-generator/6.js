function* f1() {
  // ...
}
const gen = f1();
console.log(gen[Symbol.iterator]() === gen);
