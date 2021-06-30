/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Grid, Avatar, Button, Typography } from '@material-ui/core'

/* import internal modules */
import LogoImage from '../../assets/logo.png'
import { useStyles, CssTextField, CssKeyboardDatePicker } from './styles'
import { setHandleAlert } from '../../redux/actions/common/common'
import { createUserFirestore, signUpWithEmailPassword } from '../../apis/users'

const SignUp = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDay: {},
  })
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  )

  useEffect(() => {
    setDataForm({
      ...dataForm,
      birthDay: selectedDate,
    })
  }, [selectedDate])

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const onChangeDataForm = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    })
  }

  const validateRequiredFields = ({ email, password, firstName, lastName }) => {
    if (!email || !password || !firstName || !lastName) {
      const warningAlert = {
        message: 'All fields are required',
        severity: 'warning',
        status: true,
      }

      showMessageAlert(warningAlert)
    }
  }

  const registerUserFirebaseAuthAndFirestore = ({
    email,
    password,
    firstName,
    lastName,
    birthDay,
  }) => {
    signUpWithEmailPassword(email, password)
      .then((userCredential) => {
        registerUserFirebaseFirestore({
          email,
          password,
          firstName,
          lastName,
          birthDay,
        })
      })
      .catch((error) => {
        const errorAlert = {
          message: error.message,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error(`${error.code} -> ${error.message}`)
      })
  }

  const registerUserFirebaseFirestore = ({
    email,
    password,
    firstName,
    lastName,
    birthDay,
  }) => {
    const data = {
      email,
      firstName,
      lastName,
      birthDay,
    }
    createUserFirestore(data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id)
        const alert = {
          message: `The user ${email} was create`,
          severity: 'success',
          status: true,
        }
        showMessageAlert(alert)
        history.push('/home')
      })
      .catch((error) => {
        const errorAlert = {
          message: error.message,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error(`${error.code} -> ${error.message}`)
      })
  }

  const signUpWithEmailPasswordFunction = () => {
    const { email, password, firstName, lastName, birthDay } = dataForm

    if (email && password && firstName && lastName && birthDay) {
      registerUserFirebaseAuthAndFirestore({
        email,
        password,
        firstName,
        lastName,
        birthDay,
      })
    }

    validateRequiredFields({ email, password, firstName, lastName, birthDay })
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

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
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label={
                      <span className={classes.textWhite}>First Name</span>
                    }
                    autoFocus
                    value={dataForm?.firstName}
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
                    id="lastName"
                    label={<span className={classes.textWhite}>Last Name</span>}
                    name="lastName"
                    autoComplete="lname"
                    value={dataForm?.lastName}
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
                    id="email"
                    label={
                      <span className={classes.textWhite}>Email Address</span>
                    }
                    name="email"
                    autoComplete="email"
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
                    id="password"
                    autoComplete="current-password"
                    value={dataForm?.password}
                    onChange={onChangeDataForm}
                    InputProps={{
                      className: classes.inputTextColor,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <CssKeyboardDatePicker
                      id="date-birth-picker-dialog"
                      label={
                        <span className={classes.textWhite}>Date of birth</span>
                      }
                      format="MM/dd/yyyy"
                      value={dataForm?.selectedDateBirth}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      className={classes.datePicker}
                      InputProps={{
                        className: classes.inputTextColor,
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={signUpWithEmailPasswordFunction}
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default SignUp
