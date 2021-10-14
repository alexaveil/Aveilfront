/* import external modules */
import { combineReducers } from "redux";

/* import internal modules */
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  userReducer,
  chatReducer,
});

export default rootReducer;
