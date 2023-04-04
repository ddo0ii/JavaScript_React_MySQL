Promise.reject(1).then(null, error => {
  console.log(error);
});
Promise.reject(1).catch(error => {
  console.log(error);
});
