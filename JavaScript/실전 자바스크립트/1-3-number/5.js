// Number.MAX_SAFE_INTEGER = 9007199254740991
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(9007199254740995 - 10);
console.log(9007199254740995n - 10n);

const a = 9007199254740995;
const b = 10;
const result = a - b;
console.log(
  Number.isSafeInteger(a),
  Number.isSafeInteger(b),
  Number.isSafeInteger(result),
);
console.log('9007199254740995 - 10 =', result);

const a = 9007199254740991;
const b = 10;
const result = a - b;
console.log(
  Number.isSafeInteger(a),
  Number.isSafeInteger(b),
  Number.isSafeInteger(result),
);
console.log('9007199254740991 - 10 =', result);
