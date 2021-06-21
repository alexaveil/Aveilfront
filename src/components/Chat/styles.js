/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
  userNameText: { padding: 10, color: 'gray' },
  iconPerson: { color: 'gray' },
  title: { fontWeight: 'bold', marginTop: 50 },
  questionsText: { padding: 10, color: 'gray', marginTop: 10 },
  askButton: { borderRadius: 20, marginTop: 20 },
  messagesSendText: {
    padding: 10,
    color: 'white',
    background: '#3043E9',
    marginTop: 10,
    textAlign: 'right',
    borderRadius: 10,
  },
  messagesReceiverText: {
    padding: 10,
    color: 'black',
    marginTop: 10,
    background: '#E5E5E5',
    borderRadius: 10,
  },
  paperMessages: {
    height: '80%',
  },
  typeMessages: {
    marginTop: 20,
  },
  sendButton: {
    marginTop: 30,
    marginLeft: 10,
  },
  circle: { maxHeight: 110, position: 'absolute' },
  imageCircle: { backgroundColor: '#fafafa', marginTop: 5 },
}))

export default useStyles
