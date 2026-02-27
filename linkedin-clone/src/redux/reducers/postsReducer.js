import { GET_POSTS } from "../actions";
// import { GET_POST, STOP_LOADING } from "../actions";

const initialState = {
  URL: "https://striveschool-api.herokuapp.com/api/posts/",
  list: [],
  commentsURL: "https://striveschool-api.herokuapp.com/api/comments/",
  commentsKey:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzIxMDg3NDIsImV4cCI6MTc3MzMxODM0Mn0.49cRPY-_O-5kIvY7cftMLKypx68yUSC1-5UBtRyQDl4",
  loading: true,
};

const postsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case "GET_POST_LIST":
      return {
        ...currentState,
        list: action.payload,
      };

    // case "GET_SINGLE_POST":
    //   return {
    //     ...currentState,
    //     list: currentState.list.concat(action.payload),
    //   };

    // case "RESET_POSTS_LIST":
    //   return {
    //     ...currentState,
    //     list: [],
    //     loading: true,
    //   };

    // case GET_POST:
    //   return {
    //     ...currentState,
    //     list: currentState.list.concat([action.payload]),
    //   };

    case "STOP_LOADING":
      return {
        ...currentState,
        loading: false,
      };

    default:
      return currentState;
  }
};

export default postsReducer;
