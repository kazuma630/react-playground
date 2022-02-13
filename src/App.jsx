import React from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1>hallo world</h1>
      <ColorMessage color="blue" message="nicetomeetyou" />
      <ColorMessage color="green" message="Thankyou" />
      <button onClick={onClickButton}></button>
    </>
  );
};

export default App;
