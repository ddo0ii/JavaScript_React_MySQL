import React from "react";
import { applyMiddleware, createStore } from "redux";

// 4 printLog는 store를 매개변수로 받아 next 함수를 반환하는 함수
// 5 next 함수는 action을 매개변수로 받아 다음 미들웨어 또는 reducer함수를 호출하고, 그 결과를 반환
// 6 printLog 함수는 이 next 함수를 다시 매개변수로 받아 action을 실행하기 전과 후의 상태를 로그로 출력하고,
// next 함수의 반환값을 그대로 반환
const printLog = (store) => (next) => (action) => {
  console.log(`prev state = ${JSON.stringify(store.getState())}`);
  const result = next(action);
  console.log(`next state = ${JSON.stringify(store.getState())}`);
  return result;
};

const myReducer = (state = { name: "mike" }, action) => {
  console.log("myReducer");
  if (action.type === "someAction") {
    return { name: "mike2" };
  }
  return state;
};
// 1 Redux의 createStore 함수를 사용하여 store를 생성
// 2 첫 번째 인자로는 상태를 변경하는 함수인 reducer(myReducer)를 전달
// 3 두 번째 인자로는 미들웨어(applyMiddleware)를 전달
const store = createStore(myReducer, applyMiddleware(printLog));
// 7 이후 store.dispatch 함수를 사용하여 someAction 타입의 액션을 디스패치
// 이 액션은 myReducer 함수에서 처리되어 상태가 변경
store.dispatch({ type: "someAction" });

// 8 App 함수는 단순히 "실전 리액트" 문자열을 반환하는 컴포넌트
export default function App() {
  return <div>실전 리액트</div>;
}
