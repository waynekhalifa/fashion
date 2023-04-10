import { CustomContent, Member, Page } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

type ISelected = Page | null;

// Type for our state
export interface IState {
  listing: Page[];
  selected: ISelected;
  aboutContent: CustomContent[];
  members: Member[];
}

// Initial state
const initialState: IState = {
  listing: [],
  selected: null,
  aboutContent: [],
  members: [],
};

// Actual Slice
export const slice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setListing(state: IState, action: PayloadAction<Page[]>): void {
      state.listing = action.payload;
    },
    setSelected(state: IState, action: PayloadAction<ISelected>): void {
      state.selected = action.payload;
    },
    setAboutContent(
      state: IState,
      action: PayloadAction<CustomContent[]>
    ): void {
      state.aboutContent = action.payload;
    },
    setMembers(state: IState, action: PayloadAction<Member[]>): void {
      state.members = action.payload;
    },
  },
});

export const { setListing, setSelected, setAboutContent, setMembers } =
  slice.actions;

export const selectListing = (state: AppState) => state.page.listing;
export const selectSelected = (state: AppState) => state.page.selected;
export const selectAboutContent = (state: AppState) => state.page.aboutContent;
export const selectMembers = (state: AppState) => state.page.members;

export default slice.reducer;
