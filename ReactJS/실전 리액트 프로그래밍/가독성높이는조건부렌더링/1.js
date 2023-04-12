// 조건부 렌더링 : 컴포넌트 함수 내부에서 특정값에 따라 선택적으로 렌더링하는 것

function GreetingA({ isLogin, name }) {
  if (isLogin) {
    return <p>{`${name}님 안녕하세요.`}</p>;
  } else {
    return <p>권한이 없습니다.</p>;
  }
}

function GreetingB({ isLogin, name }) {
  return <p>{isLogin ? `${name}님 안녕하세요.` : "권한이 없습니다."}</p>;
}
