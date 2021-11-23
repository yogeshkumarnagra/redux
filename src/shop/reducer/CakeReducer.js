/* eslint-disable no-undef */
import { BUY_CAKE } from "../action/ActionType";

const initialState = {
  number_of_cake: 10,
};

export default function CakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      console.log(state);
      return {
        ...state,
        number_of_cake: state.number_of_cake - action.payload,
      };
    default:
      return state;
  }
}
