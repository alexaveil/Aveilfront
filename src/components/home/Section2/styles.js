/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(0),
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
  blue: {
    color: theme.palette.getContrastText('#3043E9'),
    backgroundColor: '#3043E9',
  },
  image: {
    backgroundColor: '#fafafa',
    maxWidth: 200,
    [theme.breakpoints.down('lg')]: {
      marginLeft: 300,
    },
    [theme.breakpoints.down('xl')]: {
      marginLeft: 250,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 150,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

export default useStyles
