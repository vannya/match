import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LogRocket from "logrocket";
import reducers from "./reducers";
import App from "./App";
import "./stylesheets/main.css";

LogRocket.init('tsfljv/match-ufi2i');
const store = createStore(reducers, {}, applyMiddleware(thunk, LogRocket.reduxMiddleware()));


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
