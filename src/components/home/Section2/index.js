/* import external modules */
import {
  Card,
  List,
  Grid,
  Avatar,
  ListItem,
  Container,
  CardMedia,
  Typography,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core'
import {
  QuestionAnswer,
  MultilineChartSharp,
  SupervisedUserCircle,
} from '@material-ui/icons'
import { useEffect, useState } from 'react'

/* import internal modules */
import useStyles from './styles'
import Loading from '../../common/Loading'
import SmartphoneAveilImage from '../../../assets/smartphone-aveil.png'

const Section2 = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary" align="center">
            {`"WORLD'S MOST ADVANCED AI CHATBOT"`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center">
        <Grid item xs={6}>
          {!loading ? (
            <Card elevation={0} className={classes.image}>
              <CardMedia
                component="img"
                alt="Smartphone Aveil"
                image={SmartphoneAveilImage}
                title="Contemplative Reptile"
              />
            </Card>
          ) : (
            <Loading />
          )}
        </Grid>
        <Grid item xs={6}>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <SupervisedUserCircle />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Avi answers your questions in a personalized way to make it as easy to understand as possible." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <QuestionAnswer />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="Get answers to your questions in the fastest way and also have really interesting conversations with a super inteligent, unique and charming chatbot." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <MultilineChartSharp />
                </Avatar>
              </ListItemAvatar>
              <ListItemText secondary="The more you chat the better responses you'll get as Avi adapts to you personality and interests." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Powered by Open AI's GPT-3." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Section2
