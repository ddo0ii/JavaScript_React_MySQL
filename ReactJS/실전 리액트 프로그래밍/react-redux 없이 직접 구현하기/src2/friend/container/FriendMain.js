import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

export default function FriendMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        forceUpdate();
      }
      prevFriends = friends;
    });
    // 아래와 같이 하면, 한 항목을 추가할때마다 FriendMain render TimelineMain render 모두가 렌더되어서 위와같이하면됨
    // const unsubscribe = store.subscribe(() => forceUpdate());
    return () => unsubscribe();
  }, []);
  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log("FriendMain render");
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
