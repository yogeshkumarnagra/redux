import { createStore } from "redux";
import CakeReducer from "../reducer/CakeReducer";
import IcecreamReducer from "../reducer/IcecreamReducer";
import { combineReducers } from "redux";

const allreducer = combineReducers({
  CakeReducer,
  IcecreamReducer,
});

const store = createStore(allreducer);

export default store;
