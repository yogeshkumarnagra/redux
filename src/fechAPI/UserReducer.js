import {
  FETCH_LOADING,
  FETCH_SUCCESSFULL,
  FETCH_ERROR,
} from "./userActionType";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
        users: [],
        error: "",
      };
    case FETCH_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
