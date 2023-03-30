const add10 = function (a) {
  return 10 + b;
};

function apply(arr, op) {
  return arr.map(op);
}
apply([1, 2, 3], add10);

function makeAdd(v1) {
  return function (v2) {
    return v1 + v2;
  };
}
const add3 = makeAdd(3);
console.log(add3(10));
const add7 = makeAdd(7);
console.log(add7(10));
