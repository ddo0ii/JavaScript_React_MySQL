function getDataPromise() {
  asyncFunc1()
    .then(data => {
      console.log(data);
      return asyncFunc2();
    })
    .then(data => {
      console.log(data);
    });
}
async function getDataAsync() {
  const data1 = await asyncFunc1();
  console.log(data1);
  const data2 = await asyncFunc2();
  console.log(data2);
}
