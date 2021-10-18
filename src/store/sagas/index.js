import { all, fork } from "redux-saga/effects";

import user from "./user";
import messages from "./messages";

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(user), fork(messages)]);
}
