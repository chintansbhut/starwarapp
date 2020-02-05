const INT_STATE = {
  isLoggedIn: null,
  userId: null
};

export default (state = INT_STATE, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, isLoggedIn: true, userId: action.payload.userId };
    case "LOGOUT_USER":
      return { ...state, isLoggedIn: false, userId: null };
    default:
      return state;
  }
};
