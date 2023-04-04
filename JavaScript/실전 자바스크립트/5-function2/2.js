function getDefault() {
  console.log('called getDefault');
  return 1;
}
function printLog(a = getDefault()) {
  console.log({ a });
}
printLog();
printLog(3);
