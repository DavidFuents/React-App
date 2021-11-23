import { combineReducers } from "redux";
import eventsManager from "./eventsManager";
import dayManager from "./dayManager";
import dateManager from "./dateManager";

const rootReducer = combineReducers({
  events: eventsManager,
  day: dayManager,
  date: dateManager,
});

export default rootReducer;
