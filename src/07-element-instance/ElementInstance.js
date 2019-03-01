/* eslint-disable no-useless-constructor */
import React from "react";

const suffix = "被調用，this指向：";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handler = this.handler.bind(this)
  }

  componentDidMount() {
    console.log(`componentDidMount${suffix}`, this);
  }

  componentWillReceiveProps() {
    console.log(`componentWillReceiveProps${suffix}`, this);
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate${suffix}`, this);
    return true;
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate${suffix}`, this);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount${suffix}`, this);
  }

  handler() {
    console.log(`handler${suffix}`, this);
  }

  render() {
    console.log(`render${suffix}`, this);

    this.handler();
    window.handler = this.handler;
    window.handler();

    return (
      <div>
        <h1 onClick={this.handler}>Hello world</h1>
        <p>
          不清楚元件、ReactElement、元件實例以及元件中的this是什麼？打開控制台看看就明白了！
        </p>
      </div>
    );
  }
}
