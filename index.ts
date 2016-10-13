import * as React from "react";
import * as ReactDOM from "react-dom";

import { IApp } from "./app";
import kernel from "./inversify.config";

let App = kernel.get<new () => IApp>("IApp");

ReactDOM.render(React.createElement(App, null), document.getElementById("react-root"));
