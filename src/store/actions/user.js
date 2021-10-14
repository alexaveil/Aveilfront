import { createActions } from "redux-actions";

import { USER } from "../types";

export const { login, register, logout, addInterests, getUserInfo } =
  createActions({
    [USER.LOGIN]: (data) => ({
      data,
    }),
    [USER.REGISTER]: (data) => ({
      data,
    }),
    [USER.LOGOUT]: () => ({}),
    [USER.ADD_INTERESTS]: (data) => ({
      data,
    }),
    [USER.GET_USER_INFO]: () => ({}),
    [USER.CHANGE_THEME]: (value) => ({ value }),
  });
