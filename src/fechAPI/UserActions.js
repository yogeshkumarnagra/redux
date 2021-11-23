import store from "./CreateStore";
import axios from "axios";
import {
  FETCH_LOADING,
  FETCH_SUCCESSFULL,
  FETCH_ERROR,
} from "./userActionType";

function FetchLoading() {
  return {
    type: FETCH_LOADING,
  };
}

function FetchSuccessfull(users) {
  return {
    type: FETCH_SUCCESSFULL,
    payload: users,
  };
}

function fetchError(errorMessage) {
  return {
    type: FETCH_ERROR,
    payload: errorMessage,
  };
}

export function UserFetch() {
  return (dispatch) => {
    dispatch(FetchLoading());
    console.log("userfetch");
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((res) => {
        const users = res.data;
        console.log(users);
        dispatch(FetchSuccessfull(users));
      })
      .catch((error) => {
        const errorMessage = error.messgae;
        dispatch(fetchError(errorMessage));
      });
  };
}
