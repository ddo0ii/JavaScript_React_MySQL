function requestData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

Promise.race([
  requestData(),
  new Promise((_, reject) => setTimeout(reject, 3000)),
])
  .then(data => console.log('fulfilled', data))
  .catch(error => console.log('rejected'));
