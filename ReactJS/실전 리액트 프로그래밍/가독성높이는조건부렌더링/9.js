// 그래서 null이 아니라고 표현해줘야함
<div>
  {cash != null && <p>{cash}원 보유 중</p>}
  {memo != null && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
