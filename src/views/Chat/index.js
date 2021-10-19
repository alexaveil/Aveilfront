import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useLocation } from "react-router-dom";

/* import internal modules */
import {
  userInfoSelector,
  enableDarkThemeSelector,
} from "../../store/selectors/user";
import {
  isRequestMessagesSelector,
  questionSuggestionSelector,
  messagesSelector,
  needUpdateMessagesSelector,
} from "../../store/selectors/messages";
import { getUserInfo, changeTheme } from "../../store/actions/user";
import { useWindowSize } from "../../utils/hooks";
import {
  getQuestionSuggestions,
  getMessages,
  askQuestion,
  askCustomQuestion,
  selectQuestion,
} from "../../store/actions/messages";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const ChatPage = (props) => {
  const {
    askQuestion,
    getUserInfo,
    getQuestionSuggestions,
    getMessages,
    userInfo,
    questionSuggestion,
    needUpdateMessages
  } = props;
  const size = useWindowSize();
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // if (location?.state?.question) {
    //   askQuestion({ question: location?.state?.question });
    // }

    getMessages(1);
    if (!userInfo) {
      getUserInfo();
    }

    if (questionSuggestion.length === 0) {
      getQuestionSuggestions();
    }
  }, []);

  useEffect(() => {
    if (needUpdateMessages) {
      getMessages(1);
    }
  }, [needUpdateMessages]);

  useEffect(() => {
    setIsDesktop(size.width >= 910);
  }, [size.width]);

  return isDesktop ? <Desktop {...props} /> : <Mobile {...props} />;
};

const mapStateToProps = (state) => ({
  isRequestMessages: isRequestMessagesSelector(state),
  questionSuggestion: questionSuggestionSelector(state),
  messages: messagesSelector(state),
  needUpdateMessages: needUpdateMessagesSelector(state),
  userInfo: userInfoSelector(state),
  enableDarkTheme: enableDarkThemeSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUserInfo,
      changeTheme,
      getQuestionSuggestions,
      getMessages,
      askQuestion,
      askCustomQuestion,
      selectQuestion
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
