/* import external modules */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000639",
    margin: 20,
    borderRadius: 13,
    padding: 50,
    [theme.breakpoints.up('xl')]: {
      padding: 30,
    },
    [theme.breakpoints.only('xs')]: {
      padding: 20,
    },
  },
  title: { fontWeight: 700, color: "#f4f4f6" },
  subTitle: {
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 530,
    color: "#b0aeb1",
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
      margin: 10
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
