import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store/configureStore";

const store = configureStore();

class CounterTest extends React.Component {
  render() {
    return (
      <div>
        <h1>Start Counter Test</h1>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default CounterTest;
