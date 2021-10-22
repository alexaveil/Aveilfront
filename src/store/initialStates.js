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
    selectedQuestion: null
  },
  commonReducer: {
    alert: { 
      message: '', 
      status: false, 
      severity: null
    },
  }
};

export default initialState;
