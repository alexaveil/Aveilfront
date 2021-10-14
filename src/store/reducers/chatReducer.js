import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { CHAT } from "../types";

export default injectReducer(initialState.chatReducer, {});
