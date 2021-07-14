/* import external modules */
import {
  Grid,
  Card,
  Paper,
  Button,
  InputBase,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { useState } from 'react'
// import { Circle } from 'rc-progress'
import { Brush, MoreVert, Person, Search, Send } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import RobotImage from '../../assets/robot-chat.png'

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

const messages = [
  {
    id: 1,
    text: `¿What's 2 + 2?`,
    receiver: false,
  },
  {
    id: 2,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 3,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 4,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 5,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
]

const Chat = () => {
  const classes = useStyles()
  const [typeMessage, setTypeMessage] = useState('')

  const onChangeData = (event) => {
    setTypeMessage(event.target.value)
  }

  const renderQuestions = questions.map((question) => {
    return (
      <div elevation={3} className={classes.questionsText} key={question.id}>
        {question.text}
      </div>
    )
  })

  const renderMessages = messages.map((message, key) => {
    return (
      <div key={message.id}>
        {message.id === 2 && (
          <Typography className={classes.messagesReceiverTitle}>
            Select your favorite answer
          </Typography>
        )}
        <div
          elevation={3}
          className={
            message.receiver
              ? classes.messagesReceiverText
              : classes.messagesSendText
          }
        >
          {message.text}
        </div>
      </div>
    )
  })

  return (
    // <Container maxWidth="xl" component="div" className={classes.container}>
    <Grid container justify="center">
      <Grid
        item
        md={4}
        lg={4}
        xl={4}
        xs={12}
        className={classes.gridLeftContainer}
      >
        <Grid container direction="row">
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
            <div className={classes.iconsHeaderItem}>
              <Brush className={classes.iconsHeader} />
            </div>
            <div className={classes.iconsHeaderItem}>
              <MoreVert className={classes.iconsHeader} />
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
                  typeMessage ? classes.sendButton : classes.disabledSendButton
                }
              />
            </Grid>
          }
        </Grid>
      </Grid>
    </Grid>
    // </Container>
  )
}

export default Chat
