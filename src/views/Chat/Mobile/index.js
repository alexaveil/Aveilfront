/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Menu,
  Card,
  CardMedia,
  Avatar,
  Switch,
  Button,
  MenuItem,
  Container,
  Typography,
  Paper,
  InputBase,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Favorite,
  MoreVert,
  Search,
  Person,
  Send,
} from "@material-ui/icons";

/* import internal modules */
import useStyles from "./styles";
import RobotImage from "../../../assets/robot.png";
import { Loading } from "../../../components";

const ChatMobile = (props) => {
  const {
    isRequestMessages,
    messages,
    userInfo,
    enableDarkTheme,
    questionSuggestion,
    changeTheme,
    askQuestion,
    selectQuestion,
  } = props;
  const autoScrollRef = useRef();
  const classes = useStyles();
  const [typeMessage, setTypeMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [selectedQuestionSuggest, setSelectedQuestionSuggest] = useState("");
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    if (messages && messages.length > 0) {
      autoScrollRef?.current?.scrollTo(0, 5000);
    }
    setTypeMessage("");
  }, [messages]);

  const showSelectQuestionModal = () => {
    setShowModal(!showModal);
  };

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
    if (!isRequestMessages && selectedQuestionSuggest && selectedQuestionSuggest.length > 0) {
      askQuestion({ question: selectedQuestionSuggest });
      setSelectedQuestionSuggest("");
      showSelectQuestionModal();
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

  const renderModalQuestionSuggestion = () => (
    <Grid item>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.containerUserName}
      >
        <Grid item>
          <div className={classes.containerUserWrapper}>
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
          </div>
        </Grid>
        <Grid item>
          <ArrowForwardIos
            className={
              enableDarkTheme ? classes.headerIconsDark : classes.headerIcons
            }
            onClick={showSelectQuestionModal}
          />
        </Grid>
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
              enableDarkTheme ? classes.imageCircleDark : classes.imageCircle
            }
          />
        </Card>
      </Grid>
      <Typography
        className={
          enableDarkTheme ? classes.titleQuestionsDark : classes.titleQuestions
        }
        align="center"
      >
        Other relevant questions:
      </Typography>
      <center>
        <Grid container justify="center" className={classes.containerQuestions}>
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
  );

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
                        enableDarkTheme
                          ? classes.favoriteDark
                          : classes.favorite
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

  return (
    <>
      <Container
        className={enableDarkTheme ? classes.containerDark : classes.container}
      >
        <Grid
          container
          justify="space-between"
          className={classes.containerHearderGrid}
        >
          <div className={classes.containerHearderIcons}>
            <ArrowBackIos
              className={
                enableDarkTheme ? classes.headerIconsDark : classes.headerIcons
              }
              onClick={showSelectQuestionModal}
            />
          </div>
          <div className={classes.containerHearderAvatar}>
            <Avatar
              alt="Aveil"
              src={RobotImage}
              className={
                enableDarkTheme
                  ? classes.avatarMobileDark
                  : classes.avatarMobile
              }
            />
            <Typography
              className={
                enableDarkTheme
                  ? classes.titleAvatarMobileDark
                  : classes.titleAvatarMobile
              }
            >
              Avi
            </Typography>
          </div>
          <div className={classes.containerHearderIcons}>
            <div className={classes.iconsHeaderItem}>
              <Search
                className={
                  enableDarkTheme
                    ? classes.headerIconsDark
                    : classes.headerIcons
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
                    ? classes.headerIconsDark
                    : classes.headerIcons
                }
              />
            </div>
          </div>
        </Grid>
      </Container>
      <Grid
        container
        className={
          enableDarkTheme
            ? classes.paperMessagesContainerDark
            : classes.paperMessagesContainer
        }
      >
        <Paper
          elevation={0}
          className={
            enableDarkTheme ? classes.paperMessagesDark : classes.paperMessages
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

        <Grid
          container
          className={
            enableDarkTheme
              ? classes.typeSendMessageDark
              : classes.typeSendMessage
          }
        >
          <Grid item xs={11} md={11} lg={11} xl={11}>
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
          <Grid item xs={1} md={1} lg={1} xl={1}>
            <Send
              color="primary"
              className={
                typeMessage ? classes.sendButton : classes.disabledSendButton
              }
              onClick={handleSendQuestion}
            />
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
      {showModal && (
        <div className={enableDarkTheme ? classes.suggestionModalDark : classes.suggestionModal} >
          {renderModalQuestionSuggestion()}
        </div>
      )}
    </>
  );
};

export default ChatMobile;
