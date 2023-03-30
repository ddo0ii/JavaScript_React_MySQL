function requestData() {
  return fetch()
    .then(data => {
      doSync();
      console.log(data);
    })
    .catch(error => console.log(error));
}
