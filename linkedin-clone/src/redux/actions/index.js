// src/redux/actions.js
import { setSearchResults } from "./reducers/profileReducer";

export const fetchSearchResults = (query, token) => async (dispatch) => {
  if (!query) return dispatch(setSearchResults([]));
  try {
    const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${query}`, {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    dispatch(setSearchResults(data));
  } catch (err) {
    console.error(err);
  }
};
