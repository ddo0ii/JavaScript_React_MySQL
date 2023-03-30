Promise.resolve()
  .then(() => {
    throw new Error('some error');
  })
  .catch(error => {
    console.log(error);
  });
