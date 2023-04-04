function requestData() {
  return Promise.resolve()
    .then(doSync)
    .then(fetch)
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
}
