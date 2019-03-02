import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

let instance;

class ElementInstance extends React.Component {
  componentDidMount() {
    console.log("首次掛載");
    instance = render(<App />, document.getElementById("elementInstance"));
  }

  renderComponent = () => {
    console.log("掛載");
    instance = render(<App />, document.getElementById("elementInstance"));
  };

  setState = () => {
    console.log("更新");
    instance.setState({ foo: "bar" });
  };

  unmountComponentAtNode = () => {
    console.log("卸載");
    unmountComponentAtNode(document.getElementById("elementInstance"));
  };

  render() {
    return (
      <div>
        <button onClick={this.renderComponent}>掛載</button>
        <button onClick={this.setState}>更新</button>
        <button onClick={this.unmountComponentAtNode}>卸載</button>

        {console.log("JSX中的閉合標籤是ReactElement")}
        {console.log(<h1>hello world</h1>)}
        {console.log(<App />)}

        {console.log("元件、ReactElement與元件實例")}
        {console.log(App)}
        {console.log(<App />)}
        {console.log(instance)}
      </div>
    );
  }
}

export default ElementInstance;
