import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { Features, Feature } from "@/services/feature";
import { IOptions } from "@/services/permission";

type ISelected = Feature | null;

// Type for our state
export interface StateProps {
  listing: Features;
  permissions: IOptions;
  selected: ISelected;
}

// Initial state
const initialState: StateProps = {
  listing: [],
  permissions: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setListing(state, action) {
      state.listing = action.payload;
    },
    setPermissions(state, action) {
      state.permissions = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setListing, setPermissions, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.feature.listing;
export const selectPermissions = (state: AppState) => state.feature.permissions;
export const selectSelected = (state: AppState) => state.feature.selected;

export default slice.reducer;
