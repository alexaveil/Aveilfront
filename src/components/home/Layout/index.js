/* import external modules */
import { Grid, Container, Box } from '@material-ui/core'

/* import internal modules */
import Copyright from '../../common/Copyright'

const HomeLayout = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Section 1
        </Grid>
        <Grid item xs={12}>
          Section 2
        </Grid>
        <Grid item xs={12}>
          Section 3
        </Grid>
        <Grid item xs={12}>
          Section 4
        </Grid>
        <Grid item xs={12}>
          Section 5
        </Grid>
      </Grid>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default HomeLayout
