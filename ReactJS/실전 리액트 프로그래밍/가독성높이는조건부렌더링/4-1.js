// &&를 사용하게 되면, : 처럼 마지막에 null을 넣을 필요가 없다.
function Greeting({ isLogin, name, cash }) {
  return (
    <div>
      저희 사이트에 방문해 주셔서 감사합니다.
      {isLogin && (
        <div>
          <p>{name}님 안녕하세요.</p>
          <p>현재 보유하신 금액은 {cash}원입니다.</p>
        </div>
      )}
    </div>
  );
}

// {isLogin && (
//   ~~~~
// )}
// {!isLogin && isLogin2 && (~~)}

// null을 입력할 필요가 없다!
