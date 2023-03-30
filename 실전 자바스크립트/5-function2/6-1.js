function getValues1(numbers, greaterThan, lessThan) {
  return numbers.filter(item => greaterThan < item && item < lessThan);
}
function getValues2({ numbers, greaterThan, lessThan }) {
  return numbers.filter(item => greaterThan < item && item < lessThan);
}

const numbers = [10, 20, 30, 40];
const result1 = getValues1(numbers, 5, 25);
const result2 = getValues2({ numbers, greaterThan: 5, lessThan: 25 });
