/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
  },
  title: {
    color: '#3043E9',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(10),
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginLeft: theme.spacing(14),
    },
  },
  item: {
    marginRight: theme.spacing(3),
    textTransform: 'capitalize',
  },
  items: {
    marginRight: theme.spacing(3),
  },
}))

export default useStyles
