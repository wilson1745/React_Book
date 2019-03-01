import React from "react";
import ReactDOM from "react-dom";
//import { render } from "react-dom";
import { createStore } from "redux";
import Counter from "./src/10-counter/components/Counter";
import counter from "./src/10-counter/reducers";
import App from "./src/App";
import DevServer from "./src/04-dev-server/DevServer";
import Jsx from "./src/05-jsx/Jsx";
import StatePropsContext from "./src/06-state-props-context/StatePropsContext";
import ElementInstance from "./src/07-element-instance/ElementInstance";
import StartRedux from "./src/08-start-redux/StartRedux";
import ReduxThunk from "./src/09-redux-thunk/ReduxThunk";
import CounterIndex from "./src/10-counter/CounterIndex";

const store = createStore(counter);
const rootEl = document.getElementById("root");

//render(<DevServer />, document.querySelector("#root"));
//render(<Jsx />, document.querySelector("#root"));
//render(<StatePropsContext />, document.querySelector("#root"));
//render(<ElementInstance />, document.querySelector("#root"));
//render(<StartRedux />, document.querySelector("#root"));
//render(<ReduxThunk />, document.querySelector("#root"));
//render(<CounterIndex />, document.querySelector("#root"));

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
