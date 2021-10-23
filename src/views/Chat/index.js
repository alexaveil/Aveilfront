import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
  selectedQuestionSelector,
} from "../../store/selectors/messages";
import { getUserInfo, changeTheme } from "../../store/actions/user";
import { useWindowSize } from "../../utils/hooks";
import {
  getQuestionSuggestions,
  getMessages,
  askQuestion,
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
    needUpdateMessages,
    selectedQuestion
  } = props;
  const size = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    getMessages(0);

    if (!!selectedQuestion) {
      askQuestion({ question: selectedQuestion });
    }

    if (!userInfo) {
      getUserInfo();
    }

    if (questionSuggestion.length === 0) {
      getQuestionSuggestions();
    }
  }, []);

  useEffect(() => {
    if (needUpdateMessages) {
      getMessages(0);
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
  selectedQuestion: selectedQuestionSelector(state),
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
      selectQuestion
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
