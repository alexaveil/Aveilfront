/* import external modules */
import { Android, Apple } from '@material-ui/icons'
import { Typography, Container, Button, Grid, Link } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const Section4 = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {'Contact Us'}
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {'Address: Cra 768 # 38 - 00'}
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {'Email: aveil@example.com'}
              </Link>
            </li>
            <li>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {'Phone: 35472747'}
              </Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {'Get the app'}
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Button
                variant="outlined"
                size="large"
                className={classes.button}
                startIcon={<Apple />}
              >
                iOS
              </Button>
            </li>
            <li>
              <Button
                variant="outlined"
                size="large"
                className={classes.button}
                startIcon={<Android />}
              >
                Android
              </Button>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Section4
