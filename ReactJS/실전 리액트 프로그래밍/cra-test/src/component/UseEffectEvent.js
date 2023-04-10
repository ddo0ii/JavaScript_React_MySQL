import React, { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

function WidthPrinter() {
  const width = useWindowWidth();
  return <div>{`width is ${width}`}</div>;
}

function UseEffectEvent() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
export default UseEffectEvent;
