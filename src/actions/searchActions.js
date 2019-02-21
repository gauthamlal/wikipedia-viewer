import { ADD_SEARCH, REMOVE_SEARCH } from "../types";
import axios from "axios";

export const searchText = (searchQuery, url) => dispatch => {
  console.log(url);
  axios
    .get(url)
    .then(result => {
      console.log(result.data.query.pages);

      dispatch({
        type: ADD_SEARCH,
        payload: result.data.query.pages,
        text: searchQuery
      });
    })
    .catch(err => console.log(err));
};

export const clearText = () => dispatch => {
  
}