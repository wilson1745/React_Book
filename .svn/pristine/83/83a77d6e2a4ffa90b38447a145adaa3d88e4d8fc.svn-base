import React, { Component, PropTypes } from "react";

class Counter extends Component {
  constructor(props) {
    // 子類在獲取this前必須調用super
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
        <button onClick={onDecrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>Increment async</button>
      </p>
    );
  }
}

Counter.propTypes = {
  // value必須為數位，且必須存在
  value: PropTypes.number.isRequired,
  // onIncrement必須為fucntion，且必須存在
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
