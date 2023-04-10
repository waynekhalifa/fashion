import { Menu, MenuItem } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface IState {
  listing: Menu[];
  primaryMenu: MenuItem[];
  footerOne: MenuItem[];
  footerTwo: MenuItem[];
  footerThree: MenuItem[];
  footerFour: MenuItem[];
}

// Initial state
const initialState: IState = {
  listing: [],
  primaryMenu: [],
  footerOne: [],
  footerTwo: [],
  footerThree: [],
  footerFour: [],
};

// Actual Slice
export const slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setListing(state: IState, action: PayloadAction<Menu[]>): void {
      state.listing = action.payload;
    },
    setPrimaryMenu(state: IState, action: PayloadAction<MenuItem[]>): void {
      state.primaryMenu = action.payload;
    },
    setFooterOne(state: IState, action: PayloadAction<MenuItem[]>): void {
      state.footerOne = action.payload;
    },
    setFooterTwo(state: IState, action: PayloadAction<MenuItem[]>): void {
      state.footerTwo = action.payload;
    },
    setFooterThree(state: IState, action: PayloadAction<MenuItem[]>): void {
      state.footerThree = action.payload;
    },
    setFooterFour(state: IState, action: PayloadAction<MenuItem[]>): void {
      state.footerFour = action.payload;
    },
  },
});

export const {
  setListing,
  setPrimaryMenu,
  setFooterOne,
  setFooterTwo,
  setFooterThree,
  setFooterFour,
} = slice.actions;

export const selectListing = (state: AppState) => state.menu.listing;
export const selectPrimaryMenu = (state: AppState) => state.menu.primaryMenu;
export const selectFooterOne = (state: AppState) => state.menu.footerOne;
export const selectFooterTwo = (state: AppState) => state.menu.footerTwo;
export const selectFooterThree = (state: AppState) => state.menu.footerThree;
export const selectFooterFour = (state: AppState) => state.menu.footerFour;

export default slice.reducer;
