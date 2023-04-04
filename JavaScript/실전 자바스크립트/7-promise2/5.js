function requestData() {
  console.log('called requestData');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

let cachedPromise;
function getData() {
  cachedPromise = cachedPromise || requestData();
  return cachedPromise;
}
getData().then(v => console.log(v));
getData().then(v => console.log(v));
