import React, { useEffect, useState } from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>hallo world</h1>
      <ColorMessage color="blue" message="nicetomeetyou" />
      <ColorMessage color="green" message="Thankyou" />
      <button onClick={onClickCountUp}></button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
