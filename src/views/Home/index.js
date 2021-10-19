/* import external modules */
import { Grid, Container } from "@material-ui/core";

/* import internal modules */
import { MainLayout } from "../../components";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Home = () => {
  return (
    <MainLayout>
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
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Home;
