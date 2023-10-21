import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    homeVideos: null,
    recommendedVideos: null,
  },
  reducers: {
    addHomeVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
    addRecommendedVideos: (state, action) => {
      state.recommendedVideos = action.payload;
    },
  },
});

export const { addHomeVideos, addRecommendedVideos } = videosSlice.actions;

export default videosSlice.reducer;
