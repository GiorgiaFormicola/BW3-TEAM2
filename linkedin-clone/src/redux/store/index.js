import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import experienceReducer from "../reducers/experienceReducers";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experiences: experienceReducer,
  },
});

export default store;
