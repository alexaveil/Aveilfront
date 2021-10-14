import { all, takeLatest, call, put } from "redux-saga/effects";

import { request } from "../../utils/client";
import { USER } from "../types";

export function* loginSaga({ payload: { data } }) {
  try {
    const response = yield call(request, `/user/login`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: USER.LOGIN_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: USER.LOGIN_FAILURE,
      payload: err,
    });
  }
}

export function* registerSaga({ payload: { data } }) {
  try {
    const response = yield call(request, `/user/register`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: USER.REGISTER_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: USER.REGISTER_FAILURE,
      payload: err,
    });
  }
}

export function* logoutSaga() {
  try {
    const response = yield call(request, `/user/logout`, {
      method: "POST",
      payload: {},
    });

    yield put({
      type: USER.LOGOUT_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: USER.LOGOUT_FAILURE,
      payload: err,
    });
  }
}

export function* addInterestsSaga({ payload: { data } }) {
  try {
    const response = yield call(request, `/user/add_interests`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: USER.ADD_INTERESTS_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: USER.ADD_INTERESTS_FAILURE,
      payload: err,
    });
  }
}

export function* getUserInfoSaga() {
  try {
    const response = yield call(request, `/user/user_info`);

    yield put({
      type: USER.GET_USER_INFO_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: USER.GET_USER_INFO_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(USER.LOGIN, loginSaga),
    takeLatest(USER.REGISTER, registerSaga),
    takeLatest(USER.LOGOUT, logoutSaga),
    takeLatest(USER.ADD_INTERESTS, addInterestsSaga),
    takeLatest(USER.GET_USER_INFO, getUserInfoSaga),
  ]);
}
