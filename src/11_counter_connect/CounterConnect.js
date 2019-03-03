import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import counter from "./reducers";
import Connect1 from "./containers/Connect1";
import Connect2 from "./containers/Connect2";
import Connect3 from "./containers/Connect3";
import Connect4 from "./containers/Connect4";
import Connect5 from "./containers/Connect5";

const store = createStore(counter, applyMiddleware(thunk));

class CounterConnect extends React.Component {
  render() {
    return (
      <div>
        <h1>Start Counter Connect</h1>
        <Provider store={store}>
          <div>
            <h2>使用react-redux連接</h2>
            <ul>
              <li>
                connect()的前兩個參數分別為函數和物件：
                <Connect1 />
              </li>
              <li>
                connect()的前兩個參數均為函數：
                <Connect2 />
              </li>
              <li>
                connect()的前兩個參數均為函數，但使用了bindActionCreators：
                <Connect3 />
              </li>
              <li>
                connect()的第二個參數為空：
                <Connect4 />
              </li>
              <li>
                connect()的裝飾器寫法：
                <Connect5 />
              </li>
            </ul>
          </div>
        </Provider>
      </div>
    );
  }
}

export default CounterConnect;
