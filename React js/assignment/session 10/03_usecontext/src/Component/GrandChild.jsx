import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function GrandChild() {
  const theme = useContext(ThemeContext);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <h4 className="text-xl font-bold text-blue-600 mb-2">
        GrandChild Component
      </h4>

      <p className="text-gray-700 text-lg">
        Current Theme: <span className="font-semibold">{theme}</span>
      </p>
    </div>
  );
}

export default GrandChild;