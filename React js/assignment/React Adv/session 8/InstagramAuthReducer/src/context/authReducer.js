const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case "UPDATE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          displayName: action.payload,
        },
      };

    default:
      return state;
  }
};

export default authReducer;