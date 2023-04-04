function requestData() {
  const p = Promise.resolve(10);
  p.then(data => {
    return data + 20;
  });
  return p;
}
requestData().then(v => {
  console.log(v);
});
