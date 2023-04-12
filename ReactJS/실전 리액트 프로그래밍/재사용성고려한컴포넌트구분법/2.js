// 컴포넌트가 비지니스 로직이나 상태값을 가지고 있으면, 재사용하기 어렵다
// 재사용 가능한것과 아닌것을 따로 컴포넌트로 분리하는것이 좋다

// - 재사용성이 좋은 컴포넌트
// 비지니스 로직이 없는 컴포넌트
// 상태값이 없다. 단, 마우스오버와 같은 UI효과를 위한 상탯값은 제외

import React, { useState } from "react";
import { getNextFriend } from "./data";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [ageLimit, setAgeLimit] = useState(MAX_AGE_LIMIT);

  const friendsWithAgeLimit = friends.filter((item) => item.age <= ageLimit);
  function onAdd() {
    const friend = getNextFriend();
    setFriends([...friends, friend]);
  }
  function onChangeOption(e) {
    const value = Number(e.currentTarget.value);
    setAgeLimit(value);
  }

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <div>
        <select onChange={onChangeOption} value={ageLimit}>
          {AGE_LIMIT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        세 이하만 보기
      </div>
      <ul>
        {friendsWithAgeLimit.map((friend) => (
          <li key={friend.id}>{`${friend.name} (${friend.age})`}</li>
        ))}
      </ul>
    </div>
  );
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
