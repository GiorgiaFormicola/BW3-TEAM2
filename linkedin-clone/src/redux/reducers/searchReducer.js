import { SET_CATEGORY } from "../actions/index.js";

const initialState = {
  category: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
