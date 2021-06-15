/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Grid,
  Link,
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { LockOutlined } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import { createUserFirestore, signUpWithEmailPassword } from '../../apis/users'
import { setHandleAlert } from '../../redux/actions/common/common'

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
    const birthDay = {
      month: selectedDate.getMonth(),
      day: selectedDate.getDate(),
      year: selectedDate.getFullYear(),
    }
    setDataForm({
      ...dataForm,
      birthDay,
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
        const errorCode = error.code
        const errorMessage = error.message
        const errorAlert = {
          message: errorMessage,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error(errorCode + ' -> ' + errorMessage)
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
        const errorCode = error.code
        const errorMessage = error.message
        const errorAlert = {
          message: errorMessage,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error('Error adding document: ', error)
        console.error(errorCode + ' -> ' + errorMessage)
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
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={dataForm?.firstName}
                onChange={onChangeDataForm}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={dataForm?.lastName}
                onChange={onChangeDataForm}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={dataForm?.email}
                onChange={onChangeDataForm}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={dataForm?.password}
                onChange={onChangeDataForm}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  id="date-birth-picker-dialog"
                  label="Date of birth"
                  format="MM/dd/yyyy"
                  value={dataForm?.selectedDateBirth}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  className={classes.datePicker}
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignUp
