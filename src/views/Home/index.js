/* import external modules */
import { Grid, Container, Box } from "@material-ui/core";

/* import internal modules */
import { AppBar, Copyright } from "../../components";
import Section1 from "./Section1";
import Section4 from "./Section4";
import Section3 from "./Section3";
import Section2 from "./Section2";

const Home = () => {
  return (
    <>
      <AppBar />
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Section1 />
          </Grid>
          <Grid item xs={12}>
            <Section2 />
          </Grid>
          <Grid item xs={12}>
            <Section3 />
          </Grid>
          <Grid item xs={12}>
            <Section4 />
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
};

export default Home;
