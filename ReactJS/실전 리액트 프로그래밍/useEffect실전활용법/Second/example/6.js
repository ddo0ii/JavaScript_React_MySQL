import { useEffect } from "react";
// 의존성 배열이 자주 변경되는 문제를 해결할수는 있지만, 상황따라 마땅한 방법 없을때도 있음
// 속성값으로 전달되는 "onClick" 이러한 함수는 자주 변경되는 경우가 많음
// 이런것들은 내용은 그대로인데, 렌더링할때마다 변경되는 경우가 많음
// 이로인해 아래와 같은 부수효과 함수(useEffect)가 [onClick]로 불필요하게 자주 호출될수도 있음

export default function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener("click", () => {
      onClick();
      // ...
    });
  }, [onClick]);
  // ...
}
