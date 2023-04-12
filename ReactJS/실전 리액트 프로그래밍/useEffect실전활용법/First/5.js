// 부수효과 함수를 async await를 아래와 같이 하면 문제!
// 부수효과 함수의 반환값은 항상 함수 타입이어야 하기 때문
// async await 함수는 Promise 객체를 반환하기 때문에! >> 부수효과 함수가 될 수 없음

// 부수효과 함수는 함수만 반환할 수 있음
// 반환된 함수는 부수효과 함수가 호출되기 직전과 컴포넌트가 사라지기 직전에 호출
useEffect(async () => {
  const data = await fetchUser(userId);
  setUser(data);
}, [userId]);

// 위의 것은 잘못된것!

// async await를 사용하고 싶다면
// 함수를 하나 만들어서 호출해주는 방식을 사용해야 함
useEffect(() => {
  async function fetchAndSetUser() {
    const data = await fetchUser(userId);
    setUser(data);
  }
  fetchAndSetUser();
}, [userId]);
