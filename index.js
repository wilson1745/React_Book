import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

//ReactDOM.render(<App />, document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

// render every second
setInterval(tick, 1000);
