Promise.resolve(10)
  .then(data => {
    console.log('onThen', data);
    return data + 1;
  })
  .catch(error => {
    console.log('onCatch');
    return 100;
  })
  .finally(() => {
    console.log('onFinally');
  })
  .then(data => {
    console.log('onThen', data);
    return data + 1;
  });
