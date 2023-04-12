import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>사과</p>
        <p>바나나</p>
        <p>파인애플</p>
      </div>
    );
  }
}

// 요소 추가 삭제는 해당요소만 돔에서 함!
// 기존요소는 그냥 둠

// 이 경우에는 바나나도 영향을 받음!
// 중간의 요소가 변경되면, 뒤에있는 요소가 변경되지않았다는것을 알지못함
// 연산이 더 많아지기에 그냥 그렇게 함! 그게 더 효율적
// 그래서 순서정보를 이용함
