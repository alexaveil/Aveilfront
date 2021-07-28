/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ececec',
    width: '100%',
    height: '15vh',
  },
  containerHearderGrid: {
    paddingTop: 27,
  },
  avatarMobile: {
    backgroundColor: '#d8d8d8',
  },
  titleAvatarMobile: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13,
  },
  arrowBackIos: {
    color: '#c8c8c8',
    cursor: 'pointer',
    marginTop: 9,
  },
  iconsHeader: {
    color: '#c8c8c8',
    cursor: 'pointer',
    marginTop: 9,
  },
  mobileMenu: {
    marginTop: 50,
  },
  paperMessagesContainer: {},
  paperMessages: {
    height: '76vh',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: '76vh',
    },
  },
  messagesSendText: {
    padding: 10,
    color: 'white',
    background: '#3043E9',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: '45%',
    marginRight: '6%',
    textAlign: 'left',
    maxWidth: 200,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '75%',
    },
  },
  messagesReceiverTitle: {
    fontSize: 13,
    color: '#3043E9',
    fontWeight: 600,
    marginLeft: '7%',
    marginTop: 15,
  },
  messagesReceiverText: {
    cursor: 'pointer',
    padding: 10,
    color: 'black',
    marginTop: 10,
    background: '#E5E5E5',
    borderRadius: 10,
    marginLeft: '6%',
    maxWidth: 200,
  },
  sendButton: {
    cursor: 'pointer',
    marginTop: 7,
  },
  disabledSendButton: {
    color: '#b4b4b5',
    marginTop: 7,
  },
  typeMessages: {
    width: '93%',
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 3,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  typeSendMessage: {
    alignItems: 'center',
    height: '9vh',
    backgroundColor: '#e9e9e9',
  },

  /* Dark Theme */

  paperMessagesContainerDark: {
    backgroundColor: '#000326',
  },
  paperMessagesDark: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#000326',
    height: '76vh',
    [theme.breakpoints.up('sm')]: {
      height: '76vh',
    },
  },
  typeMessagesDark: {
    color: 'white',
    backgroundColor: '#000427',
    width: '93%',
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 3,
    borderRadius: 20,
  },
  typeSendMessageDark: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#b4b4b5',
    alignItems: 'center',
    height: '9vh',
    backgroundColor: '#0a0f45',
  },
  iconsHeaderDark: { color: 'white', cursor: 'pointer', marginTop: 9 },
  messagesReceiverTextDark: {
    cursor: 'pointer',
    padding: 10,
    borderRadius: 10,
    marginLeft: '6%',
    maxWidth: 200,
    color: 'white',
    marginTop: 10,
    background: '#000638',
  },
  containerDark: {
    backgroundColor: '#0a0f45',
    width: '100%',
    height: '15vh',
  },
  titleAvatarMobileDark: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13,
    color: 'white',
  },
  arrowBackIosDark: {
    color: 'white',
    cursor: 'pointer',
    marginTop: 9,
  },
  avatarMobileDark: {
    backgroundColor: '#0d1557',
  },
}))

export default useStyles
