import store from "./store";
import * as actions from "./actionType";

export default function bugAdded(discription) {
  return store.dispatch({
    type: actions.BugAdded,
    payload: {
      discription,
    },
  });
}
