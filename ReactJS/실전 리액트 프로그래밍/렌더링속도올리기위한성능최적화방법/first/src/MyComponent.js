import React from "react";

function MyComponent({ value1, value2 }) {
  console.log("MyComponent render");
  return (
    <div>
      <p>{`value1: ${value1}`}</p>
      <p>{`value2: ${value2}`}</p>
    </div>
  );
}

function isEqual(prevProps, nextProps) {
  return false;
}
// 현재는 false를 반환하기에 MyComponent를 무조건 적으로 반환
// 참을 반환하게 되면, 작동하지않는다
export default React.memo(MyComponent, isEqual);
