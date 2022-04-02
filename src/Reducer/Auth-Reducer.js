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
  }
};
export { authReducer };
