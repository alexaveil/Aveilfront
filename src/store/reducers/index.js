/* import external modules */
import { combineReducers } from "redux";

/* import internal modules */
import userReducer from "./userReducer";
import messagesReducer from "./messagesReducer";

const appReducer = combineReducers({
  userReducer,
  messagesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer;