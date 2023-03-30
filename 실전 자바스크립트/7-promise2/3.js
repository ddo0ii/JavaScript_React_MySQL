Promise.all([requestData1(), requestData2()]).then(([data1, data2]) => {
  console.log(data1, data2);
});
