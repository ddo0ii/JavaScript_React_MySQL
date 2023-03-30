function* genFunc() {
  throw new Error('some error');
}
function func() {
  const gen = genFunc();
  try {
    gen.next();
  } catch (e) {
    console.log('in catch');
  }
}
func();
