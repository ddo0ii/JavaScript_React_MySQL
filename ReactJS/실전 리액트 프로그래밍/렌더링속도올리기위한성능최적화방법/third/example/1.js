import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  // children 부분은 같고, 부모의 태그가 같다 (div와 span)
  // div와 같은 요소의 타입을 변경하면 해당 요소의 모든 자식요소도 같이 변경됨
  // 자식이 컴포넌트라면, 해당 컴포넌트는 언마운트 되고 다시 마운트됨
  // 그러면서 상태값도 초기화 됨
  // 자식요소가 돔이라면, 실제 돔에서 삭제되고 다시 추가될 것
  // 자식요소가 많은 요소의 타입을 변경하면, 화면이 끊기는 느낌 듬
  if (flag) {
    return (
      <div>
        <Counter />
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <span>
        <Counter />
        <p>사과</p>
        <p>바나나</p>
      </span>
    );
  }
}

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setTimeout(() => setCount((prev) => prev + 1), 100);
    return () => clearTimeout(id);
  });
  return <p>count: {count}</p>;
}

// 여기서는 0.1초마다 부모의 타입이 변경되기때문에, 상태값도 초기화 됨
