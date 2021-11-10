import { combineReducers } from "redux";
import eventsManager from "./eventsManager";
import categoryManager from "./categoryManager";
import dateManager from "./dateManager";

const rootReducer = combineReducers({
  events: eventsManager,
  category: categoryManager,
  date: dateManager,
});

export default rootReducer;
