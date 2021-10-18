import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";

/* import internal modules */
import {userInfoSelector, enableDarkThemeSelector} from "../../store/selectors/user";
import {
  isRequestMessagesSelector,
  questionSuggestionSelector,
  messagesSelector,
} from "../../store/selectors/messages";
import { getUserInfo, changeTheme } from "../../store/actions/user";
import { getQuestionSuggestions, getMessages, askQuestion } from "../../store/actions/messages";
import Desktop from "./Desktop";
// import Mobile from "./Mobile";

const ChatPage = (props) => {
  const { getUserInfo, getQuestionSuggestions, getMessages } = props;
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // getUserInfo();
    // getQuestionSuggestions();
    getMessages(1);
  }, []);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 910);
  }, [window.innerWidth]);

  // return isDesktop ? <Desktop /> : <Mobile />;
  return <Desktop {...props} />;
};

const mapStateToProps = (state) => ({
  isRequestMessages: isRequestMessagesSelector(state),
  questionSuggestion: questionSuggestionSelector(state),
  messages: messagesSelector(state),
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
      askQuestion
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);
