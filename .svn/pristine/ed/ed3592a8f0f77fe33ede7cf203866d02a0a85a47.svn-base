import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import TestReact from "./00_test/TestReact";
import DevServer from "./04_dev_server/DevServer";
import Jsx from "./05_jsx/Jsx";
import StatePropsContext from "./06_state_props_context/StatePropsContext";
import ElementInstance from "./07_element_instance/ElementInstance";
import StartRedux from "./08_start_redux/StartRedux";
import ReduxThunk from "./09_redux_thunk/ReduxThunk";
import CounterIndex from "./10_counter/CounterIndex";
import CounterConnect from "./11_counter_connect/CounterConnect";
import UndoDevtools from "./12_undo_devtools/UndoDevtools";
import CounterTest from "./13_counter_test/CounterTest";
import TodoMVC from "./14_15_todomvc/TodoMVC";

/*export default function App() {
   return <h1>hello world</h1>;
}*/

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/00_test/TestReact" component={TestReact} />
          <Route path="/04_dev_server/DevServer" component={DevServer} />
          <Route path="/05_jsx/Jsx" component={Jsx} />
          <Route
            path="/06_state_props_context/StatePropsContext"
            component={StatePropsContext}
          />
          <Route
            path="/07_element_instance/ElementInstance"
            component={ElementInstance}
          />
          <Route path="/08_start_redux/StartRedux" component={StartRedux} />
          <Route path="/09_redux_thunk/ReduxThunk" component={ReduxThunk} />
          <Route path="/10_counter/CounterIndex" component={CounterIndex} />
          <Route
            path="/11_counter_connect/CounterConnect"
            component={CounterConnect}
          />
          <Route
            path="/12_undo_devtools/UndoDevtools"
            component={UndoDevtools}
          />
          <Route path="/13_counter_test/CounterTest" component={CounterTest} />
          <Route path="/14_15_todomvc/TodoMVC" component={TodoMVC} />
        </div>
      </Router>
    );
  }
}

export default App;
