/* import external modules */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
  },
  containerGrid: {
    padding: 40,
  },
  containerUserName: {
    padding: "20px 30px",
  },
  gridLeftContainer: {
    border: "2px solid #E5E5E5",
    marginTop: 0,
  },
  userNameText: { padding: 10, color: "gray" },
  iconPerson: { color: "gray" },
  title: {
    paddingTop: "23%",
    fontWeight: "bold",
    paddingBottom: 40,
  },
  titleQuestions: { fontWeight: "bold", paddingTop: 44 },
  containerQuestions: {
    textAlign: "left",
    marginTop: 20,
    maxWidth: 270,
  },
  containerQuestionWrapper: {
    border: "1px solid #9f9e9e",
    borderRadius: 5,
    overflow: "hidden",
  },
  questionsText: {
    padding: 10,
    backgroundColor: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3043e9",
      color: "white",
    },
  },
  selectedQuestionText: {
    backgroundColor: "#3043e9",
    color: "white",
  },
  askButton: {
    borderRadius: 20,
    marginTop: 27,
    marginBottom: 50,
    textTransform: "capitalize",
  },
  messagesSendText: {
    padding: 10,
    color: "white",
    background: "#3043E9",
    marginTop: 10,
    textAlign: "left",
    borderRadius: 10,
    marginLeft: "55%",
    marginRight: "6%",
  },

  messagesReceiverContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "normal",
    background: "#E5E5E5",
    borderRadius: 10,
    maxWidth: "45%",
    marginLeft: "6%",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 10,
    padding: "15px",
  },
  messagesReceiverItemText: {
    width: "100%",
  },
  messagesReceiverItemFavorite: {
    width: 30,
  },
  favoriteMain: {
    width: "100%",
    height: "100%",
  },
  favoriteSelected: {
    color: "#ffa500",
  },
  favorite: {
    color: "#aaaaaa",
  },
  messagesReceiverTitle: {
    fontSize: 13,
    marginLeft: "6%",
    color: "#3043E9",
    fontWeight: 600,
  },
  paperMessages: {
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 0,
    position: "relative",
  },
  paperMessagesContainer: {
    overflowY: "auto",
  },
  typeSendMessage: {
    alignItems: "center",
    height: "9vh",
    borderTop: "2px solid #E5E5E5",
    borderBottom: "2px solid #E5E5E5",
  },
  typeMessages: {
    width: "93%",
    marginLeft: 30,
    paddingLeft: 10,
  },
  sendButton: {
    cursor: "pointer",
  },
  disabledSendButton: {
    color: "#b4b4b5",
  },
  circle: { maxHeight: 110, position: "absolute" },
  imageCircle: {
    maxWidth: 160,
  },
  iconsHeader: {
    color: "gray",
  },
  iconsHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderBottomColor: "#E5E5E5",
    borderTopWidth: "2px",
    borderTopStyle: "solid",
    borderTopColor: "#E5E5E5",
    width: "100%",
  },
  iconsHeaderItem: {
    display: "flex",
    margin: 10,
    cursor: "pointer",
  },
  mobileMenu: {
    marginTop: 50,
  },
  secondPageChat: {
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderRightColor: "#E5E5E5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },


  loadingWrapper: {
    bottom: '0',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },


  /* Dark Theme */
  containerDark: {
    backgroundColor: "#000638",
  },
  gridLeftContainerDark: {
    background: "#000638",
    border: "2px solid #000326",
    marginTop: 0,
  },
  titleQuestionsDark: { fontWeight: "bold", paddingTop: 44, color: "white" },
  titleDark: {
    color: "white",
    paddingTop: "23%",
    fontWeight: "bold",
    paddingBottom: 40,
  },
  userNameTextDark: { padding: 10, color: "white" },
  iconPersonDark: { color: "white" },
  imageCircleDark: {
    backgroundColor: "#000638",
    maxWidth: 160,
  },
  iconsHeaderDark: {
    color: "white",
  },
  iconsHeaderContainerDark: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
    width: "100%",
    backgroundColor: "#000326",
    borderBottom: "2px solid #000637",
  },
  paperMessagesDark: {
    width: "100%",
    overflowY: "auto",
    backgroundColor: "#000326",
    borderRadius: 0,
    paddingTop: 30,
    paddingBottom: 30,
    position: "relative",
  },
  paperMessagesContainerDark: {
    backgroundColor: "#000326",
    overflowY: "auto",
  },
  secondPageChatDark: {
    borderRightWidth: "2px",
    borderRightStyle: "solid",
    borderRightColor: "#000326",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  messagesReceiverContainerDark: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "normal",
    background: "#000638",
    borderRadius: 10,
    maxWidth: "45%",
    marginLeft: "6%",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 10,
    padding: "15px",
    color: "white",
  },
  typeSendMessageDark: {
    background: "#000326",
    alignItems: "center",
    height: "88px",
    borderTop: "2px solid #000637",
  },
  typeMessagesDark: {
    color: "white",
    backgroundColor: "#000326",
    width: "93%",
    paddingLeft: 10,
    marginLeft: 30,
  },
  favoriteDark: {
    color: "#3044e9",
  },
}));

export default useStyles;
