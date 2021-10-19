/* import external modules */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000639",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    margin: 20,
    borderRadius: 15,
    border: "1px solid #FFFFFF",
    padding: 60,
    maxWidth: 645,
    [theme.breakpoints.only('xs')]: {
      padding: 0,
      border: 'none',
    },
  },
  title: { 
    fontWeight: 700, 
    color: "#f4f4f6",
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.8rem'
    },
  },
  subTitle: {
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 530,
    color: "#b0aeb1",
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem'
    },
  },
  counter: {
    fontWeight: 500,
    color: "#b0aeb1",
  },
  rootChips: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 15,
    marginBottom: 25,
    marginLeft: -10,
    marginRight: -10,
    "& > *": {
      margin: 10,
      [theme.breakpoints.only('xs')]: {
        margin: 6,
      },
    },
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'flex-start'
    },
  },
  doneButton: {
    borderRadius: 20,
    textTransform: "capitalize",
  },
  chip: {
    paddingLeft: 10,
    paddingRight: 10,
    "&:focus": {
      backgroundColor: "#3043e9",
      color: "white",
    },
  },
}));

export default useStyles;
