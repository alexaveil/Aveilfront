/* import external modules */
import {
  Grid,
  Paper,
  Button,
  TextField,
  Container,
  Typography,
  CardMedia,
  Card,
} from '@material-ui/core'
import { Circle } from 'rc-progress'
import { Person, Send } from '@material-ui/icons'

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
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 2,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: false,
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
]

const Chat = () => {
  const classes = useStyles()

  const renderQuestions = questions.map((question) => {
    return (
      <div elevation={3} className={classes.questionsText} key={question.id}>
        {question.text}
      </div>
    )
  })

  const renderMessages = messages.map((message) => {
    return (
      <div
        elevation={3}
        className={
          message.receiver
            ? classes.messagesReceiverText
            : classes.messagesSendText
        }
        key={message.id}
      >
        {message.text}
      </div>
    )
  })

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={4}>
          <Grid container direction="row">
            <Person fontSize="large" className={classes.iconPerson} />
            <Typography className={classes.userNameText}>User Name</Typography>
          </Grid>
          <Typography className={classes.title} align="center">
            Avi
          </Typography>
          <Grid container justify="center">
            <Card elevation={0} className={classes.image}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImage}
                title="Contemplative Reptile"
                className={classes.imageCircle}
              />
            </Card>
            <Circle
              percent="25"
              strokeWidth="3"
              strokeColor="#3043E9"
              className={classes.circle}
            />
          </Grid>
          <Typography className={classes.title} align="center">
            Other relevant questions:
          </Typography>
          <Grid container justify="center">
            <Paper elevation={3} className={classes.questionsText}>
              {renderQuestions}
            </Paper>
          </Grid>
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

        <Grid item xs={8}>
          <Paper elevation={0} className={classes.paperMessages}>
            {renderMessages}
          </Paper>
          <Grid container>
            <Grid item xs={10}>
              <TextField
                fullWidth={true}
                variant="outlined"
                label="Type a message"
                className={classes.typeMessages}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                color="primary"
                endIcon={<Send />}
                variant="contained"
                className={classes.sendButton}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
