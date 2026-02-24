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
