import React from "react";
import GrandChild from "./GrandChild";

function Child() {
  return (
    <div className="mt-4 p-5 bg-blue-50 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-blue-700 mb-3">
        Child Component
      </h3>

      <div className="border-l-4 border-blue-500 pl-4">
        <GrandChild />
      </div>
    </div>
  );
}

export default Child;