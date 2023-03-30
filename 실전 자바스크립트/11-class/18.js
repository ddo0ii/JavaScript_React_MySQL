class Person {
  walk() {
    console.log('walk');
  }
}
class Korean {
  sayHello() {
    console.log('안녕하세요');
  }
}
class KoreanPerson extends Korean, Person {}

function getParents() {
  return class extends Korean {
    walk() {
      console.log('walk');
    }
  };
}
class KoreanPerson extends getParents() {}

const k1 = new KoreanPerson();
k1.walk();
k1.sayHello();
