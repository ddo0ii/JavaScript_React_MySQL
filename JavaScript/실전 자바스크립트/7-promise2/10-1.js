function requestData1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
function requestData2(param) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(param + 20);
    }, 1000);
  });
}

requestData1()
  .then(result1 => {
    return requestData2(result1);
  })
  .then((result1, result2) => {
    console.log({ result1, result2 });
  });
