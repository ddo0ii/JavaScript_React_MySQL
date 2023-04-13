import produce from "immer";

function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SAY_HELLO:
        const random = Math.floor(Math.random() * 10 + 1); //입력이 같을 때, 같은 출력 >> random이면!! 입력이 같아도 출력이 다를 수 있기에 사용하면 안됨
        // 만약 원하면 action 객체 만들 때, random 데이터를 만들어서 넣으면됨
        draft.msg = `안녕하세요, ${action.name}님의 행운의 숫자는 ${random}입니다.`;
        break;
      case INCREMENT:
        callApi({ url: "/sendActionLog", data: action }); //서버API 호출 불가
        draft.value += 1;
        break;
      default:
        break;
    }
  });
}
