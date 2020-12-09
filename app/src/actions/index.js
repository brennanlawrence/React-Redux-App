import axios from "axios";

export const FETCH_GENRE_START = "FETCH_GENRE_START";
export const FETCH_GENRE_SUCCESS = "FETCH_GENRE_SUCCESS";
export const FETCH_GENRE_FAIL = "FETCH_GENRE_FAIL";

export const getGenre = () => dispatch => {
  dispatch({ type: FETCH_GENRE_START });
  axios
    .get("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_GENRE_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_GENRE_FAIL, payload: err }))
}