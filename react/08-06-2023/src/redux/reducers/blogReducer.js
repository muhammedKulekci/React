import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogReducer(state = initialState.blogs, action) {
  switch (action.type) {
    case types.GET_BLOGS_SUCCESS:
      return action.payload;
    case types.OPEN_BLOG:
      var openBlog = state.find((c) => c.source === action.payload.source);
      return Object.assign({}, openBlog, {});

    default:
      return state;
  }
}
