/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Card,
  Paper,
  Button,
  InputBase,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  Container,
  Switch,
} from "@material-ui/core";
// import { Circle } from 'rc-progress'
import {
  Send,
  Person,
  Search,
  MoreVert,
  ArrowForwardIos,
  Favorite,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* import internal modules */
import useStyles from "./styles";
import { Loading } from "../../../components";
import RobotImage from "../../../assets/robot-chat.png";
import RobotImageMobile from "../../../assets/robot.png";

const Desktop = (props) => {
  const {
    isRequestMessages,
    questionSuggestion,
    messages,
    userInfo,
    enableDarkTheme,
    changeTheme,
    askQuestion,
  } = props;
  const history = useHistory();
  const classes = useStyles();
  const [chatHeight, setChatHeight] = useState(0);
  const [selectedQuestionSuggest, setSelectedQuestionSuggest] = useState("");

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // temp
  const typeMessage = "";

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const containerRef = useRef();
  const autoScrollRef = useRef();
  const gridLeftContainerRef = useRef();
  const refSendButtonQuestion = useRef();
  const gridLeftContainerQuestionsRef = useRef();

  useEffect(() => {
    autoScrollRef.current.scrollTo(0, 3000);
    setChatHeight(window.innerHeight);
  }, []);

  const onChangeData = (event) => {
    console.log(event.target.value);
  };

  const selectedAnswer = (answer) => {
    console.log(answer);
  };

  const renderQuestionsSuggestions = () =>
    questionSuggestion.map((question, key) => {
      return (
        <div
          elevation={3}
          className={
            enableDarkTheme ? classes.questionsTextDark : classes.questionsText
          }
          key={key}
        >
          <div
            className={
              selectedQuestionSuggest === question
                ? classes.selectedQuestionText
                : classes.selectedHoverQuestionText
            }
            onClick={() => {
              setSelectedQuestionSuggest(question);
            }}
          >
            {question}
          </div>
        </div>
      );
    });

  const renderMessages = () =>
    messages.map((message, key) => {
      return (
        <div key={key}>
          {message?.question && (
            <div
              elevation={3}
              className={classes.messagesSendText}
              style={{
                maxWidth:
                  message.question.length < 20
                    ? message.question.length + 130
                    : 260,
              }}
            >
              {message.question}
            </div>
          )}
          <Typography className={classes.messagesReceiverTitle}>
            Select your favorite answer
          </Typography>
          {message?.answers?.map((answer, key) => {
            return (
              <div
                key={key}
                className={
                  enableDarkTheme
                    ? classes.messagesReceiverContainerDark
                    : classes.messagesReceiverContainer
                }
                onClick={() => selectedAnswer(answer)}
              >
                <div className={classes.messagesReceiverItemText}>{answer}</div>
                <div className={classes.messagesReceiverItemFavorite}>
                  <Favorite
                    fontSize="small"
                    className={
                      enableDarkTheme
                        ? classes.favoriteDarkDisabled
                        : classes.favorite
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      );
    });

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleThemeFunction = () => {
    changeTheme(!enableDarkTheme);
  };

  const handleSendQuestion = () => {
    if (selectedQuestionSuggest && selectedQuestionSuggest.length > 0) {
      askQuestion({ question: selectedQuestionSuggest });
    }
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobileMenu}
    >
      <MenuItem>
        Dark Mode
        <Switch
          checked={enableDarkTheme}
          onChange={handleThemeFunction}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </MenuItem>
    </Menu>
  );

  return (
    <Container
      maxWidth="xl"
      component="section"
      className={enableDarkTheme ? classes.containerDark : classes.container}
      ref={containerRef}
    >
      <Grid
        container
        justify="center"
        className={classes.containerGrid}
        style={{
          height: chatHeight,
        }}
      >
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
          xs={12}
          className={
            enableDarkTheme
              ? classes.gridLeftContainerDark
              : classes.gridLeftContainer
          }
          ref={gridLeftContainerRef}
        >
          <Grid container direction="row" className={classes.containerUserName}>
            <Person
              fontSize="large"
              className={
                enableDarkTheme ? classes.iconPersonDark : classes.iconPerson
              }
            />
            <Typography
              className={
                enableDarkTheme
                  ? classes.userNameTextDark
                  : classes.userNameText
              }
            >
              {userInfo?.first_name || userInfo?.last_name
                ? `${userInfo?.first_name} ${userInfo?.last_name}`
                : "No name"}
            </Typography>
            <ArrowForwardIos
              className={
                enableDarkTheme
                  ? classes.arrowForwardDark
                  : classes.arrowForward
              }
              // onClick={goToChatMobile}
            />
          </Grid>
          <Typography
            className={enableDarkTheme ? classes.titleDark : classes.title}
            align="center"
          >
            Avi
          </Typography>
          <Grid container justify="center">
            <Card elevation={0} className={classes.imageCircleDesktop}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImage}
                title="Aveil"
                className={
                  enableDarkTheme
                    ? classes.imageCircleDark
                    : classes.imageCircle
                }
              />
            </Card>

            <Card elevation={0} className={classes.imageCircleMobile}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImageMobile}
                title="Aveil"
                className={
                  enableDarkTheme
                    ? classes.imageCircleDark
                    : classes.imageCircle
                }
              />
            </Card>
          </Grid>
          <Typography
            className={
              enableDarkTheme
                ? classes.titleQuestionsDark
                : classes.titleQuestions
            }
            align="center"
          >
            Other relevant questions:
          </Typography>
          <center>
            {!isRequestMessages ? (
              <Grid
                container
                justify="center"
                className={
                  enableDarkTheme
                    ? classes.containerQuestionsDark
                    : classes.containerQuestions
                }
                ref={gridLeftContainerQuestionsRef}
              >
                <Paper
                  elevation={0}
                  className={
                    enableDarkTheme
                      ? classes.questionsTextDark
                      : classes.questionsText
                  }
                >
                  {renderQuestionsSuggestions()}
                </Paper>
              </Grid>
            ) : (
              <Loading />
            )}
          </center>
          <Grid container justify="center">
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.askButton}
              onClick={handleSendQuestion}
            >
              Ask
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.secondPageChat}
        >
          <Grid container className={classes.headerIntoLarge}>
            <div
              className={
                enableDarkTheme
                  ? classes.iconsHeaderContainerDark
                  : classes.iconsHeaderContainer
              }
            >
              <div className={classes.iconsHeaderItem}>
                <Search
                  className={
                    enableDarkTheme
                      ? classes.iconsHeaderDark
                      : classes.iconsHeader
                  }
                />
              </div>
              <div className={classes.iconsHeaderItem}>
                <MoreVert
                  aria-haspopup="true"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  onClick={handleMobileMenuOpen}
                  className={
                    enableDarkTheme
                      ? classes.iconsHeaderDark
                      : classes.iconsHeader
                  }
                />
              </div>
            </div>
          </Grid>
          <Grid
            container
            className={
              enableDarkTheme
                ? classes.paperMessagesContainerDark
                : classes.paperMessagesContainer
            }
            style={{
              height: chatHeight - 230,
            }}
          >
            <Paper
              elevation={0}
              className={
                enableDarkTheme
                  ? classes.paperMessagesDark
                  : classes.paperMessages
              }
              ref={autoScrollRef}
            >
              {messages.length > 0 ? (
                renderMessages()
              ) : (
                <Typography align="center" color="secondary">
                  Not messages yet
                </Typography>
              )}
            </Paper>
          </Grid>
          <Grid
            container
            className={
              enableDarkTheme
                ? classes.typeSendMessageDark
                : classes.typeSendMessage
            }
          >
            <Grid item xs={10} md={11} lg={11} xl={11}>
              <InputBase
                value={typeMessage}
                onChange={onChangeData}
                placeholder="Type a message..."
                className={
                  enableDarkTheme
                    ? classes.typeMessagesDark
                    : classes.typeMessages
                }
                inputProps={{ "aria-label": "naked" }}
              />
            </Grid>
            <Grid item xs={2} md={1} lg={1} xl={1}>
              <Send
                color="primary"
                className={
                  typeMessage ? classes.sendButton : classes.disabledSendButton
                }
                ref={refSendButtonQuestion}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </Container>
  );
};

export default Desktop;
