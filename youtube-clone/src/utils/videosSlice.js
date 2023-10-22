import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    homeVideos: null,
    recommendedVideos: null,
    liveVideos: null,
    categoryVideos: null,
  },
  reducers: {
    addHomeVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
    addRecommendedVideos: (state, action) => {
      state.recommendedVideos = action.payload;
    },
    addLiveVideos: (state, action) => {
      state.liveVideos = action.payload;
    },
    addCategoryVideos: (state, action) => {
      state.categoryVideos = action.payload;
    },
  },
});

export const {
  addHomeVideos,
  addRecommendedVideos,
  addLiveVideos,
  addCategoryVideos,
} = videosSlice.actions;

export default videosSlice.reducer;
