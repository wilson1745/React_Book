import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import { render, unmountComponentAtNode } from "react-dom";

const store = createStore(counter);
const rootEl = document.getElementById("counter");

function HandleStore() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootEl
  );
}

store.subscribe(HandleStore);

class CounterIndex extends React.Component {
  renderComponent = () => {
    console.log("掛載");
    instance = render(<HandleStore />, document.getElementById("counter"));
  };

  unmountComponentAtNode = () => {
    console.log("卸載");
    unmountComponentAtNode(document.getElementById("counter"));
  };

  render() {
    return (
      <div>
        <h1>Start Redux Counter</h1>
        <button onClick={this.renderComponent}>掛載</button>
        <button onClick={this.unmountComponentAtNode}>卸載</button>
      </div>
    );
  }
}

export default CounterIndex;
