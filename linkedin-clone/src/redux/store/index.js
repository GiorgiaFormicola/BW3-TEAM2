import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import searchReducer from "../reducers/searchReducer";
import jobReducer from "../reducers/jobReducer";
const store = configureStore({
  reducer: {
    profile: profileReducer,
    search: searchReducer,
    jobs: jobReducer,
  },
});

export default store;
