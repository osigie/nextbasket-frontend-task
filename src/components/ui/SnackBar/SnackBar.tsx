"use client";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { hideSnackBar } from "@/redux/store/snackBarSlice";
import { Alert, Snackbar } from "@mui/material";

const SnackBar = () => {
  const dispatch = useAppDispatch();
  const { isOpen, severity, message } = useAppSelector(
    (state) => state.snackBar
  );

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={() => dispatch(hideSnackBar())}
    >
      <Alert
        onClose={() => dispatch(hideSnackBar())}
        severity={severity}
        variant="standard"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
