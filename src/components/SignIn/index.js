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
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { LockOutlined } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import Copyright from '../common/Copyright'
import { signInWithEmailPassword } from '../../apis/users'
import { setHandleAlert } from '../../redux/actions/common/common'

const SignIn = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [dataForm, setDataForm] = useState({ email: '', password: '' })

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const onChangeDataForm = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    })
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

    validateRequiredFields(email, password)
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
            Sign in
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signInWithEmailPasswordFunction}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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
