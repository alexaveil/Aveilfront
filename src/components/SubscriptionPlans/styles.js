/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(2, 0, 4),
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  listItems: {
    margin: 0,
    padding: 10,
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
}))

export default useStyles
