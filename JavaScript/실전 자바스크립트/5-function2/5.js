function printLog(a) {
  const rest = Array.from(arguments).splice(1);
  console.log({ a, rest });
}
printLog(1, 2, 3);
