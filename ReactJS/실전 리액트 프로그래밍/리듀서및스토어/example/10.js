import produce from "immer";

function createReducer(initialState, handlerMap) {
  return function (state = initialState, action) {
    // 리듀서 produce로 감싸기
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
