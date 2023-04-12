// JavaScript는 동적 타입언어 >> 편하긴하지만, 큰 프로그램의 경우에는 가능하면 정적타입언어 사용하면 좋음 >> 그래서 타입스크립트를 사용하지만
// 상황때문에 JavaScript를 사용할때, 속성값 타입을 정의할 수 있는 prop-types 패키지를 제공
// 그리고 당장 보아서 무슨타입인지 알아보기 어렵다!

User.propTypes = {};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : "알 수 없음"}`;
    log(msg, { color: type === "gold" ? "red" : "black" });
    // ...
  }
  function onClick2(name, title) {
    if (onChangeName) {
      onChangeName(name);
    }
    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
    // ...
  }
  // ...
  return null;
}
