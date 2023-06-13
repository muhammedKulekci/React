import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveArticleReducer(
  state = initialState.savedArticle,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_ARTICLE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
