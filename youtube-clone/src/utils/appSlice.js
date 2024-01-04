import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    menu: true,
    categoryId: -1,
    darkMode: false,
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
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  addCategoryId,
  toggleDarkMode,
} = appSlice.actions;

export default appSlice.reducer;
