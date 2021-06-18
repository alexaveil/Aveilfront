/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(8),
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
    backgroundColor: '#fafafa',
    maxWidth: 250,
  },
  texfield: {
    // borderRadius: '30px',
    // background: '#3043E9',
    // color: '#fff',
    // borderColor: '#fff',
  },
}))

export default useStyles
