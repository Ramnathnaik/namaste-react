import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    trailer: null,
    popular: null,
    upcoming: null,
    topRated: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addPopular: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export const { addMovies, addTrailer, addPopular, addUpcoming, addTopRated } =
  moviesSlice.actions;

export default moviesSlice.reducer;
