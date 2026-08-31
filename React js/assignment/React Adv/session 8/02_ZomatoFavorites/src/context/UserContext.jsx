import React, { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const user = {
    id: 1,
    name: "Rana",
    email: "rana@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;