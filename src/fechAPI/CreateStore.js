import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import UserReducer from "./UserReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  UserReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
