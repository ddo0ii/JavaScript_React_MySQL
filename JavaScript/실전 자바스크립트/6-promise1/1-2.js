function requestData1(callback) {
  // ...
  callback(data);
}
function requestData2(callback) {
  // ...
  callback(data);
}
function onSuccess1(data) {
  console.log(data);
  requestData2(onSuccess2);
}
function onSuccess2(data) {
  console.log(data);
  // ...
}
requestData1(onSuccess1);
