/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
  },
  lightContainer: {
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
    paddingTop: 30,
    paddingLeft: 30,
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
    [theme.breakpoints.down('xs')]: {
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
  titleQuestions: { fontWeight: 'bold', paddingTop: 21 },
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
    textAlign: 'center',
    borderRadius: 10,
    maxWidth: 120,
    marginLeft: '77%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '12%',
      textAlign: 'center',
      maxWidth: 260,
    },
  },
  messagesReceiverText: {
    padding: 10,
    color: 'black',
    marginTop: 10,
    background: '#E5E5E5',
    borderRadius: 10,
    maxWidth: 260,
    marginLeft: '7%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '12%',
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
    height: '81.7vh',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#E5E5E5',
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#E5E5E5',
    width: '100%',
    paddingTop: 140,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('xl')]: {
      height: '85.6vh',
    },
  },
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
      marginTop: 7,
    },
  },
  sendButton: {
    cursor: 'pointer',
    [theme.breakpoints.down('xl')]: {
      marginTop: 7,
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
    maxWidth: 110,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 180,
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

  /* Dark Theme */
  darkContainer: {
    backgroundColor: '#000427',
    padding: 40,
    [theme.breakpoints.up('xl')]: {
      padding: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}))

export default useStyles
