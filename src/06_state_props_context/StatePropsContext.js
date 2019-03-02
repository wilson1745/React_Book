import React, { Component } from "react";
import Counter from "./Counter";
import Messagelist1 from "./Messagelist1";
import Messagelist2 from "./Messagelist2";

export default class App extends Component {
  //eslint-disable-line
  render() {
    return (
      <div>
        <h2>State與props</h2>
        <Counter />
        <br />
        <h2>Props與context</h2>
        <Messagelist1 />
        <Messagelist2 />
      </div>
    );
  }
}
