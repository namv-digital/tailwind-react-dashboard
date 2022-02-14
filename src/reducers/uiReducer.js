import { SIDE_BAR_COLLAPSED } from "../actions/types";

const initialState = {
  sideBarCollapsed: false
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BAR_COLLAPSED: {
      return { ...state, sideBarCollapsed: action.payload };
    }
    default:
      return state;
  }
};

export default uiReducer;
