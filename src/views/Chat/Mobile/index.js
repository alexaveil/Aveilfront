/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Menu,
  Avatar,
  Switch,
  MenuItem,
  Container,
  Typography,
  Paper,
  InputBase,
} from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { Favorite, MoreVert, Search, Send } from "@material-ui/icons";

/* import internal modules */
import useStyles from "./styles";
import RobotImage from "../../../assets/robot.png";
import { Loading } from "../../../components";

const ChatMobile = (props) => {
  const {
    isRequestMessages,
    messages,
    enableDarkTheme,
    changeTheme,
    askCustomQuestion,
    selectQuestion,
  } = props;
  const autoScrollRef = useRef();
  const classes = useStyles();
  const [typeMessage, setTypeMessage] = useState("");
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    autoScrollRef?.current?.scrollTo(0, 5000);
  }, []);

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

  const handleSendCustomQuestion = () => {
    if (typeMessage && typeMessage.length > 0) {
      askCustomQuestion({ question: typeMessage });
    }
  };

  const handleSelect = (data) => {
    if (data?.question_id && data?.option_selected) {
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
            onClick={() =>
              handleSelect({
                question_id: message?.question_id,
                option_selected: key,
              })
            }
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
          <div className={classes.iconsHeaderContainer}>
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
      </Container>
      <Grid
        container
        className={
          enableDarkTheme
            ? classes.paperMessagesContainerDark
            : classes.paperMessagesContainer
        }
      >
        {!isRequestMessages ? (
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
        ) : (
          <Loading />
        )}
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
              onClick={handleSendCustomQuestion}
            />
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </>
  );
};

export default ChatMobile;
