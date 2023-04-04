const add = (a, b) => {
  if (a <= 0 || b <= 0) {
    throw new Error('must be positive number');
  }
  return a + b;
};
