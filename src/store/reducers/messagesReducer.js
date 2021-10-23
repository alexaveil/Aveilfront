import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { MESSAGES } from "../types";

export default injectReducer(initialState.messagesReducer, {
  [MESSAGES.GET_MESSAGES]: (state) => ({
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.GET_QUESTION_SUGGESTIONS_SUCCESS]: (
    state,
    { payload: { response } }
  ) => ({
    ...state,
    isRequestMessages: false,
    questionSuggestion: response,
  }),
  [MESSAGES.GET_QUESTION_SUGGESTIONS_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
    questionSuggestion: [],
  }),

  [MESSAGES.GET_MESSAGES]: (state) => ({
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.GET_MESSAGES_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequestMessages: false,
    messages: response.reverse(),
    needUpdateMessages: false,
  }),
  [MESSAGES.GET_MESSAGES_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
    messages: [],
    needUpdateMessages: false,
  }),

  [MESSAGES.ASK_QUESTION]: (state) => ({
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.ASK_QUESTION_SUCCESS]: (state) => ({
    ...state,
    isRequestMessages: false,
    needUpdateMessages: true,
    selectedQuestion: null,
  }),
  [MESSAGES.ASK_QUESTION_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
    selectedQuestion: null,
  }),

  [MESSAGES.SELECT_QUESTION]: (state) => ({
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.SELECT_QUESTION_SUCCESS]: (state) => ({
    ...state,
    isRequestMessages: false,
    needUpdateMessages: true,
  }),
  [MESSAGES.SELECT_QUESTION_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
  }),

  [MESSAGES.SET_SELECTED_QUESTION]: (state, { payload: { value } }) => ({
    ...state,
    selectedQuestion: value,
  }),
});
