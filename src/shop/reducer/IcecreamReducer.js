import { BUY_ICECREAM } from "../action/ActionType";

const icecreamInitialstate = {
  numberOfIcecream: 20,
};

export default function IcecreamReducer(state = icecreamInitialstate, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      console.log(state);
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - 1,
      };
    default:
      return state;
  }
}
