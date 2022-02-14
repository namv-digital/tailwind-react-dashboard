import { SIGN_IN, SIGN_OUT } from "../actions/types";

const AUTH_INITIAL_STATE = {
  isSignedIn: null,
  user: {},
};
const authReducer = (state = AUTH_INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, isSignedIn: true, user: action.payload };
    }
    case SIGN_OUT: {
      return { ...state, isSignedIn: false, user: {} };
    }
    default:
      return state;
  }
};

export default authReducer;
