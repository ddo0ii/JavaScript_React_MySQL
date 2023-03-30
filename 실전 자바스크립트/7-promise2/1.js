function requestData1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
function requestData2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}

requestData1()
  .then(data => {
    console.log(data);
    return requestData2();
  })
  .then(data => {
    console.log(data);
  });
