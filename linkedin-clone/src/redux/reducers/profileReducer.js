import { GET_PROFILE } from "../actions";

const initialState = {
  URL: "https://striveschool-api.herokuapp.com/api/profile/me",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMjI0YzBiYzFkZTAwMTU3N2I3YTAiLCJpYXQiOjE3NzE4NDAwNzYsImV4cCI6MTc3MzA0OTY3Nn0.HWt5UOlv8ooOYdlCh1J5YaAzTQg8mdKEX4ogJdbuqJM",
  object: null,
};

const profileReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...currentState,
        object: action.payload,
      };
    default:
      return currentState;
  }
};

export default profileReducer;
