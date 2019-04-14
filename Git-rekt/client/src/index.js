import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Register from "./components/Register";
import Login from "./components/Login";
import RegistrationScreen from "./components/RegistrationScreen";

ReactDOM.render(<RegistrationScreen />, document.getElementById("root"));

serviceWorker.unregister();
