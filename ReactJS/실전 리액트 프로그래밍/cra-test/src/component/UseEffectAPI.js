import React, { useState } from "react";
import useUser from "../hooks/useUser";

function Profile({ userId }) {
  const user = useUser(userId);
  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

function UseEffectAPI() {
  const [userId, setUserId] = useState(0);
  return (
    <>
      <Profile userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>userId 변경</button>
    </>
  );
}
export default UseEffectAPI;
