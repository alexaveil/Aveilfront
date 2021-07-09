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
  textLabel: {
    color: 'white',
    marginLeft: 60,
  },
  inputTextColor: {
    color: 'white',
  },
}))

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderRadius: 30,
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    borderRadius: 30,
    background: '#3043E9',
    color: 'white',
  },
})(TextField)
