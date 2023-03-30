const [{ prop: x } = { prop: 123 }] = [];
console.log(x);
const [{ prop: x } = { prop: 123 }] = [{}];
console.log(x);
