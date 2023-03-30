requestData1()
  .then(data => {
    console.log(data);
    return requestData2();
  })
  .then(data => {
    console.log(data);
    // ...
  });
