import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { USER } from "../types";

export default injectReducer(initialState.userReducer, {
  [USER.LOGIN]: (state) => ({ 
    ...state,
    isRequest: true,
  }),
  [USER.LOGIN_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    accessToken: response.access_token,
    isRequest: false,
  }),
  [USER.LOGIN_FAILURE]: (state) => ({
    ...state,
    accessToken: null,
    isRequest: false,
  }),

  [USER.REGISTER]: (state) => ({ 
    ...state,
    isRequest: true,
  }),
  [USER.REGISTER_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    accessToken: response.access_token,
    isRequest: false,
  }),
  [USER.REGISTER_FAILURE]: (state) => ({
    ...state,
    accessToken: null,
    isRequest: false,
  }),

  [USER.ADD_INTERESTS]: (state) => ({
    ...state,
    isRequest: true,
  }),
  [USER.ADD_INTERESTS_SUCCESS]: (state) => ({
    ...state,
    isRequest: false,
  }),
  [USER.ADD_INTERESTS_FAILURE]: (state) => ({
    ...state,
    isRequest: false,
  }),

  [USER.GET_USER_INFO]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },

  [USER.CHANGE_THEME]: (state, { payload: { response } }) => {
    console.log(response);
    return { ...state };
  },
});
