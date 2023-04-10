import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface StateProps {
  listing: Readonly<Record<string, any>>[];
  selected: string[];
}

// Initial state
const initialState: StateProps = {
  listing: [],
  selected: [],
};

// Actual Slice
export const slice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setListing(state, action) {
      state.listing = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setListing, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.media.listing;
export const selectSelected = (state: AppState) => state.media.selected;

export default slice.reducer;
