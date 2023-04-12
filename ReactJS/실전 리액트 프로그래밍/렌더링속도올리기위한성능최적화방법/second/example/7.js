function SelectFruit({ selectedFruit, onChange }) {
  // ...
  return (
    <div>
      <Select options={FRUITS} selected={selectedFruit} onChange={onChange} />
      {/* ... */}
    </div>
  );
}

// 불변객체라면 분리하여 작성
const FRUITS = [
  { name: "apple", price: 500 },
  { name: "banana", price: 1000 },
  { name: "orange", price: 1500 },
];
