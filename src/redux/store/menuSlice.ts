import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isMenuActive: boolean;
  drawer: boolean;
  currentDrawerState: "cart" | "wishlist";
};

const initialState: initialStateType = {
  isMenuActive: false,
  drawer: false,
  currentDrawerState: "cart",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuActive: (state) => {
      state.isMenuActive = !state.isMenuActive;
    },

    toggleDrawerOpen: (state, action) => {
      state.drawer = true;
      state.currentDrawerState = action.payload;
      state.isMenuActive = false;
    },

    toggleDrawerClose: (state) => {
      state.drawer = false;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenuActive, toggleDrawerClose, toggleDrawerOpen } =
  menuSlice.actions;
