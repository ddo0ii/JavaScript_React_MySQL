import React from "react";

export default function App({ user }) {
  // ...
  return (
    <div>
      <p>사용자 상세 정보</p>
      <UserDetail key={user.id} user={user} />
    </div>
  );
}

function UserDetail({ user }) {
  // ...
}

// key를 이용해 unmount시키는 것이 유용한 때도 있다
// 부모에서 user를 넘기고있는데, UserDetail에서 관리하는 상태값이 user에 관한것일 것이다.
// user가 변경되었을때, 사용자 자체가 변경되었을 때에는 UserDetail안에서 유지하던 값을 초기화하고 싶을 수 있다.
// key={user.id} 로 user의 id를 입력하면, 이 컴포넌트는 유저가 변경되었을 때 상태값이 모두 초기화 된다
