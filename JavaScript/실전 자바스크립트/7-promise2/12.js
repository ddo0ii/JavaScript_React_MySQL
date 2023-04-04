function doSync() {
  throw new Error('some error');
}
function requestData() {
  doSync();
  return fetch()
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
