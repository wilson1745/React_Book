import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { render, unmountComponentAtNode } from "react-dom";

const rootEl = document.getElementById("testreact");

function getName() {
  return "World";
}

const ele = <h1>Hello, {getName()}!</h1>;

function HandleStore() {
  const func = () => {
    ReactDOM.render(ele, rootEl);
  };
  return <p>{func()}</p>;
}

class TestReact extends React.Component {
  render() {
    return (
      <div>
        <h1>Start Test</h1>
        <HandleStore />
      </div>
    );
  }
}

export default TestReact;
