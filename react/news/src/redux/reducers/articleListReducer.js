import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function articleListReducer(
  state = initialState.articles,
  action
) {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
