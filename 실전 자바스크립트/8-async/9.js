function asyncFunc1() {
  return new Promise(resolve => {
    console.log('처리 중1');
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
function asyncFunc2() {
  return new Promise(resolve => {
    console.log('처리 중2');
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}

async function getData() {
  const p1 = asyncFunc1();
  const p2 = asyncFunc2();
  const data1 = await p1;
  const data2 = await p2;
  console.log({ data1, data2 });
}
getData();
