/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Menu,
  Avatar,
  Switch,
  MenuItem,
  Container,
  Typography,
  Paper,
  InputBase,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowBackIos,
  Favorite,
  MoreVert,
  Search,
  Send,
} from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import RobotImageMobile from '../../assets/robot.png'
import { getMessagesById } from '../../apis/messages'
import {
  setHandleAlert,
  setHandleSelectedTheme,
} from '../../redux/actions/common/common'
import Loading from '../common/Loading'

const messagesBurned = [
  {
    answers: [
      'I am called Bot.',
      'My name is Bot.',
      'My name is Bot.',
      'My name is bot.',
    ],
    date: 'Sat, 24 Jul 2021 02:07:25 GMT',
    question: 'What is your name?',
    question_id: '60fb75ddba8dedbef9f0ff16',
  },
  {
    answers: [
      'I am not a fan of black holes.',
      "I don't like black holes, they are kind of scary in my opinion.",
      "I don't know, never thought about it.",
      'I love black holes.',
    ],
    date: 'Fri, 02 Jul 2021 12:40:08 GMT',
    option_selected: 2,
    question: 'I hate black holes, what do you think about black holes?',
    question_id: '60df33580b6c822fda968dee',
  },
  {
    answers: [
      'I think they are pretty much the greatest thing ever.',
      'Black holes are quite fascinating.',
      'I think we need to do more research on black holes.',
      'They are fascinating.',
    ],
    date: 'Fri, 02 Jul 2021 12:39:42 GMT',
    question: 'What do you think about black holes?',
    question_id: '60df333e0b6c822fda968ded',
  },
  {
    answers: [
      'I like them.',
      'I have gone to a few. Sometimes they are really good, and sometimes they are really bad. It depends on the music and the singer, but also on the venue.',
      "I don't like them.",
      'I like concerts.',
    ],
    date: 'Fri, 02 Jul 2021 12:39:11 GMT',
    option_selected: 2,
    question: 'What do you think about concerts?',
    question_id: '60df331f0b6c822fda968dec',
  },
  {
    answers: [
      'I think concerts are fun.',
      'I think concerts are great.',
      'I think they are great.',
      'I think they are great.',
    ],
    date: 'Fri, 02 Jul 2021 12:38:42 GMT',
    question: 'What do you think about concerts?',
    question_id: '60df3302a5d2f5609e692738',
  },
]

const ChatMobile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [typeMessage, setTypeMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const enableDarkTheme = useSelector(
    (state) => state.common.handleSelectedTheme
  )

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  useEffect(() => {
    getMessagesByIdFunction()
  }, [])

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const getMessagesByIdFunction = () => {
    setLoading(true)

    getMessagesById(1)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setMessages(response.data)
          setLoading(false)
        }
      })
      .catch((error) => {
        const message =
          error.name === 'Error'
            ? 'Algo ocurrió en el servidor'
            : error?.response?.data?.message_error

        const errorAlert = {
          message,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error(error)
        setLoading(false)
      })
  }

  const handleThemeFunction = () => {
    dispatch(setHandleSelectedTheme(!enableDarkTheme))
  }

  const onChangeData = (event) => {
    setTypeMessage(event.target.value)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const selectedAnswer = (answer) => {
    setTypeMessage(answer)
  }

  const goToBack = () => {
    history.goBack()
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobileMenu}
    >
      <MenuItem>
        Dark Mode
        <Switch
          checked={enableDarkTheme}
          onChange={handleThemeFunction}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </MenuItem>
    </Menu>
  )

  const renderMessages = messagesBurned.map((message, key) => {
    return (
      <div key={key}>
        {message?.question && (
          <div elevation={3} className={classes.messagesSendText}>
            {message.question}
          </div>
        )}
        <Typography className={classes.messagesReceiverTitle}>
          Select your favorite answer
        </Typography>
        {message?.answers?.map((answer, key) => {
          return (
            <div
              key={key}
              className={
                enableDarkTheme
                  ? classes.messagesReceiverContainerDark
                  : classes.messagesReceiverContainer
              }
            >
              <div className={classes.messagesReceiverItem}>
                <div elevation={3} onClick={() => selectedAnswer(answer)}>
                  {answer}
                </div>
              </div>
              <div className={classes.messagesReceiverItem}>
                <Favorite
                  color="disabled"
                  fontSize="small"
                  className={classes.favorite}
                  onClick={() => selectedAnswer(answer)}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <>
      <Container
        maxWidth="lg"
        component="section"
        className={enableDarkTheme ? classes.containerDark : classes.container}
      >
        <Grid
          container
          justify="space-between"
          className={classes.containerHearderGrid}
        >
          <ArrowBackIos
            className={
              enableDarkTheme ? classes.arrowBackIosDark : classes.arrowBackIos
            }
            onClick={goToBack}
          />
          <Grid>
            <Avatar
              alt="Aveil"
              src={RobotImageMobile}
              className={
                enableDarkTheme
                  ? classes.avatarMobileDark
                  : classes.avatarMobile
              }
            />
            <Typography
              className={
                enableDarkTheme
                  ? classes.titleAvatarMobileDark
                  : classes.titleAvatarMobile
              }
            >
              Avi
            </Typography>
          </Grid>
          <Grid>
            <Search
              className={
                enableDarkTheme ? classes.iconsHeaderDark : classes.iconsHeader
              }
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <MoreVert
              aria-haspopup="true"
              aria-label="show more"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              className={
                enableDarkTheme ? classes.iconsHeaderDark : classes.iconsHeader
              }
            />
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        className={
          enableDarkTheme
            ? classes.paperMessagesContainerDark
            : classes.paperMessagesContainer
        }
      >
        {!loading ? (
          <Paper
            elevation={0}
            className={
              enableDarkTheme
                ? classes.paperMessagesDark
                : classes.paperMessages
            }
          >
            {renderMessages}
          </Paper>
        ) : (
          <Loading />
        )}
        <Grid
          container
          className={
            enableDarkTheme
              ? classes.typeSendMessageDark
              : classes.typeSendMessage
          }
        >
          <Grid item xs={11} md={11} lg={11} xl={11}>
            <InputBase
              value={typeMessage}
              onChange={onChangeData}
              placeholder="Type a message..."
              className={
                enableDarkTheme
                  ? classes.typeMessagesDark
                  : classes.typeMessages
              }
              inputProps={{ 'aria-label': 'naked' }}
            />
          </Grid>
          <Grid item xs={1} md={1} lg={1} xl={1}>
            <Send
              color="primary"
              className={
                typeMessage ? classes.sendButton : classes.disabledSendButton
              }
            />
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </>
  )
}

export default ChatMobile
