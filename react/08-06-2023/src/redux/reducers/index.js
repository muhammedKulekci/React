import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoriesReducer from "./categoriesReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoriesReducer,
  blogReducer,
});

export default rootReducer;
