import produce from "immer";

const person = { name: "horong", age: 22 }; // 변경하고픈
const newPerson = produce(person, (draft) => {
  draft.age = 32; // 두번째는 상태값을 변경하는 로직
}); //newPerson는 새로운 객체가 되어 age가 32된 상태로 반환
