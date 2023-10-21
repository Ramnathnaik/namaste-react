import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../utils/appSlice";
import videosReducer from "../utils/videosSlice";
import searchReducer from "../utils/searchSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    videos: videosReducer,
    search: searchReducer,
  },
});

export default appStore;
