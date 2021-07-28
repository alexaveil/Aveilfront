/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: { marginTop: 40 },
  title: { fontWeight: 700, marginLeft: 60 },
  subTitle: { marginLeft: 60, marginTop: 20, fontWeight: 530 },
  counter: { marginLeft: 60, marginTop: 20, fontWeight: 530 },
  rootChips: {
    maxWidth: '75vh',
    marginLeft: 60,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-betwen',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0, 5, 2.5, 0),
    },
  },
}))

export default useStyles
