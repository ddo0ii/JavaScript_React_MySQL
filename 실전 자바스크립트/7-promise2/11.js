requestData1()
  .then(result1 => {
    return Promise.all([result1, requestData2(result1)]);
  })
  .then(([result1, result2]) => {
    // ...
  });
