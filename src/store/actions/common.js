import { createActions } from "redux-actions";

import { COMMON } from "../types";

export const { setHandleAlert } = createActions({
  [COMMON.SET_HANDLE_ALERT]: (data) => ({
    data,
  }),
});
