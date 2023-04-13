// 전체 코드를 App.js 에 붙여넣어서 테스트 해보세요
import { createStore } from "redux";
import { createReducer } from "./redux-helper";

const INITIAL_STATE = { value: 0 };
const reducer = createReducer(INITIAL_STATE, {
  INCREMENT: (state) => (state.value += 1),
});
// reducer에서 store 생성시 createStore 함수 이용하면 됨
// store - 상태값 저장, 액션 처리 끝남을 외부에 알려주는 역할
const store = createStore(reducer);

let prevState;
// 외부처리 끝남은 store의 subscribe메서드를 호출해서 아래와 같이 함수를 입력하면 됨
store.subscribe(() => {
  const state = store.getState();
  if (state === prevState) {
    console.log("상탯값 같음");
  } else {
    console.log("상탯값 변경됨");
  }
  prevState = state;
});

// 그래서 아래의 각 액션이 끝나고, store.subscribe함수가 호출 될 것임
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "OTHER_ACTION" });
store.dispatch({ type: "INCREMENT" });

// 출력
// 상태값 변경됨
// 상태값 같음
// 상태값 변경됨
