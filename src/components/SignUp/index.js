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
// import { createUserFirestore, signUpWithEmailPassword } from '../../apis/users'

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

  const registerUser = ({
    email,
    password,
    firstName,
    lastName,
    selectedDate,
  }) => {
    const dataUser = {
      email,
      password,
      last_name: lastName,
      birth_date: `${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`,
      first_name: firstName,
    }

    signUpWithEmailPassword(dataUser)
      .then((response) => {
        /* Firebase
        // registerUserFirebaseFirestore({
        //   email,
        //   password,
        //   firstName,
        //   lastName,
        //   selectedDate,
        // })
        */
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

  // const registerUserFirebaseFirestore = ({
  //   email,
  //   password,
  //   firstName,
  //   lastName,
  //   selectedDate,
  // }) => {
  //   const data = {
  //     email,
  //     firstName,
  //     lastName,
  //     selectedDate,
  //   }
  //   createUserFirestore(data)
  //     .then((docRef) => {
  //       console.log('Document written with ID: ', docRef.id)
  //       const alert = {
  //         message: `The user ${email} was create`,
  //         severity: 'success',
  //         status: true,
  //       }
  //       showMessageAlert(alert)
  //       history.push('/home')
  //     })
  //     .catch((error) => {
  //       const errorAlert = {
  //         message: error.message,
  //         severity: 'error',
  //         status: true,
  //       }

  //       showMessageAlert(errorAlert)
  //       console.error(`${error.code} -> ${error.message}`)
  //     })
  // }

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
