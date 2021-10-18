import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { USER } from "../types";

export default injectReducer(initialState.userReducer, {
  [USER.LOGIN]: (state) => ({ 
    ...state,
    isRequestUser: true,
  }),
  [USER.LOGIN_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    accessToken: response.access_token,
    isRequestUser: false,
  }),
  [USER.LOGIN_FAILURE]: (state) => ({
    ...state,
    accessToken: null,
    isRequestUser: false,
  }),

  [USER.REGISTER]: (state) => ({ 
    ...state,
    isRequestUser: true,
  }),
  [USER.REGISTER_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    accessToken: response.access_token,
    isRequestUser: false,
  }),
  [USER.REGISTER_FAILURE]: (state) => ({
    ...state,
    accessToken: null,
    isRequestUser: false,
  }),
  
  [USER.ADD_INTERESTS]: (state) => ({
    ...state,
    isRequestUser: true,
  }),
  [USER.ADD_INTERESTS_SUCCESS]: (state) => ({
    ...state,
    isRequestUser: false,
  }),
  [USER.ADD_INTERESTS_FAILURE]: (state) => ({
    ...state,
    isRequestUser: false,
  }),

  [USER.GET_USER_INFO]: (state) => ({ 
    ...state,
    isRequestUser: true,
  }),
  [USER.GET_USER_INFO_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    userInfo: response,
    isRequestUser: false,
  }),
  [USER.GET_USER_INFO_FAILURE]: (state) => ({
    ...state,
    userInfo: null,
    isRequestUser: false,
  }),

  [USER.CHANGE_THEME]: (state, { payload: { value } }) => ({
    ...state,
    enableDarkTheme: value,
  }),
});
