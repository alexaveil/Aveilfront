/* import external modules */
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

/* import internal modules */
import { useStyles } from './styles'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SnackBar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar
        // open={handleAlert.status}
        autoHideDuration={3000}
        // onClose={handleClose}
      >
        {/* <Alert onClose={handleClose} severity={handleAlert.severity}>
          {handleAlert.message}
        </Alert> */}
      </Snackbar>
    </div>
  )
}

export default SnackBar
