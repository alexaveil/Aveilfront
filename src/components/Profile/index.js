/* import external modules */
import { Chip, Grid, Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const GetApp = () => {
  const classes = useStyles()

  // const handleDelete = () => {
  //   console.info('You clicked the delete icon.')
  // }

  // const handleClick = () => {
  //   console.info('You clicked the Chip.')
  // }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Typography variant="h4" component="h4" className={classes.title}>
          Choose your interests
        </Typography>

        <Typography
          variant="h5"
          component="h5"
          color="textSecondary"
          className={classes.subTitle}
        >
          Choose your interests
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          color="textSecondary"
          className={classes.counter}
        >
          0 / 5
        </Typography>
        <Grid className={classes.rootChips}>
          <Chip label="Learning" variant="outlined" clickable />
          <Chip label="Music" variant="outlined" clickable />
          <Chip label="Animals" variant="outlined" clickable />
          <Chip label="Art" variant="outlined" clickable />
          <Chip label="Sports" variant="outlined" clickable />
          <Chip label="Fashion" variant="outlined" clickable />
          <Chip label="Cars" variant="outlined" clickable />
          <Chip label="Fitness" variant="outlined" clickable />
          <Chip label="Science" variant="outlined" clickable />
          <Chip label="Movies" variant="outlined" clickable />
          <Chip label="Dance" variant="outlined" clickable />
          <Chip label="Tech" variant="outlined" clickable />
          <Chip label="Social Media" variant="outlined" clickable />
          <Chip label="Videogames" variant="outlined" clickable />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default GetApp
