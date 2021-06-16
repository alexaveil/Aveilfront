/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Box,
  Grid,
  Link,
  Paper,
  Avatar,
  Button,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
} from '@material-ui/core'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import { LockOutlined } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import useStyles from './styles'
import Copyright from '../common/Copyright'
import { sendPasswordReset, signInWithEmailPassword } from '../../apis/users'
import { setHandleAlert } from '../../redux/actions/common/common'
import { setLoginData } from '../../redux/actions/user/user'

const SignIn = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const loginData = useSelector((state) => state.user.loginData)
  const [_sendPasswordReset, setSendPasswordReset] = useState(false)

  useEffect(() => {
    setDataForm(loginData)
  }, [])

  useEffect(() => {
    handleSaveData()
  }, [dataForm])

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const onChangeDataForm = (event) => {
    const type = event.target.type

    if (type === 'checkbox') {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.checked,
      })
    }

    if (type === 'text' || type === 'password') {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
      })
    }
  }

  const sendPasswordResetFunction = () => {
    const { email } = dataForm

    if (email) {
      sendPasswordReset(email)
        .then(() => {
          const errorAlert = {
            message: 'E-mail send',
            severity: 'success',
            status: true,
          }

          setSendPasswordReset(false)
          showMessageAlert(errorAlert)
        })
        .catch((error) => {
          const errorAlert = {
            message: error.message,
            severity: 'error',
            status: true,
          }

          setSendPasswordReset(false)
          showMessageAlert(errorAlert)
          console.error(`${error.code} -> ${error.message}`)
        })
    }

    validateRequiredFields(email, 'password') /* Only email is required */
  }

  const validateRequiredFields = (email, password) => {
    if (!email || !password) {
      const warningAlert = {
        message: 'All fields are required',
        severity: 'warning',
        status: true,
      }

      showMessageAlert(warningAlert)
    }
  }

  const signInWithEmailPasswordFunction = () => {
    const { email, password } = dataForm

    if (email && password) {
      signInWithEmailPassword(email, password)
        .then((userCredential) => {
          const alert = {
            message: `Welcome`,
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

    validateRequiredFields(email, password)
  }

  const handleResetPasswordFunction = () => {
    setSendPasswordReset(!_sendPasswordReset)
  }

  const handleButtonClick = () => {
    if (!_sendPasswordReset) {
      signInWithEmailPasswordFunction()
    }

    if (_sendPasswordReset) {
      sendPasswordResetFunction()
    }
  }

  const handleSaveData = () => {
    const { remember } = dataForm

    if (remember) {
      dispatch(setLoginData(dataForm))
    }

    if (!remember) {
      const data = { email: '', password: '', remember: false }
      dispatch(setLoginData(data))
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            {!_sendPasswordReset ? 'Sign In' : 'Reset Password'}
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={dataForm?.email}
              onChange={onChangeDataForm}
            />
            {!_sendPasswordReset && (
              <TextField
                variant="outlined"
                margin="normal"
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
            )}
            {!_sendPasswordReset && (
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    color="primary"
                    onChange={onChangeDataForm}
                    value={dataForm?.remember}
                    checked={dataForm?.remember}
                  />
                }
                label="Remember me"
              />
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleButtonClick}
            >
              {!_sendPasswordReset ? 'Sign In' : 'Reset'}
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  color="primary"
                  variant="inherit"
                  onClick={handleResetPasswordFunction}
                  className={classes.linkForgotPassword}
                >
                  {!_sendPasswordReset ? '¿Forgot password?' : 'Back'}
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"¿Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default SignIn
