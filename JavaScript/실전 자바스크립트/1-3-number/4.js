// 자바스크립트 number => 64 bit 부동소수점(floating point)
//   부호(sign) 1 bit, 지수부(exponent) 11 bits, 가수부(fraction) 52 bits
//   (-1)^부호 * 가수부 * 10^지수부
// 53 bits precision
//   https://en.wikipedia.org/wiki/Double-precision_floating-point_format
// -(2^53 - 1) ~ (2^53 - 1)
// 9007199254740991, 약 16자리
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
