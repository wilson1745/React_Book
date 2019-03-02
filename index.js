import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./src/App";
/*import DevServer from "./src/04-dev-server/DevServer";
import Jsx from "./src/05-jsx/Jsx";
import StatePropsContext from "./src/06-state-props-context/StatePropsContext";
import ElementInstance from "./src/07-element-instance/ElementInstance";
import StartRedux from "./src/08-start-redux/StartRedux";
import ReduxThunk from "./src/09-redux-thunk/ReduxThunk";
import counter from "./src/10-counter/reducers";
import Counter from "./src/10-counter/components/Counter";
//import counter from "./src/11-counter-connect/reducers";
import Connect1 from "./src/11-counter-connect/containers/Connect1";
import Connect2 from "./src/11-counter-connect/containers/Connect2";
import Connect3 from "./src/11-counter-connect/containers/Connect3";
import Connect4 from "./src/11-counter-connect/containers/Connect4";
import Connect5 from "./src/11-counter-connect/containers/Connect5";*/

//render(<App />, document.querySelector("#root"));
ReactDOM.render(<App />, document.getElementById("root"));

//render(<DevServer />, document.querySelector("#root"));
//render(<Jsx />, document.querySelector("#root"));
//render(<StatePropsContext />, document.querySelector("#root"));
//render(<ElementInstance />, document.querySelector("#root"));
//render(<StartRedux />, document.querySelector("#root"));
//render(<ReduxThunk />, document.querySelector("#root"));
//render(<CounterIndex />, document.querySelector("#root"));

// 10-counter
/*const store = createStore(counter);
const rootEl = document.getElementById("root");

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

// 11-counter-connect
const store = createStore(counter, applyMiddleware(thunk));
const rootEl = document.getElementById("root");

ReactDOM.render(
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
  </Provider>,
  rootEl
);*/
