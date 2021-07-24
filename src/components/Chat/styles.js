/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  containerGrid: {
    backgroundColor: 'white',
    padding: 40,
    [theme.breakpoints.up('xl')]: {
      padding: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  containerUserName: {
    paddingTop: 20,
    paddingLeft: 20,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '10%',
      paddingLeft: '10%',
    },
  },
  gridLeftContainer: {
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#E5E5E5',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#E5E5E5',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      borderRightWidth: '2px',
      borderRightStyle: 'solid',
      borderRightColor: '#E5E5E5',
    },
  },
  userNameText: { padding: 10, color: 'gray' },
  iconPerson: { color: 'gray' },
  title: {
    fontWeight: 'bold',
    paddingTop: 35,
    paddingBottom: 40,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '30%',
    },
  },
  titleQuestions: { fontWeight: 'bold', paddingTop: 14 },
  containerQuestions: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#9f9e9e',
    borderRadius: 10,
    textAlign: 'left',
    marginTop: 20,
    maxWidth: 270,
    [theme.breakpoints.up('xl')]: {
      marginTop: '10%',
    },
  },
  questionsText: {
    padding: 7,
    color: '#9f9e9e',
    backgroundColor: 'white',
  },
  askButton: {
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    textTransform: 'capitalize',
    [theme.breakpoints.up('xl')]: {
      marginTop: '10%',
    },
  },
  messagesSendText: {
    padding: 10,
    color: 'white',
    background: '#3043E9',
    marginTop: 10,
    textAlign: 'left',
    borderRadius: 10,
    marginLeft: '60%',
    marginRight: '5%',
    maxWidth: 270,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      textAlign: 'left',
      maxWidth: 260,
    },
  },
  messagesReceiverText: {
    cursor: 'pointer',
    padding: 10,
    color: 'black',
    marginTop: 10,
    background: '#E5E5E5',
    borderRadius: 10,
    maxWidth: 270,
    marginLeft: '7%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      maxWidth: 260,
    },
  },
  messagesReceiverTitle: {
    fontSize: 13,
    marginLeft: '7%',
    color: '#3043E9',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '12%',
      marginTop: 15,
    },
  },
  paperMessages: {
    height: '68.7vh',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#E5E5E5',
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#E5E5E5',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('xl')]: {
      height: '66.6vh',
    },
  },
  paperMessagesContainer: {},
  typeSendMessage: {
    alignItems: 'center',
    height: '9vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
    },
  },
  typeMessages: {
    width: '93%',
    marginLeft: 30,
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  sendButton: {
    cursor: 'pointer',
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  disabledSendButton: {
    color: 'gray',
    [theme.breakpoints.down('xl')]: {
      marginTop: 7,
    },
  },
  circle: { maxHeight: 110, position: 'absolute' },
  imageCircle: {
    backgroundColor: 'white',
    maxWidth: 63,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 130,
    },
  },
  iconsHeader: {
    color: 'gray',
  },
  iconsHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    width: '100%',
  },
  iconsHeaderItem: {
    display: 'block',
    padding: 7,
    cursor: 'pointer',
  },
  iconsHeaderContainerSmall: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    width: '100%',
  },
  iconsHeaderItemSmall: {
    display: 'block',
    padding: 7,
    cursor: 'pointer',
  },
  mobileMenu: {
    marginTop: 50,
  },
  headerIntoSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  headerIntoLarge: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  /* Dark Theme */
  gridLeftContainerDark: {
    background: '#000638',
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#000326',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#000326',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#000326',
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      borderRightWidth: '2px',
      borderRightStyle: 'solid',
      borderRightColor: '#000326',
    },
  },
  titleQuestionsDark: { fontWeight: 'bold', paddingTop: 14, color: 'white' },
  titleDark: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 35,
    paddingBottom: 40,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '30%',
    },
  },
  userNameTextDark: { padding: 10, color: 'white' },
  iconPersonDark: { color: 'white' },
  imageCircleDark: {
    backgroundColor: '#000638',
    maxWidth: 63,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 130,
    },
  },
  containerQuestionsDark: {
    borderRadius: 10,
    textAlign: 'left',
    marginTop: 20,
    maxWidth: 270,
    [theme.breakpoints.up('xl')]: {
      marginTop: '10%',
    },
  },
  questionsTextDark: {
    padding: 7,
    color: 'white',
    backgroundColor: '#091253',
  },
  iconsHeaderDark: {
    color: 'white',
  },
  iconsHeaderContainerDark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
    backgroundColor: '#000326',
  },
  paperMessagesDark: {
    height: '68.7vh',
    width: '100%',
    paddingTop: 40,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#000326',
    [theme.breakpoints.up('xl')]: {
      height: '66.6vh',
    },
  },
  paperMessagesContainerDark: {
    backgroundColor: '#000326',
  },
  messagesReceiverTextDark: {
    cursor: 'pointer',
    padding: 10,
    color: 'white',
    marginTop: 10,
    background: '#000638',
    borderRadius: 10,
    maxWidth: 270,
    marginLeft: '7%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      maxWidth: 260,
    },
  },
  typeSendMessageDark: {
    background: '#000638',
    alignItems: 'center',
    height: '9.3vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#000326',
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
    },
  },
  typeMessagesDark: {
    borderRadius: 20,
    color: 'white',
    backgroundColor: '#000326',
    width: '93%',
    paddingLeft: 30,
    marginLeft: 30,
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
}))

export default useStyles
