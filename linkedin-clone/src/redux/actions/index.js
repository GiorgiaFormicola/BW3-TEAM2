// FUNZIONE PER OTTENERE PROFILO
export const GET_PROFILE = "GET_PROFILE";

export const getMyProfileInfo = () => {
  return (dispatch, getState) => {
    const URL = getState().profile.URL;
    const token = getState().profile.token;

    fetch(URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in getting the profile info");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const SET_CATEGORY = "SET_CATEGORY";

export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const SET_JOBS = "SET_JOBS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const fetchJobs = (category) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    try {
      const res = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=10`);

      if (!res.ok) {
        throw new Error("Error fetching jobs");
      }

      const data = await res.json();
      console.log(data);
      dispatch({
        type: SET_JOBS,
        payload: data.data,
      });

      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.message });
      dispatch({ type: SET_LOADING, payload: false });
    }
  };
};
// FUNZIONE PER OTTENERE LISTA POST

export const GET_POSTS = "GET_POSTS";

export const getPostsList = () => {
  return (dispatch, getState) => {
    const URL = getState().posts.URL;
    const token = getState().profile.token;

    fetch(URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in getting the post list");
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch({
          type: GET_POSTS,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
