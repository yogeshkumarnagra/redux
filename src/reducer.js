/* eslint-disable default-case */
/* eslint-disable no-undef */
import * as actions from "./actionType";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BugAdded: {
      console.log("bugAdded");
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
          hello: "hello",
        },
      ];
    }
    case actions.BugRemoved: {
      console.log("bug remove");
      return state.filter((bug) => bug.id !== action.payload.id);
    }
    case actions.BugResolved: {
      console.log("bugResolved");
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    }
  }
}
