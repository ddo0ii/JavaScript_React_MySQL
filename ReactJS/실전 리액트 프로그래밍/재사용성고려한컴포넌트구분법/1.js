// 코드의 재사용화와 가독성을 높이려면 관심사의 분리(복잡한 코드를 비슷한 기능을 하는 코드끼리 모아서 별도로 관리)가 필요
// 아래는 setDoneList의 name을 수정하는 코드인데
// 여기서 이름을 수정하면, 부모가 가진 데이터와 정합이 안맞는다. >> 대개 버그 발생
// 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하는 것은 좋지 않음
// 상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋다
function TodoList({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChangeName(key, name) {
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
    );
  }
  // ...
}
