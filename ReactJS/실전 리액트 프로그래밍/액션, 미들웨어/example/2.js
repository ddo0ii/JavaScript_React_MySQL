// 보통은 아래와 같이 action creator 함수를 작성하여
function addTodo({ title, priority }) {
  return { type: "todo/ADD", title, priority };
}
function removeTodo({ id }) {
  return { type: "todo/REMOVE", id };
}
function removeAllTodo() {
  return { type: "todo/REMOVE_ALL" };
}
// 아래와 같이 사용함
store.dispatch(addTodo({ title: "영화 보기", priority: "high" }));
store.dispatch(removeTodo({ id: 123 }));
store.dispatch(removeAllTodo());
