import React, { useState, useLayoutEffect, useRef } from "react";

export default function App() {
  const [width, setWidth] = useState(200);
  const boxRef = useRef();
  // 브라우저가 화면을 그리기 전에 아래의 useLayoutEffect가 동기로 실행된다
  // 렌더링 결과가 돔에 반영된 직후에 호출
  useLayoutEffect(() => {
    console.log(boxRef.current.getBoundingClientRect().width);
    if (width > 500) {
      setWidth(500);
    }
    // 아래는 연산 많은 함수
    // 그림이 늦게 그려짐
    // 그래서 연산이 많은 경우 useLayoutEffect를 사용하면 시간이 오래 걸리기에 연산이 많은경우 지양하는 것이 좋음
    // 그래서 useEffect를 권장한다 >> 바로 실행됨
    let v = 0;
    for (let i = 0; i < 10000000; i++) {
      v += i * 2 + i;
    }
    console.log(v);
  }, [width]);
  return (
    <div>
      <div
        ref={boxRef}
        style={{ width, height: 100, backgroundColor: "green" }}
      >
        test
      </div>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 499 + 1);
          setWidth(value);
        }}
      >
        500 이하
      </button>
      <button
        onClick={() => {
          const value = Math.floor(Math.random() * 500 + 501);
          setWidth(value);
        }}
      >
        500 이상
      </button>
    </div>
  );
}
