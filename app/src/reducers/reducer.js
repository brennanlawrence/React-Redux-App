import {
  FETCH_GENRE_START,
  FETCH_GENRE_SUCCESS,
  FETCH_GENRE_FAIL,
} from "../actions/index";

const initialState = {
  genre: "",
  error: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRE_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_GENRE_SUCCESS:
      return {
        ...state,
        genre: action.payload,
        isFetching: false,
        error: "",
      }
      case FETCH_GENRE_FAIL:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
