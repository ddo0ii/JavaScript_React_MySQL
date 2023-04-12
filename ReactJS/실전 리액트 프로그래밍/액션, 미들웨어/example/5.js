import { createStore, applyMiddleware } from "redux";
// 3 먼저 첫번쩨 미들웨어 실행
const middleware1 = (store) => (next) => (action) => {
  console.log("middleware1 start");
  const result = next(action); //  4 next이기때문에  middleware2 start 가 출력 //(store) => (next) => (action) 가 실행된거라고 생각하면 편함
  console.log("middleware1 end"); // 9 출력
  return result;
};
const middleware2 = (store) => (next) => (action) => {
  console.log("middleware2 start");
  const result = next(action); //  5 다음 미들웨어가 없어서 myReducer로 가는것임
  console.log("middleware2 end");
  return result; // 8 return 후 middleware1의 next로 다시가서 middleware1 end가 됨
};
const myReducer = (state, action) => {
  console.log("myReducer"); // 6 출력
  return state; // 7 다시 나가서 middleware2 end가 찍히게 됨
};
const store = createStore(myReducer, applyMiddleware(middleware1, middleware2));
// 1 action 발생시키는 간단한 코드
store.dispatch({ type: "someAction" }); // 2 action발생시, middleware부터 처리가 되는 것
