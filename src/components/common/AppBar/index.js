/* import external modules */
import {
  Menu,
  Avatar,
  Button,
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  Lock,
  GetApp,
  MoreVert,
  AccountCircle,
  MonetizationOn,
  Person,
  ExitToApp,
} from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* import internal modules */
import { logout } from "../../../store/actions/user";
import {
  isRequestUserSelector,
  accessTokenSelector,
} from "../../../store/selectors/user";
import useStyles from "./styles";
import LogoImage from "../../../assets/logo.png";
import * as keys from "../../../utils/keys";

const AppBarComponent = (props) => {
  const { isRequest, accessToken, logout } = props;
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const goToPage = (path) => {
    history.push(path);
  };

  const logoutFunction = () => {
    logout();
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => goToPage(keys.ADD_INTERESTS)}>
        <IconButton
          aria-label="profile"
          aria-controls="primary-search-profile-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Person />
        </IconButton>
        <Button className={classes.item} color="inherit">
          Profile
        </Button>
      </MenuItem>
      <MenuItem onClick={logoutFunction}>
        <IconButton
          aria-label="logout"
          aria-controls="primary-search-logout-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToApp />
        </IconButton>
        <Button className={classes.item} color="inherit">
          Log out
        </Button>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="plans"
          aria-controls="primary-search-plans-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <MonetizationOn />
        </IconButton>
        <Button
          onClick={() => goToPage(keys.SUBSCRIBTIONS)}
          className={classes.item}
          color="inherit"
        >
          Plans
        </Button>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="get app"
          aria-controls="primary-search-get-app-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GetApp />
        </IconButton>
        <Button
          onClick={() => goToPage(keys.GETAPP)}
          className={classes.item}
          color="inherit"
        >
          Download
        </Button>
      </MenuItem>
      {!accessToken ? (
        <MenuItem>
          <IconButton
            aria-label="login of current user"
            aria-controls="primary-search-login-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Lock />
          </IconButton>
          <Button
            onClick={logoutFunction}
            className={classes.item}
            color="inherit"
          >
            Login
          </Button>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Button
            onClick={() => goToPage(keys.ADD_INTERESTS)}
            className={classes.item}
            color="inherit"
          >
            Profile
          </Button>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt="Logo"
            src={LogoImage}
            className={classes.avatar}
            onClick={() => goToPage(keys.HOME)}
          />
          <Typography
            onClick={() => goToPage(keys.HOME)}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Aveil
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.grow} />
            <Button
              onClick={() => goToPage(keys.SUBSCRIBTIONS)}
              className={classes.item}
              color="inherit"
            >
              Plans
            </Button>
            <Button
              onClick={() => goToPage(keys.GETAPP)}
              className={classes.item}
              color="inherit"
            >
              Download
            </Button>
            {!accessToken ? (
              <Button
                onClick={() => goToPage(keys.LOGIN)}
                className={classes.itemLogin}
                color="inherit"
              >
                Sign in
              </Button>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.handleUserButton}
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

const mapStateToProps = (state) => ({
  accessToken: accessTokenSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logout,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
