import { Alert, Snackbar } from "@mui/material";
import { TsnackBarProps } from "./snackBar.types";

const MySnackBar = (props: TsnackBarProps) => {
  const { handleClose, message, open } = props;

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={5000}
    >
      <Alert onClose={handleClose} severity="warning" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MySnackBar;
