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
  }
};

export default initialState;
