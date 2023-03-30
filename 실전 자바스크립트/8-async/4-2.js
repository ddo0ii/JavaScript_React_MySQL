async function getData() {
  console.log('getData 1');
  await Promise.reject();
  console.log('getData 2');
  await Promise.resolve();
  console.log('getData 3');
}
getData()
  .then(() => console.log('fulfilled'))
  .catch(error => console.log('rejected'));
