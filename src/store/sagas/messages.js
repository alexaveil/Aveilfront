import { all, takeLatest, call, put } from "redux-saga/effects";

import { request } from "../../utils/client";
import { MESSAGES } from "../types";

export function* getQuestionSuggestionsSaga() {
  try {
    const response = yield call(request, `/messages/question_suggestion`);

    yield put({
      type: MESSAGES.GET_QUESTION_SUGGESTIONS_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: MESSAGES.GET_QUESTION_SUGGESTIONS_FAILURE,
      payload: err,
    });
  }
}

export function* getMessagesSaga({payload: {page}}) {
  try {
    const response = yield call(request, `/messages/get_messages?page=${page}`);

    yield put({
      type: MESSAGES.GET_MESSAGES_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: MESSAGES.GET_MESSAGES_FAILURE,
      payload: err,
    });
  }
}

export function* askQuestionSaga({payload: { data }}) {
  try {
    const response = yield call(request, `/messages/ask_question`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: MESSAGES.ASK_QUESTION_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: MESSAGES.ASK_QUESTION_FAILURE,
      payload: err,
    });
  }
}

export function* askCustomQuestionSaga({payload: { data }}) {
  try {
    const response = yield call(request, `/messages/ask_custom_question`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: MESSAGES.ASK_CUSTOM_QUESTION_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: MESSAGES.ASK_CUSTOM_QUESTION_FAILURE,
      payload: err,
    });
  }
}


export function* selectQuestionSaga({payload: { data }}) {
  try {
    const response = yield call(request, `/messages/select_question`, {
      method: "POST",
      payload: data,
    });

    yield put({
      type: MESSAGES.SELECT_QUESTION_SUCCESS,
      payload: {
        response,
      },
    });
  } catch (err) {
    yield put({
      type: MESSAGES.SELECT_QUESTION_FAILURE,
      payload: err,
    });
  }
}


/**
 * Messages Sagas
 */
 export default function* root() {
  yield all([
    takeLatest(MESSAGES.GET_QUESTION_SUGGESTIONS, getQuestionSuggestionsSaga),
    takeLatest(MESSAGES.GET_MESSAGES, getMessagesSaga),
    takeLatest(MESSAGES.ASK_QUESTION, askQuestionSaga),
    takeLatest(MESSAGES.ASK_CUSTOM_QUESTION, askCustomQuestionSaga),
    takeLatest(MESSAGES.SELECT_QUESTION, selectQuestionSaga)
  ]);
}
