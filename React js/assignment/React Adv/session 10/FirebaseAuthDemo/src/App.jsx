import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Sign Up Page */}
        <Route path="/" element={<SignUp />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* User Info Page */}
        <Route path="/userinfo" element={<UserInfo />} />

        {/* Logout Page */}
        <Route path="/logout" element={<Logout />} />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;