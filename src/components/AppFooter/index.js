/* import external modules */
import { Android, Apple } from "@material-ui/icons";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import clsx from "clsx";

/* import internal modules */
import useStyles from "./styles";

const Copyright = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-around">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              className={classes.titleContactUs}
            >
              {"Contact Us"}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              gutterBottom
              color="textPrimary"
              className={classes.titleButtonsGetApp}
            >
              {"Get the app"}
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
      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        style={{ marginBottom: 40 }}
      >
        {"Copyright © Aveil "}
        {new Date().getFullYear()}
        {". "}
        {"All rights reserved."}
      </Typography>
    </>
  );
};

export default Copyright;
