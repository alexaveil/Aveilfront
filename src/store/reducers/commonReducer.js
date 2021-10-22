import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { COMMON } from "../types";

export default injectReducer(initialState.commonReducer, {
  [COMMON.SET_HANDLE_ALERT]: (
    state,
    { payload: { message, status, severity } }
  ) => ({
    ...state,
    alert: { message, status, severity },
  }),
});
