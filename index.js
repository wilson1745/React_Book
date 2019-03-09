import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

ReactDOM.render(<App />, document.getElementById("root"));

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

// render every second
setInterval(tick, 1000);*/

// component
/*class Profile extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// element
const ele = <Profile name="Allen Shit" />;

// render to <div id="main"></div>
ReactDOM.render(ele, document.getElementById("root"));*/

/*class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // 指定this
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));*/
