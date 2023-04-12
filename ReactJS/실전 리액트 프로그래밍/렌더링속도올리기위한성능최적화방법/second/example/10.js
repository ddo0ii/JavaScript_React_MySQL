// 변경되어야하는 값이 변경되지않는 경우
import { useState } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const [newFruit, setNewFruit] = useState("");
  function addNewFruit() {
    // fruits.push(newFruit);    // 이렇게 하면안되고,
    setFruits([...fruits, newFruit]); // 로 해야한다
    setNewFruit("");
  }
  // ...
  return (
    <div>
      <Select options={fruits} selected={selectedFruit} onChange={onChange} />
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
