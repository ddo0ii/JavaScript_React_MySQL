const state = {
  user: {
    name: "mike",
    friends: [
      {
        name: "jane",
        age: 23,
      },
      {
        name: "jake",
        age: 24,
      },
    ],
  },
  products: [],
};

// 다음과 같이 편리하게 비교가능
prevState.user.friends[0] === nextState.user.friends[1];
prevState.products === nextState.producs;
