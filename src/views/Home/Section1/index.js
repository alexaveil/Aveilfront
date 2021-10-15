/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Card,
  Grid,
  Zoom,
  Paper,
  Container,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Autocomplete } from "@material-ui/lab";
import { useEffect, useRef, useState } from "react";

/* import internal modules */
import Loading from "../../../components/common/Loading";
import { useStyles, CssTextField } from "./styles";
import RobotImage from "../../../assets/robot.png";

const Section1 = () => {
  const classes = useStyles();
  const history = useHistory();
  const containerRef = useRef();
  const [motion, setMotion] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingTextfield, setLoadingTextfield] = useState(true);

  useEffect(() => {
    handleChange();
    setTimeout(() => {
      setLoadingImage(false);
    }, 500);

    setTimeout(() => {
      setLoadingTextfield(false);
    }, 700);
  }, []);

  const handleChange = () => {
    setMotion((prev) => !prev);
  };

  const CustomPaper = (props) => {
    return <Paper elevation={8} {...props} />;
  };

  return (
    <Container
      ref={containerRef}
      maxWidth="lg"
      component="section"
      className={classes.section}
    >
      <Grid container spacing={0} justify="flex-end">
        <Grid item xs={6}>
          <Zoom
            in={motion}
            style={{ transitionDelay: motion ? "1300ms" : "0ms" }}
          >
            <Paper elevation={0} className={classes.paper}>
              <Typography className={classes.title} align="left">
                Avi
              </Typography>
              <Typography className={classes.subtitle} align="left">
                Ask me anything, I'II do my best to help you.
              </Typography>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>
      {!loadingImage ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Card elevation={0} className={classes.image}>
                <CardMedia
                  component="img"
                  alt="Aveil"
                  image={RobotImage}
                  title="Aveil"
                />
              </Card>
            </center>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
      {!loadingTextfield ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Autocomplete
                // options={questionsSuggestion}
                // onChange={(event, value) => handleQuestionSelected(value)}
                id="combo-box-autocomplete"
                PaperComponent={CustomPaper}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    color="primary"
                    variant="filled"
                    label={
                      <span className={classes.textLabel}>
                        Ask Avi a Question...
                      </span>
                    }
                    className={classes.texfield}
                  />
                )}
              />
            </center>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Section1;
