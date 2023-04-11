import React, { forwardRef, useImperativeHandle, useState } from "react";

function Profile(_, ref) {
  const [name, setName] = useState("mike");
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
    </div>
  );
}
export default forwardRef(Profile);
