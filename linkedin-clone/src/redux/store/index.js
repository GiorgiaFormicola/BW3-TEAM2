import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import searchReducer from "../reducers/searchReducer";
import jobReducer from "../reducers/jobReducer";
import postsReducer from "../reducers/postsReducer";
import experienceReducer from "../reducers/experienceReducers";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    search: searchReducer,
    jobs: jobReducer,
    posts: postsReducer,
    experiences: experienceReducer,
  },
});

export default store;
