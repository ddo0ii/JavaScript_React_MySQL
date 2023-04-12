// students가 배열인데, undefined를 검사하기 위해 다음과 같이 한다
// 그래서 보통은 빈 배열이라도 넣어주는게 좋음
// 그러면 undefined검사하는 코드가 필요없게 됨!
<div>{students && students.map(/* */)}</div>;
