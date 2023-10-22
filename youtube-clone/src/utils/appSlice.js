import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menu: true,
    categoryId: -1,
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
    addCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, addCategoryId } =
  appSlice.actions;

export default appSlice.reducer;
