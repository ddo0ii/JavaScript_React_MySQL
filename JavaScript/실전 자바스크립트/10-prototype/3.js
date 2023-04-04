const person = {
  name: 'mike',
};
const programmer = {
  language: 'javascript',
};
const frontendDev = {
  framework: 'react',
};

Object.setPrototypeOf(programmer, person);
Object.setPrototypeOf(frontendDev, programmer);
console.log(frontendDev.name, frontendDev.language);
console.log(
  frontendDev.__proto__.__proto__.name,
  frontendDev.__proto__.language,
);
