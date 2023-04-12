import React from "react";
import { applyMiddleware, createStore } from "redux";
// action.meta에 delay라는 값이 있을 때
// setTimeout으로 딜레이를 해줘서 리듀서를 늦게 실행
// 만약에 없다면 호출을 하고 끝남

const delayAction = (store) => (next) => (action) => {
  const delay = action.meta?.delay;
  if (!delay) {
    return next(action);
  }
  const timeoutId = setTimeout(() => next(action), delay);
  // cancel을 통해 밖에서 next가 실행되는게 취소가 될 수 있게
  return function cancel() {
    clearTimeout(timeoutId);
  };
};

const myReducer = (state = { name: "mike" }, action) => {
  console.log("myReducer");
  if (action.type === "someAction") {
    return { name: "mike2" };
  }
  return state;
};
const store = createStore(myReducer, applyMiddleware(delayAction));
const cancel = store.dispatch({ type: "someAction", meta: { delay: 3000 } });
cancel();

export default function App() {
  return <div>실전 리액트</div>;
}
