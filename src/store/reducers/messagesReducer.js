import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { MESSAGES } from "../types";

export default injectReducer(initialState.messagesReducer, {});
