import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import postsReducer from "../reducers/postsReducer";
import experienceReducer from "../reducers/experienceReducers";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    posts: postsReducer,
    experiences: experienceReducer,
  },
});

export default store;
