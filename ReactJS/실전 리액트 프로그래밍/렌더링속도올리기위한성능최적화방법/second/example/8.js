import { useState } from "react";

function SelectFruit({ selectedFruit, onChange }) {
  const [maxPrice, setMaxPrice] = useState(1000);
  // ...
  return (
    <div>
      <Select
        // filter일 경우 계속 새로 불러와야하니까!!!
        // 가변객체라면 useMemo 훅 사용
        options={FRUITS.filter((item) => item.price <= maxPrice)}
        selected={selectedFruit}
        onChange={onChange}
      />
      {/* ... */}
    </div>
  );
}

const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];
