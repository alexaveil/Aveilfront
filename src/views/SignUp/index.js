/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import DateFnsUtils from "@date-io/date-fns";
import { Grid, Avatar, Button, Typography } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

/* import internal modules */
import LogoImage from "../../assets/logo.png";
import { useStyles, CssTextField } from "./styles";
import { Loading } from "../../components";
import * as keys from "../../utils/keys";
import { register } from "../../store/actions/user";
import {
  isRequestUserSelector,
  accessTokenSelector,
} from "../../store/selectors/user";

const SignUp = (props) => {
  const { isRequest, accessToken, register } = props;
  const classes = useStyles();
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    if (!isRequest && accessToken) {
      history.push(keys.ADD_INTERESTS);
    }
  }, [isRequest, accessToken]);

  const onChangeDataForm = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const validateRequiredFields = ({
    email,
    password,
    first_name,
    last_name,
    selectedDate,
  }) => {
    if (!email || !password || !first_name || !last_name || !selectedDate) {
      const warningAlert = {
        message: "All fields are required",
        severity: "warning",
        status: true,
      };

      console.log(warningAlert);
    }
  };

  const getBirthdayFormat = () => {
    let dd = selectedDate.getDate();
    let mm = selectedDate.getMonth() + 1;
    let yyyy = selectedDate.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    let birthDate = dd + "/" + mm + "/" + yyyy;

    return birthDate;
  };

  const signUpUser = () => {
    const { email, password, first_name, last_name } = dataForm;
    let birth_date = getBirthdayFormat();

    if (email && password && first_name && last_name && birth_date) {
      register({
        email,
        password,
        first_name,
        last_name,
        birth_date,
      });
    }

    validateRequiredFields({
      email,
      password,
      first_name,
      last_name,
      birth_date,
    });
  };

  const handleSigninClick = () => {
    history.push(keys.LOGIN);
  };

  return (
    <>
      <Grid
        container
        component="main"
        className={classes.root}
        justify="center"
      >
        <Grid item xs={12} sm={8} md={4}>
          <div className={classes.paper}>
            <Avatar alt="Logo" src={LogoImage} className={classes.avatar} />
            <Typography component="h1" variant="h5" className={classes.title}>
              Create your account
            </Typography>
            <form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <CssTextField
                    name="first_name"
                    variant="outlined"
                    fullWidth
                    label={
                      <span className={classes.textWhite}>First Name</span>
                    }
                    autoFocus
                    value={dataForm?.first_name}
                    onChange={onChangeDataForm}
                    InputProps={{
                      className: classes.inputTextColor,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CssTextField
                    variant="outlined"
                    fullWidth
                    label={<span className={classes.textWhite}>Last Name</span>}
                    name="last_name"
                    value={dataForm?.last_name}
                    onChange={onChangeDataForm}
                    InputProps={{
                      className: classes.inputTextColor,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    variant="outlined"
                    fullWidth
                    label={
                      <span className={classes.textWhite}>Email Address</span>
                    }
                    name="email"
                    value={dataForm?.email}
                    onChange={onChangeDataForm}
                    InputProps={{
                      className: classes.inputTextColor,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    variant="outlined"
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
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      disableFuture
                      openTo="year"
                      format="dd/MM/yyyy"
                      label={
                        <span className={classes.textWhite}>Date of birth</span>
                      }
                      views={["year", "month", "date"]}
                      value={selectedDate}
                      onChange={handleDateChange}
                      className={classes.datePicker}
                      InputProps={{
                        className: classes.inputTextColor,
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              {!isRequest ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={signUpUser}
                >
                  Sign Up
                </Button>
              ) : (
                <Loading />
              )}
              <Button
                type="button"
                fullWidth
                variant="contained"
                className={classes.signin}
                onClick={handleSigninClick}
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  isRequest: isRequestUserSelector(state),
  accessToken: accessTokenSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      register,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
