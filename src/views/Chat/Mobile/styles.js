/* import external modules */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ececec",
    width: "100%",
  },
  containerHearderGrid: {
    padding: "10px 0",
  },
  avatarMobile: {
    backgroundColor: "#d8d8d8",
  },
  titleAvatarMobile: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 13,
  },
  headerIcons: {
    color: "#c8c8c8",
    cursor: "pointer",
  },
  containerHearderAvatar: {
    display: "flex",
    flexDirection: "column",
  },
  containerHearderIcons: {
    display: "flex",
    alignItems: "center",
  },
  iconsHeaderItem: {
    display: "flex",
    margin: 10,
    cursor: "pointer",
  },
  mobileMenu: {
    marginTop: 50,
  },
  paperMessagesContainer: {
    backgroundColor: "white",
  },
  paperMessages: {
    height: "80vh",
    padding: "15px 0",
    width: "100%",
    overflowX: "hidden",
  },
  messagesSendText: {
    padding: 10,
    color: "white",
    background: "#3043E9",
    marginTop: 10,
    borderRadius: 10,
    marginLeft: "55%",
    marginRight: "6%",
    textAlign: "left",
    maxWidth: "45%",
  },
  messagesReceiverTitle: {
    fontSize: 13,
    color: "#3043E9",
    fontWeight: 600,
    marginLeft: "6%",
    marginTop: 15,
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
  sendButton: {
    cursor: "pointer",
    marginTop: 7,
  },
  disabledSendButton: {
    color: "#b4b4b5",
    marginTop: 7,
  },
  typeMessages: {
    width: "89%",
    marginLeft: 23,
    paddingLeft: 10,
    marginTop: 3,
    backgroundColor: "white",
    borderRadius: 20,
  },
  typeSendMessage: {
    alignItems: "center",
    height: "auto",
    padding: "25px 0",
    backgroundColor: "#e9e9e9",
  },

  suggestionModal: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "white",
  },

  containerUserName: {
    padding: "20px 30px",
  },
  containerUserWrapper: {
    display: "flex",
  },
  userNameText: { padding: 10, color: "gray" },
  iconPerson: { color: "gray" },
  title: {
    paddingTop: 30,
    fontWeight: "bold",
    paddingBottom: 30,
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
  imageCircle: {
    maxWidth: 160,
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

  loadingWrapper: {
    bottom: '15%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  /* Dark Theme */
  suggestionModalDark: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    right: 0,
    height: "100%",
    backgroundColor: "#000638",
  },
  titleQuestionsDark: { fontWeight: "bold", paddingTop: 44, color: "white" },
  titleDark: {
    color: "white",
    paddingTop: 30,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  userNameTextDark: { padding: 10, color: "white" },
  iconPersonDark: { color: "white" },
  imageCircleDark: {
    backgroundColor: "#000638",
    maxWidth: 160,
  },
  paperMessagesContainerDark: {
    backgroundColor: "#000326",
  },
  paperMessagesDark: {
    width: "100%",
    overflowX: "hidden",
    backgroundColor: "#000326",
    height: "80vh",
    padding: "15px 0",
  },
  typeMessagesDark: {
    color: "white",
    backgroundColor: "#000427",
    width: "89%",
    paddingLeft: 10,
    marginLeft: 23,
    marginTop: 3,
    borderRadius: 20,
  },
  typeSendMessageDark: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "#b4b4b5",
    alignItems: "center",
    height: "auto",
    padding: "25px 0",
    backgroundColor: "#0a0f45",
  },
  iconsHeaderDark: { color: "white", cursor: "pointer", marginTop: 9 },
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
  containerDark: {
    backgroundColor: "#0a0f45",
    width: "100%",
  },
  titleAvatarMobileDark: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 13,
    color: "white",
  },
  headerIconsDark: {
    color: "white",
    cursor: "pointer",
  },
  avatarMobileDark: {
    backgroundColor: "#0d1557",
  },
  favoriteDark: {
    color: "#3044e9",
  },
}));

export default useStyles;
