import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import articleListReducer from "./articleListReducer";
import saveArticleReducer from "./saveArticleReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  articleListReducer,
  saveArticleReducer,
});

export default rootReducer;
