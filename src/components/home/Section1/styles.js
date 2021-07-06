/* import external modules */
import { TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  button: {
    marginBottom: theme.spacing(1),
    width: '150px',
    borderColor: '#000000',
    borderRadius: '20px',
  },
  list: {
    maxWidth: 460,
  },
  blue: {
    color: theme.palette.getContrastText('#3043E9'),
    backgroundColor: '#3043E9',
  },
  image: {
    backgroundColor: '#FAFAFA',
    maxWidth: 250,
  },
  texfield: {
    borderRadius: 30,
    maxWidth: 300,
  },
  subtitle: {
    paddingTop: 3,
    paddingLeft: 13,
    maxWidth: 345,
    paddingBottom: 3,
    borderRadius: 10,
    background: '#E2E2E2',
    [theme.breakpoints.up('md')]: {},
  },
  title: {
    paddingLeft: 13,
    fontWeight: 'bold',
  },
  paper: { background: '#FAFAFA' },
  textWhite: {
    color: 'white',
  },
  inputTextColor: {
    color: 'white',
  },
}))

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#3043E9',
    },
    '& .MuiInput-underline:after': {
      display: 'none',
      // borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#3043E9',
      },
      '&:hover fieldset': {
        borderColor: '#3043E9',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3043E9',
      },
    },
    borderRadius: 10,
    color: 'white',
    opacity: '69%',
  },
})(TextField)
