export const GET_EXPERIENCES = "GET_EXPERIENCES";

const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile";

export const getExperiences = () => {
  return async (dispatch, getState) => {
    const token = getState().profile.token;
    const userId = getState().profile.object?._id;

    if (!userId) return;

    try {
      const res = await fetch(`${BASE_URL}/${userId}/experiences`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        const data = await res.json();
        dispatch({
          type: GET_EXPERIENCES,
          payload: data,
        });
      } else {
        throw new Error("Errore GET experiences");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// METODO POST DAJE
export const addExperience = (experienceData) => {
  return async (dispatch, getState) => {
    const token = getState().profile.token;
    const userId = getState().profile.object?._id;

    try {
      const res = await fetch(`${BASE_URL}/${userId}/experiences`, {
        method: "POST",
        body: JSON.stringify(experienceData),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        dispatch(getExperiences()); // sta parte di qua serve per il refresh ragazzi!!
      } else {
        throw new Error("Errore POST experience");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// METODO PUT
export const editExperience = (expId, updatedData) => {
  return async (dispatch, getState) => {
    const token = getState().profile.token;
    const userId = getState().profile.object?._id;

    try {
      const res = await fetch(`${BASE_URL}/${userId}/experiences/${expId}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        dispatch(getExperiences());
      } else {
        throw new Error("Errore PUT experience");
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// METODO DELETE
export const deleteExperience = (expId) => {
  return async (dispatch, getState) => {
    const token = getState().profile.token;
    const userId = getState().profile.object?._id;

    try {
      const res = await fetch(`${BASE_URL}/${userId}/experiences/${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.ok) {
        dispatch(getExperiences());
      } else {
        throw new Error("Errore DELETE experience");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
