/* import external modules */
import clsx from 'clsx'
import { Android, Apple } from '@material-ui/icons'
import { Typography, Container, Button, Grid } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const Section4 = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-around">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            gutterBottom
            color="textPrimary"
            className={classes.titleContactUs}
          >
            {'Contact Us'}
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Typography
                href="#"
                variant="subtitle1"
                color="textSecondary"
                className={classes.itemContactUs}
              >
                {'Address: Cra 768 # 38 - 00'}
              </Typography>
            </li>
            <li>
              <Typography
                href="#"
                variant="subtitle1"
                color="textSecondary"
                className={classes.itemContactUs}
              >
                {'Email: aveil@example.com'}
              </Typography>
            </li>
            <li>
              <Typography
                href="#"
                variant="subtitle1"
                color="textSecondary"
                className={classes.itemContactUs}
              >
                {'Phone: 35472747'}
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            gutterBottom
            color="textPrimary"
            className={classes.titleButtonsGetApp}
          >
            {'Get the app'}
          </Typography>
          <ul className={clsx(classes.ul, classes.buttonsGetApp)}>
            <li>
              <Button
                size="large"
                variant="outlined"
                startIcon={<Apple />}
                className={classes.button}
              >
                iOS
              </Button>
            </li>
            <li>
              <Button
                size="large"
                variant="outlined"
                startIcon={<Android />}
                className={classes.button}
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
