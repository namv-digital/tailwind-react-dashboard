// Where we combine all our reducer files

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer,
  ui: uiReducer,
});
