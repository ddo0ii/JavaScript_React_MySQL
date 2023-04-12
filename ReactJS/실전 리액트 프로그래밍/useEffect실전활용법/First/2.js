import { useState, useEffect } from "react";
import useOnMounted from './useOnMounted';

export default function Profile({ userId }) {
  const [user, setUser] = useState();

  // 아래와 같이 [userId]를 입력해서, userId가 변경되었을때 실행될 수 있도록
  // 이것이 의존성 배열
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, [userId]);
  // ...
}

export default function Profile2({ userId }) {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetail] = useState(false);
  // 매개변수값이 추가되고 이를 상태값으로 관리한다면
  // 상태값이기 때문에 의존성 배열에 추가를 해줘야하는데 
  // 기존에 있던 코드를 수정할 때에는 의존성 배열에 입력하는것을 깜빡하는 경우가 많다
  // 그래서 eslint에서 사용할 수 있는 룰을 만들어 제공 >> 보통 CRA에는 포함되어있음 >> 터미널에 뜨게 되어있음
  useEffect(() => {
    fetchUser(userId, needDetail).then((data) => setUser(data));
  }, [userId, needDetail]);
  // ...
}

// 근데 userId와 같은것이 변경되지않는다고 확신하게 된다면, useEffect를 사용하기 보다 hook을 추천


// 그래서 위의 것을 대신하여
function Profile({userId}){
  // useEffect를 만들어서 빈배열을 넣는것 보다 아래와 같이 훅을 만들어 하면 훨배 나음
  useOnMounted(()=>(fetchUser(userId).then((data) => setUser(data))));
  return null;
}