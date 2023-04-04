function requestData(value) {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('requestData:', value);
      resolve(value);
    }, 1000),
  );
}
async function printData() {
  const data1 = await requestData(10);
  const data2 = await requestData(20);
  console.log(data1, data2);
}
printData();
