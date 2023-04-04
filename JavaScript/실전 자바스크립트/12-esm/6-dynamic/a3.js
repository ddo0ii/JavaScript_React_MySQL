async function main() {
  if (Math.random() < 0.5) {
    const { b1 } = await import('./b.js');
    console.log(b1);
  } else {
    const { c1 } = await import('./c.js');
    console.log(c1);
  }
}
main();
