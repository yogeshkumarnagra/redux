import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import store from "./shop/store/CreateStore";
import store from "./fechAPI/CreateStore";
import { Provider } from "react-redux";
// import App from "./shop/App";
import App from "./fechAPI/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
