/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { UserFetch } from "./UserActions";
import { connect } from "react-redux";

const App = ({ userdata, UserFetch }) => {
  useEffect(() => {
    // UserFetch();
  }, []);

  return (
    <>
      <div>
        users-
        {userdata.loading ? (
          <h2>Loading...</h2>
        ) : userdata.error ? (
          <h2>{userdata.error}</h2>
        ) : (
          <div>
            <h1>users list</h1>
            {userdata &&
              //   userdata &&
              userdata.map((user) => {
                console.log("user", user);
                return <p>{user.name}</p>;
              })}
          </div>
        )}
      </div>
      {/* <div>{userdata}</div> */}
      <button
        onClick={() => {
          console.log("clicked");
          UserFetch();
        }}
      >
        Users
      </button>
    </>
  );
};

const mapstatetoprops = (state) => {
  return {
    userdata: state.users,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    UserFetch: () => dispatch(UserFetch()),
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(App);
