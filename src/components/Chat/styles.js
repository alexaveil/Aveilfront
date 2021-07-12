/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  gridLeftContainer: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
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
    maxWidth: 300,
    marginLeft: '60%',
  },
  messagesReceiverText: {
    padding: 10,
    color: 'black',
    marginTop: 10,
    background: '#E5E5E5',
    borderRadius: 10,
    maxWidth: 300,
    marginLeft: '5%',
  },
  paperMessages: {
    height: '77vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    width: '100%',
    paddingTop: 40,
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  typeMessages: {
    marginTop: 20,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      // width: 700,
    },
  },
  sendButton: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: 2,
      marginLeft: 0,
    },
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
  typeSendMessage: {
    height: '19vh',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    [theme.breakpoints.down('sm')]: {
      height: '27vh',
    },
  },
}))

export default useStyles
