import "./App.css";
import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <container className="scoreContainer">
        <h1>Score</h1>
        <div className="scoreBox">
          <h1 className="count">{count}</h1>
        </div>
        <br />
        <div className="buttonDiv">
          <button
            className="btn btn-success mr-5"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className="btn btn-danger ml-5"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
        </div>
      </container>
    </>
  );
};

export default App;
