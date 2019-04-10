import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./components/index";
//import StaticSite from "./components/Router";
import AuthSite from "./components/Auth";
import * as serviceWorker from "./serviceWorker";
import "../src/bulma/bulma.min.css";

//ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<StaticSite />, document.getElementById("root"));
ReactDOM.render(<AuthSite />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
