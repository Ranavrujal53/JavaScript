import React, {
  createContext,
  useReducer,
} from "react";
import authReducer from "./authReducer";

export const AuthContext = createContext();

const initialState = {
  isLoggedIn: true,
  user: {
    id: 1,
    displayName: "Rahul",
    email: "rahul@gmail.com",
  },
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialState
  );

  return (
    <AuthContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;