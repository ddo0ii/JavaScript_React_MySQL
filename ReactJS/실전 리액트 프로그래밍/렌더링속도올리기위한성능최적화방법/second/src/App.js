import React, { useState } from "react";

export default function App() {
  return <SelectFruit />;
}

function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    // 아래와 같이 하면안됨 >> 추가가 안됨
    // fruits.push(newFruit);
    // setFruits(fruits);

    // 이렇게 해야함!
    // 선택값은 불변 변수로 해야함
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }
  // ...
  return (
    <div>
      <Select options={fruits} />
      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addNewFruit}>추가하기</button>
      {/* ... */}
    </div>
  );
}

const Select = React.memo(({ options }) => (
  <div>
    {options.map((item, i) => (
      <p key={i}>{item}</p>
    ))}
  </div>
));
