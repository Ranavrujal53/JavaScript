import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Logout from "./component/Logout";
import UserInfo from "./component/UserInfo";
import Profile from "./component/Profile";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Public */}
        <Route
          path="/"
          element={<SignUp />}
        />

        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/userinfo"
          element={
            <ProtectedRoute>
              <UserInfo />
            </ProtectedRoute>
          }
        />

        {/* Logout */}
        <Route
          path="/logout"
          element={<Logout />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;