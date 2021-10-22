/* import external modules */
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setHandleAlert } from "../../store/actions/common";
import { alertSelector } from "../../store/selectors/common";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBar = (props) => {
  const { alertData, setHandleAlert } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setHandleAlert({
      message: "",
      status: false,
      severity: null,
    });
  };

  if (!alertData.severity) return <></>;

  return (
    <Snackbar
      open={alertData.status}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={alertData.severity}>
        {alertData.message}
      </Alert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  alertData: alertSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setHandleAlert,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
