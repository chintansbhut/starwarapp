import swapi from "../apis";
import { SEARCH_RESULT, LOGOUT_USER } from "./types";
import history from "../history";
export const LogoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
export const authenticateUser = (uname, pwd) => {
  return async function(dispatch) {
    let response = await swapi.get(`/people/?search=${uname}`);
    const people = response.data.results;
    let loginuser = people.filter(user => user.name === uname);
    if (loginuser[0].birth_year === pwd) {
      dispatch({ type: "LOG_IN", payload: { userId: uname } });
      history.push("/search");
    }
  };
};

export const plannetSearch = searchString => {
  return async function(dispatch, getState) {
    let response = await swapi.get(`/planets/?search=${searchString}`);
    let sortedArray = response.data.results.sort((a, b) => {
      let x = a.population;
      let y = b.population;

      if (x == "unknown") {
        x = 0;
      } else if (y == "unknown") {
        y = 0;
      }

      return Number(x) < Number(y) ? -1 : Number(x) > Number(y) ? 1 : 0;
    });
    dispatch({ type: SEARCH_RESULT, payload: { searchResult: sortedArray } });
  };
};
