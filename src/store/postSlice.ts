import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { Post } from "@/models";

type ISelected = Post | null;

// Type for our state
export interface IState {
  listing: Post[];
  selected: ISelected;
}

// Initial state
const initialState: IState = {
  listing: [],
  selected: null,
};

// Actual Slice
export const slice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setListing(state: IState, action: PayloadAction<Post[]>): void {
      state.listing = action.payload;
    },
    setSelected(state: IState, action: PayloadAction<ISelected>): void {
      state.selected = action.payload;
    },
  },
});

export const { setListing, setSelected } = slice.actions;

export const selectListing = (state: AppState) => state.post.listing;
export const selectSelected = (state: AppState) => state.post.selected;

export default slice.reducer;
