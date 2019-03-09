import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../actions";

// 裝飾器應該寫在類聲明上面
@connect(
  state => ({ counter: state.counter }),
  ActionCreators
)
class Counter extends Component {
  // eslint-disable-line

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const {
      counter,
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    } = this.props;
    return (
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button>{" "}
        <button onClick={decrement}>-</button>{" "}
        <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
        {/* 這裡必須寫成箭頭函數，否則incrementAsync中的delay參數將會是SyntheticEvent的實例*/}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}

export default Counter;
