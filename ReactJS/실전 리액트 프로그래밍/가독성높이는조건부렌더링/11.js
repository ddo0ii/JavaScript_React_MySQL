function Parent({ user }) {
  return (
    <div>
      <p>Parent</p>
      {/* <Child user={user} /> */}
      {/* 아래의 주석 null인지 판단을 아래와 같이 하면됨 */}
      {/* user 데이터 상태에 따라 Child 컴포넌트가 언마운트와 마운트를 반복할 수도 있음 */}
      {/* 의도했으면 상관없지만, 아니라면 상태 값이 초기화 되어서 문제가 될수도 있음    const [v, setV] = useState(0); */}
      {user && <Child user={user} />}
    </div>
  );
}

function Child({ user }) {
  const [v, setV] = useState(0);
  // if (user) {
  //   return null;
  // }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
    </div>
  );
}
