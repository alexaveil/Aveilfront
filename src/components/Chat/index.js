/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Card,
  Paper,
  Button,
  InputBase,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  Container,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
// import { Circle } from 'rc-progress'
import { Brush, MoreVert, Person, Search, Send } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import RobotImage from '../../assets/robot-chat.png'
import { getMessagesById } from '../../apis/messages'

const questions = [
  {
    id: 1,
    text: 'Lorem Ipsum is simply dummy text.',
  },
  {
    id: 2,
    text: 'Lorem Ipsum is simply dummy text.',
  },
  {
    id: 3,
    text: 'Lorem Ipsum is simply dummy text.',
  },
  {
    id: 4,
    text: 'Lorem Ipsum is simply dummy text.',
  },
]

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

const Chat = () => {
  const classes = useStyles()
  const [typeMessage, setTypeMessage] = useState('')
  const [enableDarkTheme, setEnableDarkTheme] = useState(false)
  const [messages, setMessages] = useState([])
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  useEffect(() => {
    getMessagesByIdFunction()
  }, [])

  const getMessagesByIdFunction = () => {
    getMessagesById(0)
      .then((response) => {
        if (response.status >= 200 && response.status >= 299) {
          setMessages(response.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const onChangeData = (event) => {
    setTypeMessage(event.target.value)
  }

  const selectedAnswer = (answer) => {
    setTypeMessage(answer)
  }

  const renderQuestions = questions.map((question) => {
    return (
      <div elevation={3} className={classes.questionsText} key={question.id}>
        {question.text}
      </div>
    )
  })

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
            <div key={key}>
              <div
                elevation={3}
                className={classes.messagesReceiverText}
                onClick={() => selectedAnswer(answer)}
              >
                {answer}
              </div>
            </div>
          )
        })}
      </div>
    )
  })

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
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
    >
      <MenuItem>
        <Button className={classes.item} color="inherit">
          Profile
        </Button>
      </MenuItem>
    </Menu>
  )

  return (
    <Container maxWidth="xl" component="section" className={classes.container}>
      <Grid
        container
        justify="center"
        className={
          enableDarkTheme ? classes.darkContainer : classes.lightContainer
        }
      >
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
          xs={12}
          className={classes.gridLeftContainer}
        >
          <Grid container direction="row" className={classes.containerUserName}>
            <Person fontSize="large" className={classes.iconPerson} />
            <Typography className={classes.userNameText}>User Name</Typography>
          </Grid>
          <Typography className={classes.title} align="center">
            Avi
          </Typography>
          <Grid container justify="center">
            <Card elevation={0}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImage}
                title="Aveil"
                className={classes.imageCircle}
              />
            </Card>
            {/* <Circle
              percent="25"
              strokeWidth="3"
              strokeColor="#3043E9"
              className={classes.circle}
            /> */}
          </Grid>
          <Typography className={classes.titleQuestions} align="center">
            Other relevant questions:
          </Typography>
          <center>
            <Grid
              container
              justify="center"
              className={classes.containerQuestions}
            >
              <Paper elevation={0} className={classes.questionsText}>
                {renderQuestions}
              </Paper>
            </Grid>
          </center>
          <Grid container justify="center">
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.askButton}
            >
              Ask
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8} lg={8} xl={8}>
          <Grid container>
            <div className={classes.iconsHeaderContainer}>
              <div className={classes.iconsHeaderItem}>
                <Search className={classes.iconsHeader} />
              </div>
              {/* <div className={classes.iconsHeaderItem}>
                <Brush
                  className={classes.iconsHeader}
                  onClick={() => setEnableDarkTheme(!enableDarkTheme)}
                />
              </div> */}
              <div className={classes.iconsHeaderItem}>
                <MoreVert
                  aria-haspopup="true"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  onClick={handleMobileMenuOpen}
                  className={classes.iconsHeader}
                />
              </div>
            </div>
          </Grid>
          <Grid container>
            <Paper elevation={0} className={classes.paperMessages}>
              {renderMessages}
            </Paper>
          </Grid>
          <Grid container className={classes.typeSendMessage}>
            <Grid item xs={10} md={11} lg={11} xl={11}>
              <InputBase
                value={typeMessage}
                onChange={onChangeData}
                placeholder="Type a message..."
                className={classes.typeMessages}
                inputProps={{ 'aria-label': 'naked' }}
              />
            </Grid>
            {
              <Grid item xs={2} md={1} lg={1} xl={1}>
                <Send
                  color="primary"
                  className={
                    typeMessage
                      ? classes.sendButton
                      : classes.disabledSendButton
                  }
                />
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </Container>
  )
}

export default Chat
