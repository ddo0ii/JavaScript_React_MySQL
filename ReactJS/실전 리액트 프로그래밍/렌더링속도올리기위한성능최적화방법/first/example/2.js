const prevProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "low" },
    // ...
  ],
  // ...
};
const nextProps = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "high" },
    // ...
  ],
  // ...
};

prevProps.todos === nextProps.todos;
prevProps.todos[0] === nextProps.todos[0];
// memo함수를 사용하면, 속성값 비교함수를 통해 컴포넌트 렌더링 과정을 생략할 수 있는데
// 속성값 비교함수를 입력하지않으면, 리액트가 기본으로 갖고있는 함수가 사용됨
// 이전/이후 속성 값을 가지고 있을 때,  속성값 변경여부는 어떻게 알게될까?
// priority == low>> high로 변경됨
// prevProps.todos === nextProps.todos     >>로 비교가능
// 객체를 불변객체로 관리
// 데이터를 불변 데이터로 관리하면, 이전이후 값 단순 비교로 컴포넌트의 속성값이 변경되었는지 알수있음
// 상태 값을 불변객체로 관리하면, 렌더링 성능에 큰도움

// 새로운 객체를 만든다고 생각하면됨
const prevTodos = [1, 2, 3];
const nextTodos = [...todos, 4];
prevTodos === nextTodos;

// ----------------------------------------------------------------------------------------------------------

const prevProps2 = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "low" },
    // ...
  ],
  friends: [],
  // ...
};
const nextProps2 = {
  todos: [
    { title: "fix bug", priority: "high" },
    { title: "meeting with jone", priority: "high" },
    // ...
  ],
  friends: [],
  // ...
};

// 얕은 비교
const isEqual =
  prevProps.todos === nextProps.todos &&
  prevProps.friends === nextProps.friends;
