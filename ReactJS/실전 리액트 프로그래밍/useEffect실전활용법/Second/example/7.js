// 만약 이를 해결하는 마땅한 방법이 떠오르지않는다면,useRef가 손쉬운 해결책이 될 수 있음
// (아래쪽 의존성 배열로 빈 배열을 입력하면된다)
// 이렇게 렌더링 될때마다, ref객체에 onClick함수를 넣어주면 됨
// 그리고 원래 사용하려고 한곳에서 ref객체를 이용해 함수를 호출하는 방식       onClickRef.current();

// 부수효과 내에서 사용된 ref객체는 의존성 배열에 추가할 필요가 없다
// 그런데, 의존성 배열에 이 함수를 입력하지않으려고 애써보이는데
// 불필요한 코드와 연산이 추가되기도 했음
// 하지만 이 모든 것은 의존성 배열을 관리하는 규칙을 지키기 위한 것
// 이것이 리액트 훅의 단점
import { useRef, useEffect } from "react";

export default function MyComponent({ onClick }) {
  const onClickRef = useRef();
  useEffect(() => {
    onClickRef.current = onClick;
  });
  useEffect(() => {
    window.addEventListener("click", () => {
      onClickRef.current();
      // ...
    });
    // ...
  });
  // ...
}

// ref 객체는 이렇게 컴포넌트 함수에서직접 변경해도 된다고 생각할 수 있지만, 문제가 있음
// 부수효과 함수에서 ref를 수정하는 이유는     onClickRef.current = onClick;
// 나중에 도입될 리액트의 concurrent mode 때문
// concurrent mode : 컴포넌트가 시행되었다 하더라도, 중간에 렌더링이 취소될 수 있음
// 렌더링은 취소되었는데 ref 객체에는 잘못된 값이 저장될 수 있음으로
// ref 객체는 이렇게 컴포넌트 함수에서 직접 수정하면 안됨  8.js   onClickRef.current = onClick;
// 단 concurrent mode로 동작하지 않는 리액트 버전에서는 문제가 되지는 않음
// Concurrent / Concurrency    : 동시적으로 / 동시성
// Parallel / Parallelism            : 병렬적으로 / 병렬
// 나중을 위해 7.js 처럼 작성하는 것이 좋다
// useEffect(() => {
//   onClickRef.current = onClick;
// });
