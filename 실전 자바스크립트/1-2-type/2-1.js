// 자바스크립트의 8가지 기본 타입
// number, bigint, string, boolean, object, symbol, undefined, null

const v1 = 12;
const v2 = 123456789123456789123456789n;
const v3 = 'ab';
const v4 = true;
console.log(typeof v1, typeof v2, typeof v3, typeof v4);

const v5 = {};
const v6 = Symbol('abc');
const v7 = undefined;
const v8 = null;
console.log(typeof v5, typeof v6, typeof v7, typeof v8);
