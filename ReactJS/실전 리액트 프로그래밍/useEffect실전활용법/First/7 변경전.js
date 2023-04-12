// 부수효과 안에 있는 함수를 바깥에서도 사용하고 싶다면? >> 바깥에 함수가 꺼내져있어야 함
// 함수를 꺼내게 되면, 의존성 배열은 함수를 입력해야함
import { useState, useEffect } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchAndSetUser(needDetail) {
      const data = await fetchAndSetUser(userId, needDetail);
      setUser(data);
    }
    fetchAndSetUser(false);
  }, [userId]);

  if (!user) {
    return <h1>로딩...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createdAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}
