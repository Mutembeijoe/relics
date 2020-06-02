import userActionTypes from "./types";

const INITIAL_STATE = {
  username: "",
  email: "",
  token: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default userReducer;
