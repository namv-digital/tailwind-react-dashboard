// This will store all our action creators, leveraging redux-thunk for async calls

// Action creator
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
import { SIGN_IN, SIGN_OUT, FETCH_POSTS, FETCH_USER, SIDE_BAR_COLLAPSED } from "./types";

export const signIn = (userObj) => {
  return {
    type: SIGN_IN,
    payload: userObj,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const fetchPosts = () => {
//   //Bad approach

//   const response = jsonPlaceholder.get("/posts");
//   console.log("maade call");

//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  //instead of memoizing, just get each unique user id using lodash
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  // refactor using chain method
  const chain = _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  console.log(chain);
};
// Redux thunk syntax -- not sure how to test this yet
export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: FETCH_POSTS, payload: response.data });
  };
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   return _fetchUser(id, dispatch);
// };

// //Memoized with lodash to prevent multiple API calls. Not ideal if data changes.
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const collapseSideNav = (isCollapsed) => {
  return {
    type: SIDE_BAR_COLLAPSED,
    payload: isCollapsed,
  };
};