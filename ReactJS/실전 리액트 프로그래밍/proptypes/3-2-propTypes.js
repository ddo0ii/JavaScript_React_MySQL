// isRequired는 필수적 요소
// oneOf는 주어진 것 중 그것만 타입으로 할 수 있는 것
// 함수를 정의할 수는 있지만, 함수의 자세한 타입을 정의할 수는 없음 >> 주석으로 자세한 타입을 적어주면 좋음
import PropTypes from "prop-types";

User.propTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(["gold", "silver", "bronze"]),
  onChangeName: PropTypes.func, // (name: string) => void
  onChangeTitle: PropTypes.func.isRequired,
};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
  function onClick1() {
    const msg = `type: ${type}, age: ${age ? age : "알 수 없음"}`;
    console.log(msg, { color: type === "gold" ? "red" : "black" });
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

function goMalePage() {}
function goFemalePage() {}

// App.js에서 아래와 같이 입력하면된다
{
  /* <User onChangeTitle={() => {}} male={true} type={"gold"} />; */
}
