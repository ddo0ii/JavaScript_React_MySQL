function required() {
  throw new Error('no parameter');
}
function printLog(a = required()) {
  console.log({ a });
}
printLog(10);
printLog();
