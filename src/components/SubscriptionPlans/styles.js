/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(2, 0, 7),
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
    marginBottom: '17%',
  },
}))

export default useStyles
