import produce from "immer";

// 전체를 produce로 감싸주고, 안에서 불변객체로 관리해야한다는 압박은 없어짐
function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD:
        draft.todos.push(action.todo); // 수정
        break;
      case REMOVE_ALL:
        draft.todos = [];
        break;
      case REMOVE:
        draft.todos = draft.todos.filter((todo) => todo.id !== action.id); // 전개연산자 필요 없음
        break;
      default:
        break;
    }
  });
}
