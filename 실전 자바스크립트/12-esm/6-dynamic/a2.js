if (Math.random() < 0.5) {
  import('./b.js').then(({ b1 }) => {
    console.log(b1);
  });
} else {
  import('./c.js').then(({ c1 }) => {
    console.log(c1);
  });
}
