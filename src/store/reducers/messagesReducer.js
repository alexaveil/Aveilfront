import initialState from "../initialStates";
import injectReducer from "../injectReducer";

import { MESSAGES } from "../types";

export default injectReducer(initialState.messagesReducer, {
  [MESSAGES.GET_MESSAGES]: (state) => ({ 
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.GET_QUESTION_SUGGESTIONS_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequestMessages: false,
    questionSuggestion: response
  }),
  [MESSAGES.GET_QUESTION_SUGGESTIONS_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
    questionSuggestion: []
  }),

  [MESSAGES.GET_MESSAGES]: (state) => ({ 
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.GET_MESSAGES_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequestMessages: false,
    messages: response
  }),
  [MESSAGES.GET_MESSAGES_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
    messages: []
  }),

  [MESSAGES.ASK_QUESTION]: (state) => ({ 
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.ASK_QUESTION_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequestMessages: false,
  }),
  [MESSAGES.ASK_QUESTION_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
  }),

  [MESSAGES.ASK_CUSTOM_QUESTION]: (state) => ({ 
    ...state,
    isRequestMessages: true,
  }),
  [MESSAGES.ASK_CUSTOM_QUESTION_SUCCESS]: (state, { payload: { response } }) => ({
    ...state,
    isRequestMessages: false,
  }),
  [MESSAGES.ASK_CUSTOM_QUESTION_FAILURE]: (state) => ({
    ...state,
    isRequestMessages: false,
  }),
});
