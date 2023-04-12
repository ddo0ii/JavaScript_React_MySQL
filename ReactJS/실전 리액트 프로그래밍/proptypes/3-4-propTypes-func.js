// propTypes를 함수로 입력할수있다
MyComponent.propTypes = {
  age: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        It must be 10 <= value <= 20.`
      );
    }
  },
};

// 정상적으로 출력
{
  /* <User age={11} /> */
}
// 에러메시지 출력
{
  /* <User age={100} /> */
}
