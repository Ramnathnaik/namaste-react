import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGPTPage: false,
    movieSearchResults: null,
    movieTitles: null,
  },
  reducers: {
    switchGPTPage: (state) => {
      state.isGPTPage = !state.isGPTPage;
    },
    addMovieSearchResults: (state, action) => {
      state.movieSearchResults = action.payload;
    },
    addMovieTitles: (state, action) => {
      state.movieTitles = action.payload;
    },
  },
});

export const { switchGPTPage, addMovieSearchResults, addMovieTitles } =
  gptSlice.actions;

export default gptSlice.reducer;
