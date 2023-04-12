// 상단에 입력하면 좋음
MyComponent.propTypes = {
  // ...
};

// 함수에 이름을 부여하는게 좋다 >> 없으면 디버깅하기 어려움.
// 매개변수는 { prop1, prop2 }처럼 명명된 매개변수 문법으로 작성하는 것이 좋다
// MyComponent(props) 처럼 받아서 처리하면, props.prop1 처럼 계속 입력해야하기 때문에
export default function MyComponent({ prop1, prop2 }) {
  // ...
}

// 컴포넌트 바깥에 있는 변수와 함수는 파일의 가장 아래에 두는게 좋음
// 컴포넌트 안에있는 변수가, 변하지 않는 외부변수라는 것을 한눈에 파악하기 좋기 때문

// 커다란 크기의 객체를 생성할 때에는, 외부에서 생성하는 것이 좋음
// 컴포넌트 내에서 export default function~~ 안에서 생성하면, 컴포넌트 함수가 실행될 때마다 객체가 매번 생성이 되기 때문에 성능상 bad
// 그래서 안에서 console.log(COLUMNES);처럼 불러주면, 성능상으로도 가독성으로도 좋음
const COLUMNES = [
  { id: 1, name: "phoneNumber", width: 200, color: "white" },
  { id: 1, name: "city", width: 100, color: "grey" },
  // ...
];
const URL_PRODUCT_LIST = "/api/products";
function getTotalPrice({ price, total }) {
  // ...
}
