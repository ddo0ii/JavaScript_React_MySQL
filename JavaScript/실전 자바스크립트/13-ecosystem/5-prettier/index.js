const person = { name: 'mike', age: 23, friends: [{ name: 'jone', age: 23 }] };

function f1(name, age) {
  console.log(name + ' is ');
  if (age > 10) {
    console.log('young');
  } else {
    console.log('old');
  }
}
