import { GET_PROFILE } from "../actions";

const initialState = {
  URL: "https://striveschool-api.herokuapp.com/api/profile/me",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWExNWE2YzMzOWZkMTAwMTUwZTcwMzciLCJpYXQiOjE3NzIxODIxOTYsImV4cCI6MTc3MzM5MTc5Nn0.SRazvt_mvjnHKiBlK_bXj4RYsoSzfp3lC_d2qTVTmZ8",
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
