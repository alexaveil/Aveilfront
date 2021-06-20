/* import external modules */
import { Person } from '@material-ui/icons'
import { Grid, Container, Typography, Paper, Button } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

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

const Chat = () => {
  const classes = useStyles()

  const renderQuestions = questions.map((question) => {
    return (
      <div elevation={3} className={classes.questionsText} key={question.id}>
        {question.text}
      </div>
    )
  })

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={4}>
          <Grid container direction="row">
            <Person fontSize="large" className={classes.iconPerson} />
            <Typography className={classes.userNameText}>User Name</Typography>
          </Grid>
          <Typography className={classes.title} align="center">
            Avi
          </Typography>
          <Typography className={classes.title} align="center">
            Other relevant questions:
          </Typography>
          <Grid container justify="center">
            <Paper elevation={3} className={classes.questionsText}>
              {renderQuestions}
            </Paper>
          </Grid>
          <Button>Ask</Button>
        </Grid>

        <Grid item xs={8}>
          8
        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
