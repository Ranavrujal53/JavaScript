import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  const { state, dispatch } = useContext(AuthContext);
  const [newName, setNewName] = useState("");

  const handleUpdateName = () => {
    // Prevent dispatching if the input is empty or just spaces
    if (!newName.trim()) return; 

    dispatch({
      type: "UPDATE_NAME",
      payload: newName,
    });

    setNewName("");
  };

  return (
    // Outer container to center the card on the page
    <div className="max-w-xl mx-auto mt-10 px-4">
      
      {/* Profile Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Edit Profile
        </h2>

        {/* Current Info Section (Avatar + Name) */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm">
            {state.user?.displayName?.charAt(0).toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Current Name</p>
            <p className="text-xl font-bold text-gray-900">
              {state.user?.displayName || "Unknown User"}
            </p>
          </div>
        </div>

        {/* Input & Action Section */}
        <div className="space-y-4">
          <div>
            <label 
              className="block text-sm font-semibold text-gray-700 mb-1" 
              htmlFor="nameInput"
            >
              New Display Name
            </label>
            <input
              id="nameInput"
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            onClick={handleUpdateName}
            disabled={!newName.trim()}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            Update Name
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;