async function getData() {
  const [data1, data2] = await Promise.all([asyncFunc1(), asyncFunc2()]);
  // ...
}
