function getValues({ numbers, greaterThan = 0, lessThan = Number.MAX_VALUE }) {
  return numbers.filter(item => greaterThan < item && item < lessThan);
}

const numbers = [10, 20, 30, 40];
console.log(getValues({ numbers, greaterThan: 5, lessThan: 25 }));
console.log(getValues({ numbers, greaterThan: 15 }));
console.log(getValues({ lessThan: 25, numbers }));
// getValues(numbers, undefined, 25);
