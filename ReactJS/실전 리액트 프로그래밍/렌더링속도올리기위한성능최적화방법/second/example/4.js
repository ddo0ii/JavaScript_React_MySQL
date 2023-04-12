import { useState } from "react";

function Parent() {
  // 상태값 변경함수는 한번생성되고 다시 생성되지않기 때문에
  const [selectedFruit, setSelectedFruit] = useState("apple");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{`count: ${count}`}</p>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      {/* setSelectedFruit 와 같이 상태값 변경함수를 그대로 입력해주면 간단히 해결 */}
      <SelectFruit selected={selectedFruit} onChange={setSelectedFruit} />;
    </div>
  );
}

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
        // 하지만 아래와 같이 다른방법이 있다면 이 방식은 힘들겠다
        onChange={(v) => {
          //...
          setSelectedFruit(v);
        }}
      />
      ;
    </div>
  );
}
