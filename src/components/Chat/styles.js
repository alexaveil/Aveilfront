/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
  userNameText: { margin: 10, color: 'gray' },
  iconPerson: { color: 'gray' },
  title: { fontWeight: 'bold', marginTop: 50 },
  questionsText: { padding: 10, color: 'gray', marginTop: 10 },
}))

export default useStyles
