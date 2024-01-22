import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type SeverityT = "success" | "info" | "warning" | "error";
type initialStateType = {
  isOpen: boolean;
  severity: SeverityT;
  message: string;
};



const initialState: initialStateType = {
  isOpen: false,
  severity: "success",
  message: "",
};

const snackBarSlice = createSlice({
  name: "snackBar",
  initialState,
  reducers: {
    showSnackBar: (state, action) => {
      state.severity = action.payload.severity;
      state.message = action.payload.message;
      state.isOpen = true;
    },
    hideSnackBar: (state) => {
      state.isOpen = false;
    },
  },
});

export const snackBarReducer = snackBarSlice.reducer;
export const { showSnackBar, hideSnackBar } = snackBarSlice.actions;
