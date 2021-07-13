/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    marginTop: 7,
  },
  userNameText: { padding: 10, color: 'gray' },
  iconPerson: { color: 'gray', marginLeft: 20 },
  title: { fontWeight: 'bold', paddingTop: 50, paddingBottom: 40 },
  titleQuestions: { fontWeight: 'bold', paddingTop: 30 },
  containerQuestions: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 10,
    textAlign: 'left',
    marginTop: 20,
    maxWidth: 270,
  },
  questionsText: {
    padding: 7,
    color: 'gray',
    backgroundColor: '#fafafa',
  },
  askButton: { borderRadius: 20, marginTop: 20, marginBottom: 20 },
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
    height: '83vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    width: '100%',
    paddingTop: 140,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  typeSendMessage: {
    height: '12vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    [theme.breakpoints.down('sm')]: {
      height: '12vh',
    },
  },
  typeMessages: {
    marginTop: 20,
    width: '100%',
    marginLeft: 30,
  },
  sendButton: {
    marginTop: 20,
  },
  circle: { maxHeight: 110, position: 'absolute' },
  imageCircle: { backgroundColor: '#fafafa', maxWidth: 110 },
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
}))

export default useStyles
