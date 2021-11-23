import store from "./store";
import * as actions from "./actionType";

export default function BugResolved(id) {
  return store.dispatch({
    type: actions.BugResolved,
    payload: {
      id,
    },
  });
}
