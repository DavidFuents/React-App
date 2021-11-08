import { combineReducers } from "redux";
import eventsManager from "./eventsManager";
import categoryManager from "./categoryManager";

const rootReducer = combineReducers({
  events: eventsManager,
  category: categoryManager,
});

export default rootReducer;
