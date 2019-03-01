import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import DevServer from "./src/04-dev-server/DevServer";
import Jsx from "./src/05-jsx/Jsx";
import StatePropsContext from "./src/06-state-props-context/StatePropsContext";

//render(<DevServer />, document.querySelector("#root"));
//render(<Jsx />, document.querySelector("#root"));
render(<StatePropsContext />, document.querySelector("#root"));
