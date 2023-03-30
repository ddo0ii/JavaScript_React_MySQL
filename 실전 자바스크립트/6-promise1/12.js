function requestData() {
  return fetch()
    .catch(error => {
      // ...
      return null;
    })
    .finally(() => {
      sendLogToServer('requestData finished');
    });
}
requestData().then(data => console.log(data));
