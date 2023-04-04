Promise.resolve().then(
  () => {
    throw new Error('some error');
  },
  error => {
    console.log(error);
  },
);
