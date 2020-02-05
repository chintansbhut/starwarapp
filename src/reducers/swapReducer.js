import { SEARCH_RESULT } from "../actions/types";
const INT_STATE = {
  searchResult: []
};
export default (state = INT_STATE, action) => {
  switch (action.type) {
    case SEARCH_RESULT:
      return { ...state, searchResult: action.payload.searchResult };
    default:
      return state;
  }
};
