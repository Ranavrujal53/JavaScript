import { createContext } from "react";

const UserContext = createContext({
  username: "Vrujal",
  loggedIn: true,
});

export default UserContext;