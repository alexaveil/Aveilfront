/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Grid,
  Avatar,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/* import internal modules */
import LogoImage from "../../assets/logo.png";
import { useStyles, CssTextField } from "./styles";
import { Loading } from "../../components";
import { login } from "../../store/actions/user";

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onChangeDataForm = (event) => {
    const type = event.target.type;

    if (type === "checkbox") {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.checked,
      });
    }

    if (type === "text" || type === "password") {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleButtonClick = () => {
    login(dataForm);
  };

  const handleSignupClick = () => {
    history.push("/signup");
  };

  return (
    <Grid container component="main" className={classes.root} justify="center">
      <Grid item xs={12} sm={8} md={4}>
        <div className={classes.paper}>
          <Avatar alt="Logo" src={LogoImage} className={classes.avatar} />
          <Typography component="h1" variant="h5" className={classes.title}>
            Log in to Aveil
          </Typography>
          <form className={classes.form}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={<span className={classes.textWhite}>Email</span>}
              name="email"
              autoFocus
              value={dataForm?.email}
              onChange={onChangeDataForm}
              InputProps={{
                className: classes.inputTextColor,
              }}
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label={<span className={classes.textWhite}>Password</span>}
              type="password"
              value={dataForm?.password}
              onChange={onChangeDataForm}
              InputProps={{
                className: classes.inputTextColor,
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  color="primary"
                  onChange={onChangeDataForm}
                  value={dataForm?.remember}
                  checked={dataForm?.remember}
                  className={classes.textGray}
                />
              }
              className={classes.textGray}
              label="Remember me"
            />

            {/* {!isRequest ? ( */}
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleButtonClick}
              >
                Log in
              </Button>
            {/* ) : (
              <Loading />
            )} */}
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.signup}
              onClick={handleSignupClick}
            >
              Sign up
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;