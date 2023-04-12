import { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }
  // 의존성 배열을 되도록 사용하지 않도록 하되,
  // 함수의 실행시점을 의존성 배열로 관리하지 않고 부수효과 함수 내에서 처리를 하면
  // if (!user || user.id !== userId)
  // 부수효과 함수 안에서 사용하는 모든 변수는 최신화 된 값을 참조함으로 안심할 수 있다
  // 그래서 useCallback같은 것을 사용하지않아도 되는 것이지!
  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });
  // ...
}
