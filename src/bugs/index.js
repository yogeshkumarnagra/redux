// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// import store from "./customStore";
// import * as actions from "./actions";
import store from "./store";
import bugAdded from "./bugAdded";
import BugRemove from "./bugRemoved";
import BugResolved from "./bugResolved";

const unsubscribe = store.subscribe(() => {
  console.log("store Change", store.getState());
});
// store.state = 1;

bugAdded("bug1");
bugAdded("bug2");
bugAdded("bug3");
bugAdded("bug4");
bugAdded("bug5");

// unsubscribe();

BugRemove(4);

BugResolved(2);
console.log(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
