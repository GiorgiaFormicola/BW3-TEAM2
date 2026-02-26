import { GET_POSTS } from "../actions";

const initialState = {
  URL: "https://striveschool-api.herokuapp.com/api/posts/",
  list: null,
};

const postsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...currentState,
        list: action.payload,
      };
    default:
      return currentState;
  }
};

export default postsReducer;
