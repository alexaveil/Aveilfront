/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
    // background: '#3043E9',
    borderRadius: 30,
    maxWidth: 300,
  },
  subtitle: {
    paddingTop: 3,
    paddingLeft: 18,
    paddingRight: 10,
    paddingBottom: 3,
    borderRadius: 10,
    background: '#E2E2E2',
  },
  title: { marginLeft: 18, fontWeight: 'bold' },
  paper: { background: '#FAFAFA' },
}))

export default useStyles
