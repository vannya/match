import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LogRocket from "logrocket";
import reducers from "./reducers";
import App from "./App";
import "./stylesheets/main.css";

LogRocket.init('tsfljv/match-ufi2i');
const store = createStore(reducers, {}, applyMiddleware(thunk, LogRocket.reduxMiddleware()));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
