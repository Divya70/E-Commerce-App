import { createContext, useContext, React, useReducer } from "react";
import { useEffect } from "react";
import { authReducer } from "../Reducer/Auth-Reducer";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    authDispatch({ type: "LOG_TOKEN", payload: { token, user } });
  }, []);
  const [authState, authDispatch] = useReducer(authReducer, {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || "",
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
