import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addSearchCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addSearchCache } = searchSlice.actions;

export default searchSlice.reducer;
