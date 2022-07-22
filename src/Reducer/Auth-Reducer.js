const authReducer = (authState, authAction) => {
  switch (authAction.type) {
    case "SIGN_UP":
      return {
        ...authState,
        token: authAction.payload.token,
        user: authAction.payload.user,
      };
    case "LOG_IN":
      return {
        ...authState,
        token: authAction.payload.token,
        user: authAction.payload.user,
      };
    case "LOG_TOKEN":
      return {
        ...authState,
        token: authAction.payload.token,
        user: authAction.payload.user,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...authState,
        user: null,
        token: null,
      };
  }
};
export { authReducer };
