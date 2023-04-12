// 의존성 배열에 필요한 변수를 입력하지 않았을때, 어떤 문제가 발생할까
// 아래에서는 value2값을 입력하지않았다
// value2가 변경이 되어도 부수효과 함수는 새로 생성이 되겠지만, 의존성 배열에는 v2가 없기 때문에 리액트는 방금 생성된 부수효과 함수를 무시하고,
// 이전에 생성된 부수효과 함수를 계속 사용
// 함수가 생성될 때는 그 함수가 생성될 당시의 지역변수를 기억하고 있음
// 이를 실행 컨텍스트라고 함!!!!!!!!!!!!
import { useState, useEffect } from "react";

export default function MyComponent() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  useEffect(() => {
    const id = setInterval(() => console.log(value1, value2), 1000);
    return () => clearInterval(id);
  }, [value1]); // 여기에 안넣음
  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>value1 증가</button>
      <button onClick={() => setValue2(value2 + 1)}>value2 증가</button>
    </div>
  );
}
