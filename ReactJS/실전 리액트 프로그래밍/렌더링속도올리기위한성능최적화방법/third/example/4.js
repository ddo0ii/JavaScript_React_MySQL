import React, { useEffect, useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => setFlag((prev) => !prev), 1000);
  });
  if (flag) {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="banana">바나나</p>
      </div>
    );
  } else {
    return (
      <div>
        <p key="apple">사과</p>
        <p key="pineapple">파인애플</p>
        <p key="banana">바나나</p>
      </div>
    );
  }
}

// key 속성값을 사용하면, 파인애플만 실제 돔에 추가할 수 있음
// key를 사용하지 못한다면, 차선책을 배열 내에서의 순서정보를 입력해야한다 >> 원소의 순서를 바꾸지 않는경우에 쓰는게 좋음 끝에만 영향이 있도록 하는경우
