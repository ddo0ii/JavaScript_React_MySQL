import React, { useState, useEffect } from "react";

function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
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
