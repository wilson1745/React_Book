import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import DevServer from "./04_dev_server/DevServer";
import Jsx from "./05_jsx/Jsx";
import StatePropsContext from "./06_state_props_context/StatePropsContext";
import ElementInstance from "./07_element_instance/ElementInstance";

import StartRedux from "./08_start_redux/StartRedux";
import ReduxThunk from "./09_redux_thunk/ReduxThunk";

/*export default function App() {
   return <h1>hello world</h1>;
}*/

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
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
        </div>
      </Router>
    );
  }
}

export default App;
