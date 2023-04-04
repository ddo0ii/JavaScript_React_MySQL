// 참고 링크: https://stackoverflow.com/a/45332959/12896859
const aggregation = (baseClass, ...mixins) => {
  class base extends baseClass {
    constructor(...args) {
      super(...args);
      mixins.forEach(mixin => {
        copyProps(this, new mixin());
      });
    }
  }
  let copyProps = (target, source) => {
    // this function copies all properties and symbols, filtering out some special ones
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach(prop => {
        if (
          !prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/,
          )
        )
          Object.defineProperty(
            target,
            prop,
            Object.getOwnPropertyDescriptor(source, prop),
          );
      });
  };
  mixins.forEach(mixin => {
    // outside contructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });
  return base;
};

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
class KoreanPerson extends aggregation(Korean, Person) {}

const k1 = new KoreanPerson();
k1.walk();
k1.sayHello();
