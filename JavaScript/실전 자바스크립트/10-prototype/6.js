const person = {
  name: 'mike',
};
const programmer = {
  language: 'javascript',
};

Object.setPrototypeOf(programmer, person);
for (const prop in programmer) {
  console.log(prop);
}

for (const prop in programmer) {
  if (programmer.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

for (const prop of Object.keys(programmer)) {
  console.log(prop);
}
