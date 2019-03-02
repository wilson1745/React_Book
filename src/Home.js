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

        {/*<Link to="/08_start_redux/StartRedux/" style={{ color: "black" }}>
          <div>08_start_redux(自動)</div>
        </Link>

        <Link to="/09_redux_thunk/ReduxThunk/" style={{ color: "black" }}>
          <div>09_redux_thunk(自動)</div>
        </Link>*/}
      </div>
    );
  }
}

export default Home;
