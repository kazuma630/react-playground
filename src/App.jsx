import React, { useState } from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
  return (
    <>
      <h1>hallo world</h1>
      <ColorMessage color="blue" message="nicetomeetyou" />
      <ColorMessage color="green" message="Thankyou" />
      <button onClick={onClickCountUp}></button>
      <p>{num}</p>
    </>
  );
};

export default App;
