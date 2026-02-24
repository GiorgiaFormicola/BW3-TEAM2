// src/redux/reducers/profileReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  object: null, // mio profilo
  selectedProfile: null, // profilo selezionato nella ricerca
  searchQuery: "",
  searchResults: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.object = action.payload;
    },
    setSelectedProfile(state, action) {
      state.selectedProfile = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { setProfile, setSelectedProfile, setSearchQuery, setSearchResults } = profileSlice.actions;
export default profileSlice.reducer;
