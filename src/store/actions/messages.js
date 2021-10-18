import { createActions } from "redux-actions";

import { MESSAGES } from "../types";

export const {
  getQuestionSuggestions,
  getMessages,
  askQuestion,
  askCustomQuestion,
  selectQuestion,
} = createActions({
  [MESSAGES.GET_QUESTION_SUGGESTIONS]: () => ({}),
  [MESSAGES.GET_MESSAGES]: (page) => ({
    page,
  }),
  [MESSAGES.ASK_QUESTION]: (data) => ({
    data,
  }),
  [MESSAGES.ASK_CUSTOM_QUESTION]: (data) => ({
    data,
  }),
  [MESSAGES.SELECT_QUESTION]: (data) => ({
    data,
  }),
});
