// 객체 또한 함수와 동일하게 매번 새로운 객체로 인식
function SelectFruit({ selectedFruit, onChange }) {
  // ...
  return (
    <div>
      <Select
        options={[
          { name: "apple", price: 500 },
          { name: "banana", price: 1000 },
          { name: "orange", price: 1500 },
        ]}
        selected={selectedFruit}
        onChange={onChange}
      />
      {/* ... */}
    </div>
  );
}
