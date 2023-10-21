import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menu: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
    closeMenu: (state) => {
      state.menu = false;
    },
    openMenu: (state) => {
      state.menu = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = appSlice.actions;

export default appSlice.reducer;
