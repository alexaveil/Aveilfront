/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  image: {
    backgroundColor: '#fafafa',
    maxWidth: 200,
  },
  imageGetApp: {
    backgroundColor: '#fafafa',
    maxWidth: 150,
    maxHeight: 50,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
  },
  logo: {
    backgroundColor: '#fafafa',
    maxWidth: 50,
  },
}))

export default useStyles
