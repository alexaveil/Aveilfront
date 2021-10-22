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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* import internal modules */
import { Loading } from "../../../components";
import { useStyles, CssTextField } from "./styles";
import RobotImage from "../../../assets/robot.png";
import * as keys from "../../../utils/keys";
import {
  getQuestionSuggestions,
  setSelectedQuestion,
} from "../../../store/actions/messages";
import {
  isRequestMessagesSelector,
  questionSuggestionSelector,
} from "../../../store/selectors/messages";

const Section1 = (props) => {
  const {
    isRequestMessages,
    questionSuggestion,
    getQuestionSuggestions,
    setSelectedQuestion,
  } = props;
  const classes = useStyles();
  const history = useHistory();
  const containerRef = useRef();
  const [motion, setMotion] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    getQuestionSuggestions();
    handleChange();
    setTimeout(() => {
      setLoadingImage(false);
    }, 500);
  }, []);

  const handleChange = () => {
    setMotion((prev) => !prev);
  };

  const handleQuestionSelected = (value) => {
    setSelectedQuestion(value);
    history.push(keys.CHAT);
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
      {!isRequestMessages ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Autocomplete
                options={questionSuggestion}
                onChange={(event, value) => handleQuestionSelected(value)}
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

const mapStateToProps = (state) => ({
  isRequestMessages: isRequestMessagesSelector(state),
  questionSuggestion: questionSuggestionSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getQuestionSuggestions,
      setSelectedQuestion,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Section1);
