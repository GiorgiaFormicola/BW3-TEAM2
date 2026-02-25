import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import postsReducer from "../reducers/postsReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    posts: postsReducer,
  },
});

export default store;
