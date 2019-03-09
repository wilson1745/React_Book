import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Counter from "./containers/Counter";
import counter from "./reducers";

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class CounterConnect extends React.Component {
  render() {
    return (
      <div>
        <h1>Start Undo DevTools</h1>
        <Provider store={store}>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default CounterConnect;
