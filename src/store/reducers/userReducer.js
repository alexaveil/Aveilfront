import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { USER } from "../types";

export default injectReducer(initialState.userReducer, {
  [USER.LOGIN]: (state) => ({ ...state }),
  [USER.LOGIN_SUCCESS]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
  [USER.LOGIN_FAILURE]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
  [USER.REGISTER]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
  [USER.ADD_INTERESTS]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
  [USER.GET_USER_INFO]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
  [USER.CHANGE_THEME]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
});
