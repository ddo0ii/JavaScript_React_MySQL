import { useReducer, useEffect } from "react";

// dispatch는 변하지 않는 값 (의존성 배열로 빈 배열을 입력했다)
// 현재는 의존성 배열이 전혀 입력되지않은 상태이다
// 값을 변경하는 로직은 reducer에서 작성

// useReducer를 사용하면, 다양한 액션과 상태값을 관리하기 용이하고, 상태값 변경 로직을 여러곳에서 재사용하기에도 좋음

export default function Timer({ initialTotalSeconds }) {
  const [state, dispatch] = useReducer(reducer, {
    hour: Math.floor(initialTotalSeconds / 3600),
    minute: Math.floor((initialTotalSeconds % 3600) / 60),
    second: initialTotalSeconds % 60,
  });
  const { hour, minute, second } = state;
  useEffect(() => {
    const id = setInterval(dispatch, 1000);
    return () => clearInterval(id);
  });
  // ...
}

function reducer(state) {
  const { hour, minute, second } = state;
  if (second) {
    return { ...state, second: second - 1 };
  } else if (minute) {
    return { ...state, minute: minute - 1, second: 59 };
  } else if (hour) {
    return { hour: hour - 1, minute: 59, second: 59 };
  } else {
    return state;
  }
}
