import produce from "immer";

function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_PEOPLE:
        // draft.selectedPeople = draft.peopleList.find(
        //   (item) => item.id === action.id // id 수정
        // ); // 객체를 가리킬 때에는 고유한 아이디 값을 이용하는 것이 좋음
        // 그래서 객체의 레퍼런스가 아니라, 아이디값만 참조해서 값을 활용하면 좋음
        draft.selectedPeople = action.id;
        break;
      case EDIT_PEOPLE_NAME:
        const people = draft.peopleList.find((item) => item.id === action.id);
        people.name = action.name;
        // name 수정 시 people객체가 새로 만들어지는데,
        // selectedPeople에서 참조하는 객체의 이름을 여기서 수정했을 때 객체가 새로 만들어졌지만, selectedPeople은 예전의 객체 레퍼런스를 들고있기 때문에
        // name은 예전값을 참조하게 된다
        break;
      default:
        break;
    }
  });
}
