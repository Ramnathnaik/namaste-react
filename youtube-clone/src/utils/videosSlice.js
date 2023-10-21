import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    homeVideos: null,
  },
  reducers: {
    addHomeVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
  },
});

export const { addHomeVideos } = videosSlice.actions;

export default videosSlice.reducer;
