import { BUY_CAKE, BUY_ICECREAM } from "./ActionType";
import store from "../store/CreateStore";

export const BuyCake = (cake) => {
  return store.dispatch({
    type: BUY_CAKE,
    payload: cake,
  });
};

export const BuyIceCream = () => {
  return store.dispatch({
    type: BUY_ICECREAM,
  });
};
