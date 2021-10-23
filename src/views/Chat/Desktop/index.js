/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Container,
  Grid,
  Card,
  Paper,
  Button,
  InputBase,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  Switch,
} from "@material-ui/core";
import { Send, Person, Search, MoreVert, Favorite } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";

/* import internal modules */
import useStyles from "./styles";
import { Loading } from "../../../components";
import RobotImage from "../../../assets/robot.png";

const Desktop = (props) => {
  const {
    isRequestMessages,
    questionSuggestion,
    messages,
    userInfo,
    enableDarkTheme,
    changeTheme,
    askQuestion,
    selectQuestion,
  } = props;
  const classes = useStyles();
  const [chatHeight, setChatHeight] = useState(0);
  const [typeMessage, setTypeMessage] = useState("");
  const [selectedQuestionSuggest, setSelectedQuestionSuggest] = useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const autoScrollRef = useRef();

  useEffect(() => {
    setChatHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    if (messages && messages.length > 0) {
      autoScrollRef?.current?.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    }
    setTypeMessage("");
  }, [messages]);

  const onChangeData = (event) => {
    setTypeMessage(event.target.value);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleThemeFunction = () => {
    changeTheme(!enableDarkTheme);
  };

  const handleSendSuggestQuestion = () => {
    if (
      !isRequestMessages &&
      selectedQuestionSuggest &&
      selectedQuestionSuggest.length > 0
    ) {
      askQuestion({ question: selectedQuestionSuggest });
    }
  };

  const handleSendQuestion = () => {
    if (!isRequestMessages && typeMessage && typeMessage.length > 0) {
      askQuestion({
        question: typeMessage,
      });
    }
  };

  const handleSelect = (data) => {
    if (!isRequestMessages && data?.question_id && data?.option_selected) {
      selectQuestion(data);
    }
  };

  const renderQuestionsSuggestions = () =>
    questionSuggestion.map((question, key) => {
      return (
        <div
          elevation={3}
          className={`${classes.questionsText} ${
            selectedQuestionSuggest === question
              ? classes.selectedQuestionText
              : ""
          }`}
          key={key}
          onClick={() => {
            setSelectedQuestionSuggest(question);
          }}
        >
          {question}
        </div>
      );
    });

  const renderMessages = () =>
    messages.map((message, key) => (
      <div key={key}>
        {message?.question && (
          <div elevation={3} className={classes.messagesSendText}>
            {message.question}
          </div>
        )}
        <Typography className={classes.messagesReceiverTitle}>
          Select your favorite answer
        </Typography>
        {message?.answers?.map((answer, key) => (
          <div
            key={key}
            className={
              enableDarkTheme
                ? classes.messagesReceiverContainerDark
                : classes.messagesReceiverContainer
            }
          >
            <div
              className={classes.messagesReceiverItemText}
              onClick={() => setTypeMessage(answer)}
            >
              {answer}
            </div>
            <div className={classes.messagesReceiverItemFavorite}>
              {message?.option_selected &&
              message.option_selected === key + 1 ? (
                <Favorite
                  fontSize="small"
                  className={`${classes.favoriteSelected} ${classes.favoriteMain}`}
                />
              ) : (
                <Favorite
                  onClick={() =>
                    handleSelect({
                      question_id: message?.question_id,
                      option_selected: key + 1,
                    })
                  }
                  fontSize="small"
                  className={`
                    ${
                      enableDarkTheme ? classes.favoriteDark : classes.favorite
                    } 
                    ${classes.favoriteMain}
                  `}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    ));

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
    <div
      className={enableDarkTheme ? classes.containerDark : classes.container}
    >
      <Container maxWidth="xl" component="section">
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
          >
            <Grid
              container
              direction="row"
              className={classes.containerUserName}
            >
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
            </Grid>
            <Typography
              className={enableDarkTheme ? classes.titleDark : classes.title}
              align="center"
            >
              Avi
            </Typography>
            <Grid container justify="center">
              <Card elevation={0}>
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
              <Grid
                container
                justify="center"
                className={classes.containerQuestions}
              >
                <Paper
                  elevation={0}
                  justify="flex-start"
                  className={classes.containerQuestionWrapper}
                >
                  {renderQuestionsSuggestions()}
                </Paper>
              </Grid>
            </center>
            <Grid container justify="center">
              <Button
                color="primary"
                variant="contained"
                size="large"
                className={classes.askButton}
                onClick={handleSendSuggestQuestion}
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
            className={
              enableDarkTheme
                ? classes.secondPageChatDark
                : classes.secondPageChat
            }
          >
            <Grid container>
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
                {isRequestMessages && <div className={classes.loadingWrapper}><Loading /></div>}
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
                  onClick={handleSendQuestion}
                  className={
                    typeMessage
                      ? classes.sendButton
                      : classes.disabledSendButton
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {renderMobileMenu}
      </Container>
    </div>
  );
};

export default Desktop;
