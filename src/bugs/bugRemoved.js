import store from "./store";
import * as actions from "./actionType";

export default function BugRemove(id) {
  return store.dispatch({
    type: actions.BugRemoved,
    payload: {
      id,
    },
  });
}
