import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store/configureStore";
//import "todomvc-app-css/index.css";

const store = configureStore();

class TodoMVC extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <h1>Start Todo MVC</h1>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    );
  }
}

export default TodoMVC;
