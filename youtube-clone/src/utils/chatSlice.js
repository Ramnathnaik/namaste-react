import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    liveChats: [],
    nextPageToken: "",
  },
  reducers: {
    addLiveChats: (state, action) => {
      state.liveChats.splice(200, 1);
      state.liveChats.unshift(...action.payload);
    },
    addNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
    clearChats: (state) => {
      state.liveChats = [];
      state.nextPageToken = "";
    },
  },
});

export const { addLiveChats, addNextPageToken, clearChats } = chatSlice.actions;

export default chatSlice.reducer;
