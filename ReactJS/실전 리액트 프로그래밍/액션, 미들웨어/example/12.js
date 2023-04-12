// meta에 localStorageKey라는게 있으면, 액션 객체를 저장해줌
const saveToLocalStorage = (store) => (next) => (action) => {
  if (action.meta?.localStorageKey) {
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
  return next(action);
};
