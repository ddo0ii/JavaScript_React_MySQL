// 속성값으로 함수를 자식에게 넘겨줄 시, React.memo를 사용하였다 할 지라도
// 함수는 부모가 렌더링 될 떄마다 새로 생성되기 때문에 자식 또한 다시 렌더링

// fruit가 변경되었을때 계속 다시 렌더링
import { useState } from "react";

function Parent() {
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <SelectFruit
        selected={selectedFruit}
        onChange={(fruit) => setSelectedFruit(fruit)}
      />
    </div>
  );
}
