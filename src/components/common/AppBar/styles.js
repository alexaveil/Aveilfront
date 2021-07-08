/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
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
      marginLeft: theme.spacing(1),
    },
  },
  item: {
    marginRight: theme.spacing(3),
    textTransform: 'capitalize',
  },
  items: {
    marginRight: theme.spacing(3),
  },
  itemLogin: {
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'capitalize',
    borderRadius: 13,
    width: 70,
    height: 30,
    marginTop: 9,
    marginRight: 20,
    '&:hover': {
      color: '#E5E5E5',
      backgroundColor: 'gray',
    },
  },
}))

export default useStyles
