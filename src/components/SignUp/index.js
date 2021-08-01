/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import DateFnsUtils from '@date-io/date-fns'
import { Grid, Avatar, Button, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'

/* import internal modules */
import LogoImage from '../../assets/logo.png'
import { useStyles, CssTextField } from './styles'
import { signUpWithEmailPassword } from '../../apis/users'
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
  })
  const [selectedDate, handleDateChange] = useState(new Date())

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const onChangeDataForm = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    })
  }

  const validateRequiredFields = ({
    email,
    password,
    firstName,
    lastName,
    selectedDate,
  }) => {
    if (!email || !password || !firstName || !lastName || !selectedDate) {
      const warningAlert = {
        message: 'All fields are required',
        severity: 'warning',
        status: true,
      }

      showMessageAlert(warningAlert)
    }
  }

  const getBirthdayFormat = () => {
    let dd = selectedDate.getDate()
    let mm = selectedDate.getMonth() + 1
    let yyyy = selectedDate.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    let birthDate = dd + '/' + mm + '/' + yyyy

    return birthDate
  }

  const registerUser = ({
    email,
    password,
    firstName,
    lastName,
    selectedDate,
  }) => {
    let birthDate = getBirthdayFormat()

    let userFormData = new FormData()
    userFormData.append('email', email)
    userFormData.append('password', password)
    userFormData.append('last_name', lastName)
    userFormData.append('first_name', firstName)
    userFormData.append('birth_date', birthDate)

    signUpWithEmailPassword(userFormData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          const alert = {
            message: `The user ${email} was create`,
            severity: 'success',
            status: true,
          }
          window.sessionStorage.setItem('token', response.data.access_token)
          showMessageAlert(alert)
          history.push('/profile')
        }
      })
      .catch((error) => {
        const errorAlert = {
          message: error?.response?.data?.message,
          severity: 'error',
          status: true,
        }

        showMessageAlert(errorAlert)
        console.error(`${error.code} -> ${error.message}`)
      })
  }

  const signUpWithEmailPasswordFunction = () => {
    const { email, password, firstName, lastName } = dataForm

    if (email && password && firstName && lastName && selectedDate) {
      registerUser({
        email,
        password,
        firstName,
        lastName,
        selectedDate,
      })
    }

    validateRequiredFields({
      email,
      password,
      firstName,
      lastName,
      selectedDate,
    })
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
                    name="firstName"
                    variant="outlined"
                    fullWidth
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
                    label={<span className={classes.textWhite}>Last Name</span>}
                    name="lastName"
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
                      views={['year', 'month', 'date']}
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
