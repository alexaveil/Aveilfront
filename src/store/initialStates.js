const initialState = {
  userReducer: {
    accessToken: null,
    userInfo: null,
    enableDarkTheme: false,
    isRequestUser: false,
  },
  messagesReducer: {
    isRequestMessages: false,
    questionSuggestion: [],
    messages: [],
    needUpdate: false,
  }
};

export default initialState;
