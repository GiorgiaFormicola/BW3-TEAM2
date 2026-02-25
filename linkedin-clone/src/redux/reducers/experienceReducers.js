import { GET_EXPERIENCES } from "../actions/experienceActions";

const initialState = {
  list: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default experienceReducer;
