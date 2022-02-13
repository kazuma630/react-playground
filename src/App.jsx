import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "bule",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={contentStyle}>hallo world</h1>
      <p>hallo japan</p>
      <button onClick={onClickButton}></button>
    </>
  );
};

export default App;
