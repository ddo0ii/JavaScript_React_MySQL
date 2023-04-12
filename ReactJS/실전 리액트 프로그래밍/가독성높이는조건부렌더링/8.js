// cash가 0이라면 0만 출력될수도있음
// memo가 빈문자열이라면 빈문자열만 출력될 수도 있음
// 다음 9.js 참고
<div>
  {cash && <p>{cash}원 보유 중</p>}
  {/* 그래서 아래와 같이 Boolean 타입으로 변경해야함 */}
  {!!cash && <p>{cash}원 보유 중</p>}
  {memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
