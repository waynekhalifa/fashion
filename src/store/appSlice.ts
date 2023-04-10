import { ISnackBar } from "./../models/app";
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface IState {
  session: any;
  dateRange: any;
  snackbar: ISnackBar;
}

// Initial state
const initialState: IState = {
  session: null,
  dateRange: null,
  snackbar: {
    open: false,
    severity: "info",
    content: null,
    persist: false,
  },
};

// Actual Slice
export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSession(state, action) {
      state.session = action.payload;
    },
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
    setSnackBar(state, action) {
      state.snackbar = action.payload;
    },
  },
});

export const { setSession, setDateRange, setSnackBar } = slice.actions;

export const selectSession = (state: AppState) => state.app.session;
export const selectDateRange = (state: AppState) => state.app.dateRange;
export const selectSnackbar = (state: AppState) => state.app.snackbar;

export default slice.reducer;
