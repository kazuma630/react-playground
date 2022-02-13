import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>hallo world</h1>
      <p>hallo japan</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
