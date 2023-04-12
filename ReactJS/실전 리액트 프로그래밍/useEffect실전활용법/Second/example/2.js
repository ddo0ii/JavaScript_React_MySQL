import { useState, useEffect } from "react";
// 이전 상태값을 기반으로 다음 상태값을 계산하기 위해 상태값을 의존성 배열에 추가하는 경우가 있는데
// 지금은 count변수가 필요한데,
// 이러한 경우에는 3.js처럼 의존성 배열로 빈 배열을 입력하면된다
// setCount(count + 1);
// >>
// setCount((prev) => prev + 1);
// 그리하면, 3.js처럼 의존성배열에 count를 없앨 수 있다
export default function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]);
  // ...
}
