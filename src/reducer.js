import { ADD_SEARCH, REMOVE_SEARCH } from "./types";

const initialState = {
  results: {},
  text: "",
  haveSearched: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH:
      return {
        ...state,
        results: action.payload,
        text: action.text,
        haveSearched: true
      };
    case REMOVE_SEARCH:
      return {};
    default:
      return state;
  }
};

export default reducer;
