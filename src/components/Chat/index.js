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
    text: 'Lorem Ipsum is simply dummy text',
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
    receiver: false,
  },
  {
    id: 6,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 7,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 8,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 9,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: false,
  },
  {
    id: 10,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 11,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 12,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 13,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: false,
  },
  {
    id: 14,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 15,
    text: 'Lorem Ipsum is simply dummy text',
    receiver: true,
  },
  {
    id: 16,
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
    <Container maxWidth="lg" component="section">
      <Grid container spacing={2} justify="center">
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
          <Grid container spacing={2}>
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
          <Grid container spacing={2}>
            <Paper elevation={0} className={classes.paperMessages}>
              {renderMessages}
            </Paper>
          </Grid>
          <Grid container spacing={2} className={classes.typeSendMessage}>
            <Grid item xs={12} md={9} lg={10} xl={10}>
              <TextField
                fullWidth={true}
                variant="outlined"
                label="Type a message"
                className={classes.typeMessages}
              />
            </Grid>
            <Grid item xs={12} md={3} lg={2} xl={2}>
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
