Promise.reject('err')
  .then(() => console.log('then 1'))
  .then(() => console.log('then 2'))
  .then(
    () => console.log('then 3'),
    () => console.log('then 4'),
  )
  .then(
    () => console.log('then 5'),
    () => console.log('then 6'),
  );
