import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/04_dev_server/DevServer">
          <div>04_dev_server</div>
        </Link>

        <Link to="/05_jsx/Jsx">
          <div>05_jsx</div>
        </Link>

        <Link to="/06_state_props_context/StatePropsContext/">
          <div>06_state_props_context</div>
        </Link>

        <Link to="/07_element_instance/ElementInstance/">
          <div>07_element_instance</div>
        </Link>

        <Link to="/08_start_redux/StartRedux/">
          <div>08_start_redux</div>
        </Link>

        <Link to="/09_redux_thunk/ReduxThunk/">
          <div>09_redux_thunk</div>
        </Link>

        <Link to="/10_counter/CounterIndex/">
          <div>10_counter</div>
        </Link>

        <Link to="/11_counter_connect/CounterConnect/">
          <div>11_counter_connect</div>
        </Link>

        <Link to="/12_undo_devtools/UndoDevtools/">
          <div>12_undo_devtools</div>
        </Link>

        <Link to="/13_counter_test/CounterTest/">
          <div>13_counter_test</div>
        </Link>
      </div>
    );
  }
}

export default Home;
