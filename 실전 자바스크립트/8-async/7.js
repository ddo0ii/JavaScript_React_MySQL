function getDataPromise() {
  return asyncFunc1()
    .then(data1 => Promise.all([data1, asyncFunc2(data1)]))
    .then(([data1, data2]) => {
      return asyncFunc3(data1, data2);
    });
}
async function getDataAsync() {
  const data1 = await asyncFunc1();
  const data2 = await asyncFunc2(data1);
  return asyncFunc3(data1, data2);
}
