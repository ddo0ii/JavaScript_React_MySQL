import { useState, useEffect } from "react";

export default function Profile({ userId }) {
  const [user, setUser] = useState();
  // 여기서는 Profile 컴포넌트가 렌더링 될 때마다 노출되기 때문에, 서버의 API를 호출하는 코드가 항상 실행
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  });

  // 그래서 아래와 같이 빈배열을 입력해서, 마운트 된 후에 한번만 호출되도록 할 수 있음
  // 근데 이는 userId가 변경되어도 새로운 사용자 정보를 가져오지 못하기 때문에
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, []);

  // 2.js로!!!!!
  // ...
}
