import React from "react";
import { createStore } from "redux";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
/**
 * 使用這個reducer純函數代替上面的函數，會發現：
 * 當state為對象時，如果在reducer中修改state，
 * 將會導致新舊state指向一個位址
 */
// function counter(state = { val: 0 }, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//     state.val++;
//       return state;
//     case 'DECREMENT':
//     state.val--;
//       return state;
//     default:
//       return state;
//   }
// }
const store = createStore(counter);

let currentValue = store.getState();

const listener = () => {
  const previousValue = currentValue;
  currentValue = store.getState();
  console.log("pre state:", previousValue, "next state:", currentValue);
};

store.subscribe(listener);

function HandleStore() {
  const func = () => {
    store.dispatch({ type: "INCREMENT" });
    store.dispatch({ type: "INCREMENT" });
    store.dispatch({ type: "DECREMENT" });
  };
  return <p>{func()}</p>;
}

class StartRedux extends React.Component {
  render() {
    return (
      <div>
        <h1>Start Redux</h1>
        <ul>
          <HandleStore />
        </ul>
      </div>
    );
  }
}

export default StartRedux;
