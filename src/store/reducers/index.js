/* import external modules */
import { combineReducers } from "redux";

/* import internal modules */
import userReducer from "./userReducer";
import chatReducer from "./chatReducer";

const appReducer = combineReducers({
  userReducer,
  chatReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer;