import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({ username: "unknown", age: 0 });

export default function App() {
  const [user, setUser] = useState({ username: "mike", age: "23" });
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  console.log("App Render");
  return (
    <div>
      <UserContext.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
    </div>
  );
}

const Profile = React.memo(function () {
  console.log("Profile Render");
  return (
    <div>
      <Greeting />
    </div>
  );
});

function Greeting() {
  console.log("Greeting Render");
  const { username } = useContext(UserContext);
  return <p>{`${username}님 안녕하세요`}</p>;
}
